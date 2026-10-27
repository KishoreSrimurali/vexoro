import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { StructureSection } from "@/components/structure";
import { ApproachSection, RoadLensTeaser, TeamSection, VenturesSection } from "@/components/ventures";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Ventures: Products We Build to Solve Real Problems";
const DESCRIPTION = "vexoro is a venture group. We find real problems and build focused products to solve them: vexoro Digital (live), RoadLens (launching in Bengaluru) and what's next.";

export const metadata: Metadata = pageMetadata({
  path: "/ventures",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.ventures,
});

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/ventures", "Ventures", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <VenturesSection h1 />
      <StructureSection />
      <RoadLensTeaser />
      <ApproachSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
