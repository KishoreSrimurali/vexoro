import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Update `lastModified` when a page's content changes.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE.url}${SITE.ogImage}`],
    },
    ...["services", "process", "seo", "faq", "contact"].map((p) => ({
      url: `${SITE.url}/${p}`,
      lastModified: new Date("2026-10-02"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE.url}/pricing`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
