import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety — OyeRide | How We Keep Every Trip Safe",
  description:
    "Verified riders, live tracking, and 24/7 support. Learn how OyeRide keeps every ride, delivery, and refill safe across Kasoa.",
};

const pillars = [
  {
    title: "Verified riders",
    description:
      "Every rider passes ID, license, and motorcycle checks before their first trip. No exceptions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
        <path d="m9 8 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Live tracking",
    description:
      "Follow every trip on the map, from pickup to drop-off. Know exactly where you are at every moment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Share your trip",
    description:
      "Send your trip details to a friend or family member with one tap. They follow along in real time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
  },
  {
    title: "24/7 support",
    description:
      "Something wrong? Our team is one tap away, day or night, for any issue during a trip.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
        <path d="M20 14v3a2 2 0 0 1-2 2h-2M4 14v3a2 2 0 0 0 2 2h2" />
      </svg>
    ),
  },
];

const vettingSteps = [
  "Government-issued ID verification",
  "Valid motorcycle license (Class A) check",
  "Motorcycle registration and roadworthy inspection",
  "Background check for a clean driving record",
  "In-person photo and face match at onboarding",
  "Ongoing rating and complaint monitoring",
];

const tools = [
  {
    title: "Emergency button",
    description:
      "Tap the in-app SOS button during a trip to alert our safety team and, if needed, local emergency services.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Trusted contacts",
    description:
      "Save up to three trusted contacts in the app. They get your live trip details whenever you tap Share Trip.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "In-app chat",
    description:
      "Message your rider directly from the app. No need to share your personal phone number.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      </svg>
    ),
  },
  {
    title: "Trip receipt",
    description:
      "Every trip ends with a receipt showing route, fare, and rider details — stored in the app for future reference.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 15h6M9 11h2" />
      </svg>
    ),
  },
];

const emergencySteps = [
  {
    num: "01",
    title: "Get to safety first",
    text: "If you're in immediate danger, move to a public place. Contact local emergency services before anything else.",
  },
  {
    num: "02",
    title: "Use the in-app SOS button",
    text: "Tap SOS in the app during an active trip to alert our safety team with your live location.",
  },
  {
    num: "03",
    title: "Reach out to us",
    text: "Email hello@oyeridegh.com with the word URGENT in the subject. Include your trip details so we can act fast.",
  },
  {
    num: "04",
    title: "Follow up in writing",
    text: "After the immediate situation is handled, send us a full report so we can investigate and take action on the rider.",
  },
];

export default function SafetyPage() {
  return (
    <>
      {/* Hero */}
            {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Ride with confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Safety isn&apos;t a feature — it&apos;s the foundation. Every rider is
            vetted, every trip is tracked, and our team is on call around the clock.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#tools"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              See safety tools
            </Link>
            <Link
              href="#report"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              Report an issue
            </Link>
          </div>
        </div>

        {/* Full-bleed image below */}
        <div className="w-full">
          <img
            src="/privacyImg1.png"
            alt="OyeRide rider with passenger, safely equipped"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How we keep you safe
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four pillars that apply to every ride, every delivery, every refill.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black ">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we vet riders */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How we vet every rider
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              No rider gets approved without passing all six checks below.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/vettingImg1.png"
                alt="OyeRide rider verification"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Checklist */}
            <div>
              <ol className="grid gap-4 sm:grid-cols-1">
                {vettingSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5"
                  >
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
        </div>
      </section>

      {/* In-app tools */}
      <section id="tools" className="scroll-mt-24 bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Safety tools in the app
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Everything you need is one tap away, right inside the OyeRide app.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="flex items-start gap-5 rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-black ">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency protocol */}
      <section id="report" className="scroll-mt-24 bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What to do in an emergency
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Follow these steps in order. Your safety comes first — always.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emergencySteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <span className="text-3xl font-semibold text-[#054997] ">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-black ">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-sm leading-6 text-zinc-500 ">
              Report an incident at{" "}
              <a
                href="mailto:hello@oyeridegh.com?subject=URGENT%20-%20Safety%20Report"
                className="font-semibold text-[#054997] underline "
              >
                hello@oyeridegh.com
              </a>{" "}
              with &quot;URGENT&quot; in the subject line.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Questions about safety?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Our team is happy to walk you through any part of how we keep trips safe.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/help"
              className="inline-flex w-full justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#000000] transition hover:bg-zinc-100 sm:w-auto"
            >
              Visit help center
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}