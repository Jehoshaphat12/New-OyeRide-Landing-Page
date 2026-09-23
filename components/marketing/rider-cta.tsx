import Link from "next/link";

const features = [
  {
    title: "Flexible Hours",
    description:
      "Work when you want. Morning, evening, weekends — you decide.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Daily Earnings",
    description:
      "Get paid per trip. Your earnings are tracked in real time in your Rider app.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h2M12 15h2" />
      </svg>
    ),
  },
  {
    title: "Full Support",
    description:
      "Our team is here to help you with onboarding, issues, and questions.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M21 3v6h-6" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export function RiderCTA() {
  return (
    <section className="bg-[#e77b00] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
            </svg>
            For Riders
          </span>
        </div>

        {/* Headline */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Earn on Your Own Schedule
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg">
            Join the OyeRide Rider network. Set your own hours, accept rides on your terms, and earn daily on the streets of Kasoa.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/drive/signup"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17.5V14l-3-3 4-3 2 3h2" />
            </svg>
            Sign Up as a Rider
          </Link>
        </div>
      </div>
    </section>
  );
}