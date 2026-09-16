# TradeOps marketing site

Production Vite + React + TypeScript marketing site for **Vercel project `tradeops-site-b`**.

Live reference: https://tradeops-site-b.vercel.app/

## Deploy

This repo is the source for Vercel project **`tradeops-site-b`**.

1. Connect the GitHub repo to that Vercel project (framework: Vite, output: `dist`).
2. Production build: `npm install && npm run build`
3. Book CTA points at the existing strategy-call URL: https://tradeopsconsulting.com/strategy-call/

## Scripts

```bash
npm install
npm run dev      # local
npm run build    # typecheck + production bundle
npm run preview  # serve dist
```

## Structure

- `src/content/copy.ts` — page copy from the rewrite
- `src/sections/` — one file per page section
- `public/` — images, videos, fonts downloaded from the live site plus extra proof from tradeopsconsulting.com

See `IMAGE-REPORT.md` for the image inventory.
