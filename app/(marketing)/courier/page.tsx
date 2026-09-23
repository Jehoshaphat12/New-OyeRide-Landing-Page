import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "Become a Courier — Earn Delivering with OyeRide",
  description:
    "Join the OyeRide courier network. Deliver parcels on a motorcycle or bicycle, work when you want, and earn daily in Kasoa.",
};

const courierTypes = [
  {
    title: "Motor Courier",
    description:
      "Deliver parcels, documents, and small packages across Kasoa on your motorcycle. Longer distances, bigger loads, higher earnings.",
    image: "/delivery1.png",
    requirements: [
      "Motorcycle license (Class A)",
      "Registered motorcycle in good condition",
      "A phone mount and secure delivery box",
    ],
    href: "/courier/motor",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
  {
    title: "Bicycle Courier",
    description:
      "Deliver documents, food, and small parcels on your bicycle. Short distances, low overhead, zero fuel costs.",
    image: "/bicycleRider02.png",
    requirements: [
      "A bicycle in good condition",
      "A delivery backpack or rear rack",
      "A smartphone with data",
    ],
    href: "/courier/bicycle",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Flexible Hours",
    description:
      "Deliver when it suits you. Morning runs, evening drops, weekend batches — you decide.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Earn Per Delivery",
    description:
      "Every completed delivery pays. Track your earnings in real time and withdraw whenever you need.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h2M12 15h2" />
      </svg>
    ),
  },
  {
    title: "Full Support",
    description:
      "Our team helps with onboarding, deliveries, payments, and any questions you have along the way.",
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
  {
    num: "01",
    title: "Apply",
    text: "Download the app and register as a courier. Choose motor or bicycle.",
  },
  {
    num: "02",
    title: "Get verified",
    text: "Upload your ID, vehicle papers (motorcycle only), and a photo. Review takes up to 24 hours.",
  },
  {
    num: "03",
    title: "Go online",
    text: "Tap 'Go Online' when you're ready. Accept or skip delivery requests freely.",
  },
  {
    num: "04",
    title: "Deliver & earn",
    text: "Deliver, get paid per drop-off. Withdraw anytime from the app.",
  },
];

export default function CourierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Earn on every delivery.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Join the OyeRide courier network. Deliver parcels on a motorcycle or
            bicycle, work when it suits you, and get paid for every drop-off.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courier/signup"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Sign up as a courier
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
            src="/deliveryMan.png"
            alt="OyeRide courier making a delivery"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why deliver with OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Flexible, straightforward, and paid per delivery.
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

      {/* Pick your vehicle — background image cards with gradient */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Pick your vehicle
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Motorcycle or bicycle — both earn. Choose what fits your life.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {courierTypes.map((type) => (
              <article
                key={type.title}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Background image */}
                <img
                  src={type.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay — solid bottom-left, transparent top-right */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-8 text-white lg:min-h-[600px] lg:p-10">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    {type.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                    {type.description}
                  </p>

                  {/* Requirements */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                      You&apos;ll need
                    </p>
                    <ul className="mt-3 space-y-2">
                      {type.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2.5 text-sm text-white/90"
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white text-[#054997]">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m5 13 4 4L19 7" />
                            </svg>
                          </span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={type.href}
                      className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#054997] transition hover:bg-zinc-100"
                    >
                      Apply as {type.title.split(" ")[0].toLowerCase()} courier
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20  lg:py-28">
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

      {/* Requirements — image + 2 checklist cards */}
      <section id="requirements" className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What you need
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Basic requirements to get started as an OyeRide courier.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/bicycleRider.png"
                alt="OyeRide couriers preparing for delivery"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Checklist cards */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-bold text-black ">
                  For all couriers
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Valid Ghana ID or passport",
                    "A smartphone with data (Android 8+ or iOS 13+)",
                    "A registered SIM card in your name",
                    "Clean record and background check",
                    "Bank account or mobile money for payouts",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-zinc-700 "
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base font-bold text-black ">
                  For motor couriers only
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Valid motorcycle license (Class A)",
                    "Registered motorcycle in good condition",
                    "Two helmets (you and the parcel box)",
                    "Valid insurance and roadworthy certificate",
                    "A secure delivery box mounted on the bike",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-zinc-700 "
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrderRide title="Start earning now!" imageSrc="" description="Download the OyeRide app on iOS and Android now to start earning some extra money."/>

      {/* Final CTA */}
      <section className="bg-[#070707] py-20 text-white lg:py-28">
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
            Sign up as a courier
          </Link>
        </div>
      </section>
    </>
  );
}