"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
type FieldErrors = {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear any field error as the user types
    if(fieldErrors[e.target.name as keyof FieldErrors]) {
        setFieldErrors((prev) => ({...prev, [e.target.name]: undefined}))
    }
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {}

    if(!form.name.trim()) errors.name = "Please enter your name."
    if(!form.email.trim()) {
        errors.email = "Please enter your email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.subject) errors.subject = "Please choose a topic.";
    if (!form.message.trim()) errors.message = "Please write a message.";
    else if (form.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return

    setState("submitting");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
     if (!accessKey) {
      console.error(
        "Missing NEXT_PUBLIC_WEB3FORMS_KEY in .env.local — cannot submit form."
      );
      setState("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: accessKey,
            subject: `[OyeRide Contact] ${form.subject}`,
            form_name: "OyeRide Website",
            // Reply-to so we can hit reply and email the user directly
            replyto: form.email,
            name: form.name,
            email: form.email,
            topic: form.subject,
            message: form.message,
            // Web3Forms spam trap: hidden field should stay empty
            botcheck: false
        }),
      })
      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setState("error");
    }
  };

   if (state === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/40">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-emerald-900 dark:text-emerald-200">
          Message sent.
        </h3>
        <p className="mt-2 text-sm leading-6 text-emerald-800 dark:text-emerald-300">
          Thanks for reaching out. We&apos;ll get back to you within 24–48
          hours at the email you provided.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold text-emerald-900 underline hover:no-underline dark:text-emerald-200"
        >
          Send another message
        </button>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-black dark:text-white"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            aria-invalid={!!fieldErrors.name}
            className={`mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 ${
              fieldErrors.name
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                : "border-zinc-300 focus:border-[#054997] focus:ring-[#054997]/15 dark:border-zinc-700"
            }`}
            placeholder="Akosua Mensah"
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-black dark:text-white"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            aria-invalid={!!fieldErrors.email}
            className={`mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 ${
              fieldErrors.email
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                : "border-zinc-300 focus:border-[#054997] focus:ring-[#054997]/15 dark:border-zinc-700"
            }`}
            placeholder="you@example.com"
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-black dark:text-white"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={update}
          aria-invalid={!!fieldErrors.subject}
          className={`mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-black outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-white ${
            fieldErrors.subject
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
              : "border-zinc-300 focus:border-[#054997] focus:ring-[#054997]/15 dark:border-zinc-700"
          }`}
        >
          <option value="">Choose a topic</option>
          <option value="General inquiry">General inquiry</option>
          <option value="Problem with a ride">Problem with a ride</option>
          <option value="Problem with a delivery">Problem with a delivery</option>
          <option value="Rider / courier support">Rider / courier support</option>
          <option value="Business / partnership">Business / partnership</option>
          <option value="Press / media">Press / media</option>
          <option value="Careers">Careers</option>
          <option value="Privacy / data request">Privacy / data request</option>
          <option value="Other">Something else</option>
        </select>
        {fieldErrors.subject && (
          <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-black dark:text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={update}
          aria-invalid={!!fieldErrors.message}
          className={`mt-2 block w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-500 ${
            fieldErrors.message
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
              : "border-zinc-300 focus:border-[#054997] focus:ring-[#054997]/15 dark:border-zinc-700"
          }`}
          placeholder="Tell us what's on your mind..."
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Top-level error (network / server) */}
      {state === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/50 dark:bg-red-950/30">
          <p className="text-sm leading-6 text-red-700 dark:text-red-300">
            Something went wrong sending your message. Please try again, or
            email us directly at{" "}
            <a
              href="mailto:hello@oyeridegh.com"
              className="font-semibold underline"
            >
              hello@oyeridegh.com
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#054997] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#04356f] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {state === "submitting" ? (
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send message
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-[#054997]">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}