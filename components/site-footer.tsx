import { Wordmark } from "@/components/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Wordmark className="footer-wordmark" />
        <nav aria-label="Footer">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#seo">SEO</a>
          <a href="/#faq">FAQ</a>
          <a href="/pricing">Pricing</a>
          <a href="mailto:hello@vexoro.dev">hello@vexoro.dev</a>
        </nav>
        <p className="footer-legal">© {new Date().getFullYear()} vexoro</p>
      </div>
    </footer>
  );
}
