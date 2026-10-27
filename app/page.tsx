import { Mark } from "@/components/brand";
import { ContactSection, FaqPageSection } from "@/components/sections";
import { StructureSection } from "@/components/structure";
import { ApproachSection, DigitalSection, RoadLensTeaser } from "@/components/ventures";
import { Skiper31 } from "@/components/ui/text-scroll-animation";
import type { Metadata } from "next";
import Link from "next/link";
import { homeStructuredData } from "@/lib/structured-data";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";


const TITLE = "vexoro | A Venture Group Building Products for Real Problems";
const DESCRIPTION =
  "vexoro finds real problems and builds focused ventures to solve them: RoadLens, India's road-data network, and vexoro Digital for AI, branding and websites.";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.home,
});

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData(TITLE, DESCRIPTION)) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <h1 id="hero-title">
            We build ventures that solve real problems<span className="sq" aria-hidden="true" />
          </h1>
          <div className="hero-foot">
            <p className="hero-text">
              vexoro is a group that builds focused solutions to real problems. Each venture runs as its own business, backed by the vexoro team.
            </p>
            <div className="hero-links">
              <Link className="btn" href="/ventures">See our ventures</Link>
              <Link className="text-link" href="/ventures/roadlens">Meet RoadLens</Link>
            </div>
          </div>
        </div>
        <Mark className="hero-mark" />
      </section>

      <Skiper31 />

      <StructureSection />
      <RoadLensTeaser />
      <ApproachSection />
      <DigitalSection />
      <FaqPageSection />
      <ContactSection />
    </main>
  );
}
