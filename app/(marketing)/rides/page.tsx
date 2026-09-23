import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Book a Ride — OyeRide Motorcycle Rides in Kasoa",
  description:
    "Book a motorcycle ride in Kasoa in seconds. Verified riders, upfront pricing, and real-time tracking. Get where you're going, fast.",
};

const features = [
  {
    title: "Fast Pickup",
    description:
      "Riders nearby in every part of Kasoa. Average pickup under 5 minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Fair Prices",
    description:
      "Transparent fares shown before you book. No haggling, no hidden charges.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
      </svg>
    ),
  },
  {
    title: "Safe Rides",
    description:
      "Every rider is verified. Helmet provided. Track your trip from pickup to drop-off.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Set your destination",
    text: "Open the app and enter where you're going. See the fare upfront.",
  },
  {
    num: "02",
    title: "Confirm your ride",
    text: "Tap to book. A nearby rider accepts within seconds.",
  },
  {
    num: "03",
    title: "Meet your rider",
    text: "See their name, photo, and live location. Track them to your pickup point.",
  },
  {
    num: "04",
    title: "Arrive safely",
    text: "Pay with cash or mobile money. Rate your trip and you're done.",
  },
];

const safetyPoints = [
  {
    title: "Verified riders",
    text: "Every rider passes ID, license, and motorcycle checks before their first trip.",
  },
  {
    title: "Live trip tracking",
    text: "Follow your ride on the map from pickup to drop-off. Know exactly where you are.",
  },
  {
    title: "Share your trip",
    text: "Send your trip details to a friend or family member with one tap.",
  },
  {
    title: "24/7 support",
    text: "Something wrong? Our team is one tap away, day or night.",
  },
];

export default function RidesPage() {
  return (
    <>
      {/* Hero — blue, matches home hero structure */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Your ride, seconds away.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Book a motorcycle ride in Kasoa in seconds. Verified riders, upfront pricing,
            and real-time tracking — from pickup to drop-off.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Book a ride
            </Link>
            <Link
              href="#how"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              How it works
            </Link>
          </div>
        </div>

        {/* Full-bleed image below */}
        <div className="w-full">
          <img
            src="/heroImg2.png"
            alt="OyeRide rider on the road"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why riders choose OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Fast, fair, and safe — every trip, every time.
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
      <section id="how" className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How it works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Book a ride in four simple steps.
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

      {/* Safety */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
                Your safety comes first.
              </h2>
              <div className="relative overflow-hidden mt-5 rounded-3xl">
              <img
                src="/ride00.png"
                alt="OyeRide rider gearing up for a trip"
                className="aspect-[4/5] w-full h-[30rem] object-cover"
              />
            </div>
              <p className="mt-6 text-base leading-7 text-zinc-600 ">
                Every OyeRide trip is built on trust. We vet our riders, track every journey,
                and give you the tools to ride with confidence — day or night.
              </p>
              <Link
                href="/safety"
                className="mt-8 inline-flex rounded-full bg-[#054997] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#04356f]"
              >
                Learn more about safety
              </Link>
              {/* Image */}
            
            </div>

            {/* Right: safety points */}
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
      {/* <section className="bg-[#054997] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to ride?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Download the app and book your first ride in seconds.
          </p>
          <Link
            href="/download"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Get the app
          </Link>
        </div>
      </section> */}
      <OrderRide title="Ready to ride?"/>
    </>
  );
}