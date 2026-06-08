"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() || "";

    const body = [
      `Company: ${get("company")}`,
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Monthly install volume: ${get("volume")}`,
      `Regions: ${get("regions")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    const subject = `Partner enquiry — ${get("company") || get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-800">
            Company name
          </label>
          <input id="company" name="company" required className={inputClass} placeholder="Your solar company" />
        </div>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            Your name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.co.uk" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="volume" className="mb-1.5 block text-sm font-medium text-navy-800">
            Approx. monthly install volume
          </label>
          <input id="volume" name="volume" className={inputClass} placeholder="e.g. 5–10 jobs" />
        </div>
        <div>
          <label htmlFor="regions" className="mb-1.5 block text-sm font-medium text-navy-800">
            Regions covered
          </label>
          <input id="regions" name="regions" className={inputClass} placeholder="e.g. London &amp; Home Counties" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your installation needs..."
        />
      </div>
      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send partner enquiry
      </button>
      {sent && (
        <p className="text-sm text-navy-600">
          Your email app should have opened with the enquiry ready to send. If
          not, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-gold-600">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
