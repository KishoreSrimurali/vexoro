// Site-wide facts used by metadata, structured data, the sitemap and llms.txt.
export const SITE = {
  name: "vexoro",
  url: "https://vexoro.dev",
  email: "hello@vexoro.dev",
  description:
    "vexoro is a web design and development studio building fast, search-ready websites for businesses in Oman and brands worldwide.",
  ogImage: "/assets/img/og-image.png",
  logo: "/assets/brand/vexoro-mark.png",
  areaServed: ["Oman", "Worldwide"],
  currency: "OMR",
} as const;

export const abs = (path: string) => new URL(path, SITE.url).toString();

const OG_IMAGE = {
  url: SITE.ogImage,
  width: 1200,
  height: 630,
  alt: "vexoro logo and the line: We design and build websites for brands.",
};

/** Per-page metadata. Next.js replaces (not merges) openGraph/twitter objects, so every page gets the full set. */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }) {
  const full = title.includes("vexoro") ? title : `${title} | vexoro`;
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: SITE.name,
      locale: "en_OM",
      url: path,
      title: full,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [OG_IMAGE] },
  };
}
