import { Mark } from "@/components/brand";
import { AiSection, ContactSection, FaqPageSection, ProcessSection, SeoSection, ServicesSection } from "@/components/sections";
import { Skiper31 } from "@/components/ui/text-scroll-animation";
import type { Metadata } from "next";
import Link from "next/link";
import { homeStructuredData } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";


const TITLE = "vexoro | AI Solutions, Branding & Web Development in Oman";
const DESCRIPTION =
  "AI assistants, workflow automation and custom AI for companies in Oman and worldwide, plus the branding and website around them. Free consultation.";

export const metadata: Metadata = pageMetadata({ path: "/", title: TITLE, description: DESCRIPTION });

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData(TITLE, DESCRIPTION)) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <h1 id="hero-title">
            We build AI solutions for companies<span className="sq" aria-hidden="true" />
          </h1>
          <div className="hero-foot">
            <p className="hero-text">
              vexoro designs and builds AI assistants, automations and integrations for businesses in Oman and worldwide, plus the brand and website around them.
            </p>
            <div className="hero-links">
              <Link className="btn" href="/contact">Tell us about your project</Link>
              <Link className="text-link" href="/ai">Explore AI solutions</Link>
            </div>
          </div>
        </div>
        <Mark className="hero-mark" />
      </section>

      <Skiper31 />

      <AiSection />
      <ServicesSection />
      <ProcessSection />
      <SeoSection />
      <FaqPageSection />
      <ContactSection />
    </main>
  );
}
