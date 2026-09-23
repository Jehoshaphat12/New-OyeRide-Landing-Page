import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — OyeRide",
  description:
    "The terms that govern your use of the OyeRide app, website, and services. Read our full terms of service.",
};

const sections = [
  {
    id: "acceptance",
    heading: "1. Acceptance of these terms",
    body: [
      "These Terms of Service (\"Terms\") form a legally binding agreement between you and OyeRide Hailing Service (\"OyeRide\", \"we\", \"our\", or \"us\"). They govern your access to and use of the OyeRide mobile app, website at oyeridegh.com, and all related services (collectively, the \"Services\").",
      "By downloading the app, creating an account, or using any part of the Services, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, please do not use the Services.",
    ],
  },
  {
    id: "eligibility",
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 years old to create an OyeRide account and use the Services. By using the Services, you represent that you meet this requirement and have the legal capacity to enter into this agreement.",
      "You agree to provide accurate, current, and complete information when you register, and to keep that information up to date. If any information you provide is found to be false, we may suspend or terminate your account.",
    ],
  },
  {
    id: "account",
    heading: "3. Your account",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials, including your password and any verification codes. You agree to notify us immediately if you suspect unauthorised access to your account.",
      "You may only create one personal account. Accounts are personal and non-transferable. Commercial use of a personal passenger account — such as reselling trips to third parties — is not permitted.",
      "We may suspend or terminate any account that violates these Terms, misuses the Services, or poses a risk to other users or to OyeRide.",
    ],
  },
  {
    id: "services",
    heading: "4. The Services",
    body: [
      "OyeRide provides a technology platform that connects passengers with independent motorcycle riders, senders with couriers, and customers with merchants. OyeRide itself does not provide transportation services — riders and couriers are independent operators.",
      "The Services include Motor Ride, Motor Delivery, Bicycle Delivery, and Gas Refill. Availability of each service may vary by location and time.",
      "We may modify, suspend, or discontinue any part of the Services at any time. We will provide reasonable notice for significant changes that affect existing users.",
    ],
  },
  {
    id: "payments",
    heading: "5. Payments and fares",
    body: [
      "Fares are calculated based on distance, time, and current demand, and are shown to you before you confirm a booking. You agree to pay the fare displayed at the time of your booking.",
      "Payment methods accepted by OyeRide may change from time to time. We currently accept cash payments on completion of the trip or delivery. Mobile money and card payments will be introduced in the future, and additional terms will apply when they are.",
      "If a payment is reversed, disputed, or fails, we reserve the right to suspend your account until the matter is resolved.",
    ],
  },
  {
    id: "conduct",
    heading: "6. User conduct",
    body: [
      "You agree to use the Services only for lawful purposes and in accordance with these Terms. You will not:",
    ],
    bullets: [
      "Harass, threaten, or harm any rider, courier, merchant, or other user.",
      "Use the Services to transport illegal goods, weapons, or hazardous materials.",
      "Attempt to reverse-engineer, copy, or exploit any part of the OyeRide app or platform.",
      "Create fake accounts, abuse promotions, or interfere with our payment systems.",
      "Impersonate another person or misrepresent your affiliation with any organisation.",
      "Use the Services in a way that damages OyeRide's reputation or disrupts the experience of other users.",
    ],
  },
  {
    id: "riders",
    heading: "7. Riders and couriers",
    body: [
      "If you register as a rider or courier, you do so as an independent contractor, not as an employee, agent, or partner of OyeRide. You are responsible for your own taxes, insurance, licensing, and compliance with all applicable laws.",
      "You agree to maintain a valid motorcycle license (Class A) or any required permits, a roadworthy vehicle, valid insurance, and any other requirements OyeRide specifies for your vehicle type.",
      "You agree to provide a safe, courteous service, follow traffic laws at all times, and never operate a vehicle while under the influence of alcohol or drugs.",
      "OyeRide may suspend or permanently remove any rider or courier who violates these Terms, receives repeated low ratings, or fails safety or background checks.",
    ],
  },
  {
    id: "merchants",
    heading: "8. Merchants",
    body: [
      "If you list a business on the OyeRide platform, you agree to accurately describe your products and services, honour the prices and availability shown in the app, and comply with all applicable food safety, health, and consumer protection laws.",
      "You authorise OyeRide to collect payments on your behalf and remit the amount owed to you, minus applicable commission, on a schedule we communicate to you.",
    ],
  },
  {
    id: "intellectual",
    heading: "9. Intellectual property",
    body: [
      "The OyeRide name, logo, and all content, features, and functionality of the Services are owned by OyeRide or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
      "We grant you a limited, non-exclusive, non-transferable, revocable license to use the OyeRide app for personal, non-commercial purposes in accordance with these Terms.",
      "You may not copy, modify, distribute, sell, or lease any part of the Services, or use our trademarks without written permission.",
    ],
  },
  {
    id: "liability",
    heading: "10. Limitation of liability",
    body: [
      "OyeRide acts as a platform connecting users and independent service providers. To the maximum extent permitted by law, we are not liable for the acts or omissions of riders, couriers, merchants, or other users.",
      "The Services are provided \"as is\" and \"as available\", without warranties of any kind, express or implied. We do not warrant that the Services will be uninterrupted, error-free, or fully secure.",
      "To the extent permitted by law, OyeRide's total liability arising out of or relating to the Services is limited to the amount you paid OyeRide in the twelve (12) months preceding the event giving rise to the claim.",
      "Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under Ghanaian law, including liability for death or personal injury caused by OyeRide's negligence.",
    ],
  },
  {
    id: "termination",
    heading: "11. Suspension and termination",
    body: [
      "You may stop using the Services at any time. You can delete your account directly in the app, or by visiting our Delete Account page.",
      "We may suspend or terminate your access to the Services at any time, with or without notice, if we reasonably believe you have violated these Terms, pose a risk to other users, or if required by law.",
      "Provisions of these Terms that by their nature should survive termination — including intellectual property, liability, and dispute resolution — will continue to apply.",
    ],
  },
  {
    id: "changes",
    heading: "12. Changes to these terms",
    body: [
      "We may update these Terms from time to time. When we do, we will change the date at the top of this page and, for material changes, notify you in the app or by email.",
      "Continuing to use the Services after changes take effect means you accept the updated Terms. If you do not agree, you must stop using the Services.",
    ],
  },
  {
    id: "law",
    heading: "13. Governing law and disputes",
    body: [
      "These Terms are governed by the laws of the Republic of Ghana. Any dispute arising out of or relating to these Terms or the Services will be subject to the exclusive jurisdiction of the courts of Ghana.",
      "Before pursuing formal legal action, we ask that you contact us at hello@oyeridegh.com so we can attempt to resolve the matter informally.",
    ],
  },
  {
    id: "contact",
    heading: "14. Contact us",
    body: [
      "Questions about these Terms? Email us at hello@oyeridegh.com. Our team responds to all legal inquiries within 30 days.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            The agreement that governs your use of the OyeRide app, website,
            and services.
          </p>
          <p className="mt-6 text-sm font-medium text-white/60">
            Last updated: September 2026
          </p>
        </div>

        <div className="w-full">
          <img
            src="/termsHero.png"
            alt=""
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[640px]"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 dark:bg-black lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-9">
            Please read these Terms carefully before using OyeRide. They explain
            your rights and responsibilities, and ours, when you use our app or
            any of our services. If you have any questions, contact us before
            you agree.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white pb-20 dark:bg-black lg:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-black sm:text-2xl dark:text-white">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-base leading-7 text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#054997] dark:bg-[#7bb3e8]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-950 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-black dark:text-white">
            Related pages
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/privacy"
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-[#054997] dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm font-bold text-black dark:text-white">
                Privacy Center
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                How we handle your personal data
              </p>
            </Link>
            <Link
              href="/privacy/data-request"
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-[#054997] dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm font-bold text-black dark:text-white">
                Data rights request
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Access, correct, or delete your data
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000000] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions about these terms?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/85">
            We&apos;re happy to explain anything in writing.
          </p>
          <a
            href="mailto:hello@oyeridegh.com?subject=Terms%20of%20Service%20Question"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Email us
          </a>
        </div>
      </section>
    </>
  );
}