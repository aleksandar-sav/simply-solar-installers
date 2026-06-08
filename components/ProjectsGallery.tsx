"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects, type ProjectCategory } from "@/lib/site";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Residential", "Commercial"];

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <>
      {/* Filter tabs */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? "bg-navy-900 text-white shadow-sm"
                  : "border border-navy-200 bg-gold-50 text-navy-600 hover:border-navy-400 hover:-translate-y-0.5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid */}
      <div
        key={filter}
        className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
      >
        {visible.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 85}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-100 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              aria-label={`View project: ${p.alt}`}
            >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              quality={88}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute left-3 top-3 rounded-full bg-navy-950/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              {p.category}
            </span>
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8V3h5M17 12v5h-5M3 3l6 6M17 17l-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[3/2] max-h-[80vh] w-full">
              <Image
                src={visible[lightbox].src}
                alt={visible[lightbox].alt}
                fill
                sizes="90vw"
                className="rounded-xl object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {visible[lightbox].category} solar installation ·{" "}
              {lightbox + 1} / {visible.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
