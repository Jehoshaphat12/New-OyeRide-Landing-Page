"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.jehoshaphat12.oyeride";
const appStoreUrl = "https://apps.apple.com/app/oyeride/id6804677598";

const appTabs = [
  {
    id: "rides",
    label: "Rides",
    heading: "Request in seconds, ride in minutes.",
    description: "Available for iOS and Android devices.",
    imgSrc: "/phone2.png",
  },
  {
    id: "delivery",
    label: "Delivery",
    heading: "Send parcels across town, tracked live.",
    description: "Available for iOS and Android devices.",
    imgSrc: "/phone.png",
  },
  //   {
  //     id: "bicycle",
  //     label: "Bicycle",
  //     heading: "Clean delivery for short trips.",
  //     description: "Available for iOS and Android devices.",
  //   },
  {
    id: "gas",
    label: "Gas Refill",
    heading: "Refill your cylinder without leaving home.",
    description: "Available for iOS and Android devices.",
    imgSrc: "/gasPhone.png",
  },
];

function PlayStoreBadge() {
  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black px-6 py-3.5 text-white transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:shadow-xl"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-75">
          Get it on
        </span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

function AppStoreBadge() {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black px-6 py-3.5 text-white transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:shadow-xl"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-75">
          Download on the
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}

function AppShowcase() {
  const [activeId, setActiveId] = useState(appTabs[0].id);
  const active = appTabs.find((t) => t.id === activeId) ?? appTabs[0];

  return (
    <section className="bg-white py-20  lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ">
            Download our app
          </h2>
        </div>

        {/* Tab pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {appTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-zinc-900 text-white "
                    : "border border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400 "
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Big blue panel */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#054997] text-white">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-4">
            {/* Left: copy */}
            <div className="p-8 sm:p-12 lg:p-16">
              <h3 className="text-3xl md:text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {active.heading}
              </h3>
              <p className="mt-5 text-base font-medium leading-7 text-white/85 sm:text-lg">
                {active.description}
              </p>
              <a
                href="#store-badges"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
              >
                Get the app
              </a>
            </div>

            {/* Right: phone image */}
            <div className="relative flex h-[500px] w-full items-center justify-center sm:h-[600px] lg:justify-center">
              <Image
                src={active.imgSrc}
                alt="OyeRide app on a phone"
                fill
                className="object-contain lg:translate-x-8 lg:translate-y-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DownloadPage() {
  return (
    <>
      {/* Hero — dark, centered */}
      <section className="relative overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2 2 12l10 10 10-10L12 2Zm0 4.5 5.5 5.5L12 17.5 6.5 12 12 6.5Z" />
            </svg>
            Free Download
          </span> */}

          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            One app. Everything OyeRide.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-5 text-white/80 sm:text-lg">
            Book a ride, send a parcel, get your gas refilled — all from one
            app. Free on iOS and Android, with a 10% discount on your first two
            rides.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>

          <p className="mt-8 text-xs text-white/50">
            No credit card required · Available in Kasoa, Ghana
          </p>
        </div>
      </section>

      {/* Download our apps showcase */}
      <AppShowcase />

      {/* Two columns: How to install + Join the network */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Install steps */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
                How to install
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 ">
                Two minutes from download to your first ride.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  "Tap Google Play or App Store below",
                  "Install the OyeRide app — it's free",
                  "Sign up with your phone number or email",
                  "Set your pickup point and book your first ride",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#054997] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-base leading-7 text-zinc-700 ">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Partner CTA */}
            <div className="rounded-3xl bg-[#054997] p-8 text-white lg:p-10">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Want to earn instead?
              </h3>
              <p className="mt-4 text-base leading-7 text-white/85">
                The same app lets you sign up as a rider, courier, or bicycle
                delivery partner. Drive when it suits you, get paid per trip.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/drive"
                  className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#054997] transition hover:bg-zinc-100"
                >
                  Ride with us
                </a>
                <a
                  href="/courier"
                  className="inline-flex rounded-full border-2 border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Deliver with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom badges */}
      <section
        id="store-badges"
        className="scroll-mt-24 bg-white py-20  lg:py-24"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl ">
            Ready when you are.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 ">
            Download free. Take your first ride today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PlayStoreBadge />
            <AppStoreBadge />
          </div>
        </div>
      </section>
    </>
  );
}
