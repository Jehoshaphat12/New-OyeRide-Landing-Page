import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Rides", href: "/rides" },
      { label: "Delivery", href: "/delivery" },
      { label: "Bicycle Delivery", href: "/bicycle-delivery" },
      { label: "Gas Refill", href: "/gas-refill" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Ride with us", href: "/drive" },
      { label: "Become a courier", href: "/courier" },
      { label: "List your business", href: "/merchant" },
      { label: "Fleet owners", href: "/fleet" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Safety", href: "/safety" },
      { label: "Privacy center", href: "/privacy" },
      { label: "Delete account", href: "/delete-account" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/oyeride",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/oyeride",
    icon: (
      <path d="M4 4l7.5 9.5L4.5 20h2l6-6.5L18 20h3l-7.5-9.5L19.5 4h-2l-5.5 6-5-6z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/oyeride_ghana",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/oyeride",
    icon: (
      <>
        <path d="M4 4h4v16H4zM10 10h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v5h-4v-4c0-1.5-.5-2.5-2-2.5S14 15 14 16.5V20h-4z" />
      </>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#054997] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top: brand + links */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_3fr] lg:gap-16">
          {/* Brand block */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight"
            >
              OyeRide
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
              Your ride, on demand. Fast, safe, and affordable transport across
              Kasoa and beyond.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-6">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/85 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} OyeRide Ghana. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70">
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="transition hover:text-white">
              Cookies
            </Link>
            {/* <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}