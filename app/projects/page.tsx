import type { Metadata } from "next";
import Image from "next/image";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solar Installation Projects | Completed Work | Simply Solar Installers",
  description:
    "A gallery of completed residential and commercial solar installations by Simply Solar Installers across Hertfordshire and the UK — to MCS guidelines, white-label, delivered for solar companies.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-navy-100 bg-gradient-to-br from-gold/20 via-cream to-white">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative grid grid-cols-1 items-center gap-7 py-10 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Our work</span>
            <h1 className="mt-3 text-3xl font-bold leading-[1.15] text-navy-900 sm:text-4xl lg:text-5xl">
              Installations we&apos;ve delivered — under our partners&apos;
              brands.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
              A snapshot of completed residential and commercial solar
              installations across Hertfordshire and the UK. Every one to MCS
              guidelines, every one delivered for a solar company partner.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-navy-700">
              <span className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-gold-500">30+</span>
                installs shown
              </span>
              <span className="h-4 w-px bg-navy-200" />
              <span>Residential &amp; commercial</span>
              <span className="h-4 w-px bg-navy-200" />
              <span>To MCS guidelines</span>
            </div>
          </div>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-900/5">
                <Image
                  src="/images/projects/p13.jpg"
                  alt="Black solar panels installed on a tiled roof under a blue sky"
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 230px"
                  className="animate-kenburns-slow object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-900/5">
                  <Image
                    src="/images/projects/p25.jpg"
                    alt="Commercial solar array on an industrial roof in bright sun"
                    fill
                    sizes="(max-width: 1024px) 45vw, 230px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-navy-900/5">
                  <Image
                    src="/images/projects/p03.jpg"
                    alt="Commercial solar PV array on a metal industrial roof"
                    fill
                    sizes="(max-width: 1024px) 45vw, 230px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section pb-0">
        <div className="container-content">
          <ProjectsGallery />
        </div>
      </section>

      <CtaBand
        heading="Want your next install to look like these?"
        body="Partner with Simply Solar Installers and add work like this to your portfolio — delivered under your brand, to MCS guidelines, booked within 48 hours."
      />
    </>
  );
}
