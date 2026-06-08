import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Simply Solar Installers | Partner With Us",
  description:
    "Talk to Jack about sub-contract solar installation for your company. Working to MCS guidelines, white-label, first installation booked within 48 hours. Hertfordshire & UK.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-navy-100 surface-warm">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-content relative py-12 sm:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
              Let&apos;s talk about your next installs
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Whether you&apos;ve got one job or fifty, Jack will get back to you
              personally — usually same day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="surface-warm pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div className="container-content grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="rounded-3xl surface-card p-7 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900">
              Send us a partner enquiry
            </h2>
            <p className="mt-1.5 text-sm text-navy-500">
              Fill this in and we&apos;ll be in touch to get your first
              installation booked.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            <a
              href={site.whatsappText}
              className="flex items-start gap-4 rounded-2xl surface-card p-6 transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.94 1.34-.5.04-.99.32-3.32-.69-2.8-1.21-4.57-4.12-4.71-4.31-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.81 2.01.88 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.68-.17 1.36z" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-navy-900">WhatsApp Jack</span>
                <span className="block text-sm text-navy-500">{site.phoneDisplay}</span>
                <span className="mt-1 block text-xs text-navy-400">Fastest way to reach us</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-2xl surface-card p-6 transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-navy-900">Email us</span>
                <span className="block break-all text-sm text-navy-500">{site.email}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl surface-card p-6">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-navy-900">Based in</span>
                <span className="block text-sm text-navy-500">{site.baseLocation}</span>
                <span className="mt-1 block text-xs text-navy-400">Covering the whole of England</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="surface-warm pb-20 sm:pb-28">
        <div className="container-content">
          <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-card">
            <iframe
              title="Simply Solar Installers service area — Hertfordshire"
              src="https://www.google.com/maps?q=Hertfordshire,England&z=9&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
