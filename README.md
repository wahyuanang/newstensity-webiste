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
- `components/ui/` — shadcn-style buttons, badges, inputs, selects, textarea, accordion, and carousel
- `components/layout/` — navbar, footer, and theme control
- `i18n/` — locale routing and next-intl configuration
- `messages/` — Indonesian and English translation dictionaries
- `components/` — shared page components
- `lib/` — shared helpers
- `public/images/` — image assets served from `/images/...`
- `public/gifs/` — GIF assets served from `/gifs/...`

UI primitives are customized to match the Newstensity design tokens. Add more shadcn/ui components with `npx shadcn add <component>`.

The site uses `/id` and `/en` routes. Add translated copy to both files in `messages/` and keep their message keys aligned.
