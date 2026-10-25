import type { Metadata } from "next";
import { AiSection, ContactSection } from "@/components/sections";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "AI Solutions for Companies in Oman";
const DESCRIPTION = "AI assistants for your website and WhatsApp, workflow automation, document processing and custom AI for companies in Oman. Free consultation.";

export const metadata: Metadata = pageMetadata({
  path: "/ai",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.ai,
});

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/ai", "AI Solutions", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <AiSection h1 />
      <ContactSection />
    </main>
  );
}
