import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up as a Rider — OyeRide",
  description:
    "How to sign up as an OyeRide rider. Download the app, upload your documents, and get verified within 24 hours.",
};

const checklist = [
  "Your Ghana ID or passport",
  "Your motorcycle license (Class A)",
  "Your motorcycle's registration and insurance papers",
  "A clear photo of yourself",
  "Your bank account or mobile money number",
];

const steps = [
  {
    num: "01",
    title: "Download the app",
    text: "Get OyeRide free from Google Play or the App Store.",
  },
  {
    num: "02",
    title: "Tap 'Sign up as a rider'",
    text: "On the welcome screen, choose the rider sign-up option.",
  },
  {
    num: "03",
    title: "Upload your documents",
    text: "Take photos of your ID, license, and bike papers directly in the app.",
  },
  {
    num: "04",
    title: "Get verified",
    text: "Our team reviews your application within 24 hours. You'll be notified when you're approved.",
  },
];

export default function RiderSignupPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <Link
            href="/drive"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Ride with Us
          </Link>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Sign up as a rider.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Rider sign-up happens directly in the OyeRide app. Download it,
            upload your documents, and you&apos;ll be earning within 24 hours.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Download the app
            </Link>
            <Link
              href="#steps"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              See the steps
            </Link>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/signupRider.png"
            alt="Rider signing up in the OyeRide app"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white py-20 dark:bg-black lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-[#054997]/20 bg-[#e6eef9]/50 p-8 text-center dark:border-[#7bb3e8]/20 dark:bg-[#0a2b56]/40">
            <p className="text-base leading-7 text-[#054997] dark:text-[#7bb3e8]">
              <strong>Why in the app?</strong> Because we verify your identity
              in real time — you photograph your ID and license directly in the
              app so we can confirm everything quickly and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="scroll-mt-24 bg-white pb-20 dark:bg-black lg:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              How sign-up works
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Four steps from download to your first trip.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900"
              >
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

      {/* Checklist */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Have these ready
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Sign-up takes about 10 minutes if you&apos;re prepared.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/signupDocuments.png"
                alt="Documents required to sign up"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <ul className="grid gap-4 sm:grid-cols-1">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to start?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
            Download the app and start your rider sign-up in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex w-full justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-auto"
            >
              Download the app
            </Link>
            <a
              href="mailto:hello@oyeridegh.com?subject=Rider%20Signup%20Question"
              className="inline-flex w-full justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Ask a question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}