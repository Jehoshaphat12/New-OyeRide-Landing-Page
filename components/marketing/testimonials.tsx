type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to spend over an hour waiting for a trotro to get to work. Now I book an OyeRide and I'm at my desk in fifteen minutes. It changed my mornings.",
    name: "Akosua Mensah",
    role: "Rider",
    location: "Kasoa",
    rating: 5,
  },
  {
    quote:
      "As a Rider, the flexible hours are what I love most. I work evenings after my day job and earn extra money for my family. No pressure, no minimums.",
    name: "Kwame Asante",
    role: "Rider Partner",
    location: "Kasoa",
    rating: 5,
  },
  {
    quote:
      "My shop gets orders from customers I never would have reached before. OyeRide handles the delivery — I just focus on the food. Sales are up every month.",
    name: "Efua Boateng",
    role: "Restaurant Owner",
    location: "Kasoa",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={i < rating ? "text-[#ffe815]" : "text-white/25"}
        >
          <path d="M12 2 15.09 8.26 22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 dark:bg-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Trusted by Kasoa
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-zinc-600 dark:text-zinc-400">
            Riders, Riders, and businesses — real stories from people using OyeRide every day.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
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
    <figure className="flex flex-col rounded-[5rem] bg-[#85b7f0] p-2 text-white shadow-lg shadow-blue-900/10 sm:p-4">
    <figure className="flex flex-col rounded-[5rem] bg-[#054997] p-6 text-white shadow-lg shadow-blue-900/10 sm:p-8">
      {/* Header: avatar + name + role */}
      <figcaption className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-[#054997] sm:h-16 sm:w-16"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-base font-bold sm:text-lg">
            {testimonial.name}
          </div>
          <div className="truncate text-sm text-white/70">
            {testimonial.role} · {testimonial.location}
          </div>
        </div>
      </figcaption>

      {/* Quote */}
      <blockquote className="mt-6 flex-1 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
        &ldquo; {testimonial.quote} &rdquo;
      </blockquote>

      {/* Footer: stars + rating */}
      <div className="mt-6 flex items-center gap-3">
        <Stars rating={testimonial.rating} />
        <span className="text-sm font-bold">
          {testimonial.rating.toFixed(2)}
        </span>
      </div>
    </figure>
    </figure>
  );
}