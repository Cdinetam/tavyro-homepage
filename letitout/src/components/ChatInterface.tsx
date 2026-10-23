"use client";

import Link from "next/link";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { BRAND } from "@/lib/brand";
import { consumeDraftMessage } from "@/lib/chat-session";

type Role = "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  content: string;
}

const INITIAL_AI: Message = {
  id: "welcome",
  role: "assistant",
  content: "What's on your mind? You can start anywhere.",
};

const MOCK_REPLIES = [
  "I'm listening. Take your time — there's no rush to find the perfect words.",
  "That sounds like something you've been carrying for a while. What feels most important about it right now?",
  "Thank you for sharing that. What would it mean if you didn't have to hold it alone?",
  "I hear you. Would you like to sit with that a moment, or go a little deeper?",
] as const;

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_AI]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [replyIndex, setReplyIndex] = useState(0);
  const [seeded, setSeeded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const draft = consumeDraftMessage();
    if (draft) {
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "user", content: draft },
      ]);
      setIsLoading(true);
      window.setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            content: MOCK_REPLIES[0],
          },
        ]);
        setReplyIndex(1);
        setIsLoading(false);
      }, 900);
    }
    setSeeded(true);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (seeded) {
      textareaRef.current?.focus();
    }
  }, [seeded]);

  function sendMessage(raw: string) {
    const content = raw.trim();
    if (!content || isLoading) return;

    setError(null);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: createId(), role: "user", content },
    ]);
    setIsLoading(true);

    const nextReply = MOCK_REPLIES[replyIndex % MOCK_REPLIES.length];
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "assistant", content: nextReply },
      ]);
      setReplyIndex((i) => i + 1);
      setIsLoading(false);
    }, 800 + Math.random() * 400);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      sendMessage(input);
    } catch {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-deep">
      <header className="flex min-h-[56px] shrink-0 items-center justify-between border-b border-glass/15 px-4 sm:px-6">
        <Link
          href="/"
          className="btn-ghost min-h-[44px] px-2 text-aqua"
          aria-label="Back to home"
        >
          Back
        </Link>
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-pearl"
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
              className="absolute right-0 top-full z-20 mt-1 w-52 rounded-soft border border-glass/20 bg-dark/95 py-2 shadow-soft backdrop-blur-md"
            >
              <button
                type="button"
                className="block w-full px-4 py-2.5 text-left text-sm text-aqua hover:bg-deep/50 hover:text-pearl"
                onClick={() => {
                  setMessages([INITIAL_AI]);
                  setMenuOpen(false);
                }}
              >
                New conversation
              </button>
              <Link
                href="/#pricing"
                className="block px-4 py-2.5 text-sm text-aqua hover:bg-deep/50 hover:text-pearl"
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
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-glass/70">
                    {BRAND.name}
                  </p>
                  <p>{message.content}</p>
                </div>
              </div>
            )
          )}

          {isLoading && (
            <div className="flex justify-start" aria-label="Waiting for reply">
              <div className="flex gap-1.5 px-1 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-glass animate-pulse-soft" />
                <span
                  className="h-1.5 w-1.5 rounded-full bg-glass animate-pulse-soft"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="h-1.5 w-1.5 rounded-full bg-glass animate-pulse-soft"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          )}

          {error && (
            <p className="text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      <footer className="shrink-0 border-t border-glass/15 bg-deep/95 px-4 py-3 sm:px-6">
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
        <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] text-aqua/50">
          Mock replies for visual QA — AI integration comes in Phase 2.
        </p>
      </footer>
    </div>
  );
}
