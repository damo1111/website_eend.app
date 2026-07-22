# eend.app

An indie AI product studio site — dark forest green base, duck-egg blue accent.
Five apps across eldercare, health, travel, finance and trading.

Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion. Deployed on
Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    layout.tsx        — fonts (Syne / DM Sans / DM Mono) + metadata
    page.tsx          — assembles Nav, Hero, Apps, About, Contact, Footer
    globals.css
  components/
    sections/
      Hero.tsx        — studio name, duck mark, manifesto
      Apps.tsx        — the five apps in a responsive grid
      About.tsx       — the builder
      Contact.tsx     — get in touch
      Footer.tsx
    ui/
      DuckMark.tsx    — geometric duck SVG (signature mark)
      AppCard.tsx     — app card with hover overlay
      Nav.tsx         — minimal fixed nav
      Tag.tsx         — pill label
      ScrollProgress.tsx
  data/
    apps.ts           — the five app records
```

## App screengrabs

Card previews are read from `public/images/{susan,davanity,pond,smith}-preview.png`.
Cards without a screengrab (e.g. Nous, still building) fall back to an accent
gradient. Drop the images in to light them up.

## Design tokens

| Token         | Value     |
| ------------- | --------- |
| bg            | `#0C1410` |
| surface       | `#121C15` |
| border        | `#1E2E22` |
| text          | `#EBF0E8` |
| muted         | `#6B8070` |
| duck          | `#7EBFB8` |
| duck-dim      | `#3D7870` |
| gold          | `#D4B483` |

eend is Dutch for duck. 🦆
