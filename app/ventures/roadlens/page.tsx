import type { Metadata } from "next";
import Link from "next/link";
import { DriverWaitlist } from "@/components/driver-waitlist";
import { TeamSection } from "@/components/ventures";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { roadlensStructuredData } from "@/lib/structured-data";

const TITLE = "RoadLens: Every Ride Maps India. Dashcam Road Data from Bengaluru";
const DESCRIPTION =
  "RoadLens turns everyday cab rides into road-safety data. Ride-hailing drivers in Bengaluru earn from dashcam footage; insurers, mapping companies, cities and carmakers get privacy-safe road data.";

export const metadata: Metadata = pageMetadata({
  path: "/ventures/roadlens",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.roadlens,
});

const SAMPLE = "mailto:hello@vexoro.dev?subject=RoadLens%3A%20sample%20data%20pack";

const STEPS = [
  { name: "Drivers join", detail: "and get a dashcam on a small refundable deposit." },
  { name: "They drive as usual", detail: "The camera records with GPS during normal trips." },
  { name: "Footage uploads over Wi-Fi", detail: "with no mobile data used." },
  { name: "We protect privacy", detail: "Every face and number plate is blurred." },
  { name: "The data goes to work", detail: "for safer roads and smarter insurance." },
];

const AUDIENCES = [
  { name: "Insurers", detail: "Road risk insights and accident evidence." },
  { name: "Mapping companies", detail: "Fresh road changes and hazards." },
  { name: "Cities", detail: "Pothole and waterlogging maps." },
  { name: "Carmakers", detail: "Real Indian traffic data for safer vehicles." },
];

const DRIVER_PERKS = [
  "Earn extra just by driving: paid per km, with bonuses for new roads, night or rain driving, and verified hazards",
  "Up to ₹4,500 extra a month*",
  "Optional app plans for dispute evidence, SOS and incident backup",
  "Your earnings never depend on the plan you choose",
];

const ROADMAP = [
  { when: "First", name: "Pilot", detail: "50 drivers in Bengaluru. Measure real costs and footage quality." },
  { when: "Next", name: "Validate", detail: "Grow to 200 drivers and launch the optional driver app plans." },
  { when: "Then", name: "Scale", detail: "1,000 drivers across Bengaluru, with hazard feeds for insurers." },
  { when: "Later", name: "Expand", detail: "Chennai and Hyderabad next, on the way to 10,000 drivers." },
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
          <span className="venture-status">A vexoro venture · Launching in Bengaluru</span>
          <h1 className="page-title">RoadLens: Every ride maps India<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">
            RoadLens turns everyday cab rides into road-safety data. We put dashcams in ride-hailing cars and pay drivers for the footage they record. That footage becomes privacy-safe data on real Indian roads.
          </p>
          <div className="hero-links intro-links">
            <a className="btn" href="#drivers">Join the driver waitlist</a>
            <a className="text-link" href={SAMPLE}>Request a sample data pack</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-title">
        <div className="wrap roadlens-teaser">
          <div>
            <h2 id="problem-title">Why it matters</h2>
            <p className="teaser-lede">Indian roads are among the deadliest in the world, and most driving data comes from orderly Western roads. Ride-hailing cars already drive every kind of Indian road, day and night. RoadLens records what they see.</p>
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

      <section className="section" aria-labelledby="how-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="how-title">How it works</h2>
              <p>Nothing changes for the driver. The camera does the work on trips they already take.</p>
            </div>
            <ol className="steps steps-5">
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

      <section className="section" aria-labelledby="for-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="for-title">Who it&apos;s for</h2>
            <p>
              The same privacy-safe footage serves four kinds of buyer. <Link className="text-link" href="/ventures/roadlens/data">See the data products</Link>.
            </p>
          </div>
          <ul className="venture-grid venture-grid-2">
            {AUDIENCES.map((a) => (
              <li key={a.name} className="venture-card">
                <h3>{a.name}</h3>
                <p>{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="drivers" aria-labelledby="drivers-title">
        <div className="wrap contact">
          <div className="contact-text">
            <span className="venture-status">Drivers in Bengaluru</span>
            <h2 id="drivers-title">For drivers</h2>
            <ul className="plain-list">
              {DRIVER_PERKS.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="code-note">*Estimated for a Pro camera at about 150 km a day. Final rates are announced at launch.</p>
          </div>
          <div>
            <h3 className="form-title">Join the waitlist for a RoadLens dashcam</h3>
            <DriverWaitlist />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-title">
        <div className="wrap seo">
          <div className="seo-text">
            <h2 id="privacy-title">Privacy first</h2>
            <p>Drivers opt in, passengers are informed, and every face and number plate is blurred before any data is used.</p>
          </div>
          <ul className="plain-list">
            <li>Drivers opt in to data sharing, in line with India&apos;s DPDP Act</li>
            <li>Passengers are informed that the car has a dashcam</li>
            <li>Faces and number plates are blurred before any data is used</li>
            <li>Driver earnings depend on footage quality, never on a paid plan</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="roadmap-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="roadmap-title">Starting in Bengaluru, then scaling</h2>
              <p>Each stage has to prove itself before the next begins.</p>
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

      <TeamSection />

      <section className="section" id="get-involved" aria-labelledby="involved-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="involved-title">Get involved</h2>
            <p>
              Or email <a className="text-link" href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>.
            </p>
          </div>
          <ul className="venture-grid">
            <li className="venture-card featured">
              <span className="venture-status">Drivers in Bengaluru</span>
              <h3>Get a dashcam</h3>
              <p>Join the waitlist for a RoadLens dashcam and start earning from the trips you already drive.</p>
              <a className="text-link" href="#drivers">Join the waitlist</a>
            </li>
            <li className="venture-card">
              <span className="venture-status">Insurers and partners</span>
              <h3>See the data</h3>
              <p>Request a sample data pack and tell us which roads, conditions or events you need.</p>
              <a className="text-link" href={SAMPLE}>Request a sample data pack</a>
            </li>
            <li className="venture-card">
              <span className="venture-status">Investors</span>
              <h3>Back RoadLens</h3>
              <p>Learn why we&apos;re building RoadLens and request the investor deck.</p>
              <Link className="text-link" href="/investors">For investors</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
