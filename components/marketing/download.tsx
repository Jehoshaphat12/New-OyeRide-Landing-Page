"use client";

import Link from "next/link";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

const tabs: Tab[] = [
  {
    id: "rides",
    label: "Rides",
    title: "The fast, affordable way to ride.",
    description: "Available for iOS and Android devices.",
    cta: "Get OyeRide",
    href: "/download/rides",
  },
  {
    id: "delivery",
    label: "Delivery",
    title: "Send anything, anywhere in town.",
    description: "Available for iOS and Android devices.",
    cta: "Get OyeRide Delivery",
    href: "/download/delivery",
  },
  // {
  //   id: "bicycle",
  //   label: "Bicycle Delivery",
  //   title: "Eco-friendly deliveries, on time.",
  //   description: "Available for iOS and Android devices.",
  //   cta: "Get Bicycle Delivery",
  //   href: "/download/bicycle",
  // },
  {
    id: "gas",
    label: "Gas Refill",
    title: "Refill your gas without leaving home.",
    description: "Available for iOS and Android devices.",
    cta: "Get Gas Refill",
    href: "/download/gas",
  },
];

export function Download() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section className="bg-black py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Download our app
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-zinc-400">
            Available for iOS and Android devices.
          </p>
        </div>

        {/* Two-column: phone left, tabs + content right */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Phone.png"
              alt="OyeRide apps shown on a phone"
              className="w-full max-w-[460px]"
            />
          </div>

          {/* Tabs + content */}
          <div className="lg:max-w-lg">
            {/* Tab list */}
            <div
              role="tablist"
              className="flex flex-wrap gap-6 border-b border-zinc-800"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(tab.id)}
                    className={`relative pb-3 text-sm font-semibold transition ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel content */}
            <div className="mt-8 min-h-[180px]">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {active.description}
              </p>
              <Link
                href={active.href}
                className="mt-8 w-full justify-center md:max-w-60 inline-flex rounded-full bg-[#054997] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#04356f]"
              >
                {active.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}