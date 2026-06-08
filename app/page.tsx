import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Carousel } from "@/components/Carousel";
import { PainCard, PainCtaCard } from "@/components/PainCard";
import { Reveal } from "@/components/Reveal";
import { HeroContent } from "@/components/HeroContent";
import { painPoints, whyPoints, testimonials, site } from "@/lib/site";

const stats = [
  { value: "Since 16", label: "Jack's years in solar" },
  { value: "100%", label: "Installs to MCS guidelines" },
  { value: "48hr", label: "Typical booking time" },
];

const whyIcons = [
  <svg key="specialists" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
  <svg key="scale" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V10l8-6 8 6v10" /><path d="M9 20v-6h6v6" /><path d="M4 10h16" /></svg>,
  <svg key="mcs" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4 7v5c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg key="whitelabel" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12V8.5A2.5 2.5 0 0 0 17.5 6H15L8 13l7 7h2.5A2.5 2.5 0 0 0 20 17.5V14" /><circle cx="16.5" cy="7.5" r="1.25" fill="currentColor" stroke="none" /></svg>,
] as const;

function Testimonial({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl surface-card p-7">
      <div className="mb-5 flex h-16 items-center rounded-xl border border-navy-100 bg-white px-4 py-3">
        <Image
          src={t.logo}
          alt={t.logoAlt}
          width={160}
          height={48}
          className="h-10 w-auto max-w-[9.5rem] object-contain object-left sm:max-w-[10.5rem]"
        />
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-navy-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-navy-100 pt-4">
        <p className="font-semibold text-navy-900">{t.name}</p>
        <p className="text-xs text-navy-500">
          {t.role} · {t.location}
        </p>
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — same hero.jpg; phone: tighter height; desktop: peek of stats band below */}
      <section className="relative isolate flex w-full items-center overflow-hidden bg-navy-950 text-white max-sm:min-h-[56vh] sm:min-h-[calc(100svh-14rem)]">
        <Image
          src="/images/hero.jpg"
          alt="Black solar panels professionally installed across a large roof against a clear blue sky in Hertfordshire"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="animate-kenburns-slow object-cover object-[50%_42%] sm:object-center"
        />

        {/* Mobile — darker wash so copy reads clearly */}
        <div className="pointer-events-none absolute inset-0 bg-navy-950/35 sm:hidden" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[82%] bg-[radial-gradient(ellipse_115%_85%_at_50%_92%,rgba(15,23,42,0.96),rgba(15,23,42,0.55)_45%,transparent_72%)] sm:hidden" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-navy-950/80 via-navy-950/35 to-transparent sm:hidden" />

        {/* Scrim — lighter on phone so the photo shows; desktop unchanged */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/45 to-transparent max-sm:via-navy-950/30 sm:from-navy-950/95 sm:via-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent max-sm:via-navy-950/30 sm:from-navy-950/80 sm:via-transparent sm:to-transparent" />
        {/* Gold light bloom — desktop only */}
        <div className="pointer-events-none absolute -left-40 top-1/4 hidden h-[34rem] w-[34rem] rounded-full bg-gold/25 blur-3xl sm:block" />
        <div className="pointer-events-none absolute -bottom-32 right-0 hidden h-80 w-80 rounded-full bg-gold/10 blur-3xl sm:block" />
        {/* Fine grid accent — desktop only */}
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-[0.06] sm:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 25% 50%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 25% 50%, black, transparent 70%)",
          }}
        />

        {/* Content */}
        <HeroContent className="container-content relative z-10 w-full py-8 sm:py-16 lg:py-20">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 sm:text-sm">
            <span className="h-px w-9 bg-gold-400" />
            Simply Solar Installers · UK-wide
          </span>
          <h1 className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.12] max-sm:[text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:mt-6 sm:text-6xl sm:leading-[1.02] sm:[text-shadow:none] lg:text-7xl">
            Your installs. Handled.{" "}
            <span className="mt-1.5 block bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 bg-clip-text text-transparent sm:mt-0 sm:inline">
              So you can focus on selling.
            </span>
          </h1>
          <p className="mt-4 max-w-[20rem] text-[0.9375rem] leading-[1.6] text-white max-sm:[text-shadow:0_1px_12px_rgba(0,0,0,0.5)] sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-relaxed sm:text-white/85 sm:[text-shadow:none]">
            The white-label sub-contract installation partner UK solar companies
            rely on — clean installs, delivered on time, under your brand.
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
            <Link href="/contact" className="btn-gold">
              Partner with us today
            </Link>
            <a href={site.whatsappText} className="btn-ghost-light max-sm:hidden sm:inline-flex">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.94 1.34-.5.04-.99.32-3.32-.69-2.8-1.21-4.57-4.12-4.71-4.31-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.81 2.01.88 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.68-.17 1.36z" />
              </svg>
              Message Jack on WhatsApp
            </a>
          </div>

          {/* Trust strip — desktop only */}
          <div className="mt-12 hidden flex-wrap items-center gap-x-7 gap-y-3 lg:flex">
            {[
              "To MCS guidelines",
              "Completely white-label",
              "Booked within 48 hours",
              "Covering all England",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/25 text-gold-300">
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {item}
              </span>
            ))}
          </div>
        </HeroContent>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="h-9 w-px animate-pulse bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-gold">
        <div className="container-content grid grid-cols-3 gap-x-4 py-6 sm:gap-x-6 sm:py-7 lg:py-5">
          {stats.map((s) => (
            <div key={s.label} className="min-w-0 text-center lg:text-left">
              <p className="font-display text-lg font-bold leading-none text-navy-900 whitespace-nowrap sm:text-2xl lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-[0.62rem] font-medium leading-tight text-navy-800/80 sm:text-xs lg:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The problem — light, subtle warm wash */}
      <section className="surface-warm py-10 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative">
          <Reveal className="max-w-3xl max-sm:text-left sm:mx-auto sm:max-w-3xl sm:text-center md:mx-0 md:text-left">
            <span className="eyebrow max-sm:justify-start sm:justify-center md:justify-start">
              The problem
            </span>
            <h2 className="mt-2 text-[1.65rem] font-bold leading-snug text-navy-900 sm:mt-3 sm:text-3xl sm:leading-tight lg:text-4xl">
              Every solar company hits the same wall.
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-gold via-gold-300 to-transparent max-sm:mx-0 sm:mx-auto sm:w-20 sm:from-transparent sm:via-gold sm:to-transparent md:mx-0" />
          </Reveal>

          {/* Desktop grid */}
          <div className="mt-8 hidden gap-4 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 md:grid">
            {painPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 90}>
                <PainCard point={point} i={i} />
              </Reveal>
            ))}
            <Reveal delay={painPoints.length * 90}>
              <PainCtaCard />
            </Reveal>
          </div>

          {/* Mobile slideshow — tight to the heading */}
          <Reveal delay={80} className="mt-5 sm:mt-10 md:hidden">
            <Carousel
              ariaLabel="The problems solar companies face"
              peek={false}
              indicator="arrows"
            >
              {painPoints.map((point, i) => (
                <PainCard key={point.title} point={point} i={i} />
              ))}
            </Carousel>
            <div className="mt-4">
              <PainCtaCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Simply Solar */}
      <section className="section surface-warm">
        <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Photo of Jack — compact on mobile */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-[190px] sm:max-w-[230px] lg:max-w-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/images/jack-standing.jpg"
                    alt="Jack, founder of Simply Solar Installers, standing in front of a completed solar installation"
                    fill
                    sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 32vw"
                    className="object-cover object-[center_18%]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-3 rounded-2xl bg-gold px-4 py-2.5 shadow-card sm:px-5 sm:py-3">
                  <p className="font-display text-lg font-bold leading-none text-navy-900 sm:text-xl">
                    Since 16
                  </p>
                  <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-wider text-navy-800">
                    Jack&apos;s years in solar
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Heading + desktop copy */}
            <Reveal
              delay={120}
              className="order-1 text-center md:text-left lg:order-2"
            >
              <span className="eyebrow">Why Simply Solar</span>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
                Solar is all we&apos;ve ever done.
              </h2>

              {/* Mobile-only intro line (kept short, the detail lives in the slides) */}
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-600 md:hidden">
                Jack has been installing solar since he was 16 — and built a team
                with the same obsession for getting every job right.
              </p>

              {/* Desktop: full copy */}
              <div className="mt-6 hidden space-y-4 text-base leading-relaxed text-navy-600 md:block">
                <p>
                  Jack, the founder of Simply Solar Installers, has been in the
                  solar installation industry since he was 16 years old. Based in
                  Hertfordshire and operating across England, this isn&apos;t a
                  side hustle — and he&apos;s built a team that reflects that same
                  obsession with quality.
                </p>
                <p>
                  You&apos;re not handing your jobs to a generalist trades
                  company. You&apos;re working with dedicated solar specialists —
                  from complex residential roofs to large-scale commercial
                  installations across the UK.
                </p>
                <p>
                  Every installation is carried out to MCS guidelines as standard,
                  supporting your clients&apos; Smart Export Guarantee applications
                  and protecting your reputation. We work completely white-label,
                  under your brand, so your customers never know the difference.
                </p>
              </div>

              {/* Desktop: quick bullets */}
              <ul className="mt-7 hidden gap-3 md:grid md:grid-cols-2">
                {whyPoints.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-2.5 rounded-xl border border-navy-100 bg-cream px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-navy-900">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-navy-800">
                      {p.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Mobile slideshow — full width, premium cards */}
            <div className="order-3 mt-2 md:hidden">
              <Carousel ariaLabel="Why choose Simply Solar" indicator="dots">
                {whyPoints.map((p, i) => (
                  <div
                    key={p.title}
                    className="flex h-full flex-col rounded-3xl surface-card p-7 text-left"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold">
                      {whyIcons[i]}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-snug text-navy-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      {p.body}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* White-label band */}
      <section className="overflow-hidden bg-gold">
        <div className="container-content py-7 sm:py-8 md:py-7 lg:py-8">
          <div className="grid gap-5 max-md:gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-8 lg:gap-10">
            <Reveal className="max-md:order-1">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy-800 sm:text-xs">
                Completely white-label
              </span>
              <h2 className="mt-1.5 text-lg font-bold leading-snug text-navy-900 sm:mt-2 sm:text-2xl lg:text-[2rem]">
                Your brand on the van. Our expertise on the roof.
              </h2>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-navy-900/80 sm:mt-3 sm:max-w-lg sm:text-sm lg:max-w-xl">
                We work entirely under your brand. Your clients will never know
                we&apos;re not your in-house team — they&apos;ll just know the job
                was done right, to MCS guidelines every time and a tidy site left
                behind.
              </p>
              <Link href="/services" className="btn-navy mt-3 px-5 py-2.5 text-xs sm:mt-5 sm:px-7 sm:py-3.5 sm:text-sm">
                Explore our services
              </Link>
            </Reveal>

            <Reveal delay={120} className="max-md:order-2 md:flex md:justify-end">
              <div className="relative w-full md:max-w-[21rem] lg:max-w-[24rem]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg ring-1 ring-navy-900/10 sm:aspect-[5/3] md:aspect-[4/5] lg:aspect-[3/4]">
                  <Image
                    src="/images/whitelabel.jpg"
                    alt="Simply Solar installer fitting solar panels on a commercial roof under a clear blue sky"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 336px, 384px"
                    className="object-cover object-[center_40%] md:object-[center_35%]"
                  />
                </div>
                <div className="absolute left-3 top-3 rounded-xl bg-gold-50 px-3 py-2 shadow-card sm:left-4 sm:top-4">
                  <p className="font-display text-xs font-bold leading-none text-navy-900">
                    White-label
                  </p>
                  <p className="mt-0.5 text-[0.5rem] font-semibold uppercase tracking-wider text-gold-600 sm:text-[0.5rem]">
                    Under your brand
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="surface-warm py-8 pb-4 sm:section">
        <div className="container-content">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Trusted by solar companies</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              The partner solar companies don&apos;t want to share.
            </h2>
          </Reveal>

          {/* Desktop grid */}
          <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <Testimonial t={t} />
              </Reveal>
            ))}
          </div>

          {/* Mobile / tablet slideshow */}
          <Carousel
            className="mt-6 sm:mt-10 lg:hidden"
            ariaLabel="What solar companies say"
            peek={false}
            indicator="dots"
          >
            {testimonials.map((t) => (
              <Testimonial key={t.name} t={t} />
            ))}
          </Carousel>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
