import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Enforcement Requests — OyeRide",
  description:
    "Guidelines for authorised law enforcement agencies submitting official data requests to OyeRide.",
};

const guidelines = [
  {
    title: "Who can submit",
    text: "Requests must come from an authorised law enforcement officer acting in their official capacity, using an official government or agency email address.",
  },
  {
    title: "Legal basis required",
    text: "Every request must cite a valid legal basis under Ghanaian law — a court order, warrant, or statutory authority. We do not disclose data on informal or unverified requests.",
  },
  {
    title: "Scope and proportionality",
    text: "Requests should be as narrow as possible, specifying the data sought, the time period, and the specific user or trip reference where known.",
  },
  {
    title: "Emergency requests",
    text: "For situations involving an imminent risk of death or serious harm, we may disclose limited data without a court order if the urgency is credible and documented.",
  },
];

const requirements = [
  "Full name and rank of the requesting officer",
  "Agency name and official contact email",
  "Legal basis for the request (warrant, court order, or statutory authority)",
  "Specific user identifier (name, phone number, or trip ID) where known",
  "The specific data sought and the time period",
  "A stated deadline and the reason for any urgency",
];

export default function LawEnforcementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
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
            Law enforcement requests
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Guidelines and submission process for authorised law enforcement
            agencies requesting OyeRide data.
          </p>
        </div>

        <div className="w-full">
          <img
            src="/tableImg1.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Guidelines */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
              Guidelines
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              How we evaluate law enforcement requests.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {guidelines.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-base font-bold text-black ">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + submission */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl ">
                What to include in your request
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 ">
                Incomplete requests will be returned for clarification.
              </p>
              <ul className="mt-8 space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 ">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl ">
                How to submit
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 ">
                Send your official request to our legal team. Use your agency
                email — we do not respond to requests from personal email
                addresses.
              </p>

              <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 ">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 ">
                  Official email
                </p>
                <a
                  href="mailto:hello@oyeridegh.com?subject=Law%20Enforcement%20Data%20Request"
                  className="mt-2 block break-all text-lg font-semibold text-[#054997] underline "
                >
                  hello@oyeridegh.com
                </a>
                <p className="mt-4 text-sm leading-6 text-zinc-600 ">
                  Please include <strong>&quot;Law Enforcement Request&quot;</strong> in
                  the subject line.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 ">
                <p className="text-sm leading-6 text-amber-900 ">
                  <strong>Urgent safety matters:</strong> If a request involves an
                  imminent risk to life, note <strong>URGENT</strong> in the subject
                  line and include a callback number for our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000000] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Are you a user wanting your data?
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
            This portal is for law enforcement. If you&apos;re an OyeRide user
            requesting your own data, use the Data Rights Request portal.
          </p>
          <Link
            href="/privacy/data-request"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Go to Data Request
          </Link>
        </div>
      </section>
    </>
  );
}