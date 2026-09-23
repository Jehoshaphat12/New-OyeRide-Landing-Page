const stats = [
  { value: "10K+", label: "Rides completed" },
  { value: "500+", label: "Active riders" },
  { value: "4.8★", label: "Average rating" },
  { value: "24/7", label: "Support available" },
];

export function Stats() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold tracking-tight text-[#054997] sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-600 ">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}