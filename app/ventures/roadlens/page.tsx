import type { Metadata } from "next";
import Link from "next/link";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { roadlensStructuredData } from "@/lib/structured-data";
import { FOUNDER } from "@/lib/ventures";

const TITLE = "RoadLens: India's Road-Data Network from Ride-Hailing Dashcams";
const DESCRIPTION =
  "RoadLens, a Bengaluru-based vexoro venture, turns India's cab fleet into a live road-data network. Drivers earn from dashcam footage; carmakers, insurers, mapping and city teams get privacy-safe road data.";

export const metadata: Metadata = pageMetadata({
  path: "/ventures/roadlens",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.roadlens,
});

const DECK = "mailto:hello@vexoro.dev?subject=RoadLens%20investor%20deck";

const SOLUTION = [
  { name: "Drivers earn", detail: "Extra income for routes they already drive, plus tools that protect them." },
  { name: "Buyers get real data", detail: "Fresh, privacy-safe footage of Indian roads, tagged and ready to use." },
  { name: "Roads get safer", detail: "Better safety systems, faster pothole fixes and evidence after accidents." },
];

const STEPS = [
  { name: "Driver joins", detail: "Signs up in the app and gets a free dashcam on a small refundable deposit." },
  { name: "Drives as usual", detail: "The camera records with GPS during normal trips. Nothing changes for them." },
  { name: "We process", detail: "Footage is uploaded, faces and plates are blurred, and hazards are tagged." },
  { name: "We sell", detail: "Datasets, event clips and hazard feeds go to safety, insurance and mapping teams." },
];

const BUYERS = [
  { name: "Carmakers and ADAS", detail: "Indian traffic data to train and test safety systems", time: "Dataset licences" },
  { name: "Insurers", detail: "Area risk scores, accident evidence and claim checks", time: "Clips + monthly feed" },
  { name: "Mapping and navigation", detail: "Fresh road changes, closures and conditions", time: "Per-km licence" },
  { name: "City authorities", detail: "Potholes, waterlogging and hazard hotspots", time: "Monthly hazard feed" },
];

const PRIVACY = [
  "Clear consent: drivers opt in to data sharing, in line with India's DPDP Act",
  "Automatic blurring: faces and number plates are removed before any footage is sold",
  "No pay-to-earn: earnings depend on footage quality, never on a plan a driver buys",
  "Lean pipeline: hazard clips upload live; bulk footage moves over Wi-Fi at hubs",
];

const ROADMAP = [
  { when: "Months 0–3", name: "Pilot", detail: "50 drivers in Bengaluru. Measure real costs and footage quality." },
  { when: "Months 3–6", name: "Validate", detail: "Grow to 200 drivers and launch the Plus and Pro driver plans." },
  { when: "Months 6–18", name: "Scale", detail: "1,000 drivers across Bengaluru, with hazard feeds for insurers." },
  { when: "Month 18+", name: "Expand", detail: "Chennai and Hyderabad next, on the way to 10,000 drivers." },
];

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roadlensStructuredData(`${TITLE} | vexoro`, DESCRIPTION)) }} />

      <section className="page-intro">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ventures">Ventures</Link></li>
              <li aria-current="page">RoadLens</li>
            </ol>
          </nav>
          <span className="venture-status">A vexoro venture · Raising pre-seed</span>
          <h1 className="page-title">RoadLens<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">India&apos;s road-data network, built on the cars already driving it. Based in Bengaluru, RoadLens turns ride-hailing cars into a live road-data network with low-cost dashcams.</p>
          <div className="hero-links intro-links">
            <a className="btn" href={DECK}>Request the investor deck</a>
            <Link className="text-link" href="/ventures/roadlens/data">Buy road data</Link>
            <a className="text-link" href="mailto:hello@vexoro.dev?subject=Driving%20with%20RoadLens">Drive with RoadLens</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-title">
        <div className="wrap roadlens-teaser">
          <div>
            <h2 id="problem-title">Indian roads are deadly, and machines can&apos;t read them</h2>
            <p className="teaser-lede">Most driving datasets come from orderly Western roads with clear lanes. India has two-wheelers, autos, cattle, potholes and missing lane markings, and test fleets and survey vans are slow, costly and cover few roads.</p>
          </div>
          <div>
            <dl className="stats">
              <div><dt>people died on Indian roads in 2023</dt><dd>1.72 lakh</dd></div>
              <div><dt>road accidents recorded the same year</dt><dd>4.80 lakh</dd></div>
            </dl>
            <p className="code-note">Source: MoRTH, Road Accidents in India 2023</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="insight-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="insight-title">The data collectors are already on the road</h2>
            <p>A typical ride-hailing driver covers around 150 km a day, on every kind of road, day and night. All that mileage goes unrecorded today. A ₹2,500 camera changes that.</p>
          </div>
          <ul className="venture-grid">
            {SOLUTION.map((s, i) => (
              <li key={s.name} className={i === 1 ? "venture-card featured" : "venture-card"}>
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="how-title">From a driver&apos;s dashboard to a buyer&apos;s dataset</h2>
              <p>Two cameras, Basic (2K) and Pro (4K front and inside), and one app for earnings, uploads, incident clips and SOS.</p>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.name}>
                  <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="buyers-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="buyers-title">Four buyers for the same footage</h2>
            <p>The same footage is licensed non-exclusively to several buyers. Drivers are paid for useful footage, not just kilometres, and earnings never depend on a plan they buy.</p>
          </div>
          <table className="services">
            <thead>
              <tr><th scope="col">Buyer</th><th scope="col">What they need</th><th scope="col">How they buy</th></tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => (
                <tr key={b.name}><th scope="row">{b.name}</th><td>{b.detail}</td><td>{b.time}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-title">
        <div className="wrap seo">
          <div className="seo-text">
            <h2 id="privacy-title">Privacy is built in, not bolted on</h2>
            <p>Footage is only useful if it is lawful and safe to share. RoadLens is designed around India&apos;s DPDP Act from day one.</p>
          </div>
          <ul className="plain-list">
            {PRIVACY.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="roadmap-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="roadmap-title">Prove it in Bengaluru, then scale</h2>
              <p>Each stage has a gate it must pass before the next one is funded. We reach drivers through taxi hubs, fleet owners, driver unions and referrals.</p>
            </div>
            <ol className="steps">
              {ROADMAP.map((s) => (
                <li key={s.name}>
                  <span className="when">{s.when}</span>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" id="invest" aria-labelledby="invest-title">
        <div className="wrap contact">
          <div className="contact-text">
            <h2 id="invest-title">Raising pre-seed</h2>
            <p>RoadLens is raising a pre-seed round, released in tranches at each stage gate. Investors, fleet owners and data buyers: we&apos;d like to talk.</p>
            <p className="contact-mail"><a href={DECK}>hello@vexoro.dev</a></p>
          </div>
          <div className="founder">
            <span className="venture-status">{FOUNDER.role}</span>
            <h3>{FOUNDER.name}</h3>
            <p>Founded and runs vexoro. Built three ventures end to end, and owns strategy, finance and buyer sales at RoadLens.</p>
            <a className="btn" href={DECK}>Request the investor deck</a>
            <Link className="text-link" href="/investors">Investor details</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
