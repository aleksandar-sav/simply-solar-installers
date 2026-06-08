import Link from "next/link";
import { painPoints } from "@/lib/site";

const painIcons = [
  <svg key="hiring" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5h6M9 3h6a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1z" /><path d="M8 7h8v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7z" /><path d="M10 11h4M10 15h4" /></svg>,
  <svg key="liability" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4 7v5c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4z" /><path d="M12 8v5" /><circle cx="12" cy="16" r="0.75" fill="currentColor" stroke="none" /></svg>,
  <svg key="brand" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
  <svg key="turnaway" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="m15 14-2 2 2 2M11 14l2 2-2 2" /></svg>,
  <svg key="talent" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="5.5" /><path d="M15 15 20 20" /><path d="M8 10h4M10 8v4" /></svg>,
] as const;

export function PainCard({ point, i }: { point: (typeof painPoints)[number]; i: number }) {
  return (
    <div className="group h-full rounded-2xl border border-navy-100 bg-gold-50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:shadow-card-hover md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-gold transition-colors duration-300 group-hover:bg-gold-50 group-hover:text-navy-900 md:h-9 md:w-9">
          {painIcons[i]}
        </div>
        <span className="font-display text-xs font-bold tracking-wider text-gold-600/80">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900 transition-colors duration-300 md:mt-3 md:text-base">
        {point.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-navy-600 transition-colors duration-300 group-hover:text-navy-900/85 md:mt-2 md:text-[0.8125rem] md:leading-snug">
        {point.body}
      </p>
    </div>
  );
}

export function PainCtaCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl bg-gold p-6 text-navy-900 md:p-5">
      <p className="text-base font-bold leading-snug md:text-[0.9375rem]">
        There&apos;s a simpler way to handle every install.
      </p>
      <Link
        href="/services"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
      >
        See what we handle <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
