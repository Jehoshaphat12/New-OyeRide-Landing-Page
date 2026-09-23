"use client";

import { useState } from "react";
import Link from "next/link";

const requestTypes = [
  {
    id: "access",
    label: "Access",
    description: "Get a copy of the personal data we hold about you.",
  },
  {
    id: "deletion",
    label: "Deletion",
    description: "Request permanent deletion of your account and data.",
  },
  {
    id: "correction",
    label: "Correction",
    description: "Fix inaccurate or outdated information in your account.",
  },
  {
    id: "portability",
    label: "Portability",
    description: "Receive your data in a portable, machine-readable format.",
  },
];

export default function DataRequestPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const mailto = `mailto:hello@oyeridegh.com?subject=${encodeURIComponent(
    "Personal Data Request — OyeRide"
  )}&body=${encodeURIComponent(
    `Hello OyeRide Privacy Team,

I would like to submit a personal data request.

Request type: ${selectedType ?? "[please select]"}
Full name: [please fill in]
Email linked to my OyeRide account: [please fill in]
Phone number (optional): [please fill in]

Additional details:
[describe your request here]

Thank you.
— Sent via OyeRide Data Rights Request portal`
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          {/* <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Privacy Center
          </Link> */}

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Personal data request
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Access, correct, delete, or port your OyeRide data. It takes about 2
            minutes to submit a request.
          </p>
        </div>
      </section>

      {/* Request type selection */}
      <section className="bg-white py-20  lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
              What would you like to do?
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Choose one option to continue.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {requestTypes.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`group flex flex-col rounded-2xl border-2 p-6 text-left transition ${
 isSelected
 ? "border-[#054997] bg-[#054997]/5 "
 : "border-zinc-200 bg-white hover:border-[#054997]/50 "
 }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-black ">
                      {type.label}
                    </h3>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
 isSelected
 ? "border-[#054997] bg-[#054997] text-white"
 : "border-zinc-300 "
 }`}
                    >
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Submit */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href={mailto}
              aria-disabled={!selectedType}
              className={`inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition sm:w-auto ${
 selectedType
 ? "bg-[#054997] text-white hover:bg-[#04356f]"
 : "pointer-events-none bg-zinc-200 text-zinc-400 "
 }`}
            >
              Continue to verification
            </a>
            <p className="max-w-md text-center text-xs leading-6 text-zinc-500 ">
              This opens your email app with a pre-filled request. Our team will
              verify your identity before processing.
            </p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-zinc-50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-base font-bold text-black ">
              What happens after you submit
            </h3>
            <ol className="mt-4 space-y-3">
              {[
                "We acknowledge your request by email within 24 hours.",
                "We verify your identity using the email or phone number linked to your account.",
                "We process your request and email the outcome within 30 days.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#054997] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-zinc-700 ">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}