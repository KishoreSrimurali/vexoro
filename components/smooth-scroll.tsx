"use client";

import { ReactLenis } from "lenis/react";
import { useIsTouch, usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ReactNode } from "react";

/** Site-wide smooth scrolling. Skipped on touch screens (native scroll is smoother) and for reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();
  const touch = useIsTouch();
  if (reduceMotion || touch) return <>{children}</>;
  return (
    <ReactLenis root options={{ anchors: { offset: -80 } }}>
      {children}
    </ReactLenis>
  );
}
