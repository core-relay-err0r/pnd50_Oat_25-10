import type { MetadataRoute } from "next"
import { siteConfig, pageDates } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Main pages with dates from pageDates
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: pageDates.home.modified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: pageDates.services.modified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: pageDates.about.modified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: pageDates.schedule.modified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: pageDates.contact.modified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: pageDates.faq.modified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: pageDates.caseStudies.modified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: pageDates.calculator.modified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ]

  // Service pages with individual dates
  const servicePages: MetadataRoute.Sitemap = [
    { slug: "corporate", priority: 0.95, dateKey: "services/corporate" as keyof typeof pageDates },
    { slug: "accounting", priority: 0.9, dateKey: "services/accounting" as keyof typeof pageDates },
    { slug: "tax", priority: 0.9, dateKey: "services/tax" as keyof typeof pageDates },
    { slug: "payroll", priority: 0.9, dateKey: "services/payroll" as keyof typeof pageDates },
    { slug: "advisory", priority: 0.85, dateKey: "services/advisory" as keyof typeof pageDates },
    { slug: "growth", priority: 0.85, dateKey: "services/growth" as keyof typeof pageDates },
  ].map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: pageDates[service.dateKey]?.modified || pageDates.services.modified,
    changeFrequency: "weekly" as const,
    priority: service.priority,
  }))

  // Regional pages for geographic SEO (kept)
  const regionalPages: MetadataRoute.Sitemap = [
    { slug: "singapore", priority: 0.7 },
    { slug: "taiwan", priority: 0.7 },
    { slug: "russia", priority: 0.7 },
  ].map((region) => ({
    url: `${baseUrl}/for/${region.slug}`,
    lastModified: "2025-06-15",
    changeFrequency: "monthly" as const,
    priority: region.priority,
  }))

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  return [...mainPages, ...servicePages, ...regionalPages, ...legalPages]
}
