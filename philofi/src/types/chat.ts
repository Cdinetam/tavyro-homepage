import type { ChatStyle } from "@/lib/chat-styles";

export type ChatRole = "system" | "user" | "assistant";

/** Message shape used by the chat API and UI (Slice 1). */
export interface ChatMessage {
  id?: string;
  role: Exclude<ChatRole, "system">;
  content: string;
  createdAt?: string;
}

export interface ChatRequestBody {
  messages: ChatMessage[];
  style?: ChatStyle;
  /** Optional conversation id — reserved for memory/persistence plug-in */
  conversationId?: string;
}

export interface ChatSetupErrorBody {
  error: string;
  code: "missing_config" | "upstream_error" | "bad_request";
  missing?: string[];
  hint?: string;
}
