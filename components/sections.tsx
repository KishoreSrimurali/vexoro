// Home page sections, also rendered on their own routes (/services, /process, /seo, /faq, /contact).
// Pass h1 when a section is the main content of its page.
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import FaqSection, { type FaqSectionData } from "@/components/ui/habit-faq-scroller";
import { FAQS } from "@/lib/faq";

const SERVICES = [
  {
    name: "Brand website",
    detail: "A multi-page marketing site designed around your logo, typefaces and colours, with a content editor for your team.",
    time: "3–6 weeks",
  },
  {
    name: "Landing page",
    detail: "One page for a launch, product or campaign, connected to your analytics, ads and email list.",
    time: "1–2 weeks",
  },
  {
    name: "Online store",
    detail: "A Shopify or custom storefront with product pages, checkout, product data for Google and payment setup.",
    time: "6–10 weeks",
  },
  {
    name: "Web app",
    detail: "Customer portals, dashboards and internal tools with logins and the integrations you need.",
    time: "Quoted per project",
  },
  {
    name: "SEO audit",
    detail: "A technical review of your current site and a prioritised list of fixes. We can make the fixes too.",
    time: "1 week",
  },
  {
    name: "Care plan",
    detail: "Hosting, updates, uptime monitoring and a few hours each month for changes.",
    time: "Monthly",
  },
];

const PHASES = [
  {
    when: "Week 1",
    weeks: [1],
    name: "Discovery",
    detail: "We learn about the brand, your customers and your competitors. Together we agree on the pages, and the search terms each page should rank for.",
  },
  {
    when: "Weeks 2–3",
    weeks: [2, 3],
    name: "Design",
    detail: "We design each page using your logo, type and colours. You review the designs in your browser, and we revise them with you.",
  },
  {
    when: "Weeks 3–5",
    weeks: [3, 4, 5],
    name: "Build",
    detail: "We code the site, connect the content editor and test it on phones, tablets and desktops.",
  },
  {
    when: "Week 6",
    weeks: [6],
    name: "Launch",
    detail: "We point your domain, redirect old URLs, set up analytics and Search Console, and walk your team through editing.",
  },
];

const SEO_ITEMS = [
  "Page titles and descriptions written for the search terms you care about",
  "Preview images for links shared on social media and in chat apps",
  "Schema.org data for your business, products, articles and FAQs",
  "A sitemap, robots.txt and redirects from your old URLs",
  "Compressed images and fast-loading pages",
  "Google Search Console set up and verified at launch",
];

// Same questions as the FAQPage data in lib/structured-data.ts (both read lib/faq.ts)
const faqData: FaqSectionData = {
  mainTitle: "Questions",
  mainSubtitle: (
    <>
      Can&apos;t find your answer? Email{" "}
      <a className="faq-mail" href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>.
    </>
  ),
  rows: [
    { id: "row1", speed: "70s", direction: "left", faqItems: FAQS.slice(0, 3) },
    { id: "row2", speed: "55s", direction: "right", faqItems: FAQS.slice(3, 5) },
    { id: "row3", speed: "80s", direction: "left", faqItems: FAQS.slice(5) },
  ],
};

export function ServicesSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
  <section className="section" id="services" aria-labelledby="services-title">
    <div className="wrap">
      <div className="section-head">
        <H id="services-title">Services</H>
        <p>Every project gets a fixed quote before work starts. Timelines assume content and feedback arrive on schedule. <Link className="text-link" href="/pricing">See packages and prices</Link>.</p>
      </div>
      <table className="services">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">What you get</th>
            <th scope="col">Typical time</th>
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.name}>
              <th scope="row">{s.name}</th>
              <td>{s.detail}</td>
              <td>{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
}

export function ProcessSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
  <section className="section" id="process" aria-labelledby="process-title">
    <div className="wrap">
      <div className="panel">
        <div className="section-head">
          <H id="process-title">How a brand website comes together</H>
          <p>A typical six-week schedule. Landing pages compress this into one or two weeks.</p>
        </div>
        <ol className="timeline">
          {PHASES.map((p) => (
            <li key={p.name}>
              <div className="weeks" aria-hidden="true">
                {[1, 2, 3, 4, 5, 6].map((w) => (
                  <i key={w} className={p.weeks.includes(w) ? "on" : undefined} />
                ))}
              </div>
              <span className="when">{p.when}</span>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
  );
}

export function SeoSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
  <section className="section" id="seo" aria-labelledby="seo-title">
    <div className="wrap seo">
      <div className="seo-text">
        <H id="seo-title">Search setup comes with every site</H>
        <p>
          Google needs the right signals to show your pages to people who are looking for you. We write them into every page as we build it.
        </p>
        <ul className="plain-list">
          {SEO_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <figure className="code">
        <figcaption>The head of a page we ship, shortened</figcaption>
        <pre>
          <code>
            <span className="t">&lt;title&gt;</span>Northfield Coffee | Roastery in Leeds<span className="t">&lt;/title&gt;</span>
            {"\n"}
            <span className="t">&lt;meta</span> <span className="a">name</span>=<span className="s">&quot;description&quot;</span>
            {"\n      "}
            <span className="a">content</span>=<span className="s">&quot;Small-batch coffee roasted in Leeds...&quot;</span>
            <span className="t">&gt;</span>
            {"\n"}
            <span className="t">&lt;link</span> <span className="a">rel</span>=<span className="s">&quot;canonical&quot;</span>{" "}
            <span className="a">href</span>=<span className="s">&quot;https://northfield.coffee/&quot;</span>
            <span className="t">&gt;</span>
            {"\n"}
            <span className="t">&lt;meta</span> <span className="a">property</span>=<span className="s">&quot;og:image&quot;</span>{" "}
            <span className="a">content</span>=<span className="s">&quot;/og.png&quot;</span>
            <span className="t">&gt;</span>
            {"\n"}
            <span className="t">&lt;script</span> <span className="a">type</span>=<span className="s">&quot;application/ld+json&quot;</span>
            <span className="t">&gt;</span>
            {`
{
  "@type": "CafeOrCoffeeShop",
  "name": "Northfield Coffee",
  "address": { "addressLocality": "Leeds" },
  "openingHours": "Mo-Sa 08:00-17:00"
}
`}
            <span className="t">&lt;/script&gt;</span>
          </code>
        </pre>
        <p className="code-note">Example business for illustration.</p>
      </figure>
    </div>
  </section>
  );
}

export function FaqPageSection({ h1 = false }: { h1?: boolean }) {
  return (
  <section className="section" id="faq" aria-labelledby="faq-title">
    <FaqSection data={faqData} titleId="faq-title" headingLevel={h1 ? "h1" : "h2"} />
  </section>
  );
}

export function ContactSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
  <section className="section" id="contact" aria-labelledby="contact-title">
    <div className="wrap contact">
      <div className="contact-text">
        <H id="contact-title">Start a project</H>
        <p>Tell us what you&apos;re building and when you need it. We reply within one business day.</p>
        <p className="contact-mail">
          <a href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
  );
}
