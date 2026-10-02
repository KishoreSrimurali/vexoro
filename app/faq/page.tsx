import type { Metadata } from "next";
import { FaqPageSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Web Design FAQ: Cost, SEO, Ownership and Timelines";
const DESCRIPTION = "Answers about website cost, SEO, ownership, editing your site and timelines from vexoro, a web design studio in Oman.";

export const metadata: Metadata = pageMetadata({ path: "/faq", title: TITLE, description: DESCRIPTION });

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/faq", "FAQ", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <FaqPageSection h1 />
      <ContactSection />
    </main>
  );
}
