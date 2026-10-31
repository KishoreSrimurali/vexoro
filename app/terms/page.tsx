import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { subpageStructuredData } from "@/lib/structured-data";
import { TERMS, TERMS_INTRO, TERMS_META } from "@/lib/terms";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms that apply to vexoro's websites and to every vexoro venture, including vexoro Digital and RoadLens. Governed by the laws of the Sultanate of Oman.";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["vexoro terms of service", "vexoro terms", "RoadLens terms", "vexoro Digital terms"],
});

export default function Page() {
  return (
    <main id="main" className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subpageStructuredData("/terms", "Terms of Service", `${TITLE} | vexoro`, DESCRIPTION)) }}
      />
      <section className="section legal" aria-labelledby="terms-title">
        <div className="wrap">
          <header className="legal-head">
            <h1 id="terms-title">Terms of Service</h1>
            <dl className="legal-meta">
              <div><dt>Version</dt><dd>{TERMS_META.version}</dd></div>
              <div><dt>Effective</dt><dd>{TERMS_META.effective}</dd></div>
              <div><dt>Last updated</dt><dd>{TERMS_META.updated}</dd></div>
              <div><dt>Governing law</dt><dd>{TERMS_META.law}</dd></div>
            </dl>
            <p className="legal-intro">{TERMS_INTRO}</p>
          </header>

          <nav className="legal-toc" aria-label="Contents">
            <h2>Contents</h2>
            <ol>
              {TERMS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span> {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-body">
            {TERMS.map((s, i) => {
              const n = i + 1;
              return (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                  <h2 id={`${s.id}-title`}>
                    <span>{String(n).padStart(2, "0")}</span> {s.title}
                  </h2>
                  {s.intro && <p>{s.intro}</p>}
                  {s.clauses && s.clauses.length === 1 ? (
                    <p>{s.clauses[0]}</p>
                  ) : (
                    s.clauses && (
                      <ol>
                        {s.clauses.map((c, j) => (
                          <li key={j}>
                            <span className="legal-num">{n}.{j + 1}</span>
                            <p>{c}</p>
                          </li>
                        ))}
                      </ol>
                    )
                  )}
                  {s.id === "contact" && (
                    <p className="legal-contact">
                      <a className="text-link" href={`mailto:${TERMS_META.contact}`}>{TERMS_META.contact}</a> · vexoro.dev
                    </p>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
