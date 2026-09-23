import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-white ">
      {/* Top: copy block */}
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
        <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl ">
          Riding is how we move.
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-semibold leading-6.5 text-zinc-600 ">
          Get where you need to go — fast, safe, and affordable. Book a ride in seconds with OyeRide.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/download"
            className="w-full sm:w-56 rounded-full bg-[#054997] px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-[#04356f]"
          >
            Get the app
          </Link>
          <Link
            href="/download"
            className="w-full sm:w-56 rounded-full bg-[#e4e4e4] px-6 py-3 text-center text-base font-semibold text-black transition hover:bg-zinc-200"
          >
            Book a ride →
          </Link>
        </div>
      </div>

      {/* Bottom: full-bleed image */}
      <div className="w-full">
        <img
          src="/heroImg2.png"
          alt="OyeRide passengers by the coast"
          className="h-[400px] w-full object-cover object-top sm:h-[500px] lg:h-[640px]"
        />
      </div>
    </section>
  );
}