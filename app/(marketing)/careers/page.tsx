import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Build the Future of Transport in Ghana | OyeRide",
  description:
    "Join OyeRide. We're a small, tight team based in Kasoa, building the future of transport in Ghana. See open roles and how we work.",
};

const values = [
  {
    title: "Ship fast, learn faster",
    description:
      "We move quickly, test in the real world, and iterate on what we learn. Ideas are cheap — execution and feedback are everything.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Local first",
    description:
      "We build for Ghanaians, in Ghana. Every decision — pricing, features, hiring — is made with the local reality in mind.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Own your work",
    description:
      "Small team, real responsibility. You won't be a cog — you'll own entire projects from idea to launch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Take care of people",
    description:
      "Our riders, couriers, and customers come first. If a decision hurts them, we don't ship it.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

const openRoles = [
  {
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Kasoa, Ghana",
    description:
      "Build features across the OyeRide app — from the rider experience to internal operations tools. React Native, Node, and Firebase.",
  },
  {
    title: "Operations Lead",
    type: "Full-time",
    location: "Kasoa, Ghana",
    description:
      "Own rider and courier onboarding, quality, and city expansion. You'll work directly with our teams on the ground.",
  },
  {
    title: "Customer Support Associate",
    type: "Full-time",
    location: "Kasoa, Ghana",
    description:
      "Be the voice of OyeRide for our passengers, riders, and couriers. Handle live trip issues and follow-ups by email.",
  },
];

const perks = [
  "Competitive salary in GHS, paid monthly",
  "Flexible hours and remote-friendly for tech roles",
  "Paid time off — 20 days per year plus public holidays",
  "Learning budget for courses, books, and conferences",
  "Free OyeRide rides for work-related travel",
  "Snacks, drinks, and a relaxed workspace in Kasoa",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Build the future of transport in Ghana.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            We&apos;re a small, tight team based in Kasoa. If you want to help
            move millions of people across Ghana, we&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#roles"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              See open roles
            </Link>
            <Link
              href="#how-we-work"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              How we work
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/careersHero.png"
            alt="The OyeRide team at work in Kasoa"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="scroll-mt-24 bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              How we work
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Four principles that guide every decision at OyeRide.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black ">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="scroll-mt-24 bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Open roles
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              {openRoles.length} position{openRoles.length === 1 ? "" : "s"} currently open.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-black ">
                        {role.title}
                      </h3>
                      <span className="inline-flex rounded-full bg-[#e6eef9] px-3 py-1 text-xs font-semibold text-[#054997]">
                        {role.type}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-500 ">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {role.location}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 ">
                      {role.description}
                    </p>
                  </div>

                  <a
                    href={`mailto:hello@oyeridegh.com?subject=${encodeURIComponent(
                      `Application — ${role.title}`
                    )}&body=${encodeURIComponent(
                      `Hello OyeRide Team,\n\nI'd like to apply for the ${role.title} role.\n\nPlease find my CV and any relevant links below.\n\n— [Your name]`
                    )}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#054997] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#04356f]"
                  >
                    Apply now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/careersTeam.png"
                alt="The OyeRide team"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Perks list */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
                What we offer
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 ">
                Working at OyeRide comes with real benefits — not the ping-pong
                table kind.
              </p>

              <ul className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 ">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* No matching role CTA */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
            Don&apos;t see your role?
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 ">
            We&apos;re growing fast and always interested in meeting talented
            people. If you think you can help us move Ghana, send us a note
            telling us how.
          </p>
          <a
            href="mailto:hello@oyeridegh.com?subject=Careers%20-%20General%20Interest"
            className="mt-8 inline-flex rounded-full bg-[#054997] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#04356f]"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Come build with us.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/85">
            The future of transport in Ghana is being built right now. Be part of it.
          </p>
          <Link
            href="#roles"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            See open roles
          </Link>
        </div>
      </section>
    </>
  );
}