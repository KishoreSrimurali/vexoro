import type { Metadata } from "next";
import Link from "next/link";
import { QaList } from "@/components/qa-list";
import { KEYWORDS } from "@/lib/keywords";
import { pageMetadata } from "@/lib/site";
import { investorsStructuredData } from "@/lib/structured-data";
import { FOUNDER } from "@/lib/ventures";

const TITLE = "Investors: Invest in Project Z, a Pre-Seed Voice AI Startup in India";
const DESCRIPTION =
  "Project Z by vexoro is raising ₹4.5 Cr pre-seed in gated tranches: an AI that makes phone calls for people in India, in any Indian language. Beta launching in Bengaluru. Request the investor brief.";

export const metadata: Metadata = pageMetadata({
  path: "/investors",
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS.investors,
});

const DECK = "mailto:hello@vexoro.dev?subject=Investor%20enquiry%3A%20Project%20Z%20investor%20brief";

const GLANCE = [
  { name: "Problem", detail: "Daily life in India still runs on phone calls: clinics, repairmen, landlords, customer care. Calls are slow, stressful and often in another language." },
  { name: "Solution", detail: "An AI voice agent that completes the call for you, within limits you set, and pings you live if it needs a detail." },
  { name: "Customers", detail: "Busy urban professionals and families managing elderly parents first; clinics, salons and small businesses from month 9." },
  { name: "Business model", detail: "First 3 calls free, then ₹29 a call or subscribe: ₹169 for 8 calls, ₹549 unlimited, ₹749 family. Business plans ₹2,000–20,000 a month." },
  { name: "Unit economics", detail: "About ₹16 per call today and ₹9 at scale. ₹310 a month net per subscriber after GST and billing fees; 43% contribution in year 1, 70%+ by year 3." },
  { name: "Go-to-market", detail: "Bengaluru beta with 3 tasks and 4 languages, paid launch in month 7, top 10 metros in year 2." },
];

const WHY_NOW = [
  { name: "Cost", detail: "Indian speech APIs now cost ₹0.49 a minute for speech-to-text, so a full call task costs about ₹16: cheap enough for consumers." },
  { name: "Quality", detail: "Indian and global models now handle Hinglish, Kanglish and mid-call language switches. Real conversations, not IVR-style bots." },
  { name: "Proof", detail: "Equal AI's call assistant has 10 lakh monthly users and raised a $30M Series B. Indians already trust AI with calls; outbound tasks are the open space." },
  { name: "Rules", detail: "TRAI's 18 Sept 2026 amendment treats AI calls as declared A2P calls, and the DPDP Rules were notified in Nov 2025. Clear rules favour an entrant built for compliance." },
];

const METRICS = [
  { dt: "smartphone users in India, 2026", dd: "~69 Cr" },
  { dt: "India voice AI market by 2030, 35.7% CAGR", dd: "$958M" },
  { dt: "SAM: call-heavy users in the top 50 cities", dd: "1.5 Cr" },
  { dt: "year-3 revenue in the base plan (projection)", dd: "₹35 Cr" },
];

const MOAT = [
  { name: "Local business call graph", detail: "Every call teaches us how a specific clinic or helpline works: best time, IVR path, language and what they ask." },
  { name: "Task-success engine", detail: "An evaluation set of thousands of real Indian calls with noise, accents and code-mixing." },
  { name: "Compliance built in", detail: "Declared numbers, DLT registration, a DPDP consent ledger and AI disclosure. Hard to retrofit." },
  { name: "Two-sided pull", detail: "Businesses that receive many calls get a free verified-caller dashboard, then upgrade to business plans." },
];

const GATES = [
  { when: "Months 0–6", name: "Pilot", detail: "Concierge test, POC and closed beta: 3 tasks, 4 languages, 1,000 users. Gate: ≥75% task success, ≥30% pre-pay ₹169." },
  { when: "Months 7–12", name: "Launch", detail: "Paid plans in Bengaluru, referral loop, family plan, first 40 clinics. Gate: ₹15 lakh MRR." },
  { when: "Months 13–18", name: "Scale", detail: "Top 5 metros, WhatsApp front end, 5 more languages, B2B inside sales. Gate: 10k subscribers, seed round." },
  { when: "Years 2–3", name: "Expand", detail: "Top 10 metros, tier 2 cities, self-serve business plans. 1.2 lakh subscribers and ₹62 Cr ARR by month 36." },
];

const TRANCHES = [
  { name: "1 · Pilot", when: "Months 0–6", gate: "On closing", amount: "₹0.90 Cr" },
  { name: "2 · Launch", when: "Months 7–12", gate: "POC targets met: ≥75% task success, ≥30% pre-pay ₹169", amount: "₹1.40 Cr" },
  { name: "3 · Scale", when: "Months 13–18", gate: "₹15 lakh MRR and 25+ business accounts", amount: "₹1.10 Cr" },
  { name: "Reserve", when: "Months 19–24", gate: "Bridge if the seed round is late", amount: "₹1.10 Cr" },
];

