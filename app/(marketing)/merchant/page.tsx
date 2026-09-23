import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Business — OyeRide Merchant Program",
  description:
    "List your restaurant, shop, or pharmacy on OyeRide. Reach thousands of customers in Kasoa, get deliveries handled, and grow your orders.",
};

const benefits = [
  {
    title: "More customers",
    description:
      "Get discovered by every OyeRide user in your area. Turn everyday app traffic into daily orders.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Delivery handled",
    description:
      "We handle pickup, delivery, and customer tracking. You focus on packing the order — we do the rest.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
  {
    title: "Simple payouts",
    description:
      "Weekly payouts straight to your bank account or mobile money. Transparent commission, no hidden fees.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h2M12 15h2" />
      </svg>
    ),
  },
  {
    title: "Order dashboard",
    description:
      "Track every order in real time. See what's selling, peak hours, and customer feedback — all in one place.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-6" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    text: "Fill in a short form about your business — name, category, address, and contact person.",
  },
  {
    num: "02",
    title: "Get onboarded",
    text: "We verify your details, help you photograph your menu or catalog, and set up your listing.",
  },
  {
    num: "03",
    title: "Go live",
    text: "Your business appears in the OyeRide app. Customers in your area can order within minutes.",
  },
  {
    num: "04",
    title: "Get paid weekly",
    text: "Every completed order is tracked. Payouts land in your account every week, on schedule.",
  },
];

const requirements = [
  "A registered business name (or trading name)",
  "A valid Ghanaian business registration or tax ID",
  "A physical location in Kasoa or a nearby area",
  "A smartphone or tablet to receive orders",
  "A bank account or mobile money number for payouts",
  "Compliance with all food safety and health regulations (for food businesses)",
];

const businessTypes = [
  "Restaurants & kitchens",
  "Grocery & provisions shops",
  "Pharmacies & health stores",
  "Bakeries & pastry shops",
  "Convenience stores",
  "Any local retailer serving Kasoa",
];

export default function MerchantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Your business, in every pocket.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            List your restaurant, shop, or pharmacy on OyeRide. Reach more
            customers across Kasoa, and let us handle the delivery.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#apply"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#054997] transition hover:bg-zinc-100 sm:w-56"
            >
              List your business
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
            src="/merchantHero.png"
            alt="Shop owner preparing an OyeRide order"
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Why list */}
      <section className="bg-white py-20  lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Why list with OyeRide
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              Everything you need to grow — without hiring delivery staff.
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

      {/* Business types */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
              Who can list
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-zinc-600 ">
              If you sell something people want delivered, we&apos;d love to have you.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/merchantBusiness.png"
                alt="Merchant preparing a customer order"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Business type cards */}
            <div>
              <ul className="grid gap-3 sm:grid-cols-1">
                {businessTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#054997] text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base font-medium text-zinc-800 ">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
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
              Four steps from application to your first order.
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
              A short checklist to get your business listed.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/merchantRequirements.png"
                alt="Merchant verifying business details"
                className="aspect-[4/5] w-full object-cover"
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
                Ready to get started?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85">
                Fill in a short application and our merchant team will reach
                out within 24 hours to get you listed.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:hello@oyeridegh.com?subject=${encodeURIComponent(
                    "Merchant Application — OyeRide"
                  )}&body=${encodeURIComponent(
                    `Hello OyeRide Team,

I'd like to list my business on OyeRide.

Business name: [please fill in]
Business type: [restaurant / shop / pharmacy / other]
Location: [please fill in]
Contact person: [please fill in]
Phone number: [please fill in]
Email: [please fill in]

Additional details:
[anything else we should know]

Thank you.
— Sent via OyeRide Merchant page`
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
                No setup fees · Onboarding in under a week
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}