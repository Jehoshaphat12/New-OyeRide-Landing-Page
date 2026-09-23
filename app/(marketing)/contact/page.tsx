import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact OyeRide — Get in Touch",
  description:
    "Questions, feedback, or partnership inquiries? Reach the OyeRide team. We respond within 24 hours.",
};

const contactMethods = [
  {
    title: "Email us",
    description: "For general questions and inquiries.",
    value: "hello@oyeridegh.com",
    href: "mailto:hello@oyeridegh.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    title: "Call or WhatsApp",
    description: "Monday to Sunday, 7am – 10pm.",
    value: "+233 20 326 4716",
    href: "tel:+233203264716",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: "Visit us",
    description: "Our office in Kasoa.",
    value: "Kasoa, Central Region, Ghana",
    href: "#map",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#054997] text-white">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Get in touch.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg font-semibold leading-7 text-white/85">
            Questions, feedback, or want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-white py-20 dark:bg-black lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#054997] hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eef9] text-[#054997]">
                  {method.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-black dark:text-white">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {method.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#054997] dark:text-[#7bb3e8]">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-950 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
                Send us a message
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Fill in the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Side info */}
            <aside className="lg:pt-24">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-base font-bold text-black dark:text-white">
                  Before you write
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Many common questions are already answered in our FAQ.
                </p>
                <Link
                  href="/#faq"
                  className="mt-4 inline-flex text-sm font-semibold text-[#054997] hover:underline dark:text-[#7bb3e8]"
                >
                  Check the FAQ →
                </Link>
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-base font-bold text-black dark:text-white">
                  For urgent issues
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  If you need help during a trip, use the in-app support button for the
                  fastest response.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}