import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SplashCursorEffect } from "@/components/splash-cursor-effect";
import { BASE_KEYWORDS, SITE } from "@/lib/site";
import { FOUNDER } from "@/lib/ventures";

const title = "vexoro | A Venture Group Building Products for Real Problems";
const shareTitle = "vexoro | We build ventures that solve real problems";
const shareDescription = "RoadLens, India's road-data network, and vexoro Digital for AI, branding and websites.";
const ogImage = {
  url: "/assets/img/og-image.png",
  secureUrl: `${SITE.url}/assets/img/og-image.png`,
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "vexoro logo and the line: We build ventures that solve real problems.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: "%s | vexoro" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: BASE_KEYWORDS,
  authors: [{ name: FOUNDER.name, url: `${SITE.url}/ventures` }, { name: SITE.name, url: SITE.url }],
  creator: FOUNDER.name,
  publisher: SITE.name,
  category: "Technology",
  classification: "Venture group, AI solutions, branding and web development",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  alternates: { canonical: "/", languages: { en: "/", "x-default": "/" } },
  appleWebApp: { capable: true, title: SITE.name, statusBarStyle: "black-translucent" },
  other: {
    "msapplication-TileColor": "#0A0A0B",
    "msapplication-TileImage": "/assets/img/icon-192.png",
    "msapplication-tooltip": "vexoro: ventures that solve real problems",
    "geo.region": "OM",
    "geo.placename": "Oman",
    language: "English",
    "content-language": "en",
    audience: "all",
    rating: "general",
    distribution: "global",
    coverage: "Worldwide",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "revisit-after": "7 days",
    owner: FOUNDER.name,
    designer: SITE.name,
    copyright: `© ${new Date().getFullYear()} ${SITE.name}`,
    "reply-to": SITE.email,
    "contact": SITE.email,
    url: SITE.url,
    "identifier-URL": SITE.url,
    subject: "Ventures that solve real problems: RoadLens and vexoro Digital",
    topic: "Venture building, road data, AI solutions, branding and web development",
    summary: SITE.description,
    abstract: SITE.description,
    "DC.title": "vexoro",
    "DC.creator": FOUNDER.name,
    "DC.publisher": SITE.name,
    "DC.description": SITE.description,
    "DC.language": "en",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": SITE.url,
    "DC.coverage": "Worldwide",
    "DC.rights": `© ${SITE.name}`,
  },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "vexoro",
    locale: "en_OM",
    alternateLocale: ["en_IN", "en_US", "en_GB"],
    url: "/",
    title: shareTitle,
    description: shareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [ogImage],
  },
  icons: {
    icon: [
      // Google Search needs a square icon whose size is a multiple of 48px
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/assets/img/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/fonts/archivo-latin-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="author" href="/humans.txt" type="text/plain" />
        <link rel="help" href="/llms.txt" type="text/plain" title="Site summary for AI assistants" />
        <link rel="sitemap" href="/sitemap.xml" type="application/xml" title="Sitemap" />
        <link rel="me" href="mailto:hello@vexoro.dev" />
      </head>
      <body>
        <SmoothScroll>
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroll>
        <SplashCursorEffect />
      </body>
    </html>
  );
}
