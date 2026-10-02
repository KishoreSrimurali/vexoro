"use client";

import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Cursor } from "@/components/ui/inverted-cursor";

/** Inverted circle cursor. Desktop only (mouse or trackpad); skipped for reduced motion. */
export function SplashCursorEffect() {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduceMotion = usePrefersReducedMotion();
  if (!finePointer || reduceMotion) return null;
  return <Cursor size={44} />;
}
