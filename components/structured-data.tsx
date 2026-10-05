// JSON-LD structured data for oyeridegh.com.
//
// The Organization, SoftwareApplication, and original 5 FAQ entries are
// carried over verbatim (or near-verbatim) from the old static site's
// JSON-LD so AI answer engines and Google's knowledge graph don't see
// a different company — everything below the "NEW" markers is additive:
// Gas Refill + the Earn ecosystem (rider/courier/fleet/merchant), none
// of which existed on the old site.

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OyeRide",
    url: "https://oyeridegh.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://oyeridegh.com/favicon.png",
    },
    description:
      "OyeRide is a ride-hailing and delivery company operating in Kasoa, Ghana, offering motorcycle rides, motorcycle and bicycle delivery, and doorstep gas cylinder refills.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kasoa",
      addressCountry: "GH",
    },
    sameAs: [
      "https://www.facebook.com/oyeride",
      "https://www.twitter.com/oyeride",
      "https://www.instagram.com/oyeride_ghana/",
      // NEW — live on the current footer, wasn't on the old site
      "https://www.linkedin.com/company/oyeride",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OyeRide",
    operatingSystem: "ANDROID",
    applicationCategory: "TravelApplication",
    description: "Fast motor rides and reliable deliveries in Kasoa, Ghana.",
    url: "https://oyeridegh.com/",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.jehoshaphat12.oyeride",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GHS" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OyeRide",
    operatingSystem: "IOS",
    applicationCategory: "TravelApplication",
    description: "Fast motor rides and reliable deliveries in Kasoa, Ghana.",
    url: "https://oyeridegh.com/",
    downloadUrl: "https://apps.apple.com/app/oyeride/id6804677598",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GHS" },
  },
  // ── ImageObject entries — original 5, kept verbatim ─────────────
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/img2.jpg",
    name: "Oye Ride Rider in Kasoa",
    description: "Motorcycle taxi service in Kasoa Ghana",
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/motor_ride2.jpg",
    name: "Oye Ride Rider in Kasoa",
    description: "Motorcycle taxi service in Kasoa Ghana",
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/motor_delivery.jpg",
    name: "Oye Ride Delivery Rider in Kasoa",
    description: "Motorcycle Delivery service in Kasoa Ghana",
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/bicycle_bicycle2.jpg",
    name: "Oye Ride Bicycle Rider in Kasoa",
    description: "Bicycle Delivery service in Kasoa Ghana",
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/img3.png",
    name: "Download Oye Ride App | Oye Ride",
    description:
      "Download the Oye Ride App now and experience fast motor rides and reliable deliveries in Kasoa, Ghana. Available for free on Android and iOS.",
  },
  // NEW — Gas Refill didn't exist on the old site
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: "https://oyeridegh.com/gas-refill01.png",
    name: "OyeRide Gas Refill Rider in Kasoa",
    description: "Doorstep gas cylinder refill service in Kasoa Ghana",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // ── Original 5 — exact wording from the old site ────────────
      {
        "@type": "Question",
        name: "How do I book a ride with Oye Ride in Kasoa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download the Oye Ride app, enter your pickup and destination, choose your service type, and confirm. A nearby rider will accept within seconds.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a motor ride cost with Oye Ride?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fares start from GHS 10 depending on distance and demand. You see the price before confirming your ride – no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Can I track my driver in real time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Once your ride is accepted, you can see your driver moving towards you live on the map directly in the Oye Ride app.",
        },
      },
      {
        "@type": "Question",
        name: "How do I become an Oye Ride driver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download the Oye Ride app on Android or iOS and sign up as a driver from inside the app. You need a valid ID, a motorcycle or bicycle, and a smartphone.",
        },
      },
      {
        "@type": "Question",
        name: "Is Oye Ride available outside Kasoa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We currently operate in Kasoa, Ghana. We are expanding to more cities soon – follow us on social media for updates.",
        },
      },
      // ── NEW — Gas Refill ─────────────────────────────────────────
      {
        "@type": "Question",
        name: "How does OyeRide Gas Refill work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Order a gas cylinder refill from the OyeRide app. A rider picks up your empty cylinder, has it refilled at a certified station, and brings it back the same day — you never have to leave the house.",
        },
      },
      // ── NEW — Earn ecosystem (rider / courier / fleet / merchant) ─
      {
        "@type": "Question",
        name: "What's the difference between an OyeRide rider and a courier?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Riders carry passengers on motorcycle taxi trips. Couriers deliver parcels and packages on a motorcycle or bicycle instead of carrying passengers. Both can sign up from inside the OyeRide app and work flexible hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can I list my motorcycle fleet with OyeRide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Fleet owners can list multiple motorcycles on OyeRide, assign riders to them, and track every trip from a dashboard, with earnings calculated per trip per rider.",
        },
      },
      {
        "@type": "Question",
        name: "Can my restaurant or shop get deliveries through OyeRide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Merchants can list their restaurant, shop, or pharmacy on OyeRide so nearby customers can order deliveries. OyeRide handles pickup, delivery, and customer tracking — merchants just pack the order.",
        },
      },
    ],
  },
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}