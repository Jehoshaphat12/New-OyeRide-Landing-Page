import Image from "next/image";
import Link from "next/link";

interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  PushAside?: boolean
}

export function OrderRide(Props: Props) {
  return (
    <section className="bg-white pb-20  lg:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Image — top on mobile, full background on desktop */}
          <div className="relative h-64 w-full md:absolute md:inset-0 md:h-full">
            <Image
              // src="/heroImg1.png"
              src={Props.imageSrc ? Props.imageSrc : "/heroImg1.png"}
              alt="Rider in an OyeRide car"
              fill
              sizes="(min-width: 768px) 100vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Panel — stacked below on mobile, floating card on desktop */}
          <div className={`relative bg-[#054997] ${Props.PushAside ? "md:ml-auto" : ""} p-8 text-white md:m-6 md:max-w-[440px] md:rounded-3xl md:p-12 md:flex md:min-h-[360px] md:flex-col md:justify-center`}>
            {/* Copy */}
            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                {Props.title ? Props.title : "Order a ride online"}
              </h2>
              <p className="mt-4 text-sm font-medium leading-6 text-white/85 sm:text-base">
                {Props.description ? Props.description : "Download the OyeRide app on iOS and Android now to book your ride instantly."}
              </p>
            </div>

            {/* QR code — desktop only */}
            <div className="mt-10 hidden items-center gap-5 md:flex">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2 lg:h-28 lg:w-28">
                <Image
                  src="/oyerideQR.png"
                  alt="QR code to download the OyeRide app"
                  fill
                  sizes="112px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-base font-semibold lg:text-lg">Download OyeRide</p>
                <p className="mt-1 text-xs leading-5 text-white/80 lg:text-sm">
                  Scan the QR code with your phone camera
                </p>
              </div>
            </div>

            {/* Button — mobile only */}
            <Link
              href="/download"
              className="mt-8 block w-full rounded-full bg-white py-4 text-center text-base font-semibold text-black transition hover:bg-zinc-100 md:hidden"
            >
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}