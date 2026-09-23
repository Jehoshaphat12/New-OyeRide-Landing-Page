import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { privacyNotices } from "@/lib/privacy-notices";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notice = privacyNotices.find((n) => n.slug === slug);

  if (!notice) {
    return { title: "Privacy Notice — OyeRide" };
  }

  return {
    title: `${notice.title} — OyeRide`,
    description: notice.summary,
  };
}

export function generateStaticParams() {
  return privacyNotices.map((notice) => ({ slug: notice.slug }));
}

export default async function PrivacyNoticePage({ params }: Props) {
  const { slug } = await params;
  const notice = privacyNotices.find((n) => n.slug === slug);

  if (!notice) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#054997] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-28 lg:pb-20">
          {/* <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Privacy Center
          </Link> */}

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {notice.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-7 text-white/85">
            {notice.summary}
          </p>
          <p className="mt-6 text-sm font-medium text-white/60">
            Last updated: {notice.lastUpdated}
          </p>
        </div>
      </section>

      {/* Notice content */}
      <section className="bg-white py-20  lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-14">
            {notice.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-black sm:text-2xl ">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700 ">
                  {section.body.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-base font-bold text-black ">
              Questions about this notice?
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 ">
              Email us at{" "}
              <a
                href="mailto:hello@oyeridegh.com?subject=Privacy%20Question"
                className="font-semibold text-[#054997] underline "
              >
                hello@oyeridegh.com
              </a>{" "}
              or visit the{" "}
              <Link
                href="/privacy/data-request"
                className="font-semibold text-[#054997] underline "
              >
                Data Rights Request portal
              </Link>{" "}
              to exercise your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Related notices */}
      <section className="bg-zinc-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-black ">
            Other privacy notices
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {privacyNotices
              .filter((n) => n.slug !== notice.slug)
              .slice(0, 4)
              .map((n) => (
                <Link
                  key={n.slug}
                  href={`/privacy/${n.slug}`}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-[#054997]"
                >
                  <p className="text-sm font-bold text-black ">
                    {n.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 ">
                    {n.category}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#054997] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Need to make a data request?
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
            Access, correction, deletion — takes about 2 minutes.
          </p>
          <Link
            href="/privacy/data-request"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#054997] transition hover:bg-zinc-100"
          >
            Submit a request
          </Link>
        </div>
      </section>
    </>
  );
}