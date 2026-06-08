import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
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

      {/* Page header */}
      <section className="relative isolate overflow-hidden border-b border-navy-100 bg-gradient-to-br from-gold/20 via-cream to-white">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative grid grid-cols-1 items-center gap-7 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <span className="eyebrow">What we handle</span>
            <h1 className="mt-3 text-3xl font-bold leading-[1.15] text-navy-900 sm:text-4xl lg:text-5xl">
              Complete solar installation services across Hertfordshire and the
              UK — sub-contracted under your brand.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              From a single residential roof to large-scale commercial arrays,
              we deliver every installation to MCS guidelines, white-label, on
              time. You sell it — we install it.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {["Residential", "Commercial", "Bird proofing", "Maintenance"].map(
                (chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-navy-100 bg-cream px-4 py-1.5 text-sm font-medium text-navy-700"
                  >
                    {chip}
                  </li>
                )
              )}
            </ul>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-900/10">
                <Image
                  src="/images/projects/p24.jpg"
                  alt="Black solar panels installed on a house roof against a clear blue sky"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="animate-kenburns-slow object-cover"
                />
              </div>
              {/* Offset secondary photo */}
              <div className="absolute -bottom-6 -left-5 hidden w-40 overflow-hidden rounded-2xl shadow-card ring-4 ring-white sm:block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/projects/p26.jpg"
                    alt="Installer fitting solar panels on a commercial metal roof"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="animate-floaty absolute -right-3 -top-3 rounded-2xl bg-gold px-4 py-2.5 shadow-card">
                <p className="font-display text-sm font-bold leading-none text-navy-900">
                  To MCS guidelines
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative">
          {/* Mobile: cinematic image-led swipe deck */}
          <div className="sm:hidden">
            <Carousel ariaLabel="Our services">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="relative h-[26rem] overflow-hidden rounded-3xl shadow-card"
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="90vw"
                    className="animate-kenburns-slow object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gold font-display text-lg font-bold text-navy-900">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-5 top-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Service
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h2 className="text-2xl font-bold leading-snug">
                      {service.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                      {service.body}
                    </p>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>

          {/* Tablet / desktop grid */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
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
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative isolate overflow-hidden bg-gold py-12 sm:py-14">
        <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
        <div className="container-content relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
                  className="rounded-full border border-navy-900/15 bg-white/50 px-3.5 py-1 text-xs font-medium text-navy-800 sm:text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy-900/10 lg:aspect-[3/2]">
            <Image
              src="/images/commercial-install.jpg"
              alt="Large black solar panel array installed on a roof against a bright sky in England"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-gold/12 blur-3xl" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
              Common questions from solar companies
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