const INVESTOR_FAQS = [
  {
    question: "What is vexoro raising for?",
    answer: "vexoro is raising ₹4.5 Cr pre-seed for Project Z, an AI that makes phone calls for people in India, in any Indian language. The round funds 18 months of the plan plus a 6-month reserve.",
  },
  {
    question: "What stage is Project Z at?",
    answer: "Project Z is pre-product. A six-week proof of concept tests the riskiest assumptions for under ₹15 lakh: a concierge test with 50 users, 500 controlled calls and a closed beta with 100 users and about 1,000 real tasks. Results go to investors as a POC report at week 6.",
  },
  {
    question: "How is investor capital protected?",
    answer: "The round is released in three tranches plus a reserve, each only after the previous gate is met. At most ₹0.9 Cr is at risk before a working product and paying users. If task success stays below 60% after three rounds of fixes, or fewer than 15% of users would pay, we narrow to the single best task or pivot to the business reminder product.",
  },
  {
    question: "How does Project Z make money?",
    answer: "Pay-per-call at ₹29, subscriptions at ₹169, ₹549 and ₹749 a month, and business plans at ₹2,000–20,000 a month for reminders, no-show recovery and callbacks. In the base plan Project Z reaches ₹35 Cr revenue and positive EBITDA in year 3. These are projections, not results.",
  },
  {
    question: "How is it kept safe and compliant?",
    answer: "Every call opens with an AI disclosure, OTPs, card details, passwords and Aadhaar are blocked at the guardrail layer, consent is recorded under India's DPDP Act, and calls use declared, DLT-registered numbers through a licensed telephony partner in line with TRAI rules. Data stays in India.",
  },
  {
    question: "Who leads Project Z?",
    answer: `${FOUNDER.name}, founder and sole owner of the vexoro group, owns strategy, finance, product and fundraising. A founding head of engineering owns the product, with 13 hires funded by this round.`,
  },
  {
    question: "How do I get the investor brief?",
    answer: "Email hello@vexoro.dev with a line about yourself or your fund, and we'll send the full investor brief with terms and set up a call. The minimum cheque is ₹25 lakh.",
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
          <h1 className="page-title">Invest in Project Z<span className="sq" aria-hidden="true" /></h1>
          <p className="page-lede">
            vexoro builds ventures that solve real problems. Our current raise is for Project Z: an AI that makes your phone calls, in any Indian language. We are raising ₹4.5 Cr pre-seed, released in three gated tranches plus a reserve.
          </p>
          <div className="hero-links intro-links">
            <a className="btn" href={DECK}>Request the investor brief</a>
            <Link className="text-link" href="/ventures/project-z">Read about Project Z</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="glance-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="glance-title">Project Z at a glance</h2>
            <p>A consumer wedge into India&apos;s fast-growing voice AI market. You ask. It calls. You get the result.</p>
          </div>
          <ul className="venture-grid">
            {GLANCE.map((g) => (
              <li key={g.name} className="venture-card">
                <h3>{g.name}</h3>
                <p>{g.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="market-title">
        <div className="wrap project-z-teaser">
          <div>
            <h2 id="market-title">India runs on phone calls, and people hate making them</h2>
            <p className="teaser-lede">
              Most local businesses have no app. Customer care is built to wait. A Hindi speaker in Bengaluru calls a Kannada-speaking clinic; a Tamil grandparent calls a Hindi helpline. Most of these calls are simple: they just take time. AI can now hold that conversation in Indian languages, at a cost low enough for everyday use.
            </p>
          </div>
          <div>
            <dl className="stats">
              {METRICS.map((m) => <div key={m.dt}><dt>{m.dt}</dt><dd>{m.dd}</dd></div>)}
            </dl>
            <p className="code-note">Sources: IBEF/PIB data via GrabOn; Caller Digital. Market layers and year-3 revenue are Project Z estimates, to be validated in the POC.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="why-title">Why now: four things changed in the last 18 months</h2>
          </div>
          <ul className="venture-grid venture-grid-2">
            {WHY_NOW.map((w) => (
              <li key={w.name} className="venture-card">
                <h3>{w.name}</h3>
                <p>{w.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="moat-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="moat-title">What gets harder to copy every month</h2>
            <p>Crowded at the edges, open in the middle: outbound task completion for people, in Indian languages, for app-less local businesses, families and small business.</p>
          </div>
          <ul className="venture-grid venture-grid-2">
            {MOAT.map((m) => (
              <li key={m.name} className="venture-card">
                <h3>{m.name}</h3>
                <p>{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="gates-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="gates-title">Prove it in Bengaluru, then scale</h2>
              <p>Each stage has a gate it must pass before the next one begins.</p>
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

      <section className="section" aria-labelledby="ask-title">
        <div className="wrap addons-wrap">
          <div>
            <h2 id="ask-title">The ask: ₹4.5 Cr pre-seed</h2>
            <p className="page-lede">Released in three gated tranches plus a reserve. At most ₹0.9 Cr is at risk before a working product and paying users. 18-month goals: 10,000 paying users, 100 business accounts, 88% task success and ₹45 lakh MRR.</p>
          </div>
          <table className="services addons-table">
            <thead>
              <tr><th scope="col">Tranche</th><th scope="col">Gate to release</th><th scope="col">Amount</th></tr>
            </thead>
            <tbody>
              {TRANCHES.map((t) => (
                <tr key={t.name}>
                  <th scope="row">{t.name}<br /><span className="price-note">{t.when}</span></th>
                  <td>{t.gate}</td>
                  <td>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <QaList id="investor-faq" title="Investor questions" items={INVESTOR_FAQS} />

      <section className="section" id="invest" aria-labelledby="invest-title">
        <div className="wrap contact">
          <div className="contact-text">
            <h2 id="invest-title">Talk to the founder</h2>
            <p>Angel investors, venture funds, family offices and strategic partners: send a line about yourself and we&apos;ll share the full investor brief.</p>
            <p className="contact-mail"><a href={DECK}>hello@vexoro.dev</a></p>
          </div>
          <div className="founder">
            <span className="venture-status">{FOUNDER.role}</span>
            <h3>{FOUNDER.name}</h3>
            <p>Founder and sole owner of the vexoro group. Built Velocity Aviation to 3,000+ sales and three ventures solo, end to end. Owns strategy, finance, product and fundraising at Project Z.</p>
            <a className="btn" href={DECK}>Request the investor brief</a>
          </div>
        </div>
      </section>
    </main>
  );
}
