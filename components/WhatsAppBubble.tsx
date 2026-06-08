import { site } from "@/lib/site";

export function WhatsAppBubble() {
  return (
    <a
      href={site.whatsappText}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Jack on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center sm:bottom-7 sm:right-8"
    >
      {/* Desktop hover label — stays hidden on phone */}
      <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-gold-50 py-2.5 pl-0 pr-0 text-sm font-semibold text-navy-900 opacity-0 shadow-card ring-1 ring-navy-100 transition-all duration-300 group-hover:mr-3 group-hover:max-w-[11rem] group-hover:pl-4 group-hover:pr-4 group-hover:opacity-100 max-md:hidden">
        Message Jack
      </span>

      <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white shadow-[0_6px_22px_-6px_rgba(37,211,102,0.65)] transition-transform duration-200 hover:scale-[1.04] active:scale-95 sm:h-14 sm:w-14">
        <svg
          viewBox="0 0 24 24"
          className="h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.4 1.3-1.94 1.34-.5.04-.99.32-3.32-.69-2.8-1.21-4.57-4.12-4.71-4.31-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.97-2.31c.24-.27.53-.34.71-.34.18 0 .35 0 .51.01.16.01.39-.06.6.46.24.58.81 2.01.88 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.68-.17 1.36z" />
        </svg>
      </span>
    </a>
  );
}
