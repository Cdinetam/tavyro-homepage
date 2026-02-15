// This file is intentionally kept minimal.
// The middleware redirects / to /de automatically.
// If somehow this page is reached, redirect client-side.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/de");
}
