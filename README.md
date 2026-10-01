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
  pricing/page.tsx    Packages and add-ons in OMR (Offer schema, breadcrumbs)
  sitemap.ts          /sitemap.xml (add new pages here)
  robots.ts           /robots.txt
  not-found.tsx       404 (noindex)
  globals.css         Tailwind, shadcn theme tokens, site styles (dark grain theme)
components/
  ui/                 shadcn-style components (add more with `npx shadcn@latest add <name>`)
    text-scroll-animation.tsx   Scroll-driven letter + icon animation (framer-motion)
    habit-faq-scroller.tsx      FAQ cards in looping rows (pause on hover, static for reduced motion)
    SplashCursor.jsx            React Bits fluid cursor (WebGL), vendored as JavaScript
  brand.tsx           Logo mark + wordmark as SVG components
  site-header.tsx     Sticky header + mobile menu
  site-footer.tsx
  contact-form.tsx    Opens the visitor's email app with the enquiry filled in
  smooth-scroll.tsx   Lenis smooth scrolling (off for reduced motion)
  splash-cursor-effect.tsx  Violet fluid cursor trail; desktop only, lazy-loaded, off for reduced motion
hooks/
  use-prefers-reduced-motion.ts  Hydration-safe reduced-motion check
lib/
  faq.ts              FAQ questions, used by the page and the FAQPage schema
  pricing.ts          Packages and add-ons (OMR), used by /pricing, schema and llms.txt
  site.ts             Site facts + pageMetadata() helper for every page's SEO tags
  utils.ts            `cn()` class helper used by shadcn components
  structured-data.ts  Organization, WebSite, ProfessionalService, WebPage, FAQPage
public/               Served at the site root: llms.txt, manifest,
                      favicons, assets/brand, assets/fonts, assets/img (OG image, icons)
components.json       shadcn/ui config (aliases: @/components/ui, @/lib/utils)
```

## SEO

- Every page: unique title, description (≤160 chars), canonical, Open Graph and Twitter tags via `pageMetadata()` in `lib/site.ts`.
- schema.org: Organization, WebSite, ProfessionalService (Oman + worldwide, OMR price range), WebPage,
  FAQPage (home), BreadcrumbList and OfferCatalog with real prices (pricing).
- `/sitemap.xml` and `/robots.txt` are generated (`app/sitemap.ts`, `app/robots.ts`); `/llms.txt` summarises the site for AI search.
- Lighthouse (local, production build): desktop 100/100/100/100, mobile 97/100/100/100 on both pages.

After deploying: verify the domain in Google Search Console and Bing Webmaster Tools, submit
`https://vexoro.dev/sitemap.xml`, and create a Google Business Profile for local (Oman) searches.

## Brand

| Token  | Hex       |
| ------ | --------- |
| Ground | `#0A0A0B` |
| Ink    | `#F2F2F3` |
| Stone  | `#8A867C` |
| Violet | `#5B3DF5` / `#7A62FF` on dark |
