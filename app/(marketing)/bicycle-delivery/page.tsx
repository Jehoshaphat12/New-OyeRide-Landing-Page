import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Oye Bicycle Delivery — Eco-Friendly Delivery in Kasoa | OyeRide",
  description:
    "Zero-emission bicycle delivery for documents, food, and small parcels in Kasoa. Cheaper than motor, faster than walking. Book in the OyeRide app.",
};

const features = [
  {
    title: "Zero Emissions",
    description:
      "Every bicycle delivery keeps CO₂ out of Kasoa's air. Good for the planet, good for your lungs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Lowest Fares",
    description:
      "Bicycle delivery costs less than a motor ride. Perfect when speed matters but cost matters more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
      </svg>
    ),
  },
  {
    title: "Fast in Short Trips",
    description:
      "Within a few kilometres, bicycles slip through traffic faster than any motor can.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
];

const useCases = [
  {
    title: "Documents",
    description:
      "Contracts, certificates, letters, and paperwork — flat, light, and urgent.",
  },
  {
    title: "Small parcels",
    description:
      "Phones, chargers, cosmetics, and any small item that fits in a courier bag.",
  },
  {
    title: "Food & takeaway",
    description:
      "Lunch to the office, dinner to a friend — short hops across the neighbourhood.",
  },
  {
    title: "Neighbourhood drops",
    description:
      "Anything going less than a few kilometres. Cheap, quick, and clean.",
  },
];

const steps = [
  {
    num: "01",
    title: "Set the route",
    text: "Open the app, choose Bicycle Delivery, and enter pickup and drop-off.",
  },
  {
    num: "02",
    title: "Describe the item",
    text: "Tell us what it is and how big — so the right bag comes for it.",
  },
  {
    num: "03",
    title: "We collect it",
    text: "A nearby bicycle courier arrives, checks the item, and secures it.",
  },
  {
    num: "04",
    title: "Delivered clean",
    text: "Tracked door to door. No fumes, no noise, just a hand-off.",
  },
];

const safetyPoints = [
  {
    title: "Verified couriers",
    text: "Every bicycle courier is vetted with ID and background checks before their first delivery.",
  },
  {
    title: "Sealed at pickup",
    text: "Your item is photographed and secured before the courier leaves.",
  },
  {
    title: "Live tracking",
    text: "Watch the ride move across the map — from pickup, through the streets, to the door.",
  },
  {
    title: "Proof of delivery",
    text: "You get a confirmation and photo the moment the recipient receives it.",
  },
];

export default function BicycleDeliveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Clean delivery, close to home.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Zero-emission bicycle delivery for documents, food, and small parcels
            in Kasoa. Cheaper than motor, kinder to the air.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Send with a bicycle
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
            src="/bicycleRider02.png"
            alt="OyeRide bicycle courier making a delivery in Kasoa"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Why choose bicycle delivery
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              The greenest way to move small things across Kasoa.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases with image */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              What we carry
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Light, small, and short-distance. That&apos;s our sweet spot.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/bicycleRider4.png"
                alt="OyeRide bicycle courier delivering a parcel"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Copy + cards */}
            <div>
              <div className="grid gap-4 sm:grid-cols-1">
                {useCases.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <h3 className="text-base font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              How it works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Four steps, zero emissions.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
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

      {/* Safety */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
                Your parcel is in good hands.
              </h2>
              <div className="relative mt-5 overflow-hidden rounded-3xl">
              <img
                src="/bicycleRider02.png"
                alt="OyeRide rider handing over a delivered parcel"
                className="aspect-[4/5] w-full h-[30rem] object-cover object-top"
              />
            </div>
              <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Bicycle couriers follow the same vetting, tracking, and proof-of-delivery
                standard as every other OyeRide service. Small vehicle, same trust.
              </p>
              <Link
                href="/safety"
                className="mt-8 inline-flex rounded-full bg-[#054997] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#04356f]"
              >
                Learn more about safety
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {safetyPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-black dark:text-white">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
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
      <OrderRide title="Send something small, the clean way." imageSrc="/bicycleRider4.png" PushAside={true}/>
    </>
  );
}