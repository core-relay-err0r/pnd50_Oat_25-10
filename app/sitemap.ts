import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  const lastUpdated = {
    home: "2025-06-15T00:00:00.000Z",
    services: "2025-06-20T00:00:00.000Z",
    servicePages: "2025-06-20T00:00:00.000Z",
    about: "2025-05-01T00:00:00.000Z",
    schedule: "2025-06-01T00:00:00.000Z",
    contact: "2025-04-15T00:00:00.000Z",
    faq: "2025-06-18T00:00:00.000Z",
    caseStudies: "2025-06-10T00:00:00.000Z",
    legal: "2025-01-01T00:00:00.000Z",
    calculator: "2025-06-01T00:00:00.000Z",
    regional: "2025-05-15T00:00:00.000Z",
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

  const createMultilingualAlternates = (path: string) => ({
    languages: {
      en: `${baseUrl}${path}`,
      th: `${baseUrl}/th${path}`,
      ru: `${baseUrl}/ru${path}`,
      "zh-CN": `${baseUrl}/cn${path}`,
    },
  })

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated.home,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createMultilingualAlternates(""),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdated.services,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: createMultilingualAlternates("/services"),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated.about,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: createMultilingualAlternates("/about"),
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
      alternates: createMultilingualAlternates("/contact"),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastUpdated.faq,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: createMultilingualAlternates("/faq"),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: lastUpdated.caseStudies,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: createAlternates("/case-studies"),
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: lastUpdated.calculator,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: createAlternates("/calculator"),
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = [
    { slug: "corporate", priority: 0.95 },
    { slug: "accounting", priority: 0.9 },
    { slug: "tax", priority: 0.9 },
    { slug: "payroll", priority: 0.9 },
    { slug: "advisory", priority: 0.85 },
    { slug: "growth", priority: 0.85 },
  ].map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastUpdated.servicePages,
    changeFrequency: "weekly" as const,
    priority: service.priority,
    alternates: createAlternates(`/services/${service.slug}`),
  }))

  const regionalPages: MetadataRoute.Sitemap = [
    { slug: "singapore", priority: 0.7 },
    { slug: "taiwan", priority: 0.7 },
    { slug: "russia", priority: 0.7 },
  ].map((region) => ({
    url: `${baseUrl}/for/${region.slug}`,
    lastModified: lastUpdated.regional,
    changeFrequency: "monthly" as const,
    priority: region.priority,
    alternates: createAlternates(`/for/${region.slug}`),
  }))

  // Legal pages
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

  const languagePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/th`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createMultilingualAlternates(""),
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createMultilingualAlternates(""),
    },
    {
      url: `${baseUrl}/cn`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createMultilingualAlternates(""),
    },
  ]

  const locales = ["th", "ru", "cn"]
  const localizedPages = ["services", "about", "faq", "contact"]

  const localizedSubPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    localizedPages.map((page) => ({
      url: `${baseUrl}/${locale}/${page}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "services" ? 0.9 : 0.7,
      alternates: createMultilingualAlternates(`/${page}`),
    })),
  )

  return [...mainPages, ...servicePages, ...regionalPages, ...legalPages, ...languagePages, ...localizedSubPages]
}
