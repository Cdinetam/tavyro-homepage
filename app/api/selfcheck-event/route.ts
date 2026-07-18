import { NextResponse } from "next/server";

const EVENT_NAMES = new Set([
  "selfcheck_open",
  "selfcheck_started",
  "selfcheck_completed",
  "selfcheck_cta_clicked",
]);

type IncomingPayload = {
  event_name?: string;
  locale?: string;
  path?: string;
  session_id?: string;
  data?: Record<string, unknown>;
};

function getEnvOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function normalizeLocale(value?: string): "de" | "en" {
  return value === "en" ? "en" : "de";
}

function sanitizeSessionId(value?: string): string | null {
  if (!value || typeof value !== "string") return null;
  const cleaned = value.trim().slice(0, 80);
  return cleaned.length > 0 ? cleaned : null;
}

function sanitizePath(value?: string): string | null {
  if (!value || typeof value !== "string") return null;
  const cleaned = value.trim().slice(0, 300);
  return cleaned.length > 0 ? cleaned : null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IncomingPayload;
    if (!payload?.event_name || !EVENT_NAMES.has(payload.event_name)) {
      return NextResponse.json({ error: "Invalid event_name" }, { status: 400 });
    }

    const supabaseUrl = getEnvOrThrow("SUPABASE_URL");
    const serviceRoleKey = getEnvOrThrow("SUPABASE_SERVICE_ROLE_KEY");

    const row = {
      event_name: payload.event_name,
      locale: normalizeLocale(payload.locale),
      path: sanitizePath(payload.path),
      session_id: sanitizeSessionId(payload.session_id),
      data: payload.data ?? {},
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/selfcheck_events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });

    if (!response.ok) {
      const body = await response.text();
      return NextResponse.json(
        { error: "Failed to persist event", details: body },
        { status: 500 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
