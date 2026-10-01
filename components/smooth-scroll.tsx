"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Site-wide smooth scrolling. Skipped for visitors who prefer reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;
  return (
    <ReactLenis root options={{ anchors: { offset: -80 } }}>
      {children}
    </ReactLenis>
  );
}
