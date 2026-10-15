# Newstensity landing page

Starter project built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Lucide React, Framer Motion, and next-intl.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the page.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — check TypeScript types
- `npm run format` — format source files with Prettier

## Structure

- `app/[locale]/` — server-rendered Indonesian and English routes, localized metadata, and layout
- `app/globals.css` — global styles and Newstensity design tokens
- `components/ui/` — reusable buttons, badges, inputs, selects, textarea, accordion, carousel, and motion primitives
- `components/layout/` — navbar, footer, and theme control
- `components/sections/` — landing sections currently requested: hero and problem & solutions
- `data/landing.ts` — localized page content, image descriptions, navigation/footer copy, and SEO metadata
- `i18n/` — locale routing and next-intl configuration
- `lib/` — shared helpers
- `public/images/` — image assets served from `/images/...`
- `public/gifs/` — GIF assets served from `/gifs/...`

UI primitives are customized to match the Newstensity design tokens. Add more shadcn/ui components with `npx shadcn add <component>`.

The site uses `/id` and `/en` routes. Add localized landing page content to both locale objects in `data/landing.ts` and keep their structure aligned.
