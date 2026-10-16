# LetItOut (Phase 1)

Private AI conversation space — **design system, landing page, pricing, and chat UI only**.

No Azure OpenAI, auth, Stripe, or database in this phase. Chat uses local mock replies for visual QA.

## Brand

Display name and product name live in `src/lib/brand.ts` so they can be renamed later without a wide search-and-replace.

## Run locally

```bash
cd letitout
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Missing reference asset

Place the turquoise water/glass hero image at:

```
letitout/public/images/turquoise-glass.jpg
```

Until that file exists, the hero uses palette gradients and soft glass/light effects matching the brief. Do **not** substitute unrelated stock photos.

## Phase 1 scope

- Teal/turquoise design tokens (CSS variables)
- Mobile-first landing page
- Pricing: Free / Personal CHF 7.90
- Distraction-free chat UI with mock replies
- Landing “What’s on your mind?” and “Start talking” open chat and preserve typed text via `sessionStorage`

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Manrope.
