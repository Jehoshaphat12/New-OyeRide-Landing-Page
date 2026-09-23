"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

type IconKey =
  | "bolt"
  | "coin"
  | "clock"
  | "package"
  | "leaf"
  | "flame"
  | "shield"
  | "map";

type Feature = {
  icon: IconKey;
  label: string;
};

type Service = {
  title: string;
  description: string;
  features: Feature[];
  tag: string;
  cta: string;
  href: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Rides",
    description: "Request in seconds, ride in minutes.",
    features: [
      { icon: "bolt", label: "Fast pickup" },
      { icon: "coin", label: "Low fares" },
      { icon: "clock", label: "24/7" },
    ],
    tag: "Popular",
    cta: "Get started",
    href: "/rides",
    image: "/ride00.png",
  },
  {
    title: "Delivery",
    description: "Send anything across town, fast and reliable.",
    features: [
      { icon: "package", label: "Parcels" },
      { icon: "shield", label: "Insured" },
      { icon: "clock", label: "Same-day" },
    ],
    tag: "Same-day",
    cta: "Book a delivery",
    href: "/delivery",
    image: "/delivery1.png",
  },
  {
    title: "Bicycle Delivery",
    description: "Eco-friendly delivery for documents and small parcels.",
    features: [
      { icon: "leaf", label: "Eco-friendly" },
      { icon: "package", label: "Small parcels" },
      { icon: "map", label: "Local area" },
    ],
    tag: "Eco",
    cta: "Book a bicycle",
    href: "/bicycle-delivery",
    image: "/bicycle_delivery1.jpg",
  },
  {
    title: "Gas Refill",
    description: "Get your gas cylinder refilled and delivered to your doorstep.",
    features: [
      { icon: "flame", label: "Refill" },
      { icon: "package", label: "Pickup" },
      { icon: "clock", label: "Same-day" },
    ],
    tag: "Doorstep",
    cta: "Refill now",
    href: "/gas-refill",
    image: "/gas-refill01.png",
  },
];

const iconPaths: Record<IconKey, ReactNode> = {
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  package: (
    <>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  map: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

function FeatureIcon({ name }: { name: IconKey }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      {iconPaths[name]}
    </svg>
  );
}

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 400;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 dark:bg-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            What we offer you
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
            From beating rush-hour traffic to getting packages delivered across Kasoa — we&apos;ve got you covered.
          </p>
        </div>

        {/* Mobile: vertical stack. Desktop: horizontal scroll with snap. */}
        <div
          ref={scrollRef}
          className="mt-16 flex flex-col gap-6 md:flex-row md:snap-x md:snap-mandatory md:overflow-x-auto md:scroll-smooth md:pb-4 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>

        {/* Arrows only on desktop */}
        <div className="mt-8 hidden justify-end gap-3 md:flex">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-black transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-black transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      data-card
      className="group relative flex h-[500px] w-full flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl text-white md:h-[540px] md:w-[380px]"
    >
      {/* Background image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay — heavier at bottom for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />

      {/* Content */}
      <div className="relative z-10 p-5">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/80">
          {service.description}
        </p>

        {/* Feature row */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/85">
          {service.features.map((feature) => (
            <span key={feature.label} className="flex items-center gap-1.5">
              <FeatureIcon name={feature.icon} />
              {feature.label}
            </span>
          ))}
        </div>

        {/* Bottom bar: tag + CTA */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
            {service.tag}
          </span>
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition group-hover:bg-zinc-100">
            {service.cta}
          </span>
        </div>
      </div>
    </Link>
  );
}