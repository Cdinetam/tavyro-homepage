# Selfcheck Analytics Setup (ohne Vercel Pro)

Diese Anleitung richtet Tracking fuer den Selfcheck ein, ohne Vercel Pro.

## 1) Supabase Projekt erstellen

1. Auf `https://supabase.com` ein Projekt anlegen.
2. Im SQL Editor folgenden Block ausfuehren:

```sql
create table if not exists public.selfcheck_events (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  event_name text not null,
  locale text not null check (locale in ('de','en')),
  path text,
  session_id text,
  data jsonb not null default '{}'::jsonb
);

create index if not exists idx_selfcheck_events_created_at
  on public.selfcheck_events (created_at desc);

create index if not exists idx_selfcheck_events_event_name
  on public.selfcheck_events (event_name);
```

## 2) Vercel Environment Variables setzen

Im Vercel Projekt unter Settings -> Environment Variables:

- `SUPABASE_URL` -> Project URL aus Supabase
- `SUPABASE_SERVICE_ROLE_KEY` -> Service Role Key aus Supabase (nicht den anon key)
- `SELF_CHECK_STATS_TOKEN` -> frei waehlbarer geheimer Token (z. B. langer zufaelliger String)

Danach neu deployen.

## 3) Welche Events werden getrackt?

- `selfcheck_open`
- `selfcheck_started`
- `selfcheck_completed`
- `selfcheck_cta_clicked`

Zusatzdaten:

- `locale` (`de` oder `en`)
- `path`
- `session_id` (anonym, localStorage-basiert)

## 4) Stats abrufen

Endpoint:

`GET /api/selfcheck-stats?days=14`

Header:

`x-selfcheck-stats-token: <SELF_CHECK_STATS_TOKEN>`

Beispiel mit curl:

```bash
curl -s "https://tavyro.ch/api/selfcheck-stats?days=14" \
  -H "x-selfcheck-stats-token: YOUR_SECRET_TOKEN"
```

Antwort enthaelt Funnel fuer:

- `all`
- `de`
- `en`

## 5) Datenschutz-Hinweis

Es werden keine personenbezogenen Inhalte gespeichert (kein Name, keine E-Mail).
Nur Event-Metadaten fuer Nutzungsstatistik.
