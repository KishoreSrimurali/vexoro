"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand";

const LINKS = [
  { href: "/ventures", label: "Ventures" },
  { href: "/ventures/roadlens", label: "RoadLens" },
  { href: "/investors", label: "Investors" },
  { href: "/structure", label: "Structure" },
  { href: "/ai", label: "AI Solutions" },
  { href: "/services", label: "Brand & Web" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="vexoro home">
          <Wordmark className="brand-wordmark" />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className={open ? "site-nav open" : "site-nav"} id="site-nav" aria-label="Primary" onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="nav-contact" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
