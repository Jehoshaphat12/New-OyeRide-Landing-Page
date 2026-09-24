import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Oye Motor Delivery — Fast Parcel Delivery in Kasoa | OyeRide",
  description:
    "Send parcels, documents, and packages across Kasoa with OyeRide Motor Delivery. Real-time tracking, verified riders, and secure handling.",
};

const features = [
  {
    title: "Fast Pickup",
    description:
      "Riders nearby across Kasoa. Most pickups happen within 5 minutes of your request.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Live Tracking",
    description:
      "Watch your parcel move in real time from pickup to drop-off — right inside the app.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Secure Handling",
    description:
      "Your package is sealed, photographed at pickup, and delivered intact. Every time.",
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
    title: "Set pickup & drop-off",
    text: "Open the app and enter where the parcel is, and where it's going.",
  },
  {
    num: "02",
    title: "Describe the package",
    text: "Add a size and a short note so the rider knows what they're picking up.",
  },
  {
    num: "03",
    title: "We pick it up",
    text: "A nearby rider arrives, confirms the parcel, and secures it for the trip.",
  },
  {
    num: "04",
    title: "Delivered & confirmed",
    text: "Track the journey live. Get a notification the moment it's handed over.",
  },
];

const useCases = [
  {
    title: "Documents",
    description: "Contracts, certificates, ID cards, and paperwork that needs to move today.",
  },
  {
    title: "Small parcels",
    description: "Clothing, gadgets, books, cosmetics — anything that fits in a rider's box.",
  },
  {
    title: "Food & provisions",
    description: "Market items, takeaway, groceries for family or friends across town.",
  },
  {
    title: "Business deliveries",
    description: "Regular drops for shops and small businesses — one-off or on repeat.",
  },
];

const safetyPoints = [
  {
    title: "Sealed at pickup",
    text: "The rider photographs and seals your parcel before leaving the pickup point.",
  },
  {
    title: "Verified riders",
    text: "Every delivery rider passes ID, license, and background checks before their first job.",
  },
  {
    title: "Live tracking",
    text: "Follow the entire route on the map, from the moment a rider accepts the job.",
  },
  {
    title: "Proof of delivery",
    text: "You get a photo and confirmation the moment your parcel reaches the recipient.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Send anything, anywhere in Kasoa.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Parcels, documents, food — hand it to a rider and track it live to the door.
            OyeRide Motor Delivery gets it there the same day.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Send a parcel
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
            src="/Img1.png"
            alt="OyeRide motor delivery rider"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why deliver with OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Fast, tracked, and handled with care — from pickup to drop-off.
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

      <OrderRide title="Order a delivery Now!" imageSrc="/Img1.png" />

      {/* Use cases */}
            {/* Use cases */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="flex flex-col justify-center items-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
                What we deliver
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
                If it fits on a motorcycle, we&apos;ll get it there.
              </p>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/deliveryRider03.png"
                alt="OyeRide rider handing over a delivered parcel"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Copy + cards */}
            <div>
              

              <div className="mt-8 grid gap-4 sm:grid-cols-1">
                {useCases.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-5"
                  >
                    <h3 className="text-base font-bold text-black ">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 ">
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
      <section id="how" className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How it works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four steps from your hands to theirs.
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
                Your parcel is in good hands.
              </h2>
              <div className="relative mt-5 overflow-hidden rounded-3xl">
              <img
                src="/deliveryMan.png"
                alt="OyeRide rider handing over a delivered parcel"
                className="aspect-[4/5] w-full h-[30rem] object-cover object-top"
              />
            </div>
              <p className="mt-6 text-base leading-7 text-zinc-600 ">
                Every delivery is tracked, every rider is vetted, and every parcel is
                handled like it&apos;s our own. Send with confidence.
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
      <OrderRide title="Got something to send?" imageSrc="/deliveryRider05.png" description="Download the OyeRide app on iOS and Android now to send your parcel."/>
    </>
  );
}