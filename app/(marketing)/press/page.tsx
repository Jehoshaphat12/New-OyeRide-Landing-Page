import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media — OyeRide",
  description:
    "Press resources, brand assets, and media contact for OyeRide. For interviews, logos, or press inquiries, reach our team.",
};

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Kasoa, Ghana" },
  { label: "Services", value: "Rides, Delivery, Bicycle, Gas" },
  { label: "Coverage", value: "Kasoa, Central Region" },
];

const coverage = [
  {
    outlet: "Modern Ghana",
    headline:
      "OyeRide launches motorcycle hailing service in Kasoa with focus on safety and fair pricing.",
    date: "August 2024",
    href: "#",
  },
  {
    outlet: "Ghana Web",
    headline:
      "Local startup OyeRide expands services with bicycle and gas delivery for Kasoa residents.",
    date: "January 2025",
    href: "#",
  },
  {
    outlet: "Business & Financial Times",
    headline:
      "Ride-hailing in Ghana's Central Region: how OyeRide is competing on reliability.",
    date: "June 2025",
    href: "#",
  },
];

const assets = [
  {
    title: "Primary logo (light background)",
    description: "Full wordmark, PNG, transparent, 2000×600px.",
    href: "/brand/oyeride-logo-light.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "Primary logo (dark background)",
    description: "Full wordmark, PNG, transparent, 2000×600px.",
    href: "/brand/oyeride-logo-dark.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    title: "App icon",
    description: "Square icon, PNG, 1024×1024px, no transparency.",
    href: "/brand/oyeride-icon.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Brand colors",
    description: "Primary blue #054997, accent white, neutral zinc palette.",
    href: "/brand/oyeride-colors.pdf",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="1.5" />
        <circle cx="17.5" cy="10.5" r="1.5" />
        <circle cx="8.5" cy="7.5" r="1.5" />
        <circle cx="6.5" cy="12.5" r="1.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" />
      </svg>
    ),
  },
];

const guidelines = [
  "Refer to the company as \"OyeRide\" (one word, capital O and R).",
  "Do not alter the logo — no color changes, distortion, or added effects.",
  "Leave clear space around the logo equal to at least the height of the \"O\".",
  "Use the light-background logo on white or light backgrounds, and the dark-background version on dark surfaces.",
  "If you're unsure whether your use is permitted, contact us before publishing.",
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Press & media
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Brand assets, company facts, and a direct line to our team for
            journalists, editors, and media partners.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@oyeridegh.com?subject=Press%20Inquiry"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Press contact
            </a>
            <Link
              href="#assets"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              Download assets
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/pressHero.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Company facts */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Company at a glance
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              The core facts for your story.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {fact.label}
                </div>
                <div className="mt-3 text-xl font-semibold text-black dark:text-white">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-base font-bold text-black dark:text-white">
              About OyeRide
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              OyeRide is a Kasoa-based ride-hailing and delivery company serving
              Ghana&apos;s Central Region. We connect passengers with vetted
              motorcycle riders, offer same-day parcel and bicycle delivery, and
              provide doorstep gas cylinder refills. Founded in 2024, OyeRide is
              built for the way Ghanaians actually move.
            </p>
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section id="assets" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Brand assets
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Download official logos, icons, and brand guidelines.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {assets.map((asset) => (
              <a
                key={asset.title}
                href={asset.href}
                className="group flex items-start gap-5 rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {asset.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-black dark:text-white">
                      {asset.title}
                    </h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-[#054997]">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {asset.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Usage guidelines */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <h3 className="text-base font-bold text-black dark:text-white">
              Logo usage guidelines
            </h3>
            <ul className="mt-4 space-y-2.5">
              {guidelines.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#054997] dark:bg-[#7bb3e8]" />
                  <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {g}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Press coverage */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              In the news
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Recent coverage of OyeRide.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {coverage.map((item) => (
              <a
                key={item.headline}
                href={item.href}
                className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
              >
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  <span className="text-[#054997] dark:text-[#7bb3e8]">
                    {item.outlet}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-black transition group-hover:text-[#054997] dark:text-white dark:group-hover:text-[#7bb3e8] sm:text-xl">
                  {item.headline}
                </h3>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Want to be added to this list?{" "}
            <a
              href="mailto:hello@oyeridegh.com?subject=Press%20Coverage"
              className="font-semibold text-[#054997] underline dark:text-[#7bb3e8]"
            >
              Let us know
            </a>
            .
          </p>
        </div>
      </section>

      {/* Press contact */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-[#054997] p-8 text-white sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Media inquiries
            </h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              For interviews, comments, or additional information, reach our
              team directly. We respond to press inquiries within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@oyeridegh.com?subject=Press%20Inquiry"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#054997] transition hover:bg-zinc-100"
              >
                Email press team
              </a>
              <Link
                href="/contact"
                className="inline-flex rounded-full border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                General contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}