import type { Metadata } from "next";
import { ServicesSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";

const TITLE = "Web Design & Development Services in Oman";
const DESCRIPTION = "Brand websites, landing pages, online stores, web apps, SEO audits and care plans. Fixed quotes, clear timelines, and you own what we build.";

export const metadata: Metadata = pageMetadata({ path: "/services", title: TITLE, description: DESCRIPTION });

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/services", "Services", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <ServicesSection h1 />
      <ContactSection />
    </main>
  );
}
