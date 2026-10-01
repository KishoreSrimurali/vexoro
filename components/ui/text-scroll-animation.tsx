"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Code2, Gauge, PenTool, Search, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// Characters settle into place while scroll progress moves through this range.
const SETTLE: [number, number] = [0.15, 0.6];

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

type IconProps = {
  icon: LucideIcon;
  label: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

/** A letter that flies in from the side and tilts flat as you scroll. */
const CharacterV1 = ({ char, index, centerIndex, scrollYProgress }: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, SETTLE, [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, SETTLE, [distanceFromCenter * 50, 0]);

  return (
    <motion.span className={cn("inline-block", isSpace && "w-[0.3em]")} style={{ x, rotateX }}>
      {char}
    </motion.span>
  );
};

/** An icon tile that slides in, rises and grows to full size. */
const CharacterV2 = ({ icon: Icon, label, index, centerIndex, scrollYProgress }: IconProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, SETTLE, [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, SETTLE, [0.75, 1]);
  const y = useTransform(scrollYProgress, SETTLE, [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.div className="scroll-tile" style={{ x, scale, y, transformOrigin: "center" }}>
      <Icon aria-hidden="true" strokeWidth={1.75} />
      <span>{label}</span>
    </motion.div>
  );
};

/** An icon tile that fans out, rotated, and swings back into line. */
const CharacterV3 = ({ icon: Icon, label, index, centerIndex, scrollYProgress }: IconProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, SETTLE, [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, SETTLE, [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, SETTLE, [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, SETTLE, [0.75, 1]);

  return (
    <motion.div className="scroll-tile" style={{ x, rotate, y, scale, transformOrigin: "center" }}>
      <Icon aria-hidden="true" strokeWidth={1.75} />
      <span>{label}</span>
    </motion.div>
  );
};

/** A tall section whose content stays pinned while its scroll animation plays. */
const PinnedSection = ({
  sectionRef,
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement> & { sectionRef: React.RefObject<HTMLElement | null> }) => (
  <section ref={sectionRef} className={cn("relative md:h-[170vh]", className)} {...rest}>
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden px-4 py-20 md:sticky md:top-0 md:h-svh md:py-0">
      {children}
    </div>
  </section>
);

type TextScrollAnimationProps = {
  /** Letters that fly in and settle into one line. */
  text?: string;
  /** Line shown in brackets above the icons. */
  caption?: string;
  /** Icons that swing into a row. */
  items?: { icon: LucideIcon; label: string }[];
};

const DEFAULT_ITEMS = [
  { icon: PenTool, label: "Design" },
  { icon: Code2, label: "Code" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Search, label: "SEO" },
  { icon: ShoppingBag, label: "Stores" },
  { icon: Gauge, label: "Speed" },
];

const Skiper31 = ({
  text = "made for brands",
  caption = "everything a brand needs online",
  items = DEFAULT_ITEMS,
}: TextScrollAnimationProps) => {
  const textRef = useRef<HTMLElement | null>(null);
  const iconsRef = useRef<HTMLElement | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "end end"] });
  const { scrollYProgress: iconsProgress } = useScroll({ target: iconsRef, offset: ["start end", "end end"] });

  const centerIndex = Math.floor(text.length / 2);
  // Each word with the index of its first letter in the full text
  const words = text.split(" ").reduce<{ word: string; start: number }[]>((acc, word) => {
    const prev = acc[acc.length - 1];
    acc.push({ word, start: prev ? prev.start + prev.word.length + 1 : 0 });
    return acc;
  }, []);
  const iconCenterIndex = Math.floor(items.length / 2);

  if (reduceMotion) {
    return (
      <section className="scroll-static" aria-label={text}>
        <p className="scroll-text">{text}</p>
        <Caption text={caption} />
        <div className="scroll-icons">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="scroll-tile">
              <Icon aria-hidden="true" strokeWidth={1.75} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div>
      <PinnedSection sectionRef={textRef} aria-label={text}>
        <p className="scroll-text" style={{ perspective: "500px" }} aria-hidden="true">
          {words.map(({ word, start }, w) => (
            <React.Fragment key={start}>
              {w > 0 && (
                <CharacterV1 char=" " index={start - 1} centerIndex={centerIndex} scrollYProgress={scrollYProgress} />
              )}
              {/* Keep each word on one line; letters only wrap between words */}
              <span className="inline-block whitespace-nowrap">
                {word.split("").map((char, i) => (
                  <CharacterV1
                    key={i}
                    char={char}
                    index={start + i}
                    centerIndex={centerIndex}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </span>
            </React.Fragment>
          ))}
        </p>
      </PinnedSection>

      <PinnedSection sectionRef={iconsRef}>
        <Caption text={caption} />
        <div className="scroll-icons" style={{ perspective: "500px" }}>
          {items.map((item, index) => (
            <CharacterV3
              key={item.label}
              icon={item.icon}
              label={item.label}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={iconsProgress}
            />
          ))}
        </div>
      </PinnedSection>
    </div>
  );
};

const Caption = ({ text }: { text: string }) => (
  <p className="flex items-center justify-center gap-3 text-center text-lg font-medium tracking-tight text-[var(--muted)] sm:text-2xl">
    <Bracket className="h-10 shrink-0 sm:h-12" />
    <span>{text}</span>
    <Bracket className="h-10 shrink-0 scale-x-[-1] sm:h-12" />
  </p>
);

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };
export type { TextScrollAnimationProps };
