import type { Metadata } from "next";
import { AiSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "AI Solutions for Companies in Oman";
const DESCRIPTION = "AI assistants for your website and WhatsApp, workflow automation, document processing and custom AI for companies in Oman. Free consultation.";

export const metadata: Metadata = pageMetadata({
  path: "/ai",
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["AI solutions Oman", "AI company Oman", "AI assistant for business", "WhatsApp AI chatbot", "AI chatbot Oman", "workflow automation", "AI document processing", "AI knowledge base", "custom AI integration", "AI consulting Oman", "AI for small business", "AI Muscat"],
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
