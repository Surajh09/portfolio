# Suraj Hemnani — portfolio

Next.js (App Router) + Tailwind CSS v4 + TypeScript. Nothing OS-inspired UI (white edition): off-white ground, black widgets, Nothing red accent, dot-matrix display type.

```
app/layout.tsx          fonts (next/font), metadata, JSON-LD, dot field, nav
app/page.tsx            section order
app/globals.css         design tokens (@theme), base styles, custom utilities
app/icon.svg            favicon
components/             Nav, DotField, Reveal, Section, LinkButton, Figure, Ticker, GlyphRing
components/sections/    one component per section
components/diagrams/    AWS system map, Forge concept diagram
content/site.ts         ALL page copy — edit text here
lib/site.config.ts      links (email, LinkedIn, GitHub, resume) — edit this first
public/resume.pdf       downloadable resume
legacy/                 the previous static site, untouched
```

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static prerender)
npm start        # serve the production build
```

## Before publishing

1. Put your LinkedIn and GitHub URLs in `lib/site.config.ts`. While they are empty, those links are omitted rather than broken.
2. Replace `public/resume.pdf` whenever the resume changes.
3. Add `metadataBase` / an OG image in `app/layout.tsx` once you have a domain.

## Design notes

- **Type**: Doto (dot-matrix, `ROND` axis set to 100 for round dots) for display sizes only; Space Grotesk for text; Space Mono for uppercase tracked labels. All self-hosted via `next/font` — no runtime Google Fonts requests.
- **Tokens** live in `app/globals.css` under `@theme` and are available as Tailwind utilities (`bg-ground`, `text-ink`, `text-red`, `rounded-widget`, `font-display`, …).
- **Widgets**: `widget` (white) and `widget-dark` (black) utilities; `chip` for pill nodes.
- **Motion**: dot field reacts to the cursor only on fine pointers; ticker, glyph pulse, ring rotation and scroll reveals all switch off under `prefers-reduced-motion`.

## Deploy

Any Next.js host (Vercel, Netlify, Cloudflare). For a purely static host, add `output: "export"` to `next.config.ts` and deploy the `out/` folder.
