// app/(marketing)/courier/bicycle/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Bicycle Courier — Eco-Friendly Delivery with OyeRide",
  description:
    "Deliver documents, food, and small parcels on your bicycle with OyeRide. Zero fuel costs, low overhead, flexible hours. Join the bicycle courier team.",
};

const benefits = [
  {
    title: "Zero fuel costs",
    description:
      "No fuel, no maintenance beyond your bike, no insurance premiums. Nearly everything you earn is profit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Short distances, fast turns",
    description:
      "Bicycle jobs stay local. You finish deliveries in minutes and move straight to the next one.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Work when you want",
    description:
      "Go online for an hour or a full day. No minimums, no commitment, no dispatch pressure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Apply", text: "Register as a courier in the app and select Bicycle Courier." },
  { num: "02", title: "Get verified", text: "Upload your ID and a photo. Review takes up to 24 hours." },
  { num: "03", title: "Go online", text: "Tap Go Online when you're ready. Accept or skip delivery jobs freely." },
  { num: "04", title: "Deliver & earn", text: "Get paid per delivery. Withdraw your earnings any time from the app." },
];

const requirements = [
  "A bicycle in good working condition",
  "A delivery backpack or rear rack for parcels",
  "A smartphone with data (Android 8+ or iOS 13+)",
  "Valid Ghana ID or passport",
  "Clean record and background check",
  "A registered SIM card in your name",
];

export default function BicycleCourierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <Link
            href="/courier"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All courier roles
          </Link>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Bicycle courier.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Deliver documents, food, and small parcels across your neighbourhood.
            Zero fuel costs, low overhead, and total flexibility.
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
            src="/bicycleRider4.png"
            alt="OyeRide bicycle courier on the street"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Why ride as a bicycle courier
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              The simplest way to start earning on OyeRide.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              How to get started
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Four steps from sign-up to your first delivery.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl bg-white p-6 dark:bg-zinc-900">
                <span className="text-3xl font-semibold text-[#054997] dark:text-[#7bb3e8]">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="scroll-mt-24 bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              What you need
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              You probably already have most of this.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/bicycleRider02.png"
                alt="Bicycle courier preparing for a delivery"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <ul className="grid gap-4 sm:grid-cols-1">
                {requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <OrderRide title="Start earning now!" description="Download the OyeRide app on iOS and Android now to start earning with your bicycle now!." imageSrc="/bicycleRider4.png" PushAside={true}/>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Start earning on your bike.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Sign up today. Get verified within 24 hours. Start earning tomorrow.
          </p>
          <Link
            href="/courier/signup"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Apply as bicycle courier
          </Link>
        </div>
      </section>
    </>
  );
}