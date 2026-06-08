"use client";

import { Reveal } from "@/components/Reveal";

export function AnimatedTrustBand({ items }: { items: string[] }) {
  return (
    <Reveal>
      <div className="relative z-10 border-y border-navy-900/10 bg-gold py-4 sm:py-5">
        <div className="container-content">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm font-semibold text-navy-900 sm:gap-x-8 sm:text-[0.95rem]">
            {items.map((item, i) => (
              <li key={item} className="flex items-center gap-x-3 sm:gap-x-8">
                {i > 0 && (
                  <span
                    className="hidden text-navy-900/35 sm:inline"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
