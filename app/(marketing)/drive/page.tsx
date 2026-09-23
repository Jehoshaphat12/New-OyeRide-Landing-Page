import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Ride with OyeRide — Earn on your own schedule",
  description:
    "Join the OyeRide rider network. Flexible hours, daily earnings, full support. Get verified within 24 hours.",
};

const features = [
  {
    title: "Flexible Hours",
    description: "Ride when you want. Morning, evening, weekends — you decide.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Daily Earnings",
    description: "Get paid per trip. Your earnings are tracked in real time in your rider app.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h2M12 15h2" />
      </svg>
    ),
  },
  {
    title: "Full Support",
    description: "Our team is here to help you with onboarding, issues, and questions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M21 3v6h-6" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Sign up", text: "Download the rider app and create your account in minutes." },
  { num: "02", title: "Get verified", text: "Upload your motorcycle license, bike papers, and a photo. We review within 24 hours." },
  { num: "03", title: "Go online", text: "Tap 'Go Online' when you're ready to ride. Accept or decline requests freely." },
  { num: "04", title: "Earn daily", text: "Get paid per trip. Withdraw your earnings whenever you need." },
];

const requirements = [
  "Valid Ghanaian motorcycle license (Class A)",
  "A registered motorcycle in good condition",
  "Two helmets (one for you, one for the passenger)",
  "Valid insurance and roadworthy certificate",
  "A smartphone with data (Android 8+ or iOS 13+)",
  "Clean record and background check",
];

export default function DrivePage() {
  return (
    <>
      {/* Hero — blue background, centered text, full-bleed image below */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Earn on your own schedule.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Set your own hours. Accept rides on your terms. Get paid every day. Join the
            OyeRide rider network and turn your motorcycle into income.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/drive/signup"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Sign up as a rider
            </Link>
            <Link
              href="#requirements"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              See requirements
            </Link>
          </div>
        </div>

        {/* Full-bleed image below */}
        <div className="w-full">
          <img
            src="/RiderImg4.png"
            alt="OyeRide rider on a motorcycle"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why ride with OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Everything you need to earn — on your own terms.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black ">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How to get started
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four steps from sign-up to your first trip.
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

      {/* Requirements — image + checklist */}
      <section id="requirements" className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What you need
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Meet these requirements and you&apos;re ready to start earning.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/RiderImg2.jpg"
                alt="OyeRide rider gearing up for a trip"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Checklist */}
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

      <OrderRide title="Start earning now!" imageSrc="RiderImg4.png" description="Download the OyeRide app on iOS and Android now and start earning instantly." />

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to start riding?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Sign up today. Get verified within 24 hours. Start earning tomorrow.
          </p>
          <Link
            href="/drive/signup"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Sign up as a rider
          </Link>
        </div>
      </section>
    </>
  );
}