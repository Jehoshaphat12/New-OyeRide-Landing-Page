import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oyeridegh.com"),

  title: {
    default: "OyeRide — Fast Motor Rides & Reliable Delivery in Kasoa, Ghana",
    template: "%s | OyeRide",
  },
  description:
    "OyeRide is Kasoa's fastest ride-hailing and delivery service. Book a motor ride, send packages with Oye Motor Delivery, go eco with Bicycle Delivery, or refill your gas cylinder — all from one app.",

  keywords: [
    "oye",
    "oye ride",
    "oyeride",
    "motor ride Kasoa",
    "ride hailing Ghana",
    "delivery Kasoa",
    "bicycle delivery Ghana",
    "gas refill Kasoa",
    "okada Kasoa",
    "package delivery Kasoa",
  ],

  authors: [{ name: "OyeRide" }],
  creator: "OyeRide",
  publisher: "OyeRide Ghana",

  // Canonical for the whole site
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://oyeridegh.com",
    siteName: "OyeRide",
    title: "OyeRide — Fast Motor Rides & Reliable Delivery in Kasoa",
    description:
      "Book a motor ride, send packages, or refill your gas cylinder. Fast, safe, affordable — right here in Kasoa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OyeRide — Fast motor rides and reliable delivery in Kasoa, Ghana",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "OyeRide — Fast Motor Rides & Reliable Delivery in Kasoa",
    description:
      "Book a motor ride, send packages, or refill your gas cylinder. Fast, safe, affordable — right here in Kasoa.",
    images: ["/og-image.png"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Search engine control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Set by the underlying app
  applicationName: "OyeRide",
  category: "Transportation",
};

export const viewport: Viewport = {
  themeColor: "#054997",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}