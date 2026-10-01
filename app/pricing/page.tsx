import type { Metadata } from "next";
import Link from "next/link";
import { ADD_ONS, PACKAGES } from "@/lib/pricing";
import { pricingStructuredData } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/site";

const TITLE = "Website Design Packages & Prices in Oman (OMR)";
const DESCRIPTION =
  "Website packages in Oman from 15 OMR: Starter, Business 30, Professional 50 and Elite 75+ OMR. Responsive design, WhatsApp, Google Maps and SEO included.";

export const metadata: Metadata = pageMetadata({ path: "/pricing", title: TITLE, description: DESCRIPTION });

export default function PricingPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData(`${TITLE} | vexoro`, DESCRIPTION)) }}
      />

      <section className="section page-intro" aria-labelledby="pricing-title">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Pricing</li>
            </ol>
          </nav>
          <h1 id="pricing-title" className="page-title">
            Website design packages and prices in Oman<span className="sq" aria-hidden="true" />
          </h1>
          <p className="page-lede">
            Simple pricing, real value. Every package is a custom-designed website that works on phones and desktops.
            All prices are in Omani rial (OMR).
          </p>
        </div>
      </section>

      <section className="section pricing-section" aria-labelledby="packages-title">
        <div className="wrap">
          <h2 id="packages-title" className="sr-only">Packages</h2>
          <div className="pricing-grid">
            {PACKAGES.map((p) => (
              <article key={p.id} id={p.id} className={p.popular ? "price-card popular" : "price-card"} aria-labelledby={`${p.id}-name`}>
                <header>
                  <h3 id={`${p.id}-name`}>{p.name}</h3>
                  {p.popular && <span className="price-badge">Popular</span>}
                </header>
                <p className="price-for">{p.for}</p>
                <p className="price-amount">
                  {p.price}
                  {p.plus && "+"}
                  <span> OMR</span>
                </p>
                <ul className="price-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {p.note && <p className="price-note">{p.note}</p>}
                <a className={p.popular ? "btn btn-light" : "btn"} href="/#contact">
                  {p.plus ? "Contact us" : "Get started"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="add-ons" aria-labelledby="add-ons-title">
        <div className="wrap addons-wrap">
          <div>
            <h2 id="add-ons-title">Additional services</h2>
            <p className="page-lede">Add these to any package, or order them for a website you already have.</p>
          </div>
          <table className="services addons-table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {ADD_ONS.map((a) => (
                <tr key={a.name}>
                  <th scope="row">{a.name}</th>
                  <td>{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="consult-title">
        <div className="wrap">
          <div className="panel consult">
            <h2 id="consult-title">Not sure which package fits?</h2>
            <p>Book a free consultation. Tell us about your business and we&apos;ll recommend the right package.</p>
            <div className="hero-links">
              <a className="btn" href="/#contact">Get a free consultation</a>
              <a className="text-link" href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
