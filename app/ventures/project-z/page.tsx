import type { Metadata } from "next";
import Link from "next/link";
import { BetaWaitlist } from "@/components/beta-waitlist";
import { TeamSection } from "@/components/ventures";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { projectZStructuredData } from "@/lib/structured-data";

const TITLE = "Project Z: An AI That Makes Your Phone Calls, in Any Indian Language";
const DESCRIPTION =
  "Project Z is an AI that makes phone calls for you in India. Tell it what you need; it finds the number, calls, waits on hold, speaks the other person's language and sends you the result. Beta launching in Bengaluru.";

export const metadata: Metadata = pageMetadata({
  path: "/ventures/project-z",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.projectZ,
});

const BUSINESS = "mailto:hello@vexoro.dev?subject=Project%20Z%3A%20business%20plans";

const STEPS = [
  { name: "You ask", detail: "“Book Dr. Rao for Saturday morning.” Type it or say it, in any language." },
  { name: "It briefs", detail: "Asks one to three quick questions and pulls your saved details into a task brief." },
  { name: "It calls", detail: "Finds the number, dials, navigates the IVR, waits on hold silently and talks." },
  { name: "You get it done", detail: "“Booked: Sat 10:30 AM, token 14.” The transcript and recording are saved." },
];

const TASKS = [
  { name: "Refund for a missing biryani", detail: "Finds the order from the receipt, calls support and asks for ₹320 back.", result: "Refund approved, 3–5 days" },
  { name: "Book my dad's cardiologist", detail: "Calls the clinic in Tamil and picks the earliest slot after 10 AM.", result: "Booked Thu 11:15 AM" },
  { name: "When is the plumber coming?", detail: "Calls the saved contact, gets a time and asks for a confirmation SMS.", result: "Arriving 4–5 PM today" },
  { name: "Three AC repair quotes", detail: "Calls three nearby providers and asks each the same questions.", result: "₹450 / ₹600 / ₹500" },
];

const USES = [
  { name: "Health", detail: "Book, reschedule or cancel doctor and lab visits, and check pharmacy stock." },
  { name: "Home services", detail: "Plumbers, electricians, AC repair and maids: arrival times and quotes." },
  { name: "Customer care", detail: "Refunds, cancellations, wrong orders, and telecom and DTH complaints." },
  { name: "Errands", detail: "Restaurant tables, salon slots, tailors, courier pickups and the school office." },
  { name: "Family care", detail: "Manage your parents' appointments and repairs from another city." },
  { name: "Small business", detail: "Appointment reminders, no-show recovery, payment reminders and callbacks." },
];

const PLANS = [
  { id: "free", name: "Free", price: "₹0", unit: "", for: "Try it", features: ["First 3 calls free", "2 more for each friend who joins, up to 5"] },
  { id: "per-call", name: "Pay per call", price: "₹29", unit: "a call", for: "No commitment", features: ["Pay only when you use it", "Calls over 15 minutes are ₹49"] },
  { id: "basic", name: "Basic", price: "₹169", unit: "a month", for: "Everyday errands", features: ["8 calls a month", "About ₹21 a call"] },
  { id: "unlimited", name: "Unlimited", price: "₹549", unit: "a month", for: "The core plan", features: ["Unlimited personal calls", "Fair use up to 30 a month"], popular: true },
  { id: "family", name: "Family", price: "₹749", unit: "a month", for: "Up to 4 members", features: ["Include parents in other cities", "Fair use up to 40 shared calls"] },
  { id: "business", name: "Business", price: "₹2,000+", unit: "a month", for: "Clinics, salons and shops", features: ["Reminders and no-show recovery", "Payment reminders and callbacks", "Up to ₹20,000 a month"] },
];

const ROADMAP = [
  { when: "Months 0–6", name: "Pilot", detail: "Concierge test, proof of concept and a closed beta in Bengaluru: 3 tasks, 4 languages, 1,000 users." },
  { when: "Months 7–12", name: "Launch", detail: "Paid plans in Bengaluru, the referral loop, the family plan and our first 40 clinics." },
  { when: "Months 13–18", name: "Scale", detail: "Top 5 metros, a WhatsApp front end, 5 more languages and business sales." },
  { when: "Years 2–3", name: "Expand", detail: "Top 10 metros, tier 2 cities and self-serve business plans." },
];

