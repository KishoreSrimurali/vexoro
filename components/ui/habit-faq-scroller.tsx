import React from "react";
import { cn } from "@/lib/utils";

export type FaqItem = { id: string; question: string; answer: string };

export type FaqRow = {
  id: string;
  /** Time for one full loop, as a CSS duration, e.g. "60s". */
  speed?: string;
  direction?: "left" | "right";
  faqItems: FaqItem[];
};

export type FaqSectionData = {
  mainTitle: string;
  mainSubtitle: React.ReactNode;
  rows: FaqRow[];
};

/**
 * FaqCard
 * Reusable card for a single FAQ item.
 */
export const FaqCard = ({ question, answer }: Omit<FaqItem, "id">) => {
  return (
    <div className="faq-card flex w-[min(24rem,80vw)] shrink-0 flex-col items-start gap-3 rounded-lg border border-border bg-card p-6 backdrop-blur-sm">
      <h3 className="faq-title text-lg font-semibold leading-snug text-foreground">{question}</h3>
      <p className="faq-answer text-base text-muted-foreground">{answer}</p>
    </div>
  );
};

type HorizontalScrollerProps = {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
  /** Copies of the children in each half of the loop, so short rows still fill wide screens. */
  repeat?: number;
};

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation.
 * Pauses on hover or keyboard focus; with reduced motion it becomes a swipeable row.
 */
export const HorizontalScroller = ({ children, speed = "40s", direction = "left", repeat = 2 }: HorizontalScrollerProps) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  // Inline style to set the CSS custom property for scroll duration.
  const style = { "--scroll-duration": speed } as React.CSSProperties;

  const half = Array.from({ length: repeat }, (_, i) => (
    <React.Fragment key={i}>{children}</React.Fragment>
  ));

  return (
    <div className="scroller-mask group relative w-full overflow-hidden motion-reduce:overflow-x-auto">
      <div
        className={cn(
          "flex w-max",
          animationClass,
          "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
          "motion-reduce:animate-none"
        )}
        style={style}
      >
        <div className="flex shrink-0 items-stretch gap-6 pr-6">{half}</div>
        {/* duplicate for seamless loop */}
        <div className="flex shrink-0 items-stretch gap-6 pr-6 motion-reduce:hidden" aria-hidden="true">
          {half}
        </div>
      </div>
    </div>
  );
};

/**
 * FaqSection
 * Assembles title, subtitle, and multiple horizontal rows.
 */
const FaqSection = ({ data, titleId }: { data: FaqSectionData; titleId?: string }) => {
  return (
    <div className="relative flex w-full flex-col items-center gap-12">
      <div className="z-10 flex max-w-2xl flex-col items-center gap-5 px-4 text-center">
        <h2 id={titleId} className="faq-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
          {data.mainTitle}
        </h2>
        <p className="faq-fade-in text-lg text-muted-foreground" style={{ animationDelay: "0.4s" }}>
          {data.mainSubtitle}
        </p>
      </div>

      <div className="z-10 flex w-full flex-col gap-6">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.faqItems.map((item) => (
              <FaqCard key={item.id} question={item.question} answer={item.answer} />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
