# Philofi — Unsaid codebase

Private AI conversation space. **UI brand:** Philofi / `philofi.`  
**Internal project:** Unsaid · **App folder:** `philofi/`

Phase 1 UI is locked (turquoise surface `#3AA19E`, green water hero).  
Slice 1 adds system prompt + Azure OpenAI streaming chat.

## Brand

Edit `src/lib/brand.ts` for display name / tagline. Do not rename the GitHub repo without approval.

## Run locally

```bash
cd philofi
npm install
cp .env.example .env.local   # then fill Azure vars if you have them
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Azure OpenAI (required for live chat)

Without these, the app still **builds and runs**; `/api/chat` returns **503** with a clear setup message, and the chat UI shows that error.

| Variable | Purpose |
|----------|---------|
| `AZURE_OPENAI_ENDPOINT` | Resource endpoint, e.g. `https://YOUR_RESOURCE.openai.azure.com` |
| `AZURE_OPENAI_API_KEY` | API key from the Azure OpenAI resource |
| `AZURE_OPENAI_DEPLOYMENT` | Chat deployment name |
| `AZURE_OPENAI_API_VERSION` | e.g. `2024-08-01-preview` |

See `.env.example`. **Do not create Azure resources from this repo; do not invent keys.**

## Hero water visual

`src/components/TurquoiseWaterBackground.tsx` — procedural underwater canvas; respects `prefers-reduced-motion`.  
Optional photo later: `public/images/turquoise-glass.jpg`.

## Slice 1 features

- Philofi system prompt (`src/lib/system-prompt.ts`) + styles Gentle / Balanced / Witty / Philosophical
- `POST /api/chat` — server-side Azure OpenAI **streaming**
- Chat UI streams tokens; styles selectable in chat Menu
- Memory-ready types in `src/types/memory.ts` (no DB yet)

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Manrope, `openai` SDK (Azure mode).

## Deploy (Vercel — own project)

Philofi must be a **separate** Vercel project with **Root Directory = `philofi`**. Do not change the TaVyro or WeitSinn projects.

- Config hint: `vercel.json` in this folder
- Domain: `philofi.com` (+ `www`) — DNS table and click-path in the agent store doc `philofi-deploy-dns.md`
- Production Azure env vars: same four names as `.env.example` (leave empty until supplied)
