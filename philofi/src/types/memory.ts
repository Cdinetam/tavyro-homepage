/**
 * Memory-ready architecture (interfaces only — Slice 1).
 * Maps to Philofi Memory A–F. No DB required for demo.
 */

/** Future auth subject — guest sessions use a temporary id until Auth lands. */
export interface UserRef {
  id: string;
  /** ISO timestamp */
  createdAt: string;
}

/** Memory A — conversation container */
export interface ConversationRecord {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  /** Soft-delete marker */
  deletedAt?: string | null;
}

/** Memory A — full message history (never replace with summaries alone) */
export interface MessageRecord {
  id: string;
  conversationId: string;
  userId: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string;
}

/** Memory B — durable personal facts / preferences (consent-gated later) */
export type MemoryItemType =
  | "preference"
  | "relationship"
  | "value"
  | "boundary"
  | "other";

export interface MemoryItem {
  id: string;
  userId: string;
  type: MemoryItemType;
  content: string;
  sensitivity: "low" | "medium" | "high";
  sourceMessageIds: string[];
  validFrom: string;
  validTo?: string | null;
  consentGranted: boolean;
}

/** Memory C — embedding row shape for pgvector later */
export interface EmbeddingRecord {
  id: string;
  userId: string;
  sourceType: "message" | "memory_item";
  sourceId: string;
  /** Opaque vector placeholder — real float[] when pgvector lands */
  embedding?: number[];
  model?: string;
  createdAt: string;
}

/** Isolation helper contract — every store method must scope by userId */
export interface ConversationStore {
  listConversations(userId: string): Promise<ConversationRecord[]>;
  getConversation(
    userId: string,
    conversationId: string
  ): Promise<ConversationRecord | null>;
  listMessages(
    userId: string,
    conversationId: string
  ): Promise<MessageRecord[]>;
  appendMessage(
    userId: string,
    conversationId: string,
    message: Omit<MessageRecord, "id" | "createdAt" | "userId" | "conversationId"> & {
      id?: string;
      createdAt?: string;
    }
  ): Promise<MessageRecord>;
}

/** In-memory stub proving the interface — not for production persistence */
export class EphemeralConversationStore implements ConversationStore {
  private conversations = new Map<string, ConversationRecord>();
  private messages = new Map<string, MessageRecord[]>();

  async listConversations(userId: string): Promise<ConversationRecord[]> {
    return Array.from(this.conversations.values()).filter(
      (c) => c.userId === userId && !c.deletedAt
    );
  }

  async getConversation(
    userId: string,
    conversationId: string
  ): Promise<ConversationRecord | null> {
    const c = this.conversations.get(conversationId);
    if (!c || c.userId !== userId || c.deletedAt) return null;
    return c;
  }

  async listMessages(
    userId: string,
    conversationId: string
  ): Promise<MessageRecord[]> {
    const c = await this.getConversation(userId, conversationId);
    if (!c) return [];
    return this.messages.get(conversationId) ?? [];
  }

  async appendMessage(
    userId: string,
    conversationId: string,
    message: Omit<
      MessageRecord,
      "id" | "createdAt" | "userId" | "conversationId"
    > & { id?: string; createdAt?: string }
  ): Promise<MessageRecord> {
    const c = await this.getConversation(userId, conversationId);
    if (!c) {
      throw new Error("Conversation not found for user");
    }
    const record: MessageRecord = {
      id: message.id ?? crypto.randomUUID(),
      conversationId,
      userId,
      role: message.role,
      content: message.content,
      createdAt: message.createdAt ?? new Date().toISOString(),
    };
    const list = this.messages.get(conversationId) ?? [];
    list.push(record);
    this.messages.set(conversationId, list);
    c.updatedAt = record.createdAt;
    return record;
  }
}
