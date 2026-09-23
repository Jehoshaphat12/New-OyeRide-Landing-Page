import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account — OyeRide",
  description:
    "Request full deletion of your OyeRide account and all associated personal data. Processed within 7 days.",
};

const deleteItems = [
  {
    title: "Account profile",
    description:
      "Name, email, phone number, password, and profile photo — removed from our authentication system.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
      </svg>
    ),
  },
  {
    title: "Trip & delivery history",
    description:
      "All past rides, deliveries, and gas refill records, including pickup and drop-off locations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Device & tokens",
    description:
      "Push notification tokens, device identifiers, and active session data — fully wiped.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Ratings & feedback",
    description:
      "Any ratings, reviews, or feedback you gave or received as a passenger, rider, or courier.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 15.09 8.26 22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01Z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    num: "01",
    title: "Day 0 — Request received",
    text: "We send you an acknowledgment email within 24 hours to confirm we've got your request.",
  },
  {
    num: "02",
    title: "Within 7 days — Data erased",
    text: "Your account, trip history, and all linked data are permanently deleted from our systems.",
  },
  {
    num: "03",
    title: "Day 7 — Final confirmation",
    text: "You receive one last email confirming that your data has been erased.",
  },
];

const faqs = [
  {
    q: "Can I recover my account after deletion?",
    a: "No. Account deletion is permanent and irreversible. Once your data is erased, you'd need to create a brand-new account if you want to use OyeRide again.",
  },
  {
    q: "What if I signed up with Google or Facebook?",
    a: "Even with social login, your OyeRide data is stored on our servers. The deletion process is the same — we remove all of it. You may also want to revoke OyeRide's access in your Google or Facebook account settings.",
  },
  {
    q: "How long does it take to fully delete my data?",
    a: "We complete deletion within 7 days. Account credentials are removed immediately. Backups cycle out within 30 days.",
  },
  {
    q: "Do I need to verify my identity?",
    a: "If you send the request from the email address linked to your OyeRide account, that's usually enough. For extra security, we may ask for a code sent to your phone number on file.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
        <span className="text-base font-semibold text-black ">
          {question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6eef9] text-[#054997] transition-transform group-open:rotate-45">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-sm leading-7 text-zinc-600 ">
        {answer}
      </div>
    </details>
  );
}

export default function DeleteAccountPage() {
  const deletionMailto = `mailto:hello@oyeridegh.com?subject=${encodeURIComponent(
    "Account Deletion Request — OyeRide"
  )}&body=${encodeURIComponent(
    `Hello OyeRide Team,

I would like to request the deletion of my OyeRide account and all associated personal data.

Account details:
- Full name: [please fill in]
- Email linked to account: [please fill in]
- Phone number (optional): [please fill in]

I understand this action is irreversible and my data will be permanently deleted.

Thank you.
— Sent via OyeRide Delete Account page`
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Delete your account
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            We&apos;re sorry to see you go. You can request full deletion of
            your OyeRide account and all associated personal data.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={deletionMailto}
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Request deletion
            </a>
            <Link
              href="#what"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              See what we delete
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/deleteHero.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20  lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base leading-8 text-zinc-700  sm:text-lg sm:leading-9">
            Deleting your OyeRide account is permanent. Once processed, your
            trip history, profile, and all linked data are gone — you can&apos;t
            undo it. If you&apos;re only looking for a copy of your data or to
            fix something, use our{" "}
            <Link
              href="/privacy/data-request"
              className="font-semibold text-[#054997] underline "
            >
              Data Rights Request portal
            </Link>{" "}
            instead.
          </p>
        </div>
      </section>

      {/* Two ways to delete */}
      <section className="bg-white pb-20  lg:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Two ways to delete
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Pick whichever suits your situation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* In-app */}
            <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-black ">
                Delete from the app
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 ">
                The fastest option if you still have the OyeRide app installed.
              </p>
              <ol className="mt-6 space-y-3">
                {[
                  "Open the OyeRide app and sign in",
                  "Go to Profile → Settings → Account",
                  "Tap Delete Account and confirm",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#054997] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 ">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Email */}
            <div className="flex flex-col rounded-2xl border-2 border-[#054997]/30 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-black ">
                Request via email
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 ">
                Don&apos;t have the app anymore? Send us a request from the
                email address linked to your OyeRide account.
              </p>
              <div className="mt-auto pt-6">
                <a
                  href={deletionMailto}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#054997] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#04356f]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  Send deletion email
                </a>
                <p className="mt-3 text-center text-xs text-zinc-500 ">
                  Opens your email app with a pre-filled message
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What gets deleted */}
      <section id="what" className="scroll-mt-24 bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What gets deleted
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Everything below is removed from our systems within 7 days.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deleteItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-base font-bold text-black ">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* What may be retained */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4M12 16h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-bold text-amber-900 ">
                  What may be retained
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-amber-800 ">
                  <li>
                    • <strong>Legal dispute records</strong> — if your account
                    is involved in an ongoing investigation, data may be
                    retained until resolution.
                  </li>
                  <li>
                    • <strong>Anonymised analytics</strong> — aggregated data
                    that can no longer be linked to you.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              What happens next
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Three steps from request to confirmation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <span className="text-3xl font-semibold text-[#054997] ">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-black ">
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

      {/* FAQ */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Common questions
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              What people ask before deleting.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#054997] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Changed your mind?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            If there&apos;s an issue we can fix, we&apos;d love to hear from you
            before you go.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@oyeridegh.com?subject=Feedback%20Before%20Deletion"
              className="inline-flex w-full justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-auto"
            >
              Share feedback
            </a>
            <a
              href={deletionMailto}
              className="inline-flex w-full justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Delete anyway
            </a>
          </div>
        </div>
      </section>
    </>
  );
}