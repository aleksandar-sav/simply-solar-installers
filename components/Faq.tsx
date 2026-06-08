import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl surface-card">
      {faqs.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy-900 transition-colors hover:bg-navy-50/60">
            {item.q}
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-transform group-open:rotate-45">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 4v12M4 10h12" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-navy-600">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
