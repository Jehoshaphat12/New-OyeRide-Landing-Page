export type PrivacySection = {
  heading: string;
  body: string[];
};

export type PrivacyNotice = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  lastUpdated: string;
  sections: PrivacySection[];
};

export const privacyNotices: PrivacyNotice[] = [
  {
    slug: "passengers",
    category: "Rides",
    title: "Privacy Notice for Passengers",
    summary:
      "How we handle personal data when you book rides, deliveries, or gas refills as an OyeRide customer.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you create an OyeRide account as a passenger, we collect your name, phone number, email address, and profile photo.",
          "During a trip, we collect your pickup and drop-off locations, route data, the fare paid, and the rider you were matched with.",
          "If you use OyeRide Delivery or Gas Refill, we additionally record the item description, recipient details, and delivery confirmation photos.",
        ],
      },
      {
        heading: "How we use your data",
        body: [
          "We use your information to match you with riders, calculate fares, process payments, provide customer support, and keep the platform safe.",
          "We also use aggregated, anonymized data to improve the service — understanding popular routes, optimising pickup times, and planning where to expand.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Your assigned rider or courier sees your first name, profile photo, and live location during an active trip.",
          "Payment processors, cloud infrastructure providers, and mapping services receive limited data needed to help us run OyeRide. They are bound by contract to protect it.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can access, correct, or delete your personal data at any time from the app under Profile → Settings, or by visiting the Data Rights Request portal.",
          "We respond to all privacy requests within 30 days.",
        ],
      },
    ],
  },
  {
    slug: "riders",
    category: "Rides",
    title: "Privacy Notice for Riders",
    summary:
      "How we process personal data for motorcycle riders who accept trips on the OyeRide platform.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you register as a rider, we collect your legal name, phone number, government-issued ID, motorcycle license, vehicle registration, insurance details, and a photo of you.",
          "While you're online, we collect your live location, trip history, earnings, and ratings from passengers.",
        ],
      },
      {
        heading: "How we use your data",
        body: [
          "To verify your identity, match you with nearby passengers, calculate your earnings, process payouts, and support you when issues arise.",
          "We also use location and trip data to improve matching efficiency and to investigate safety or fraud reports.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Passengers see your first name, photo, motorcycle details, and live location during an active trip.",
          "We share verification data with identity-verification providers and, when legally required, with law enforcement.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can update most of your profile from the rider app. To request a copy of your data or ask for deletion, use the Data Rights Request portal.",
          "Note that certain records — such as payout history required for tax purposes — may be retained after account deletion as required by law.",
        ],
      },
    ],
  },
  {
    slug: "senders",
    category: "Delivery",
    title: "Privacy Notice for Delivery Senders",
    summary:
      "How we handle personal data when you send parcels, documents, or items using OyeRide Delivery.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "For each delivery, we collect your name and contact details, the pickup address, the recipient's name and address, and a description of the item.",
          "We also store proof-of-delivery photos, signatures (where used), and live tracking data of the courier's route.",
        ],
      },
      {
        heading: "How we use your data",
        body: [
          "To match your delivery with a courier, provide live tracking to you and the recipient, resolve disputes, and improve delivery routes over time.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "The assigned courier sees your name, phone number, pickup address, and drop-off address.",
          "The recipient sees a live tracking link and the courier's name and photo, but not your personal contact details.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can request access to, correction of, or deletion of your data through the Data Rights Request portal.",
        ],
      },
    ],
  },
  {
    slug: "couriers",
    category: "Delivery",
    title: "Privacy Notice for Couriers",
    summary:
      "How we process personal data for motorcycle and bicycle couriers delivering on the OyeRide platform.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you register as a courier, we collect your legal name, phone number, government-issued ID, vehicle registration (for motor couriers), insurance details, and a photo of you.",
          "While online, we collect your live location, delivery history, earnings, and ratings from senders.",
        ],
      },
      {
        heading: "How we use your data",
        body: [
          "To verify your identity, match you with nearby delivery jobs, calculate your earnings, process payouts, and support you when issues arise.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Senders and recipients see your first name, photo, and live location during an active delivery.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can update most of your profile from the courier app. To request a copy of your data or ask for deletion, use the Data Rights Request portal.",
        ],
      },
    ],
  },
  {
    slug: "merchants",
    category: "Delivery",
    title: "Privacy Notice for Merchants",
    summary:
      "How we process personal data for businesses that list products or take orders through OyeRide.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you register your business, we collect your business name, address, contact person, tax identification, and bank account details for payouts.",
          "For each order, we record the items requested, the customer's delivery details, and the fulfillment status.",
        ],
      },
      {
        heading: "How we use your data",
        body: [
          "To list your business in the app, route orders to you, calculate your payouts, and provide reporting on your order volume.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Your assigned couriers see your business name, pickup address, and the order details.",
          "Customers see your business name, the items they ordered, and the estimated delivery time.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can request access to, correction of, or deletion of your business data through the Data Rights Request portal.",
        ],
      },
    ],
  },
  {
    slug: "controllers",
    category: "Legal & Corporate",
    title: "OyeRide Group Companies and Data Controllers",
    summary:
      "The entities within the OyeRide group that act as data controllers for our services.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Data controller",
        body: [
          "OyeRide Hailing Service, registered in Ghana with its principal place of business in Kasoa, Central Region, is the primary data controller for the OyeRide passenger, rider, courier, and merchant services.",
        ],
      },
      {
        heading: "Group companies",
        body: [
          "As OyeRide expands into additional cities and introduces new services, additional group companies may be established and registered as joint or independent data controllers.",
          "Any changes to the list of data controllers will be reflected on this page before they take effect.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For any questions about which OyeRide entity is your data controller, email hello@oyeridegh.com.",
        ],
      },
    ],
  },
];

export const privacyCategories = [
  {
    name: "Rides",
    description:
      "Passengers booking motorcycle rides and riders accepting them.",
    slugs: ["passengers", "riders"],
  },
  {
    name: "Delivery",
    description:
      "Senders of parcels, couriers delivering them, and merchants using OyeRide.",
    slugs: ["senders", "couriers", "merchants"],
  },
  {
    name: "Legal & Corporate",
    description:
      "Information about the OyeRide entity and its role as a data controller.",
    slugs: ["controllers"],
  },
];