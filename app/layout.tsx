import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "vexoro | Web Design & Development Studio for Brands";
const shareTitle = "vexoro | We design and build websites for brands";
const shareDescription = "Design, code and search setup from one small studio. You own everything we make.";
const ogImage = {
  url: "/assets/img/og-image.png",
  width: 1200,
  height: 630,
  alt: "vexoro logo and the line: We design and build websites for brands.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vexoro.dev"),
  title,
  description:
    "vexoro designs and builds fast, search-ready websites for brands: brand sites, landing pages, online stores and technical SEO. You own everything we make.",
  authors: [{ name: "vexoro" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "vexoro",
    locale: "en_US",
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
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/fonts/archivo-latin-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <SmoothScroll>
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
