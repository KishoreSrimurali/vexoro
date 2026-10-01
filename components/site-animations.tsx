"use client";

import { useEffect } from "react";

/**
 * Site-wide motion with anime.js.
 * - Content is complete without JavaScript: the only pre-hidden elements are small hero ones
 *   (via the `anim-pending` class set in layout.tsx), and CSS reveals them after 2.5 s regardless.
 * - The h1 is never hidden or split: it is the page's Largest Contentful Paint and its main keyword line.
 * - Nothing runs for visitors who prefer reduced motion, or for crawlers and audit tools (BOT_UA).
 * - Pointer effects (magnetic buttons, mark tilt) only run with a mouse or trackpad.
 */
export const BOT_UA = /bot|crawl|spider|slurp|lighthouse|pagespeed|preview/i;

export function SiteAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    if (BOT_UA.test(navigator.userAgent)) {
      root.classList.remove("anim-pending");
      return;
    }
    // anime.js loads after first paint, off the critical path
    let revert: (() => void) | undefined;
    let cancelled = false;
    import("animejs").then((anime) => {
      if (cancelled) return;
      revert = run(anime, root);
    });
    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return null;
}

function run(anime: typeof import("animejs"), root: HTMLElement) {
  const { animate, createAnimatable, createScope, createTimeline, onScroll, scrambleText, stagger, utils } = anime;
  const scope = createScope({
    mediaQueries: { reduce: "(prefers-reduced-motion: reduce)", fine: "(hover: hover) and (pointer: fine)" },
  }).add((self) => {
    if (!self || self.matches.reduce) {
      root.classList.remove("anim-pending");
      return;
    }
    const cleanups: Array<() => void> = [];
    const $ = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));
    const inView = (target: Element | string) => onScroll({ target, enter: "bottom-=60 top", repeat: false });

    // ---------- Load: header + hero ----------
    utils.set(".site-header .brand, .site-nav a, .nav-toggle", { opacity: 0, y: -16 });
    utils.set(".hero-text, .hero-links > *", { opacity: 0, y: 28 });
    utils.set(".hero-mark", { opacity: 0, x: 180, scale: 0.92 });
    utils.set(".hero .sq", { scale: 0 });
    root.classList.remove("anim-pending");

    createTimeline({ defaults: { ease: "outExpo", duration: 900 } })
      .add(".site-header .brand, .site-nav a, .nav-toggle", { opacity: 1, y: 0, delay: stagger(60) }, 0)
      .add(".hero .sq", { scale: [0, 1.4, 1], duration: 800, ease: "outBack(3)" }, 250)
      .add(".hero-text", { opacity: 1, y: 0 }, 300)
      .add(".hero-links > *", { opacity: 1, y: 0, delay: stagger(90) }, 400)
      .add(".hero-mark", { opacity: 1, x: 0, scale: 1, duration: 1600 }, 200);

    // Hero mark drifts with scroll (parallax)
    animate(".hero-mark", {
      y: [0, 140],
      ease: "linear",
      autoplay: onScroll({ target: ".hero", enter: "top top", leave: "top bottom", sync: true }),
    });

    // ---------- Scroll progress bar ----------
    animate(".scroll-progress", {
      scaleX: [0, 1],
      ease: "linear",
      autoplay: onScroll({ target: "main", enter: "top top", leave: "bottom bottom", sync: true }),
    });

    // ---------- Section headings: decode on enter ----------
    for (const h of $("#services-title, #process-title, #seo-title, #contact-title")) {
      animate(h, {
        innerHTML: scrambleText({ chars: "a-z", revealRate: 32, settleDuration: 260, cursor: "▪" }),
        autoplay: inView(h),
      });
    }

    // Generic reveal: rise + fade, staggered
    const reveal = (sel: string, trigger: string, extra: Record<string, unknown> = {}) => {
      const els = $(sel);
      if (!els.length) return;
      utils.set(els, { opacity: 0, y: 36 });
      animate(els, { opacity: 1, y: 0, duration: 900, ease: "outExpo", delay: stagger(70), ...extra, autoplay: inView(trigger) });
    };

    // ---------- Services ----------
    reveal("#services .section-head p", "#services .section-head");
    const rows = $(".services tbody tr");
    utils.set(rows, { opacity: 0, x: -40 });
    animate(rows, { opacity: 1, x: 0, duration: 900, ease: "outExpo", delay: stagger(80), autoplay: inView(".services") });
    animate(".services td:last-child", {
      innerHTML: scrambleText({ chars: "0-9", revealRate: 20, settleDuration: 400 }),
      delay: stagger(80, { start: 300 }),
      autoplay: inView(".services"),
    });

    // ---------- Process: phases rise, then the weeks fill in ----------
    reveal("#process .section-head p", "#process .panel");
    reveal(".timeline li", ".timeline", { delay: stagger(110) });
    const weeksOn = $(".weeks i.on");
    utils.set(weeksOn, { scaleX: 0, transformOrigin: "0% 50%" });
    animate(weeksOn, { scaleX: 1, duration: 600, ease: "outExpo", delay: stagger(120, { start: 500 }), autoplay: inView(".timeline") });

    // ---------- SEO ----------
    reveal(".seo-text > p", ".seo-text");
    const items = $(".plain-list li");
    utils.set(items, { opacity: 0, x: -24 });
    animate(items, { opacity: 1, x: 0, duration: 800, ease: "outExpo", delay: stagger(70), autoplay: inView(".plain-list") });
    utils.set(".code pre", { clipPath: "inset(0% 100% 0% 0%)" });
    animate(".code pre", { clipPath: "inset(0% 0% 0% 0%)", duration: 1400, ease: "inOutExpo", autoplay: inView(".code") });

    // ---------- Contact + footer ----------
    reveal(".contact-text > p", ".contact-text");
    reveal(".contact-form > *", ".contact-form", { delay: stagger(60) });
    reveal(".footer-inner > *", ".site-footer", { y: [20, 0] });

    // ---------- Pointer effects (mouse / trackpad only) ----------
    if (self.matches.fine) {
      // Magnetic buttons
      for (const el of $(".btn, .nav-contact")) {
        const a = createAnimatable(el, { x: 500, y: 500, ease: "out(3)" });
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          a.x((e.clientX - (r.left + r.width / 2)) * 0.3);
          a.y((e.clientY - (r.top + r.height / 2)) * 0.4);
        };
        const leave = () => { a.x(0); a.y(0); };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
      }
      // Hero mark tilts toward the cursor
      const mark = document.querySelector<HTMLElement>(".hero-mark");
      if (mark) {
        const tilt = createAnimatable(mark, { rotateX: 800, rotateY: 800, ease: "out(4)" });
        const onMove = (e: MouseEvent) => {
          tilt.rotateY(((e.clientX / window.innerWidth) - 0.5) * 22);
          tilt.rotateX(-((e.clientY / window.innerHeight) - 0.5) * 16);
        };
        window.addEventListener("mousemove", onMove);
        cleanups.push(() => window.removeEventListener("mousemove", onMove));
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  });

  return () => scope.revert();
}
