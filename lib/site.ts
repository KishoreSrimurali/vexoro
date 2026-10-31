// Site-wide facts used by metadata, structured data, the sitemap and llms.txt.
export const SITE = {
  name: "vexoro",
  url: "https://vexoro.dev",
  email: "ceo@vexoro.dev",
  description:
    "vexoro is a venture group that finds real problems and builds focused products to solve them: RoadLens, a road-data network for India, and vexoro Digital for AI, branding and websites.",
  ogImage: "/assets/img/og-image.png",
  logo: "/assets/brand/vexoro-mark.png",
  areaServed: ["Oman", "India", "Bengaluru", "Worldwide"],
  currency: "OMR",
} as const;

export const abs = (path: string) => new URL(path, SITE.url).toString();

const OG_IMAGE = {
  url: SITE.ogImage,
  secureUrl: abs(SITE.ogImage),
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "vexoro logo and the line: We build ventures that solve real problems.",
};

/** Brand terms added to every page's keywords. */
export const BASE_KEYWORDS = [
  "vexoro",
  "vexoro.dev",
  "vexoro ventures",
  "venture group",
  "venture studio",
  "RoadLens",
  "vexoro Digital",
  "Kishore Srimuralikrishnan",
];

/** Per-page metadata. Next.js replaces (not merges) these objects, so every page gets the full set. */
export function pageMetadata({
  path,
  title,
  description,
  keywords = [],
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}) {
  const full = title.includes("vexoro") ? title : `${title} | vexoro`;
  return {
    title: { absolute: full },
    description,
    keywords: [...new Set([...keywords, ...BASE_KEYWORDS])],
    alternates: {
      canonical: path,
      languages: { en: path, "x-default": path },
    },
    openGraph: {
      type: "website" as const,
      siteName: SITE.name,
      locale: "en_OM",
      alternateLocale: ["en_IN", "en_US", "en_GB"],
      url: path,
      title: full,
      description,
      emails: [SITE.email],
      countryName: "Oman",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [OG_IMAGE] },
  };
}
