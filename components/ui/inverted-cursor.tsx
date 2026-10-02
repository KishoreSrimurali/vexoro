"use client";

import React, { useEffect, useRef } from "react";

interface CursorProps {
  size?: number;
}

/**
 * Circular cursor that inverts the colours beneath it (mix-blend-difference) and eases after the pointer.
 * Position lives in refs, so moving the mouse never re-renders React; one rAF loop does the work.
 */
export const Cursor: React.FC<CursorProps> = ({ size = 60 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const target = { x: -size, y: -size };
    const pos = { x: -size, y: -size }; // start off-screen
    let frame = 0;

    const animate = () => {
      pos.x += (target.x - size / 2 - pos.x) * 0.2;
      pos.y += (target.y - size / 2 - pos.y) * 0.2;
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      frame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      el.style.opacity = "1";
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const handleMouseEnter = () => (el.style.opacity = "1");
    const handleMouseLeave = () => (el.style.opacity = "0");

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.classList.add("cursor-none-all"); // hide native cursor (incl. links/buttons)
    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.classList.remove("cursor-none-all");
      cancelAnimationFrame(frame);
    };
  }, [size]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[60] rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-300"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
};

export default Cursor;
