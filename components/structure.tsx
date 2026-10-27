// The public business structure as an org chart: the group, its leadership and each venture.
// Nested lists keep it readable without the visual tree (screen readers, search engines).
import Link from "next/link";
import { GROUP, ROADLENS_FLOW, ROADLENS_RETURN, VENTURE_DETAILS } from "@/lib/structure";
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

/** The detailed layers under the org chart: the group, each venture's units, and how value moves through RoadLens. */
export function StructureDetail() {
  return (
    <>
      <section className="section" id="group" aria-labelledby="group-title">
        <div className="wrap">
          <div className="panel">
            <div className="section-head">
              <h2 id="group-title">Layer 1: the group</h2>
              <p>{GROUP.role}</p>
            </div>
            <div className="layer-grid">
              <div>
                <h3 className="layer-label">Based in</h3>
                <ul className="chips">{GROUP.base.map((b) => <li key={b}>{b}</li>)}</ul>
                <h3 className="layer-label">Leadership</h3>
                <ul className="org-roles">
                  {TEAM.map((m) => (
                    <li key={m.name}><strong>{m.name}</strong><span>{m.role}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="layer-label">Shared with every venture</h3>
                <ul className="unit-grid unit-grid-3">
                  {GROUP.shared.map((f) => (
                    <li key={f.name} className="unit">
                      <h4>{f.name}</h4>
                      <p>{f.detail}</p>
                    </li>
                  ))}
                </ul>
                <h3 className="layer-label">How the group works</h3>
                <ul className="plain-list">{GROUP.principles.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {VENTURE_DETAILS.map((v, i) => (
        <section key={v.id} className="section venture-detail" id={`structure-${v.id}`} aria-labelledby={`vd-${v.id}`}>
          <div className="wrap">
            <div className="vd-head">
              <span className="venture-status">Layer 2 · Venture {i + 1} · {v.status}</span>
              <h2 id={`vd-${v.id}`}>{v.name}<span className="sq" aria-hidden="true" /></h2>
              <p>{v.role}</p>
              <ul className="chips" aria-label="Markets">{v.market.map((m) => <li key={m}>{m}</li>)}</ul>
            </div>

            <h3 className="layer-label">Units</h3>
            <ul className={`unit-grid unit-grid-${Math.min(v.units.length, 4)}`}>
              {v.units.map((u) => (
                <li key={u.name} className="unit">
                  <h4>{u.name}</h4>
                  <ul>{u.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </li>
              ))}
            </ul>

            <div className="vd-facts">
              <div>
                <h3 className="layer-label">Customers</h3>
                <ul className="plain-list">{v.customers.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <div>
                <h3 className="layer-label">Revenue streams</h3>
                <ul className="plain-list">{v.revenue.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
              {v.partners && (
                <div>
                  <h3 className="layer-label">Partners and supply</h3>
                  <ul className="plain-list">{v.partners.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              )}
            </div>

            {v.id === "roadlens" && (
              <>
                <h3 className="layer-label">How value flows</h3>
                <ol className="flow">
                  {ROADLENS_FLOW.map((f) => (
                    <li key={f.name}><strong>{f.name}</strong><span>{f.detail}</span></li>
                  ))}
                </ol>
                <p className="flow-return">{ROADLENS_RETURN}</p>
              </>
            )}

            {v.roles && (
              <>
                <h3 className="layer-label">Planned roles</h3>
                <table className="services">
                  <thead><tr><th scope="col">Role</th><th scope="col">Responsible for</th><th scope="col">From stage</th></tr></thead>
                  <tbody>
                    {v.roles.map((r) => (
                      <tr key={r.name}><th scope="row">{r.name}</th><td>{r.detail}</td><td>{r.stage}</td></tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {v.href && (
              <p className="vd-link"><Link className="text-link" href={v.href}>{v.id === "next" ? "Bring us a problem" : `More about ${v.name}`}</Link></p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
