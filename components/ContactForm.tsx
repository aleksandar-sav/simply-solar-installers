"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-gold-50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() || "";

    const payload = {
      company: get("company"),
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      volume: get("volume"),
      regions: get("regions"),
      message: get("message"),
      _gotcha: get("_gotcha"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          result.error ||
            "Something went wrong. Please try again or email Jack directly."
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage(
        "Could not connect. Please try again or email Jack directly."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-cream p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold-600">
          <svg viewBox="0 0 20 20" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy-900">Enquiry sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          Thanks — Jack will get back to you personally, usually same day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send partner enquiry"}
      </button>
    </form>
  );
}
