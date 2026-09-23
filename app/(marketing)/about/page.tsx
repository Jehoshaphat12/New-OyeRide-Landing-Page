import Link from "next/link";
import type { Metadata } from "next";
import { OrderRide } from "@/components/marketing/orderRide";

export const metadata: Metadata = {
  title: "About OyeRide — Moving Kasoa, One Ride at a Time",
  description:
    "OyeRide is Kasoa's motorcycle ride-hailing service. Fast, fair, and safe transport for everyone — riders, couriers, and businesses.",
};

const values = [
  {
    title: "Safety first",
    description:
      "Every rider is vetted, every trip is tracked, and every passenger gets a helmet. No shortcuts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Fair for everyone",
    description:
      "Riders keep more of every fare. Passengers pay a clear, upfront price. No hidden cuts, no surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Built for Ghana",
    description:
      "We understand local roads, local needs, and local pricing. OyeRide is designed here, for here.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Always improving",
    description:
      "Every ride teaches us something. We ship updates weekly and listen to feedback from riders and passengers alike.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3", label: "Services offered" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Verified riders" },
  { value: "Kasoa", label: "Built for" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#054997] text-white">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Moving Kasoa forward.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg font-semibold leading-7 text-white/85">
            OyeRide is a Ghanaian ride-hailing company built for the way people actually
            move. Fast, fair, and safe — for riders, passengers, and businesses alike.
          </p>
        </div>
      </section>

      {/* Story */}
            {/* Story */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/ride01.png"
                alt="OyeRide riders on the road in Kasoa"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Copy */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
                Our story
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-9">
                <p>
                  Kasoa moves fast. But for too long, getting around has meant long waits,
                  unpredictable prices, and the same old frustrations — no matter whether you
                  were hailing a taxi, catching a trotro, or flagging down a motorbike.
                </p>
                <p>
                  We started OyeRide because we believed transport could be simpler. Not with
                  fancy tech or complicated promises, but with the basics done well: a clean
                  app, verified riders, transparent pricing, and support when you need it.
                </p>
                <p>
                  Today, OyeRide connects thousands of passengers, riders, couriers, and
                  businesses every week. We&apos;re growing, and we&apos;re just getting
                  started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              What we stand for
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Four principles that guide every decision we make.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-white py-16 dark:bg-black lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold tracking-tight text-[#054997] sm:text-4xl lg:text-5xl dark:text-[#7bb3e8]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            We&apos;re hiring.
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            We&apos;re a small, tight team based in Kasoa. If you want to help build the
            future of transport in Ghana, we&apos;d love to hear from you.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex rounded-full bg-[#054997] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#04356f]"
          >
            See open roles
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <OrderRide title="Ready to ride with us?" />
    </>
  );
}