const TRUST = [
  "Every call opens: “Hi, I'm an AI assistant calling on behalf of [you].”",
  "OTPs, card and bank details, passwords, Aadhaar and PAN are never shared, by design",
  "The agent acts only within the limits you set: price, alternatives and times",
  "Separate opt-ins for recording, AI analysis and receipt reading, in line with India's DPDP Act",
  "No marketing or bulk calls on personal plans; declared, registered caller numbers",
  "Data stays in India, encrypted, and is erased when the task is done",
];

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectZStructuredData(`${TITLE} | vexoro`, DESCRIPTION)) }} />

      <section className="page-intro">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ventures">Ventures</Link></li>
              <li aria-current="page">Project Z</li>
            </ol>
          </nav>
          <span className="venture-status">A vexoro venture · Beta in Bengaluru</span>
          <h1 className="page-title">Project Z: You ask. It calls.<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">
            Project Z is an AI that makes phone calls for you, in any Indian language. Tell it what you need. It finds the number, calls, waits on hold, speaks the other person&apos;s language and sends you the result.
          </p>
          <div className="hero-links intro-links">
            <a className="btn" href="#beta">Join the beta waitlist</a>
            <a className="text-link" href={BUSINESS}>Project Z for business</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem-title">
        <div className="wrap project-z-teaser">
          <div>
            <h2 id="problem-title">India runs on phone calls, and people hate making them</h2>
            <p className="teaser-lede">
              Clinics, repair shops, tailors, landlords and schools are often reachable only by phone. IVR menus and hold music turn a 2-minute question into a 30-minute task. The person who answers may not speak your language, and you can&apos;t take a 30-minute call at work. Most of these calls follow a short script, so Project Z makes them for you.
            </p>
          </div>
          <div>
            <dl className="stats">
              <div><dt>smartphone users in India, 2026</dt><dd>~69 Cr</dd></div>
              <div><dt>of Indian consumers prefer a phone call when talking to businesses</dt><dd>76%+</dd></div>
            </dl>
            <p className="code-note">Sources: IBEF/PIB data via GrabOn (2026); Truecaller study cited by TechCrunch.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="how-title">How it works</h2>
              <p>If the other side asks something the agent doesn&apos;t know, it pings you live (“They want your registered email: tap to answer”) and carries on.</p>
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

      <section className="section" aria-labelledby="tasks-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="tasks-title">What it does on a real task</h2>
            <p>Examples are illustrative. Project Z is in development and not yet live.</p>
          </div>
          <ul className="venture-grid venture-grid-2">
            {TASKS.map((t) => (
              <li key={t.name} className="venture-card">
                <span className="venture-status">{t.result}</span>
                <h3>“{t.name}”</h3>
                <p>{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="uses-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="uses-title">The calls it takes off your hands</h2>
            <p>We start where calls are frequent, painful and simple.</p>
          </div>
          <ul className="venture-grid">
            {USES.map((u) => (
              <li key={u.name} className="venture-card">
                <h3>{u.name}</h3>
                <p>{u.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pricing-section" aria-labelledby="plans-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="plans-title">Try free, pay per call, or subscribe</h2>
            <p>Planned launch pricing, including GST. Final prices are confirmed at launch.</p>
          </div>
          <div className="pricing-grid pricing-grid-3">
            {PLANS.map((p) => (
              <article key={p.id} className={p.popular ? "price-card popular" : "price-card"} aria-labelledby={`${p.id}-name`}>
                <header>
                  <h3 id={`${p.id}-name`}>{p.name}</h3>
                  {p.popular && <span className="price-badge">Core plan</span>}
                </header>
                <p className="price-for">{p.for}</p>
                <p className="price-amount">
                  {p.price} {p.unit && <span>{p.unit}</span>}
                </p>
                <ul className="price-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="beta" aria-labelledby="beta-title">
        <div className="wrap contact">
          <div className="contact-text">
            <span className="venture-status">Closed beta · Bengaluru</span>
            <h2 id="beta-title">Be one of the first to use it</h2>
            <p>The closed beta starts in Bengaluru with three tasks and four languages. Join the waitlist and tell us which calls you&apos;d hand over first.</p>
          </div>
          <div>
            <h3 className="form-title">Join the Project Z beta waitlist</h3>
            <BetaWaitlist />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <div className="wrap seo">
          <div className="seo-text">
            <h2 id="trust-title">Honest by design</h2>
            <p>Project Z always says it&apos;s an AI, never shares anything risky, and is built to comply with TRAI and the DPDP Act from day one.</p>
          </div>
          <ul className="plain-list">
            {TRUST.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="roadmap-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="roadmap-title">Prove it in Bengaluru, then scale</h2>
              <p>Each stage has a gate it must pass before the next one begins.</p>
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
              <span className="venture-status">People in Bengaluru</span>
              <h3>Join the beta</h3>
              <p>Get your calls made for you, and help shape which tasks and languages come first.</p>
              <a className="text-link" href="#beta">Join the waitlist</a>
            </li>
            <li className="venture-card">
              <span className="venture-status">Clinics and businesses</span>
              <h3>Design partners</h3>
              <p>Cut no-shows and fill cancelled slots with reminder and callback calls in your patients&apos; language.</p>
              <a className="text-link" href={BUSINESS}>Talk to us</a>
            </li>
            <li className="venture-card">
              <span className="venture-status">Investors</span>
              <h3>Back Project Z</h3>
              <p>Read why we&apos;re building Project Z and request the investor brief.</p>
              <Link className="text-link" href="/investors">For investors</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
