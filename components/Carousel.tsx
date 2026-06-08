"use client";

import { useEffect, useRef, useState } from "react";

type Indicator = "bar" | "dots" | "arrows";

function ArrowBtn({
  dir,
  onClick,
  disabled,
  light = false,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
      className={`flex h-11 w-11 flex-none items-center justify-center rounded-full border transition-all
        ${
          light
            ? "border-white/30 bg-white/10 text-white hover:bg-white/25 disabled:opacity-25"
            : "border-navy-200 bg-gold-50 text-navy-800 shadow-sm hover:border-gold hover:text-navy-900 hover:shadow-card disabled:opacity-30"
        }`}
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "prev" ? <path d="M12 15l-5-5 5-5" /> : <path d="M8 5l5 5-5 5" />}
      </svg>
    </button>
  );
}

export function Carousel({
  children,
  className = "",
  ariaLabel = "Slideshow",
  light = false,
  peek = true,
  indicator = "bar",
}: {
  children: React.ReactNode[];
  className?: string;
  ariaLabel?: string;
  light?: boolean;
  peek?: boolean;
  indicator?: Indicator;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = children.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const mid = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [count]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, i));
    const el = track.children[clamped] as HTMLElement | undefined;
    if (el)
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const slideWidth = peek
    ? "w-[84%] sm:w-[58%] lg:w-[46%]"
    : "w-full sm:w-[88%]";

  return (
    <div className={className} aria-roledescription="carousel" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={`${slideWidth} flex-none snap-center`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Bar: arrow · progress · counter · arrow */}
      {indicator === "bar" && (
        <div className="mt-6 flex items-center gap-4 px-1">
          <ArrowBtn dir="prev" onClick={prev} disabled={active === 0} light={light} />
          <div
            className={`relative h-1 flex-1 overflow-hidden rounded-full ${
              light ? "bg-white/20" : "bg-navy-100"
            }`}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gold transition-all duration-500 ease-out"
              style={{ width: `${((active + 1) / count) * 100}%` }}
            />
          </div>
          <span
            className={`flex-none font-display text-sm font-semibold tabular-nums ${
              light ? "text-white/80" : "text-navy-700"
            }`}
          >
            <span className={light ? "text-gold-400" : "text-gold-600"}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className={light ? "text-white/40" : "text-navy-300"}>
              {" "}
              / {String(count).padStart(2, "0")}
            </span>
          </span>
          <ArrowBtn dir="next" onClick={next} disabled={active === count - 1} light={light} />
        </div>
      )}

      {/* Dots: tappable pills, centered */}
      {indicator === "dots" && (
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-gold"
                  : light
                    ? "w-2 bg-white/30 hover:bg-white/60"
                    : "w-2 bg-navy-200 hover:bg-navy-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Arrows: prev · counter · next, centered */}
      {indicator === "arrows" && (
        <div className="mt-7 flex items-center justify-center gap-6">
          <ArrowBtn dir="prev" onClick={prev} disabled={active === 0} light={light} />
          <span
            className={`font-display text-sm font-semibold tabular-nums ${
              light ? "text-white/80" : "text-navy-700"
            }`}
          >
            <span className={light ? "text-gold-400" : "text-gold-600"}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className={light ? "text-white/40" : "text-navy-300"}>
              {" "}/ {String(count).padStart(2, "0")}
            </span>
          </span>
          <ArrowBtn dir="next" onClick={next} disabled={active === count - 1} light={light} />
        </div>
      )}
    </div>
  );
}
