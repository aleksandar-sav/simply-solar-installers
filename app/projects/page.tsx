import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { AnimatedTrustBand } from "@/components/AnimatedTrustBand";

export const metadata: Metadata = {
  title: "Solar Installation Projects | Completed Work | Simply Solar Installers",
  description:
    "A gallery of completed residential and commercial solar installations by Simply Solar Installers across Hertfordshire and the UK — to MCS guidelines, white-label, delivered for solar companies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        compact
        image="/images/finished-house.jpg"
        imageClassName="object-[50%_38%] sm:object-[50%_32%]"
        imageAlt="Completed residential solar installation on a modern brick home extension against a clear blue sky"
        eyebrow="Our work"
        title={
          <>
            Installations we&apos;ve delivered.{" "}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Under our partners&apos; brands.
            </span>
          </>
        }
        description="Residential and commercial solar across Hertfordshire and the UK — every install to MCS guidelines, white-label, for a solar company partner."
      />

      <AnimatedTrustBand
        items={[
          "30+ installs shown",
          "Residential & commercial",
          "To MCS guidelines",
          "White-label",
        ]}
      />

      {/* Gallery */}
      <section className="surface-warm pb-0 pt-10 sm:pt-14">
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
