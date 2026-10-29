import type { Metadata } from "next";
import ChatInterface from "@/components/ChatInterface";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Conversation — ${BRAND.name}`,
  description: "A private space to talk.",
};

export default function ChatPage() {
  return <ChatInterface />;
}
