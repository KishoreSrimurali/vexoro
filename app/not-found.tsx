import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | vexoro",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="notfound">
        <div className="wrap">
          <h1>
            404<span className="sq" aria-hidden="true" />
          </h1>
          <p>There&apos;s no page at this address. It may have moved, or the link may have a typo.</p>
          <a className="btn" href="/">
            Go to the home page
          </a>
        </div>
      </section>
    </main>
  );
}
