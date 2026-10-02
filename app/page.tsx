import { Mark } from "@/components/brand";
import { ContactSection, FaqPageSection, ProcessSection, SeoSection, ServicesSection } from "@/components/sections";
import { Skiper31 } from "@/components/ui/text-scroll-animation";
import type { Metadata } from "next";
import Link from "next/link";
import { homeStructuredData } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";


const TITLE = "vexoro | Web Design & Development Studio in Oman";
const DESCRIPTION =
  "Fast, search-ready websites for businesses in Oman and brands worldwide: brand sites, landing pages, online stores and SEO. Packages from 15 OMR.";

export const metadata: Metadata = pageMetadata({ path: "/", title: TITLE, description: DESCRIPTION });

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData(TITLE, DESCRIPTION)) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <h1 id="hero-title">
            We design and build websites for brands<span className="sq" aria-hidden="true" />
          </h1>
          <div className="hero-foot">
            <p className="hero-text">
              vexoro is a small studio. We do the design, the code and the search setup ourselves, then hand you a site you fully own.
            </p>
            <div className="hero-links">
              <Link className="btn" href="/contact">Tell us about your project</Link>
              <Link className="text-link" href="/pricing">Packages from 15 OMR</Link>
            </div>
          </div>
        </div>
        <Mark className="hero-mark" />
      </section>

      <Skiper31 />

      <ServicesSection />
      <ProcessSection />
      <SeoSection />
      <FaqPageSection />
      <ContactSection />
    </main>
  );
}
