# vexoro.dev

Marketing website for **vexoro**, a web design & development studio for brands.

Next.js (App Router) + TypeScript + Tailwind CSS v4, set up for shadcn/ui.
Deployed on Vercel (`vercel.json` pins the Next.js framework preset).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # typecheck
```

## Structure

```
app/
  layout.tsx          SEO metadata (title, description, Open Graph, Twitter, icons), smooth scroll
  page.tsx            Home page + schema.org JSON-LD
  not-found.tsx       404 (noindex)
  globals.css         Tailwind, shadcn theme tokens, site styles (dark grain theme)
components/
  ui/                 shadcn-style components (add more with `npx shadcn@latest add <name>`)
    text-scroll-animation.tsx   Scroll-driven letter + icon animation (framer-motion)
    habit-faq-scroller.tsx      FAQ cards in looping rows (pause on hover, static for reduced motion)
  brand.tsx           Logo mark + wordmark as SVG components
  site-header.tsx     Sticky header + mobile menu
  site-footer.tsx
  contact-form.tsx    Opens the visitor's email app with the enquiry filled in
  smooth-scroll.tsx   Lenis smooth scrolling (off for reduced motion)
hooks/
  use-prefers-reduced-motion.ts  Hydration-safe reduced-motion check
lib/
  faq.ts              FAQ questions, used by the page and the FAQPage schema
  utils.ts            `cn()` class helper used by shadcn components
  structured-data.ts  Organization, WebSite, ProfessionalService, WebPage, FAQPage
public/               Served at the site root: robots.txt, sitemap.xml, manifest,
                      favicons, assets/brand, assets/fonts, assets/img (OG image, icons)
components.json       shadcn/ui config (aliases: @/components/ui, @/lib/utils)
```

## SEO

- Sitemap: https://vexoro.dev/sitemap.xml (update `<lastmod>` when content changes)
- Robots: https://vexoro.dev/robots.txt
- Every page gets a title, description, canonical URL and social preview image
  from `app/layout.tsx`; the home page adds schema.org data.

## Brand

| Token  | Hex       |
| ------ | --------- |
| Ground | `#0A0A0B` |
| Ink    | `#F2F2F3` |
| Stone  | `#8A867C` |
| Violet | `#5B3DF5` / `#7A62FF` on dark |
