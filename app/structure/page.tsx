import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { StructureSection } from "@/components/structure";
import { TeamSection } from "@/components/ventures";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Business Structure: vexoro Group, vexoro Digital and RoadLens";
const DESCRIPTION =
  "How vexoro is organised: one group, led by founder and CEO Kishore Srimuralikrishnan, with ventures that each run as their own business: vexoro Digital, RoadLens and what's next.";

export const metadata: Metadata = pageMetadata({
  path: "/structure",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.structure,
});

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/structure", "Business structure", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <StructureSection h1 />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
