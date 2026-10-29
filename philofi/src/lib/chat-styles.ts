/**
 * Conversation style presets (Slice 1). Default: Balanced.
 */
export const CHAT_STYLES = [
  "gentle",
  "balanced",
  "witty",
  "philosophical",
] as const;

export type ChatStyle = (typeof CHAT_STYLES)[number];

export const DEFAULT_CHAT_STYLE: ChatStyle = "balanced";

export function isChatStyle(value: unknown): value is ChatStyle {
  return (
    typeof value === "string" &&
    (CHAT_STYLES as readonly string[]).includes(value)
  );
}

const STYLE_GUIDANCE: Record<ChatStyle, string> = {
  gentle:
    "Style: Gentle. Soften your tone. Favour warmth, reassurance, and short reflective responses. Ask fewer questions; never push.",
  balanced:
    "Style: Balanced. Warm, clear, and grounded. Mix empathy with light clarity. One meaningful question at a time when it helps.",
  witty:
    "Style: Witty. Keep empathy first, then allow light, intelligent humour when it fits. Never mock the user or their feelings. Never use humour in distress or crisis moments.",
  philosophical:
    "Style: Philosophical. Invite gentle reflection on meaning, values, and contradiction. Stay conversational — not lecture-like or academic.",
};

export function styleGuidance(style: ChatStyle): string {
  return STYLE_GUIDANCE[style];
}
