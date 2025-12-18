import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const lastUpdated = {
    home: "2025-01-15",
    services: "2025-01-18",
    servicePages: "2025-01-18",
    about: "2025-01-10",
    schedule: "2025-01-15",
    contact: "2025-01-10",
    faq: "2025-01-18",
    caseStudies: "2025-01-05",
    legal: "2024-12-01",
  }

  const targetRegions = ["en", "en-US", "en-GB", "en-SG", "en-AU"]

  const createAlternates = (path: string) => ({
    languages: targetRegions.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: `${baseUrl}${path}`,
      }),
      {} as Record<string, string>,
    ),
  })

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated.home,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createAlternates(""),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdated.services,
      changeFrequency: "weekly",
      priority: 1.0, // Main SEO hub
      alternates: createAlternates("/services"),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated.about,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: createAlternates("/about"),
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: lastUpdated.schedule,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createAlternates("/schedule"),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated.contact,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: createAlternates("/contact"),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastUpdated.faq,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: createAlternates("/faq"),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: lastUpdated.caseStudies,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: createAlternates("/case-studies"),
    },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    { slug: "corporate", priority: 0.95, description: "open business in Thailand" },
    { slug: "accounting", priority: 0.9, description: "accounting services Thailand" },
    { slug: "tax", priority: 0.9, description: "tax services Thailand" },
    { slug: "payroll", priority: 0.9, description: "payroll services Thailand" },
    { slug: "advisory", priority: 0.85, description: "business advisory Thailand" },
    { slug: "growth", priority: 0.85, description: "business growth Thailand" },
  ].map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastUpdated.servicePages,
    changeFrequency: "weekly" as const,
    priority: service.priority,
    alternates: createAlternates(`/services/${service.slug}`),
  }))

  // Legal pages (lower priority, no alternates needed)
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastUpdated.legal,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastUpdated.legal,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  return [...mainPages, ...servicePages, ...legalPages]
}
