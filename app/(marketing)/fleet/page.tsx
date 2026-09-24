import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Owners — Run a Rider Team on OyeRide",
  description:
    "List your motorcycle fleet on OyeRide. Manage multiple riders, track every trip, and earn from each one — with weekly payouts and a real dashboard.",
};

const benefits = [
  {
    title: "Earn from every rider",
    description:
      "Put more bikes on the road and earn from each one. Commission is calculated per trip, per rider — no hidden cuts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
  {
    title: "Track your whole fleet",
    description:
      "See every bike, every rider, and every trip live from one dashboard. Know who's online and where they are at any moment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Manage your team",
    description:
      "Add or remove riders any time. Assign bikes, monitor performance, and handle issues from the app — no paperwork.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Weekly payouts",
    description:
      "Earnings from all your riders are pooled and paid out to your account every week. Transparent, itemised, on schedule.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h2M12 15h2" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    text: "Tell us about your fleet — how many motorcycles you own and where you operate.",
  },
  {
    num: "02",
    title: "Get onboarded",
    text: "We verify your business, register your bikes, and set up your fleet account in the app.",
  },
  {
    num: "03",
    title: "Add your riders",
    text: "Invite riders to your fleet. Each one goes through the same vetting as an individual rider.",
  },
  {
    num: "04",
    title: "Earn weekly",
    text: "Every trip your riders complete contributes to your payout. Withdraw every week.",
  },
];

const requirements = [
  "A registered business or trading name",
  "A valid Ghanaian business registration or tax ID",
  "At least 3 motorcycles registered under your name or with written permission",
  "Each motorcycle in good condition with valid insurance and roadworthy",
  "Riders who pass OyeRide's standard background and license checks",
  "A bank account or mobile money number for weekly payouts",
];

const fleetTypes = [
  {
    title: "Independent fleet owners",
    description:
      "You own a handful of motorcycles and rent them to riders who earn on OyeRide.",
  },
  {
    title: "Rider cooperatives",
    description:
      "A group of riders who pool their bikes and manage operations together.",
  },
  {
    title: "Established transport businesses",
    description:
      "You already run a transport business and want to plug your existing fleet into OyeRide.",
  },
];

export default function FleetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Run a fleet. Earn from every ride.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            List your motorcycles on OyeRide, manage your riders, and grow
            your transport business with real-time tracking and weekly payouts.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#apply"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Apply now!
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
            src="/motorFleet.png"
            alt="OyeRide fleet of motorcycles lined up in Kasoa"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why list your fleet
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Everything you need to run a rider team — without building your own tech.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Who can apply */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Who can apply
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              If you manage multiple bikes, we&apos;d like to hear from you.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/fleetOwner.png"
                alt="Fleet owner managing riders in OyeRide"
                className="aspect-[4/5] w-full object-cover h-[400px]"
              />
            </div>

            {/* Fleet type cards */}
            <div className="flex flex-col gap-4">
              {fleetTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <h3 className="text-base font-bold text-black ">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-24 bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How it works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four steps from application to your first payout.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl bg-zinc-50 p-6"
              >
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
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What you need
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              A short checklist to register your fleet.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/fleetOwner2.png"
                alt="Fleet owner verifying motorcycle details"
                className="aspect-[4/5] w-full h-[450px] object-cover"
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

      {/* Apply CTA */}
      <section id="apply" className="scroll-mt-24 bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-[#054997] p-8 text-white sm:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to list your fleet?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85">
                Tell us about your motorcycles and riders. Our fleet team will
                reach out within 24 hours to get you set up.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:hello@oyeridegh.com?subject=${encodeURIComponent(
                    "Fleet Owner Application — OyeRide"
                  )}&body=${encodeURIComponent(
                    `Hello OyeRide Fleet Team,

I'd like to register my fleet on OyeRide.

Business name: [please fill in]
Number of motorcycles: [please fill in]
Location / operating area: [please fill in]
Number of riders: [please fill in]
Contact person: [please fill in]
Phone number: [please fill in]
Email: [please fill in]

Additional details:
[anything else we should know]

Thank you.
— Sent via OyeRide Fleet page`
                  )}`}
                  className="inline-flex w-full justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-auto"
                >
                  Start application
                </a>
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center rounded-full border-2 border-white/50 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Talk to us first
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/60">
                No setup fees · Fleet onboarding in under a week
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}