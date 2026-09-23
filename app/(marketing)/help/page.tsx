"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

const contactMethods = [
  {
    title: "Email support",
    description:
      "The fastest way to reach us. Tell us what's going on and we'll respond within 24–48 hours.",
    value: "hello@oyeridegh.com",
    href: "mailto:hello@oyeridegh.com?subject=Support%20Request%20-%20OyeRide",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    title: "In-app support",
    description:
      "Already have the app? Go to Profile → Help & Support for the fastest route to us on an active trip.",
    value: "Open the app",
    href: "/download",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Delete your account",
    description:
      "Request full deletion of your OyeRide account and personal data directly from our data control page.",
    value: "Delete account",
    href: "/delete-account",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      </svg>
    ),
  },
];

const faqCategories = [
  {
    id: "rides",
    title: "Rides & Delivery",
    items: [
      {
        q: "How do I book a ride?",
        a: "Open the app, tap \"Where to?\", enter your pickup and destination, choose a service (Motor Ride, Motor Delivery, Bicycle Delivery, or Gas Refill), and confirm. You'll see the price before you book — no surprises.",
      },
      {
        q: "My rider hasn't arrived yet, what should I do?",
        a: "You can track your rider's live location on the map from the moment they accept. If they're significantly delayed or unresponsive, use the in-app chat or call button to reach them, or cancel and rebook if needed.",
      },
      {
        q: "What happens if my rider cancels?",
        a: "If your rider cancels, OyeRide automatically looks for the next available rider near you at no extra cost, and you'll be notified right away.",
      },
      {
        q: "Can I add multiple stops to a trip?",
        a: "Yes — when setting your route, tap \"Add stop\" to include up to 3 stops before your final destination.",
      },
      {
        q: "How do I track my delivery?",
        a: "Once a rider accepts your delivery, you can follow their live location on the map in the app, the same way you would for a ride.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "We currently accept cash payments on completion of your ride or delivery. Mobile money and card payments are coming soon.",
      },
      {
        q: "How is my fare calculated?",
        a: "Fares are based on distance and current demand, and you always see the total price upfront before you confirm your booking.",
      },
      {
        q: "I was charged the wrong amount, what do I do?",
        a: "Email us at hello@oyeridegh.com with your trip details (date, time, and pickup/destination) and we'll look into it promptly.",
      },
      {
        q: "Do you offer promotions or discounts?",
        a: "New users get a 10% discount automatically applied to their first two rides.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & App",
    items: [
      {
        q: "How do I update my profile information?",
        a: "Go to Profile → Settings in the app to update your name, phone number, or profile photo.",
      },
      {
        q: "I forgot my password, how do I reset it?",
        a: "On the login screen, tap \"Forgot Password\" and follow the instructions sent to your registered email or phone number.",
      },
      {
        q: "How do I become an OyeRide rider?",
        a: "Visit our Ride with Us page and complete registration. You'll need a valid Ghana ID, a smartphone, and a motorcycle or bicycle in good condition.",
      },
    ],
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition dark:bg-zinc-900 ${
        open
          ? "border-zinc-300 dark:border-zinc-700"
          : "border-zinc-200/80 dark:border-zinc-800"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-black dark:text-white">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6eef9] text-[#054997] transition-transform dark:bg-[#0a2b56] dark:text-[#7bb3e8] ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            How can we help?
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Have a question about a ride, delivery, payment, or your account?
            Find quick answers below, or reach our team directly.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              Contact us
            </Link>
            <Link
              href="#faqs"
              className="w-full rounded-full border-2 border-white/60 bg-transparent px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-56"
            >
              Browse FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section id="contact" className="scroll-mt-24 bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Three ways to reach us. Pick whichever suits your situation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {method.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
                  {method.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {method.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#054997] transition group-hover:translate-x-1 dark:text-[#7bb3e8]">
                  {method.value} →
                </span>
              </a>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              We aim to respond to all support emails within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
              Common questions, organised by category.
            </p>
          </div>

          <div className="mt-16 space-y-14">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <FaqItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency / safety note */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/30 sm:p-10">
            <div className="flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-red-900 dark:text-red-300 sm:text-2xl">
              Safety concern or urgent issue?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-red-800 dark:text-red-300/90">
              If you feel unsafe during a trip or have an urgent safety concern,
              contact local emergency services first. Afterward, email us at{" "}
              <strong>hello@oyeridegh.com</strong> with &quot;URGENT&quot; in the
              subject line and we&apos;ll prioritize your report.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}