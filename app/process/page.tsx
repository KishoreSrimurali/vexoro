import type { Metadata } from "next";
import { ProcessSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Website Design Process: From Brief to Launch";
const DESCRIPTION = "How vexoro builds a brand website in about six weeks: discovery, design, build and launch, with you reviewing every step.";

export const metadata: Metadata = pageMetadata({ path: "/process", title: TITLE, description: DESCRIPTION });

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/process", "Process", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <ProcessSection h1 />
      <ContactSection />
    </main>
  );
}
