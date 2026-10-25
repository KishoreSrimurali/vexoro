import type { Metadata } from "next";
import Link from "next/link";
import { QaList } from "@/components/qa-list";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { roadlensDataStructuredData } from "@/lib/structured-data";

const TITLE = "Indian Road Data: Dashcam Footage, ADAS Datasets and Hazard Feeds";
const DESCRIPTION =
  "Privacy-safe dashcam footage of Indian roads from RoadLens: ADAS training datasets, accident and near-miss clips, insurance risk feeds, map updates and pothole data. Join as a pilot buyer.";

export const metadata: Metadata = pageMetadata({
  path: "/ventures/roadlens/data",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.roadlensData,
});

const LOI = "mailto:hello@vexoro.dev?subject=RoadLens%20data%3A%20pilot%20buyer";

const PRODUCTS = [
  { name: "ADAS and autonomy datasets", detail: "Indian traffic footage with GPS to train and test safety systems: two-wheelers, autos, cattle, potholes and missing lane markings.", time: "Dataset licence" },
  { name: "Event clips", detail: "Near-misses, accidents and hazards, cut and tagged, for training edge cases and checking claims.", time: "Per clip" },
  { name: "Insurance risk feeds", detail: "Area risk scores and accident evidence for underwriting and claim checks.", time: "Monthly feed" },
  { name: "Map and navigation updates", detail: "Fresh road changes, closures and conditions from cars that drive the same roads every day.", time: "Per-km licence" },
  { name: "City hazard feeds", detail: "Potholes, waterlogging and hazard hotspots, mapped by area, for city authorities.", time: "Monthly feed" },
];

const FAQS = [
  { question: "What data does RoadLens collect?", answer: "Dashcam video with GPS from ride-hailing cars during normal trips, from 2K and 4K cameras, with hazards tagged and faces and number plates blurred." },
  { question: "Which cities does it cover?", answer: "Bengaluru first, then Chennai and Hyderabad as the network grows." },
  { question: "How is privacy handled?", answer: "Drivers opt in to data sharing in line with India's DPDP Act, and faces and number plates are removed before any footage is sold." },
  { question: "Are licences exclusive?", answer: "Licences are non-exclusive by default. Talk to us if you need a specific route, area or exclusive window." },
  { question: "Can we join as a pilot buyer?", answer: "Yes. Pilot buyers help set what is collected and get early pricing. Email hello@vexoro.dev to discuss a letter of intent." },
];

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roadlensDataStructuredData(`${TITLE} | vexoro`, DESCRIPTION, PRODUCTS, FAQS)) }}
      />

      <section className="page-intro">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ventures">Ventures</Link></li>
              <li><Link href="/ventures/roadlens">RoadLens</Link></li>
              <li aria-current="page">Road data</li>
            </ol>
          </nav>
          <span className="venture-status">For data buyers · RoadLens</span>
          <h1 className="page-title">Road data for India<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">
            Fresh, privacy-safe dashcam footage of real Indian roads, from ride-hailing cars that drive them every day. For carmakers and ADAS teams, insurers, mapping companies and cities.
          </p>
          <div className="hero-links intro-links">
            <a className="btn" href={LOI}>Become a pilot buyer</a>
            <Link className="text-link" href="/ventures/roadlens">How RoadLens works</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="products-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="products-title">What you can buy</h2>
            <p>The same network produces every product, so you can start with one and add more. Starting in Bengaluru.</p>
          </div>
          <table className="services">
            <thead>
              <tr><th scope="col">Product</th><th scope="col">What you get</th><th scope="col">How you buy</th></tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.name}><th scope="row">{p.name}</th><td>{p.detail}</td><td>{p.time}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <QaList id="buyer-faq" title="Buyer questions" items={FAQS} />

      <section className="section" aria-labelledby="buy-title">
        <div className="wrap contact">
          <div className="contact-text">
            <h2 id="buy-title">Shape the pilot</h2>
            <p>Tell us which roads, conditions or events you need. Pilot buyers get early pricing and a say in what we collect first.</p>
            <p className="contact-mail"><a href={LOI}>hello@vexoro.dev</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
