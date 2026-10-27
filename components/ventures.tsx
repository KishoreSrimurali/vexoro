// Venture sections: rendered on the home page and on /ventures. Pass h1 when a section is the main content of its page.
import Link from "next/link";
import { APPROACH, TEAM, VENTURES } from "@/lib/ventures";

export function VenturesSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
    <section className="section" id="ventures" aria-labelledby="ventures-title">
      <div className="wrap">
        <div className="section-head">
          <H id="ventures-title">Our ventures</H>
          <p>vexoro is a group that builds focused solutions to real problems. Each venture runs as its own business, backed by the vexoro team.</p>
        </div>
        <ul className="venture-grid">
          {VENTURES.map((v) => (
            <li key={v.id} className={v.id === "roadlens" ? "venture-card featured" : "venture-card"}>
              <span className="venture-status">{v.status}</span>
              <h3>{v.name}</h3>
              <p>{v.summary}</p>
              {v.href && (
                <Link className="text-link" href={v.href}>
                  {v.cta}
                  <span className="sr-only"> ({v.name})</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <div className="panel">
          <div className="section-head">
            <h2 id="approach-title">How we build a venture</h2>
            <p>Every venture follows the same path. Money and people go in stage by stage, only after the last stage proves itself.</p>
          </div>
          <ol className="steps">
            {APPROACH.map((s, i) => (
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
  );
}

export function RoadLensTeaser() {
  return (
    <section className="section" id="roadlens" aria-labelledby="roadlens-title">
      <div className="wrap roadlens-teaser">
        <div>
          <span className="venture-status">A vexoro venture · Launching in Bengaluru</span>
          <h2 id="roadlens-title">RoadLens<span className="sq" aria-hidden="true" /></h2>
          <p className="teaser-lede">Every ride maps India. RoadLens turns everyday cab rides into road-safety data: we put dashcams in ride-hailing cars and pay drivers for the footage they record. That footage becomes privacy-safe data on real Indian roads.</p>
          <div className="hero-links">
            <Link className="btn" href="/ventures/roadlens">Meet RoadLens</Link>
            <Link className="text-link" href="/investors">For investors</Link>
            <Link className="text-link" href="/ventures/roadlens/data">For data buyers</Link>
          </div>
        </div>
        <dl className="stats">
          <div><dt>people died on Indian roads in 2023</dt><dd>1.72 lakh</dd></div>
          <div><dt>driven by a typical ride-hailing driver every day</dt><dd>150 km</dd></div>
          <div><dt>to turn a car into a data collector</dt><dd>₹2,500</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function DigitalSection() {
  return (
    <section className="section" id="digital" aria-labelledby="digital-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="digital-title">vexoro Digital</h2>
          <p>Our live venture. The same team that builds our products builds AI, brands and websites for other companies, in Oman and worldwide.</p>
        </div>
        <ul className="venture-grid">
          <li className="venture-card">
            <span className="venture-status">AI solutions</span>
            <h3>AI that works</h3>
            <p>AI assistants for your website and WhatsApp, workflow automation, document processing and custom AI features.</p>
            <Link className="text-link" href="/ai">Explore AI solutions</Link>
          </li>
          <li className="venture-card">
            <span className="venture-status">Brand &amp; web</span>
            <h3>Brand and website</h3>
            <p>Brand websites, landing pages, online stores and web apps, with search setup built in.</p>
            <Link className="text-link" href="/services">See brand &amp; web</Link>
          </li>
          <li className="venture-card">
            <span className="venture-status">Pricing</span>
            <h3>From 15 OMR</h3>
            <p>Fixed website packages and add-ons. AI projects get a fixed quote after a free consultation.</p>
            <Link className="text-link" href="/pricing">See packages and prices</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="team-title">Team</h2>
          <p>A small team that builds each venture end to end.</p>
        </div>
        <ul className="venture-grid">
          {TEAM.map((m) => (
            <li key={m.name} className="venture-card">
              <span className="venture-status">{m.role}</span>
              <h3>{m.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
