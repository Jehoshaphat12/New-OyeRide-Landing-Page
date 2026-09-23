import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Download } from "@/components/marketing/download";
import { RiderCTA } from "@/components/marketing/rider-cta";
import { Earn } from "@/components/marketing/earn";
import { Faq } from "@/components/marketing/faq";
import { Hero } from "@/components/marketing/hero";
import { OrderRide } from "@/components/marketing/orderRide";
import { Services } from "@/components/marketing/services";
import { Stats } from "@/components/marketing/stats";
import { Testimonials } from "@/components/marketing/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <OrderRide />
        <Testimonials />
        <Earn />
        <RiderCTA />
        <Download />
        <Faq />
        <OrderRide />
    </>
  );
}
