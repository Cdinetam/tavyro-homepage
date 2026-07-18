import { NextResponse } from "next/server";

type SelfcheckEventRow = {
  event_name: string;
  locale: "de" | "en";
  created_at: string;
};

function getEnvOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function parseDays(rawDays: string | null): number {
  if (!rawDays) return 14;
  const days = Number.parseInt(rawDays, 10);
  if (Number.isNaN(days)) return 14;
  return Math.max(1, Math.min(days, 90));
}

function countEvents(rows: SelfcheckEventRow[]) {
  const totals = {
    open: 0,
    started: 0,
    completed: 0,
    cta_clicked: 0,
  };
  for (const row of rows) {
    if (row.event_name === "selfcheck_open") totals.open += 1;
    if (row.event_name === "selfcheck_started") totals.started += 1;
    if (row.event_name === "selfcheck_completed") totals.completed += 1;
    if (row.event_name === "selfcheck_cta_clicked") totals.cta_clicked += 1;
  }
  return totals;
}

export async function GET(request: Request) {
  try {
    const statsToken = getEnvOrThrow("SELF_CHECK_STATS_TOKEN");
    const headerToken = request.headers.get("x-selfcheck-stats-token");
    if (headerToken !== statsToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabaseUrl = getEnvOrThrow("SUPABASE_URL");
    const serviceRoleKey = getEnvOrThrow("SUPABASE_SERVICE_ROLE_KEY");
    const url = new URL(request.url);
    const days = parseDays(url.searchParams.get("days"));
    const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const query = new URLSearchParams({
      select: "event_name,locale,created_at",
      "created_at": `gte.${sinceDate}`,
      order: "created_at.desc",
      limit: "10000",
    });

    const response = await fetch(
      `${supabaseUrl}/rest/v1/selfcheck_events?${query.toString()}`,
      {
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const body = await response.text();
      return NextResponse.json(
        { error: "Failed to load stats", details: body },
        { status: 500 }
      );
    }

    const rows = (await response.json()) as SelfcheckEventRow[];
    const deRows = rows.filter((row) => row.locale === "de");
    const enRows = rows.filter((row) => row.locale === "en");

    return NextResponse.json({
      window_days: days,
      since: sinceDate,
      total_events: rows.length,
      funnel: {
        all: countEvents(rows),
        de: countEvents(deRows),
        en: countEvents(enRows),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
