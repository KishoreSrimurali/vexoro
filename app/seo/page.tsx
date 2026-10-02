import type { Metadata } from "next";
import { SeoSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "SEO-Ready Website Development in Oman";
const DESCRIPTION = "Every vexoro website ships with titles, descriptions, schema.org data, a sitemap, fast pages and Google Search Console set up.";

export const metadata: Metadata = pageMetadata({ path: "/seo", title: TITLE, description: DESCRIPTION });

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/seo", "SEO", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <SeoSection h1 />
      <ContactSection />
    </main>
  );
}
