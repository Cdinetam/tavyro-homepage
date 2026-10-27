"use client";

import Link from "next/link";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { BRAND } from "@/lib/brand";
import { consumeDraftMessage } from "@/lib/chat-session";
import {
  CHAT_STYLES,
  ChatStyle,
  DEFAULT_CHAT_STYLE,
} from "@/lib/chat-styles";
import type { ChatMessage, ChatSetupErrorBody } from "@/types/chat";

interface UiMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_AI: UiMessage = {
  id: "welcome",
  role: "assistant",
  content: "What's on your mind? You can start anywhere.",
};

const STYLE_LABELS: Record<ChatStyle, string> = {
  gentle: "Gentle",
  balanced: "Balanced",
  witty: "Witty",
  philosophical: "Philosophical",
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

async function streamAssistantReply(
  history: ChatMessage[],
  style: ChatStyle,
  onDelta: (chunk: string) => void
): Promise<void> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history, style }),
  });

  if (!response.ok) {
    let payload: ChatSetupErrorBody | null = null;
    try {
      payload = (await response.json()) as ChatSetupErrorBody;
    } catch {
      /* ignore */
    }
    if (payload?.code === "missing_config") {
      const missing = payload.missing?.join(", ") ?? "Azure env vars";
      throw new Error(
        `${payload.error} Missing: ${missing}. See letitout/.env.example.`
      );
    }
    throw new Error(payload?.error ?? `Chat request failed (${response.status}).`);
  }

  if (!response.body) {
    throw new Error("No response stream from server.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    onDelta(decoder.decode(value, { stream: true }));
  }
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<UiMessage[]>([INITIAL_AI]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [style, setStyle] = useState<ChatStyle>(DEFAULT_CHAT_STYLE);
  const [seeded, setSeeded] = useState(false);
  const [, startTransition] = useTransition();
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const draftSent = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (seeded) {
      textareaRef.current?.focus();
    }
  }, [seeded]);

  async function runTurn(userText: string, prior: UiMessage[]) {
    // Welcome bubble stays in UI only — omit from model history.
    const apiHistory: ChatMessage[] = prior
      .filter((m) => m.id !== "welcome" && m.content.trim().length > 0)
      .map((m) => ({ role: m.role, content: m.content }));
    apiHistory.push({ role: "user", content: userText });

    const assistantId = createId();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      await streamAssistantReply(apiHistory, style, (chunk) => {
        startTransition(() => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + chunk } : m
            )
          );
        });
      });
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      throw err;
    }
  }

  useEffect(() => {
    if (draftSent.current) return;
    draftSent.current = true;
    const draft = consumeDraftMessage();
    setSeeded(true);
    if (!draft) return;

    const userMsg: UiMessage = {
      id: createId(),
      role: "user",
      content: draft,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);
    void runTurn(draft, [INITIAL_AI])
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- seed once on mount
  }, []);

  async function sendMessage(raw: string) {
    const content = raw.trim();
    if (!content || isLoading) return;

    setError(null);
    setInput("");
    const prior = messages;
    const userMsg: UiMessage = { id: createId(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      await runTurn(content, prior);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-surface text-ink">
      <header className="flex min-h-[56px] shrink-0 items-center justify-between border-b border-ink/10 px-4 sm:px-6">
        <Link
          href="/"
          className="btn-ghost min-h-[44px] px-2"
          aria-label="Back to home"
        >
          Back
        </Link>
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-ink"
        >
          {BRAND.display}
        </Link>
        <div className="relative">
          <button
            type="button"
            className="btn-ghost min-h-[44px] px-2"
            aria-expanded={menuOpen}
            aria-controls="chat-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
          {menuOpen && (
            <div
              id="chat-menu"
              className="absolute right-0 top-full z-20 mt-1 w-56 rounded-soft border border-ink/12 bg-bar py-2 shadow-soft"
            >
              <button
                type="button"
                className="block w-full px-4 py-2.5 text-left text-sm text-ink hover:bg-surface/40"
                onClick={() => {
                  setMessages([INITIAL_AI]);
                  setError(null);
                  setMenuOpen(false);
                }}
              >
                New conversation
              </button>
              <div className="px-4 py-2">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-ink/80">
                  Style
                </p>
                <select
                  className="w-full rounded-md border border-ink/15 bg-white/80 px-2 py-1.5 text-sm text-ink"
                  value={style}
                  onChange={(event) =>
                    setStyle(event.target.value as ChatStyle)
                  }
                  aria-label="Conversation style"
                >
                  {CHAT_STYLES.map((value) => (
                    <option key={value} value={value}>
                      {STYLE_LABELS[value]}
                    </option>
                  ))}
                </select>
              </div>
              <Link
                href="/#pricing"
                className="block px-4 py-2.5 text-sm text-ink hover:bg-surface/40"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
          )}
        </div>
      </header>

      <main
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
        aria-live="polite"
      >
        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {messages.map((message) =>
            message.role === "user" ? (
              <div key={message.id} className="flex justify-end animate-message-in">
                <div className="chat-bubble-user">{message.content}</div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-start animate-message-in">
                <div className="chat-bubble-ai">
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-ink/80">
                    {BRAND.name}
                  </p>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {isLoading &&
                    message.id === messages[messages.length - 1]?.id &&
                    !message.content && (
                      <span className="mt-1 flex gap-1.5" aria-label="Waiting for reply">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/50 animate-pulse-soft" />
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-ink/50 animate-pulse-soft"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-ink/50 animate-pulse-soft"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </span>
                    )}
                </div>
              </div>
            )
          )}

          {error && (
            <p
              className="rounded-soft border border-red-800/25 bg-[#F8EAEA] px-3 py-2 text-sm text-[#5C1A1A]"
              role="alert"
            >
              {error}
            </p>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      <footer className="shrink-0 border-t border-ink/10 bg-surface px-4 py-3 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl items-end gap-2"
        >
          <label htmlFor="chat-input" className="sr-only">
            Your message
          </label>
          <textarea
            ref={textareaRef}
            id="chat-input"
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Say whatever is on your mind…"
            className="input-field max-h-36 min-h-[48px] flex-1 resize-none py-3"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="btn-primary shrink-0 px-5"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            Send
          </button>
        </form>
        <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] text-ink/70">
          Style: {STYLE_LABELS[style]}. Requires Azure OpenAI env — see README.
        </p>
      </footer>
    </div>
  );
}
