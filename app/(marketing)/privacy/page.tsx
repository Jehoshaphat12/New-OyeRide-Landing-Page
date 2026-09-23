import Link from "next/link";
import type { Metadata } from "next";
import { privacyCategories, privacyNotices } from "@/lib/privacy-notices";

export const metadata: Metadata = {
  title: "Privacy Center — OyeRide",
  description:
    "Explore OyeRide privacy notices for passengers, riders, couriers, merchants, and businesses. Submit data requests and access legal information.",
};

const utilityPortals = [
  {
    title: "Personal data request",
    description:
      "Request access to, correction of, or deletion of your OyeRide data. Takes about 2 minutes.",
    href: "/privacy/data-request",
    accent: "blue" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
      </svg>
    ),
  },
  {
    title: "Law enforcement request",
    description:
      "For authorised law enforcement agencies submitting official data requests. Guidelines and secure submission form.",
    href: "/privacy/law-enforcement",
    accent: "dark" as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function PrivacyPage() {
  const noticesBySlug = Object.fromEntries(
    privacyNotices.map((n) => [n.slug, n])
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy at OyeRide
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Explore privacy notices for every OyeRide service — or submit a
            personal data request directly.
          </p>
        </div>

        <div className="w-full">
          <img
            src="/privacyHero.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Utility portals */}
      <section className="bg-white py-20  lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
              Quick actions
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              The two most common requests — one tap away.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {utilityPortals.map((portal) => (
              <Link
                key={portal.href}
                href={portal.href}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-8 transition hover:-translate-y-0.5 hover:shadow-xl ${
 portal.accent === "blue"
 ? "bg-[#054997] text-white"
 : "bg-zinc-900 text-white "
 }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                  {portal.icon}
                </span>
                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  {portal.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  {portal.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Get started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy notices by category */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Privacy notices by service
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Each notice explains what we collect and how we handle it for that
              service.
            </p>
          </div>

          <div className="mt-16 space-y-14">
            {privacyCategories.map((category) => {
              const notices = category.slugs
                .map((slug) => noticesBySlug[slug])
                .filter(Boolean);

              return (
                <div key={category.name}>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black sm:text-2xl ">
                      {category.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-600 ">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {notices.map((notice) => (
                      <Link
                        key={notice.slug}
                        href={`/privacy/${notice.slug}`}
                        className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md"
                      >
                        <h4 className="text-base font-bold text-black ">
                          {notice.title}
                        </h4>
                        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 ">
                          {notice.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#054997] ">
                          Read notice
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/85">
            Our team is happy to help with anything about your data.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@oyeridegh.com?subject=Privacy%20Question"
              className="inline-flex w-full justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-auto"
            >
              Email us
            </a>
            <Link
              href="/help"
              className="inline-flex w-full justify-center rounded-full border-2 border-white/60 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Visit help center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}