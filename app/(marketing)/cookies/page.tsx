import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — OyeRide",
  description:
    "How OyeRide uses cookies and similar technologies on our website and app. Learn what we store and how to control it.",
};

const sections = [
  {
    id: "what-are-cookies",
    heading: "1. What are cookies?",
    body: [
      "Cookies are small text files that a website or app stores on your device. They help the site remember information about your visit — like your preferences or whether you're logged in — so you don't have to re-enter it every time.",
      "We also use similar technologies like local storage and device identifiers. Throughout this policy, \"cookies\" refers to all of these technologies collectively.",
    ],
  },
  {
    id: "how-we-use",
    heading: "2. How OyeRide uses cookies",
    body: [
      "We use cookies for four purposes: to keep you signed in, to remember your preferences, to understand how the app and website are being used, and to keep the platform safe from fraud.",
      "We do not use cookies to serve you targeted advertising from third parties, and we do not sell cookie data.",
    ],
  },
  {
    id: "types",
    heading: "3. The types of cookies we use",
    body: [
      "The table below explains each category. You can control most of them from your device or browser settings — see section 5 for details.",
    ],
    table: [
      {
        type: "Strictly necessary",
        purpose:
          "Keep you signed in, secure your session, and route requests to the right server. These cannot be turned off without breaking the app.",
        example: "Session token, CSRF protection",
      },
      {
        type: "Preferences",
        purpose:
          "Remember settings like your language, notification preferences, and last-used city.",
        example: "Language, saved location",
      },
      {
        type: "Analytics",
        purpose:
          "Help us understand how the app is used — which screens are visited, where users drop off, what's slow. All data is aggregated and anonymous.",
        example: "Page views, feature usage",
      },
      {
        type: "Performance & security",
        purpose:
          "Detect suspicious activity, block abuse, and keep the platform fast and reliable.",
        example: "Rate limiting, fraud detection",
      },
    ],
  },
  {
    id: "third-party",
    heading: "4. Third-party cookies",
    body: [
      "Some of the tools we use set their own cookies. These include our cloud infrastructure providers, our payment processor, and our analytics service.",
      "We choose these providers carefully and require them to protect your data under contract. You can find a current list by emailing hello@oyeridegh.com.",
    ],
  },
  {
    id: "control",
    heading: "5. How to control cookies",
    body: [
      "You can control or delete cookies in a few ways:",
    ],
    bullets: [
      "In the OyeRide app, go to Profile → Settings → Privacy to manage optional cookies.",
      "In your mobile device settings, you can limit ad tracking and reset your advertising identifier.",
      "In your web browser, you can block or delete cookies from the browser's privacy settings.",
      "You can also opt out of analytics by emailing hello@oyeridegh.com.",
    ],
  },
  {
    id: "changes",
    heading: "6. Changes to this policy",
    body: [
      "We may update this policy when we add new tools or change how we use cookies. When we do, we'll change the date at the top of this page.",
      "Continuing to use OyeRide after changes means you accept the updated policy.",
    ],
  },
  {
    id: "contact",
    heading: "7. Contact us",
    body: [
      "For any question about this policy or our use of cookies, email hello@oyeridegh.com. We respond to all privacy-related inquiries within 30 days.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Cookie Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            How we use cookies and similar technologies — and how you can control
            what we store on your device.
          </p>
          <p className="mt-6 text-sm font-medium text-white/60">
            Last updated: September 2026
          </p>
        </div>

        <div className="w-full">
          <img
            src="/cookiesHero.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 dark:bg-black lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-9">
            This policy explains what cookies are, why OyeRide uses them, and
            how you can turn them off. It applies to the OyeRide mobile app and
            the website at oyeridegh.com.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white pb-20 dark:bg-black lg:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-black sm:text-2xl dark:text-white">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-base leading-7 text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#054997] dark:bg-[#7bb3e8]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Cookie types table */}
                {section.table && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead className="bg-zinc-50 dark:bg-zinc-900">
                        <tr>
                          <th className="px-4 py-3 font-bold text-black dark:text-white">
                            Type
                          </th>
                          <th className="px-4 py-3 font-bold text-black dark:text-white">
                            Purpose
                          </th>
                          <th className="hidden px-4 py-3 font-bold text-black sm:table-cell dark:text-white">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {section.table.map((row) => (
                          <tr
                            key={row.type}
                            className="bg-white align-top dark:bg-zinc-950"
                          >
                            <td className="px-4 py-4 font-semibold text-black dark:text-white">
                              {row.type}
                            </td>
                            <td className="px-4 py-4 leading-6 text-zinc-600 dark:text-zinc-400">
                              {row.purpose}
                            </td>
                            <td className="hidden px-4 py-4 leading-6 text-zinc-500 sm:table-cell dark:text-zinc-500">
                              {row.example}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-950 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-black dark:text-white">
            Related pages
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/privacy"
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-[#054997] dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm font-bold text-black dark:text-white">
                Privacy Center
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                All privacy notices by service
              </p>
            </Link>
            <Link
              href="/terms"
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-[#054997] dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm font-bold text-black dark:text-white">
                Terms of Service
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                The rules for using OyeRide
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions about cookies?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/85">
            We&apos;re happy to explain anything in more detail.
          </p>
          <a
            href="mailto:hello@oyeridegh.com?subject=Cookie%20Policy%20Question"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Email us
          </a>
        </div>
      </section>
    </>
  );
}