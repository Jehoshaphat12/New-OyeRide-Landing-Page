"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "How do I book a ride with OyeRide in Kasoa?",
    answer:
      "Open the OyeRide app, set your pickup and drop-off locations, choose your ride type, and tap to confirm. A nearby Rider will accept within seconds and you'll see their name, car, and ETA before they arrive.",
  },
  {
    question: "How much does a motor ride cost?",
    answer:
      "Fares are calculated upfront based on distance, time, and current demand. You'll always see the exact price before you confirm — no surprises, no haggling. We accept cash and mobile money.",
  },
  {
    question: "Can I track my Rider in real time?",
    answer:
      "Yes. Once a Rider accepts your request, you can follow their approach on the map in real time, see their estimated arrival time, and get a notification the moment they're outside.",
  },
  {
    question: "What payment methods does OyeRide accept?",
    answer:
      "We accept cash and all major mobile money providers including MTN MoMo, Vodafone Cash, and AirtelTigo Money. Card payments are coming soon.",
  },
  {
    question: "Is OyeRide available outside Kasoa?",
    answer:
      "We're currently focused on Kasoa and the surrounding communities. We're expanding to more cities across Ghana soon — follow us on social media to be the first to know when we launch in your area.",
  },
  {
    question: "How do I become an OyeRide Rider?",
    answer:
      "Download the Rider app, sign up with your details, upload your Rider's license and vehicle documents, and complete a short verification. Once approved, you can start accepting rides and earning immediately.",
  },
  {
    question: "What happens if my Rider cancels?",
    answer:
      "If a Rider cancels before pickup, we'll automatically find you a new one at the same fare. You'll never be charged for a cancelled ride, and repeated cancellations by a Rider are reviewed by our team.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-20  lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl ">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base font-medium text-zinc-500 ">
            Everything you need to know about OyeRide.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
 isOpen
 ? "border-zinc-300 "
 : "border-zinc-200/80 "
 }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
                >
                  <span className="text-base font-bold text-black sm:text-lg ">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e6eef9] text-[#054997] transition-transform ${
 isOpen ? "rotate-45" : ""
 }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Answer — animated collapse via grid-rows trick */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-zinc-600 sm:px-8 sm:pb-8 sm:text-base ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}