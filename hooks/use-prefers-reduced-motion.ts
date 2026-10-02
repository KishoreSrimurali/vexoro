"use client";

import { useEffect, useState } from "react";

/**
 * True while `query` matches. Starts false on the server and the first client render,
 * then updates after mount, so server HTML and hydration always match.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** True when the visitor asks for reduced motion. */
export const usePrefersReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

/** True on touch-first devices (phones, tablets). */
export const useIsTouch = () => useMediaQuery("(hover: none)");
