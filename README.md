# vexoro.dev

Marketing website for **vexoro** — a web design & development studio for brands.

Plain static HTML/CSS/JS, no build step. Deploy the repo root to any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages). `CNAME` is set for GitHub Pages.

## Structure

```
index.html            Home page (all sections, JSON-LD structured data)
404.html              Not-found page (noindex)
robots.txt            Crawl rules + sitemap link
sitemap.xml           XML sitemap
site.webmanifest      PWA manifest / app icons
favicon.ico/-32.png   Favicons (from the app icon); apple-touch-icon.png
assets/brand/         Logo mark, wordmark (PNG + SVG) and app icon
assets/css/           styles.css (dark grain theme)
assets/js/            main.js (mobile nav, contact form)
assets/fonts/         Self-hosted Archivo variable font (OFL)
assets/img/           Open Graph image + app icons
```

## SEO checklist

- Unique title, meta description, canonical URL
- Open Graph + Twitter card (1200×630 `og-image.png`)
- Schema.org: Organization, WebSite, ProfessionalService, WebPage, FAQPage
- Semantic landmarks, one `h1`, ordered headings, skip link
- Self-hosted, preloaded fonts; no render-blocking third parties
- `robots.txt`, `sitemap.xml`, custom 404

After launch: verify the domain in Google Search Console and Bing Webmaster
Tools, submit `https://vexoro.dev/sitemap.xml`, and update `<lastmod>` when content changes.

## Brand

| Token  | Hex       |
| ------ | --------- |
| Ink    | `#14141A` |
| Stone  | `#8A867C` |
| Violet | `#5B3DF5` |
| Ground | `#0A0A0B` |
