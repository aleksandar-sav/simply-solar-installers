import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  heading = "Stop letting solar installation capacity hold your business back.",
  body = "Every job you can't fulfil is revenue you're leaving on the table. Simply Solar Installers is the sub-contract installation partner that solar companies across Hertfordshire and England trust to keep their pipeline moving. One call with Jack and we'll have your first installation booked within 48 hours.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="section">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-7 py-14 sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              {body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Partner with us today
              </Link>
              <a href={site.whatsappText} className="btn-ghost-light">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.94 1.34-.5.04-.99.32-3.32-.69-2.8-1.21-4.57-4.12-4.71-4.31-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.81 2.01.88 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.68-.17 1.36z" />
                </svg>
                Message Jack on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
