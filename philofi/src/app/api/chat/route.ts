import { NextRequest } from "next/server";
import {
  createAzureOpenAIClient,
  getAzureOpenAIConfig,
  getMissingAzureEnv,
} from "@/lib/azure-openai";
import { DEFAULT_CHAT_STYLE, isChatStyle } from "@/lib/chat-styles";
import { buildSystemPrompt } from "@/lib/system-prompt";
import type { ChatMessage, ChatRequestBody, ChatSetupErrorBody } from "@/types/chat";

export const runtime = "nodejs";

const MAX_MESSAGES = 40;
const MAX_CONTENT_CHARS = 8000;

function jsonError(body: ChatSetupErrorBody, status: number): Response {
  return Response.json(body, { status });
}

function sanitizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const sliced = input.slice(-MAX_MESSAGES);
  const cleaned: ChatMessage[] = [];
  for (const item of sliced) {
    if (!item || typeof item !== "object") return null;
    const role = (item as ChatMessage).role;
    const content = (item as ChatMessage).content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string" || !content.trim()) return null;
    cleaned.push({
      role,
      content: content.trim().slice(0, MAX_CONTENT_CHARS),
      id: typeof (item as ChatMessage).id === "string" ? (item as ChatMessage).id : undefined,
    });
  }
  return cleaned;
}

export async function POST(request: NextRequest): Promise<Response> {
  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return jsonError(
      { error: "Invalid JSON body.", code: "bad_request" },
      400
    );
  }

  const messages = sanitizeMessages(body.messages);
  if (!messages) {
    return jsonError(
      {
        error: "Provide a non-empty messages array with user/assistant roles.",
        code: "bad_request",
      },
      400
    );
  }

  const style = isChatStyle(body.style) ? body.style : DEFAULT_CHAT_STYLE;
  const config = getAzureOpenAIConfig();
  if (!config) {
    const missing = getMissingAzureEnv();
    return jsonError(
      {
        error: "Azure OpenAI is not configured.",
        code: "missing_config",
        missing,
        hint: "Copy philofi/.env.example to philofi/.env.local and set the listed variables. Do not commit secrets.",
      },
      503
    );
  }

  try {
    const client = createAzureOpenAIClient(config);
    const stream = await client.chat.completions.create({
      model: config.deployment,
      stream: true,
      temperature: 0.7,
      messages: [
        { role: "system", content: buildSystemPrompt(style) },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content;
            if (delta) {
              controller.enqueue(encoder.encode(delta));
            }
          }
          controller.close();
        } catch (err) {
          const message =
            err instanceof Error ? err.message : "Stream failed.";
          controller.error(message);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Philofi-Style": style,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upstream error.";
    return jsonError(
      {
        error: message,
        code: "upstream_error",
        hint: "Check endpoint, deployment name, api-version, and that the key is valid for this resource.",
      },
      502
    );
  }
}
