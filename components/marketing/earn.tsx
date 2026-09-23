import Link from "next/link";

type EarnBlock = {
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const blocks: EarnBlock[] = [
  {
    badge: "Rider",
    eyebrow: "Earn money as an OyeRide Rider",
    title: "Ride and earn money",
    description:
      "Ride when it suits you — mornings, evenings, or weekends — and get paid for every trip.",
    cta: "Register to drive",
    href: "/drive",
    image: "/RiderImg1.jpg",
    imageAlt: "OyeRide Rider smiling behind the wheel",
  },
  {
    badge: "Courier",
    eyebrow: "Become an OyeRide courier partner",
    title: "Earn with every delivery",
    description:
      "Deliver parcels, food, and gas refills across town. Choose your hours and earn on every drop-off.",
    cta: "Register as a courier",
    href: "/courier",
    image: "/deliveryMan.png",
    imageAlt: "OyeRide courier making a delivery",
  },
  {
    badge: "Bicycle",
    eyebrow: "Earn with your bicycle",
    title: "Got a bicycle? Start earning.",
    description:
      "Use the bike you already own to make extra money delivering small parcels around your area.",
    cta: "Earning with your bike",
    href: "/bicycle-courier",
    image: "/BicycleRider02.png",
    imageAlt: "OyeRide bicycle courier riding through town",
  },
  {
    badge: "Business",
    eyebrow: "For restaurants, shops, and pharmacies",
    title: "Reach more customers",
    description:
      "List your business on OyeRide and turn everyday app traffic into daily orders — we handle delivery.",
    cta: "List your business",
    href: "/merchant",
    image: "/Merchant.png",
    imageAlt: "Shop owner preparing an order for OyeRide delivery",
  },
];

export function Earn() {
  return (
    <section className="bg-[#054997] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Earn money with OyeRide
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-white/80">
            Join a growing network of partners earning with OyeRide. Riders, couriers, and
            businesses — there&apos;s room for everyone.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block) => (
            <EarnCard key={block.href} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EarnCard({ block }: { block: EarnBlock }) {
  return (
    <div className="group relative flex h-[550px] flex-col overflow-hidden rounded-3xl bg-zinc-900">
      {/* Full-bleed image */}
      <img
        src={block.image}
        alt={block.imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Badge */}
      <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#054997] backdrop-blur">
        {block.badge}
      </span>

      {/* Floating white panel */}
      <div className="relative z-10 mt-auto m-3 justify-between flex flex-col md:h-[220px] rounded-2xl bg-white p-5">
        <div>
        <h3 className="text-lg font-bold leading-tight text-black">
          {block.title}
        </h3>
        {/* <p className="mt-1 text-xs font-medium text-zinc-500">
          {block.eyebrow}
        </p> */}
        <p className="mt-3 text-sm font-medium leading-4 text-zinc-600">
          {block.description}
        </p>
        </div>

        <Link
          href={block.href}
          className="mt-4 block w-full rounded-full bg-[#054997] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#04356f]"
        >
          {block.cta}
        </Link>
      </div>
    </div>
  );
}