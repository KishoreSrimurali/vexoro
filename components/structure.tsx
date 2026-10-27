// The public business structure as an org chart: the group, its leadership and each venture.
// Nested lists keep it readable without the visual tree (screen readers, search engines).
import Link from "next/link";
import { TEAM, VENTURES } from "@/lib/ventures";

const UNITS: Record<string, string[]> = {
  digital: ["AI solutions", "Brand & web", "Pricing from 15 OMR"],
  roadlens: ["Driver network in Bengaluru", "Road data for insurers, mapping, cities and carmakers", "Privacy and data processing"],
  next: ["New problems, same approach", "Build lean, prove it, then scale"],
};

export function StructureSection({ h1 = false }: { h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
    <section className="section" id="structure" aria-labelledby="structure-title">
      <div className="wrap">
        <div className="section-head">
          <H id="structure-title">Business structure</H>
          <p>vexoro is the group. Each venture runs as its own business, backed by the vexoro team.</p>
        </div>

        <ul className="org" aria-label="vexoro business structure">
          <li className="org-root">
            <div className="org-node org-group">
              <span className="venture-status">The group</span>
              <h3>vexoro</h3>
              <p>Builds focused solutions to real problems.</p>
              <ul className="org-people">
                {TEAM.map((m) => (
                  <li key={m.name}>
                    <span>{m.role}</span> {m.name}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="org-children">
              {VENTURES.map((v) => (
                <li key={v.id}>
                  <div className={v.id === "next" ? "org-node org-soon" : "org-node"}>
                    <span className="venture-status">{v.status}</span>
                    <h3>{v.name}</h3>
                    <p>{v.summary}</p>
                    <ul className="org-units">
                      {(UNITS[v.id] ?? []).map((u) => <li key={u}>{u}</li>)}
                    </ul>
                    {v.href && (
                      <Link className="text-link" href={v.href}>
                        {v.cta}
                        <span className="sr-only"> ({v.name})</span>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
