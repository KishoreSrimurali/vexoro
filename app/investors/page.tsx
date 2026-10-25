import type { Metadata } from "next";
import Link from "next/link";
import { QaList } from "@/components/qa-list";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { investorsStructuredData } from "@/lib/structured-data";
import { FOUNDER } from "@/lib/ventures";

const TITLE = "Investors: Invest in RoadLens, a Pre-Seed Road-Data Startup in India";
const DESCRIPTION =
  "RoadLens by vexoro is raising pre-seed: a dashcam road-data network on India's ride-hailing cars, with stage-gated tranches. Request the investor deck.";

export const metadata: Metadata = pageMetadata({
  path: "/investors",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.investors,
});

const DECK = "mailto:hello@vexoro.dev?subject=Investor%20enquiry%3A%20RoadLens%20deck";

const WHY = [
  { name: "A large, unsolved problem", detail: "India recorded 4.80 lakh road accidents and 1.72 lakh deaths in 2023, and most driving data comes from orderly Western roads." },
  { name: "Collectors already on the road", detail: "Ride-hailing drivers cover around 150 km a day on every kind of road. A ₹2,500 camera turns that mileage into data." },
  { name: "Four buyers, one footage", detail: "Carmakers and ADAS teams, insurers, mapping companies and cities licence the same footage, non-exclusively." },
  { name: "Proven abroad, open in India", detail: "Dashcam data networks work elsewhere. RoadLens is India-first, with rupee payouts and no crypto tokens." },
];

const GATES = [
  { when: "Months 0–3", name: "Pilot", detail: "50 drivers in Bengaluru. Gate: 80%+ camera uptime and one buyer letter of intent." },
  { when: "Months 3–6", name: "Validate", detail: "200 drivers and paid driver plans. Gate: two paying buyers." },
  { when: "Months 6–18", name: "Scale", detail: "1,000 drivers across Bengaluru, with hazard feeds for insurers." },
  { when: "Month 18+", name: "Expand", detail: "Chennai and Hyderabad, funded from revenue or a seed round." },
];

const INVESTOR_FAQS = [
  {
    question: "What is vexoro raising for?",
    answer: "vexoro is raising a pre-seed round for RoadLens, a road-data network built on dashcams in India's ride-hailing cars.",
  },
  {
    question: "How is the investment released?",
    answer: "In three tranches, one at each stage gate: Pilot, Validate and Scale. Each tranche is released only after the previous gate is passed.",
  },
  {
    question: "How is investor risk limited?",
    answer: "Stage gates cap the capital at risk until buyers pay. The pilot must reach 80%+ camera uptime and sign a buyer letter of intent before the next tranche.",
  },
  {
    question: "How does RoadLens make money?",
    answer: "Four revenue streams from one camera network: data licences, event clips, monthly hazard feeds, and Plus and Pro driver subscriptions.",
  },
  {
    question: "Who leads RoadLens?",
    answer: `${FOUNDER.name}, ${FOUNDER.role} of vexoro, leads strategy, finance and buyer sales, with three key hires planned across the pilot, validate and scale stages.`,
  },
  {
    question: "How do I get the investor deck?",
    answer: "Email hello@vexoro.dev with a line about yourself or your fund, and we'll send the deck and set up a call.",
  },
];

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investorsStructuredData(`${TITLE} | vexoro`, DESCRIPTION, INVESTOR_FAQS)) }}
      />

      <section className="page-intro">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Investors</li>
            </ol>
          </nav>
          <span className="venture-status">For investors · Raising pre-seed</span>
          <h1 className="page-title">Invest in RoadLens<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">
            vexoro builds ventures that solve real problems. Our current raise is for RoadLens: India&apos;s road-data network, built on the ride-hailing cars already driving every road.
          </p>
          <div className="hero-links intro-links">
            <a className="btn" href={DECK}>Request the investor deck</a>
            <Link className="text-link" href="/ventures/roadlens">Read about RoadLens</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="why-title">Why RoadLens, why now</h2>
            <p>A pre-seed road-data and mobility startup in India, with a clear path from a 50-driver pilot to a multi-city network.</p>
          </div>
          <ul className="venture-grid venture-grid-2">
            {WHY.map((w) => (
              <li key={w.name} className="venture-card">
                <h3>{w.name}</h3>
                <p>{w.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="gates-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="gates-title">Money released stage by stage</h2>
              <p>Three tranches, each released only when the stage before it passes its gate.</p>
            </div>
            <ol className="steps">
              {GATES.map((g) => (
                <li key={g.name}>
                  <span className="when">{g.when}</span>
                  <h3>{g.name}</h3>
                  <p>{g.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <QaList id="investor-faq" title="Investor questions" items={INVESTOR_FAQS} />

      <section className="section" id="invest" aria-labelledby="invest-title">
        <div className="wrap contact">
          <div className="contact-text">
            <h2 id="invest-title">Talk to the founder</h2>
            <p>Angel investors, venture funds, family offices and strategic partners: send a line about yourself and we&apos;ll share the deck.</p>
            <p className="contact-mail"><a href={DECK}>hello@vexoro.dev</a></p>
          </div>
          <div className="founder">
            <span className="venture-status">{FOUNDER.role}</span>
            <h3>{FOUNDER.name}</h3>
            <p>Founded and runs vexoro. Built three ventures end to end, and owns strategy, finance and buyer sales at RoadLens.</p>
            <a className="btn" href={DECK}>Request the investor deck</a>
          </div>
        </div>
      </section>
    </main>
  );
}
