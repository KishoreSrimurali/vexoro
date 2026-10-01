"use client";

import { useEffect, useState } from "react";

/**
 * True when the visitor asks for reduced motion.
 * Starts false on the server and the first client render, then updates after mount,
 * so server HTML and hydration always match.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
