import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Contact vexoro: Start a Website Project";
const DESCRIPTION = "Tell us about your website project. Free consultation and a reply within one business day. Email ceo@vexoro.dev.";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.contact,
});

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/contact", "Contact", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <ContactSection h1 />
    </main>
  );
}
