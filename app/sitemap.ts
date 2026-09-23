import type { MetadataRoute } from "next";
import { privacyNotices } from "@/lib/privacy-notices";

const baseUrl = "https://oyeridegh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Main marketing pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/download`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/help`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/safety`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/rides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/delivery`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/bicycle-delivery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gas-refill`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Partner / recruitment pages
  const partnerPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/drive`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/courier`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/merchant`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/fleet`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy/data-request`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy/law-enforcement`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/delete-account`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Privacy notices — generated from the shared data file
  const privacyNoticePages: MetadataRoute.Sitemap = privacyNotices.map((notice) => ({
    url: `${baseUrl}/privacy/${notice.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...partnerPages,
    ...legalPages,
    ...privacyNoticePages,
  ];
}