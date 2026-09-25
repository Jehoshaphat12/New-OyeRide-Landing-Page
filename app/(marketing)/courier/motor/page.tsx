// app/(marketing)/courier/motor/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Motor Courier — Deliver on OyeRide | Earn More Per Trip",
  description:
    "Deliver parcels on your motorcycle with OyeRide. Longer distances, bigger loads, higher earnings. Join the motor courier team in Kasoa.",
};

const benefits = [
  {
    title: "Longer distances",
    description:
      "Take on deliveries outside the neighbourhood — where the fares are higher.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Bigger loads",
    description:
      "A mounted delivery box lets you carry more than a bicycle can — from groceries to small appliances.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Higher payouts",
    description:
      "Motor couriers earn more per delivery than bicycle couriers. Fill your day with bigger jobs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Apply", text: "Register as a courier in the app and select Motor Courier." },
  { num: "02", title: "Get verified", text: "Upload your ID, license, bike papers, and a photo. Review within 24 hours." },
  { num: "03", title: "Go online", text: "Tap Go Online when you're ready. Accept or skip delivery jobs freely." },
  { num: "04", title: "Deliver & earn", text: "Get paid per delivery. Withdraw your earnings any time from the app." },
];

const requirements = [
  "Valid Ghanaian motorcycle license (Class A)",
  "Registered motorcycle in good condition",
  "Valid insurance and roadworthy certificate",
  "A phone mount and secure delivery box",
  "A smartphone with data (Android 8+ or iOS 13+)",
  "Clean record and background check",
];

export default function MotorCourierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#012957] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          {/* <Link
            href="/courier"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All courier roles
          </Link> */}

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Motor courier.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Deliver parcels, documents, and packages across Kasoa on your
            motorcycle.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courier/signup"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Apply now!
            </Link>
            <Link
              href="#requirements"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              See requirements
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/heroImg2.png"
            alt="OyeRide motor courier with delivery box"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why ride as a motor courier
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Built for riders who want more from each trip.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black ">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How to get started
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four steps from sign-up to your first delivery.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl bg-white p-6">
                <span className="text-3xl font-semibold text-[#054997] ">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-black ">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="scroll-mt-24 bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What you need
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Motor-specific requirements on top of the standard courier checks.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/ride00.png"
                alt="Motor courier verifying details"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <ul className="grid gap-4 sm:grid-cols-1">
                {requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5"
                  >
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
          </div>
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to start delivering?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Sign up today. Get verified within 24 hours. Start earning tomorrow.
          </p>
          <Link
            href="/courier/signup"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Apply as motor courier
          </Link>
        </div>
      </section>
    </>
  );
}