import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-content py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-lg shadow-navy-950/40 ring-1 ring-white/10">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Sub-contract solar installation to MCS guidelines for solar
              companies across Hertfordshire and the UK. White-label, reliable
              and done right — your installs, handled.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappText} className="hover:text-gold-400">
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>{site.baseLocation}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Works to MCS Guidelines · White-Label · Covering England</p>
        </div>
      </div>
    </footer>
  );
}
