import { Mark } from "@/components/brand";
import { ContactForm } from "@/components/contact-form";
import { Skiper31 } from "@/components/ui/text-scroll-animation";
import { structuredData } from "@/lib/structured-data";

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

// Kept in sync with the FAQPage entry in lib/structured-data.ts
const FAQ = structuredData["@graph"][4].mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }));

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

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
              <a className="btn" href="#contact">Tell us about your project</a>
              <a className="text-link" href="#services">Services and timelines</a>
            </div>
          </div>
        </div>
        <Mark className="hero-mark" />
      </section>

      <Skiper31 />

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="services-title">Services</h2>
            <p>Every project gets a fixed quote before work starts. Timelines assume content and feedback arrive on schedule.</p>
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

      <section className="section" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="process-title">How a brand website comes together</h2>
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

      <section className="section" id="seo" aria-labelledby="seo-title">
        <div className="wrap seo">
          <div className="seo-text">
            <h2 id="seo-title">Search setup comes with every site</h2>
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

      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="wrap faq-wrap">
          <h2 id="faq-title">Questions</h2>
          <div className="faq">
            {FAQ.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact">
          <div className="contact-text">
            <h2 id="contact-title">Start a project</h2>
            <p>Tell us what you&apos;re building and when you need it. We reply within one business day.</p>
            <p className="contact-mail">
              <a href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
