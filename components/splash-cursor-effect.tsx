"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Cursor } from "@/components/ui/inverted-cursor";

// Loaded only when shown (desktop), so phones never download the WebGL code
const SplashCursor = dynamic(() => import("@/components/ui/SplashCursor"), { ssr: false });

/**
 * Fluid cursor trail in the brand violet, plus the inverted circle cursor.
 * Desktop only (mouse or trackpad): on touch screens it would paint on every scroll swipe.
 * Skipped for visitors who prefer reduced motion.
 */
export function SplashCursorEffect() {
  const reduceMotion = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!finePointer || reduceMotion) return null;

  return (
    <>
      <Cursor size={44} />
      <SplashCursor
      RAINBOW_MODE={false}
      COLOR="#6B52FF"
      DENSITY_DISSIPATION={4}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={6000}
      CURL={3}
      />
    </>
  );
}
