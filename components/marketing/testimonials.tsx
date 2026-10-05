"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  image?: string; // optional avatar; falls back to initials
};

const testimonials: Testimonial[] = [
  // ── Added from index.html ───────────────────────────────────
  {
    quote:
      "I booked Oye Motor for my commute to Ofaakor Market from Kasoa. The rider arrived in under 5 minutes and I could track every move. Way faster than I expected.",
    name: "Kevin Newman",
    role: "Regular Rider",
    location: "Kasoa",
    rating: 5,
    image: "/reviews/img4.jpg",
  },
  {
    quote:
      "I use Oye Delivery to send products to my customers. It's reliable, affordable, and the real-time tracking gives me peace of mind every single time.",
    name: "Francisca Osei",
    role: "Business Owner",
    location: "Nyanyano Kasoa",
    rating: 5,
    image: "/reviews/img3.jpg",
  },
  {
    quote:
      "The bicycle delivery is perfect for sending documents quickly. Cheaper than motor, still fast. I recommend Oye Ride to all my friends in Kasoa.",
    name: "Daniel Bediako",
    role: "Student",
    location: "IPMC Kasoa",
    rating: 5,
    image: "/reviews/img1.jpg",
  },
  // ── Original 3 ──────────────────────────────────────────────
  {
    quote:
      "I used to spend over an hour waiting for a trotro to get to work. Now I book an OyeRide and I'm at my desk in fifteen minutes. It changed my mornings.",
    name: "Akosua Mensah",
    role: "Rider",
    location: "Kasoa",
    rating: 5,
    image: "/reviews/img5.jpg",
  },
  {
    quote:
      "As a Rider, the flexible hours are what I love most. I work evenings after my day job and earn extra money for my family. No pressure, no minimums.",
    name: "Kwame Asante",
    role: "Rider Partner",
    location: "Kasoa",
    rating: 5,
    image: "/reviews/img6.jpg",
  },
  {
    quote:
      "My shop gets orders from customers I never would have reached before. OyeRide handles the delivery — I just focus on the food. Sales are up every month.",
    name: "Efua Boateng",
    role: "Restaurant Owner",
    location: "Kasoa",
    rating: 5,
    image: "/reviews/img7.jpg",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={i < rating ? "text-[#ffc107]" : "text-black/20"}
        >
          <path d="M12 2 15.09 8.26 22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01Z" />
        </svg>
      ))}
    </div>
  );
}

// JSON-LD (migrated from index.html microdata)
function TestimonialsSchema() {
  const schema = testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MobileApplication",
      name: "Oye Ride",
      url: "https://oyeridegh.com/",
      operatingSystem: "ANDROID",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const computeScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    // No overflow → nothing to indicate
    if (maxScroll <= 0) {
      setAtStart(true);
      setAtEnd(true);
      setShowHint(false);
      setActiveIndex(0);
      return;
    }

    setAtStart(scrollLeft <= 8);
    setAtEnd(scrollLeft >= maxScroll - 8);

    // Hide the swipe hint once the user has interacted
    if (scrollLeft > 16) setShowHint(false);

    // Which card is snapped into view?
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length > 1) {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      if (step > 0) {
        const index = Math.round(scrollLeft / step);
        setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
      }
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      computeScrollState();
    });
  }, [computeScrollState]);

  useEffect(() => {
    computeScrollState();
    window.addEventListener("resize", computeScrollState);
    return () => {
      window.removeEventListener("resize", computeScrollState);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [computeScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 400;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[index];
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section className="bg-zinc-100 py-16 sm:py-20 lg:py-28" id="testimonials">
      <TestimonialsSchema />
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Loved Across Kasoa
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-zinc-600">
            Riders, drivers, and businesses — real stories from people using
            OyeRide every day.
          </p>
        </div>

        {/* Scroll area with edge gradients */}
        <div className="relative mt-10 sm:mt-16">
          {/* Left fade — appears once scrolled away from start */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-zinc-100 to-transparent transition-opacity duration-300 sm:w-16 ${
              atStart ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Right fade — hides when reaching the end */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-zinc-100 to-transparent transition-opacity duration-300 sm:w-16 ${
              atEnd ? "opacity-0" : "opacity-100"
            }`}
          />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Mobile-only row: swipe hint ↔ progress dots (crossfade) */}
        <div className="relative mt-2 flex h-8 items-center justify-center md:hidden">
          {/* Swipe hint */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              showHint ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 rounded-full bg-black/75 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
              <span>Swipe to see more</span>
              <svg
                className="motion-safe:animate-pulse"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Progress dots */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-1 transition-opacity duration-500 ${
              showHint ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
                className="group flex h-6 items-center justify-center px-1"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-[#054997]"
                      : "w-1.5 bg-black/20 group-hover:bg-black/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <div className="mt-6 hidden justify-end gap-3 sm:mt-8 md:flex">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-black transition hover:bg-zinc-100"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-black transition hover:bg-zinc-100"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <figure
      data-card
      className="flex w-[85vw] max-w-sm shrink-0 snap-start flex-col rounded-3xl bg-white p-6 text-black shadow-xl shadow-blue-900/10 sm:p-8 md:w-[380px] md:max-w-none"
    >
      {/* Header: avatar + name + role */}
      <figcaption className="flex items-center gap-4">
        {testimonial.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-blue-100 sm:h-16 sm:w-16"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#054997] text-base font-bold text-white sm:h-16 sm:w-16"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <div className="text-base font-bold sm:text-lg">
            {testimonial.name}
          </div>
          <div className="truncate text-sm text-black/70">
            {testimonial.role} · {testimonial.location}
          </div>
        </div>
      </figcaption>

      {/* Quote */}
      <blockquote className="mt-4 flex-1 text-sm leading-6 text-black/90 sm:mt-6 sm:text-base sm:leading-8">
        &ldquo; {testimonial.quote} &rdquo;
      </blockquote>

      {/* Footer: stars + rating */}
      <div className="mt-4 flex items-center gap-3 sm:mt-6">
        <Stars rating={testimonial.rating} />
        <span className="text-sm font-bold">
          {testimonial.rating.toFixed(2)}
        </span>
      </div>
    </figure>
  );
}