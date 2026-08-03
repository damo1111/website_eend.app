"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Waitlist capture, posted via FormSubmit (formsubmit.co) — a no-signup form
 * relay that delivers straight to info@eend.app. No backend of our own to
 * run or a database to stand up for a private-beta signup list.
 *
 * First-ever submission triggers a one-time activation email to
 * info@eend.app; until that link is clicked, submissions are accepted here
 * but not yet delivered.
 */
export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots tend to fill every field; humans never see this one.
    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@eend.app", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="mt-6 font-body text-base text-ink">
        Thanks — we&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start"
    >
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <input type="hidden" name="_subject" value="eend beta access request" />
      <input type="hidden" name="_template" value="table" />

      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        name="email"
        required
        placeholder="you@wherever.com"
        className="w-full max-w-xs rounded border border-page-border bg-page-surface px-4 py-3 font-body text-base text-ink placeholder:text-ink-muted/60 focus:border-accent focus:outline-none sm:w-auto"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded border border-ink px-6 py-3 font-mono text-[13px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Request access"}
      </button>

      {status === "error" && (
        <p className="w-full font-mono text-xs text-gold-ink sm:basis-full">
          Something went wrong — email{" "}
          <a href="mailto:info@eend.app" className="underline">
            info@eend.app
          </a>{" "}
          directly instead.
        </p>
      )}
    </form>
  );
}
