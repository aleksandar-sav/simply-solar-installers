import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Simply Solar Installers | Partner With Us",
  description:
    "Talk to Jack about sub-contract solar installation for your company. Working to MCS guidelines, white-label, first installation booked within 48 hours. Hertfordshire & UK.",
};

function ContactRow({
  href,
  icon,
  title,
  detail,
  hint,
}: {
  href?: string;
  icon: ReactNode;
  title: string;
  detail: string;
  hint?: string;
}) {
  const inner = (
    <>
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-navy-50 text-navy-700">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-navy-900">{title}</span>
        <span className="block break-all text-sm text-navy-500">{detail}</span>
        {hint && (
          <span className="mt-0.5 block text-xs text-navy-400">{hint}</span>
        )}
      </span>
    </>
  );

  const className =
    "flex items-start gap-3 rounded-lg border border-navy-100 bg-white px-4 py-3 transition-colors hover:border-navy-200";

  if (href) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Compact header */}
      <section className="border-b border-navy-100">
        <div className="container-content py-7 sm:py-9">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-2 text-2xl font-bold leading-snug text-navy-900 sm:text-3xl">
              Partner enquiry
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">
              Tell us about your installs. Jack will reply personally — usually
              same day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="py-8 sm:py-10">
        <div className="container-content">
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-8">
            <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-base font-bold text-navy-900">
                Send an enquiry
              </h2>
              <p className="mt-1 text-xs text-navy-500">
                All fields marked required must be completed.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-2.5 lg:pt-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-navy-400">
                Or reach Jack directly
              </p>
              <ContactRow
                href={site.whatsappText}
                title="WhatsApp"
                detail={site.phoneDisplay}
                hint="Fastest response"
                icon={
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.94 1.34-.5.04-.99.32-3.32-.69-2.8-1.21-4.57-4.12-4.71-4.31-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.81 2.01.88 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.68-.17 1.36z" />
                  </svg>
                }
              />
              <ContactRow
                href={`mailto:${site.email}`}
                title="Email"
                detail={site.email}
                icon={
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <ContactRow
                title="Based in"
                detail={site.baseLocation}
                hint="Covering all England"
                icon={
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* Map — compact */}
      <section className="border-t border-navy-100 pb-10 pt-6 sm:pb-12">
        <div className="container-content">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-navy-100">
            <iframe
              title="Simply Solar Installers service area — Hertfordshire"
              src="https://www.google.com/maps?q=Hertfordshire,England&z=9&output=embed"
              width="100%"
              height="240"
              className="max-sm:h-[200px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
