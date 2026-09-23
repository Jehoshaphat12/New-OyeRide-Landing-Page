import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Gas Refill Delivery — OyeRide | Refill Without Leaving Home",
  description:
    "Order a gas cylinder refill from the OyeRide app and get it delivered to your door in Kasoa. No queues, no carrying — just order and stay home.",
};

const features = [
  {
    title: "Doorstep Delivery",
    description:
      "We pick up your empty cylinder, refill it, and bring it back — you never leave the house.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12 12 3l9 9M5 10v10a1 1 0 0 0 1 1h4M19 10v10a1 1 0 0 1-1 1h-4" />
        <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
  },
  {
    title: "Verified Refill Points",
    description:
      "We only work with certified refill stations. Every cylinder is checked and sealed before it reaches you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Same-Day Service",
    description:
      "Order in the morning, cook with gas by evening. Most refills are completed within a few hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Order in the app",
    text: "Open OyeRide, choose Gas Refill, and enter your address and cylinder size.",
  },
  {
    num: "02",
    title: "We pick it up",
    text: "A nearby rider arrives to collect your empty cylinder from your doorstep.",
  },
  {
    num: "03",
    title: "We refill it",
    text: "Your cylinder goes to a verified refill station and is checked before sealing.",
  },
  {
    num: "04",
    title: "Back to your kitchen",
    text: "We deliver the refilled cylinder straight to your door — ready to use.",
  },
];

const safetyPoints = [
  {
    title: "Certified refill stations only",
    text: "Every refill happens at a licensed station. No roadside filling, no shortcuts.",
  },
  {
    title: "Cylinders inspected",
    text: "We check every cylinder for leaks, damage, and expiry before accepting it for refill.",
  },
  {
    title: "Handled by trained riders",
    text: "Our gas-refill riders are trained in safe handling and transport of LPG cylinders.",
  },
  {
    title: "Live tracking",
    text: "Follow your cylinder's journey in the app — from pickup, to refill, back to your door.",
  },
];

const sizes = [
  { size: "3kg", label: "Small", use: "Perfect for singles or small households" },
  { size: "6kg", label: "Medium", use: "Ideal for couples or small families" },
  { size: "12.5kg", label: "Standard", use: "The most common size for family homes" },
  { size: "14.5kg", label: "Large", use: "For bigger households and small businesses" },
];

export default function GasRefillPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Gas refill, at your door.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Skip the queue and the heavy lifting. Order a refill in the OyeRide app and
            we&apos;ll pick up, refill, and return your cylinder the same day.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Order a refill
            </Link>
            <Link
              href="#how"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/gasRider02.png"
            alt="OyeRide gas cylinder refill delivery"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why refill with OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Safe, verified, and delivered to your kitchen — every time.
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

              <OrderRide title="Running low? Order a refill." imageSrc="/gasRider01.png"/>

      {/* Cylinder sizes */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Every cylinder size
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              From small kitchen cylinders to large family tanks — we handle them all.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sizes.map((item) => (
              <div
                key={item.size}
                className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"
              >
                <div className="text-3xl font-semibold text-[#054997] ">
                  {item.size}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-zinc-500 ">
                  {item.label}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 ">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How it works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four steps from empty to full.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl bg-zinc-50 p-6">
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

      {/* Safety */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
                Handled with care.
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600 ">
                LPG is safe when handled properly — and we take that seriously. Every
                cylinder, every trip, every step is checked so you can cook with
                confidence.
              </p>
               <div className="relative mt-5 overflow-hidden rounded-3xl">
              <img
                src="/gas-refill01.png"
                alt="OyeRide rider handing over a delivered parcel"
                className="aspect-[4/5] w-full h-[30rem] object-cover object-top"
              />
            </div>
            </div>

            <div className="flex flex-col gap-5">
              {safetyPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-black ">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-600 ">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <OrderRide title="Running low? Order a refill." imageSrc="/gasRider01.png"/>
    </>
  );
}