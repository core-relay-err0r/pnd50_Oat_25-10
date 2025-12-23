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
      url: `${baseUrl}/blog`,
      lastModified: "2024-12-23",
      changeFrequency: "weekly",
      priority: 0.9,
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

  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/what-is-pnd50`,
      lastModified: "2024-12-23",
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/pnd50-vs-pnd51`,
      lastModified: "2024-12-23",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/thailand-tax-guide`,
      lastModified: "2024-12-23",
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ]

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

  return [...mainPages, ...servicePages, ...blogPosts, ...legalPages]
}
