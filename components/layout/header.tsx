"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavColumn = { heading?: string; links: { label: string; href: string }[] };

type NavTab = {
  id: string;
  label: string;
  columns: NavColumn[];
};

type SideCard = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const navTabs: NavTab[] = [
  {
    id: "services",
    label: "Services",
    columns: [
      {
        heading: "Move",
        links: [
          { label: "Motor Ride", href: "/rides" },
          { label: "Motor Delivery", href: "/delivery" },
          { label: "Bicycle Delivery", href: "/bicycle-delivery" },
          { label: "Gas Refill", href: "/gas-refill" },
        ],
      },
      {
        heading: "Learn more",
        links: [
          { label: "How it works", href: "/rides#how" },
          { label: "What we deliver", href: "/delivery" },
          { label: "Ride safety", href: "/safety" },
          { label: "Download the app", href: "/download" },
        ],
      },
    ],
  },
  {
    id: "earn",
    label: "Earn with OyeRide",
    columns: [
      {
        heading: "Riders",
        links: [
          { label: "Become a rider", href: "/drive" },
          { label: "Rider requirements", href: "/drive#requirements" },
        ],
      },
      {
        heading: "Couriers",
        links: [
          { label: "Become a courier", href: "/courier" },
          { label: "Motor courier", href: "/courier/motor" },
          { label: "Bicycle courier", href: "/courier/bicycle" },
        ],
      },
      {
        heading: "Businesses",
        links: [
          { label: "List your business", href: "/merchant" },
          { label: "Fleet owners", href: "/fleet" },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    columns: [
      {
        heading: "About",
        links: [
          { label: "About us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Press & media", href: "/press" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    columns: [
      {
        heading: "Get help",
        links: [
          { label: "Help center", href: "/help" },
          { label: "Safety", href: "/safety" },
          { label: "Report an issue", href: "/help#contact" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy center", href: "/privacy" },
          { label: "Terms of service", href: "/terms" },
          { label: "Cookie policy", href: "/cookies" },
          { label: "Delete account", href: "/delete-account" },
        ],
      },
    ],
  },
];

const sideCards: SideCard[] = [
  {
    title: "Become a rider",
    description: "Earn on your own schedule",
    href: "/drive",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
  {
    title: "Become a courier",
    description: "Deliver parcels and earn per drop-off",
    href: "/courier",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
      </svg>
    ),
  },
  {
    title: "List your business",
    description: "Reach more customers in Kasoa",
    href: "/merchant",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9 5 3h14l2 6M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9M3 9h18" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Fleet owners",
    description: "Run multiple riders on OyeRide",
    href: "/fleet",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h2l2-5h10l2 5h2M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M7 12l2-5h6l2 5" />
      </svg>
    ),
  },
];

export function Header() {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close desktop menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenTab(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open.
  // Using both overflow hidden AND position:fixed trick for iOS Safari stability.
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [mobileOpen]);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTab = (id: string) =>
    setOpenTab((current) => (current === id ? null : id));

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpandedTab(null);
  };

  return (
    <>
      {/* ═══════════ HEADER BAR (sticky) ═══════════ */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-[#054997] text-white"
        onMouseLeave={() => setOpenTab(null)}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20">
          <Link
            href="/"
            onClick={closeMobile}
            className="text-2xl font-extrabold tracking-tight lg:text-3xl"
          >
            OyeRide
          </Link>

          {/* Desktop nav tabs */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navTabs.map((tab) => {
              const isOpen = openTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onMouseEnter={() => setOpenTab(tab.id)}
                  onClick={() => toggleTab(tab.id)}
                  aria-expanded={isOpen}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isOpen ? "bg-white/15 text-white" : "text-white/85 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/help"
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              Support
            </Link>
            <Link
              href="/download"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#054997] transition hover:bg-zinc-100"
            >
              Get the app
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop mega-menu — absolute overlay, doesn't shift page */}
        {openTab && (
          <div className="absolute left-0 right-0 top-full hidden lg:block">
            <div className="bg-white text-black shadow-2xl">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_320px]">
                <div
                  className="grid gap-8 bg-zinc-100 rounded-4xl p-6"
                  style={{
                    gridTemplateColumns: `repeat(${
                      navTabs.find((t) => t.id === openTab)?.columns.length ?? 1
                    }, minmax(0, 1fr))`,
                  }}
                >
                  {navTabs
                    .find((t) => t.id === openTab)
                    ?.columns.map((column, i) => (
                      <div key={i} className="">
                        {column.heading && (
                          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                            {column.heading}
                          </h3>
                        )}
                        <ul className="space-y-2.5">
                          {column.links.map((link) => (
                            <li key={link.href + link.label}>
                              <Link
                                href={link.href}
                                onClick={() => setOpenTab(null)}
                                className="block text-sm font-medium text-zinc-800 transition hover:text-[#054997]"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>

                <aside className="space-y-2 border-l border-zinc-200 p-4 pl-8 bg-zinc-100 rounded-4xl ">
                  {sideCards.map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      onClick={() => setOpenTab(null)}
                      className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-zinc-50"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e6eef9] text-[#054997]">
                        {card.icon}
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-zinc-900">
                            {card.title}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-[#054997]">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-zinc-500">
                          {card.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════ MOBILE MENU (fixed full-screen overlay) ═══════════ */}
      {/*
        Rendered OUTSIDE the <header> element so it never affects the header's
        layout. `fixed inset-0` means it covers the viewport regardless of
        scroll position. `pt-16` leaves room for the sticky header bar above.
      */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#054997] pt-16 text-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">
            {navTabs.map((tab) => {
              const isExpanded = mobileExpandedTab === tab.id;
              return (
                <div key={tab.id} className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() =>
                      setMobileExpandedTab((current) =>
                        current === tab.id ? null : tab.id
                      )
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
                  >
                    {tab.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="pb-4">
                      {tab.columns.map((column, i) => (
                        <div key={i} className="mb-4 last:mb-0">
                          {column.heading && (
                            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/60">
                              {column.heading}
                            </p>
                          )}
                          <ul className="space-y-1">
                            {column.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeMobile}
                                  className="block rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-5 border-t border-white/15 pt-5 pb-4">
              <Link
                href="/download"
                onClick={closeMobile}
                className="block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#054997] transition hover:bg-zinc-100"
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}