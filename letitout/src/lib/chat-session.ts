const DRAFT_KEY = "letitout:draft-message";

export function saveDraftMessage(message: string): void {
  if (typeof window === "undefined") return;
  const trimmed = message.trim();
  if (trimmed) {
    sessionStorage.setItem(DRAFT_KEY, trimmed);
  } else {
    sessionStorage.removeItem(DRAFT_KEY);
  }
}

export function consumeDraftMessage(): string | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(DRAFT_KEY);
  sessionStorage.removeItem(DRAFT_KEY);
  return value;
}
