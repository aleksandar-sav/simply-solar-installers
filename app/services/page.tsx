import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Carousel } from "@/components/Carousel";
import { PageHero } from "@/components/PageHero";
import { AnimatedTrustBand } from "@/components/AnimatedTrustBand";
import { Reveal } from "@/components/Reveal";
import { services, faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Installation Services for Solar Companies | Sub-Contract & White-Label",
  description:
    "Complete sub-contract solar installation services across Hertfordshire and the UK — residential, commercial, bird proofing and sign-off to MCS guidelines, all under your brand.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        compact
        image="/images/services-hero.jpg"
        imageAlt="Installer fitting solar panels on a large commercial metal roof"
        eyebrow="What we handle"
        title={
          <>
            Complete solar installation services.{" "}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Sub-contracted under your brand.
            </span>
          </>
        }
        description="From a single residential roof to large-scale commercial arrays — every install to MCS guidelines, white-label, on time."
      />

      <AnimatedTrustBand
        items={[
          "To MCS guidelines",
          "White-label",
          "48hr booking",
          "Hertfordshire & UK",
        ]}
      />

      {/* Services grid */}
      <section className="surface-warm pb-12 pt-8 sm:pb-28 sm:pt-14">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative">
          {/* Mobile: cinematic image-led swipe deck */}
          <Reveal className="sm:hidden">
            <Carousel ariaLabel="Our services">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="relative h-[21rem] overflow-hidden rounded-2xl shadow-card"
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="90vw"
                    quality={90}
                    className="animate-kenburns-slow object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gold font-display text-base font-bold text-navy-900">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-4 top-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                    Service
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h2 className="text-xl font-bold leading-snug">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/85">
                      {service.body}
                    </p>
                  </div>
                </article>
              ))}
            </Carousel>
          </Reveal>

          {/* Tablet / desktop grid */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl surface-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-navy-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {service.body}
                  </p>
                </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative isolate overflow-hidden bg-gold py-12 sm:py-14">
        <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
        <div className="container-content relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
              Where we work
            </span>
            <h2 className="mt-2.5 text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
              Covering Hertfordshire and beyond
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/80 sm:text-base">
              Based in Hertfordshire, we provide sub-contract solar installation
              across the whole of England — London, Essex, Bedfordshire,
              Cambridgeshire, Buckinghamshire and nationwide. Wherever your solar
              customers are, we can be there.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-navy-900/15 bg-gold-50/80 px-3.5 py-1 text-xs font-medium text-navy-800 sm:text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy-900/10 lg:aspect-[3/2]">
            <Image
              src="/images/commercial-install.jpg"
              alt="Large black solar panel array installed on a roof against a bright sky in England"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-warm py-8 pb-4 sm:py-20 sm:pb-12 lg:py-28">
        <div className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-gold/12 blur-3xl" />
        <div className="container-content relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
              Common questions from solar companies
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
