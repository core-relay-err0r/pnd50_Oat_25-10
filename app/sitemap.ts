import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const now = new Date().toISOString()

  const lastUpdated = {
    home: now,
    services: now,
    servicePages: now,
    about: now,
    schedule: now,
    contact: now,
    faq: now,
    caseStudies: now,
    legal: now,
    calculator: now,
    regional: now,
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
      priority: 1.0,
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

  // Language/locale pages
  const languagePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/th`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: baseUrl,
          th: `${baseUrl}/th`,
          ru: `${baseUrl}/ru`,
          "zh-CN": `${baseUrl}/cn`,
        },
      },
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: baseUrl,
          th: `${baseUrl}/th`,
          ru: `${baseUrl}/ru`,
          "zh-CN": `${baseUrl}/cn`,
        },
      },
    },
    {
      url: `${baseUrl}/cn`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: baseUrl,
          th: `${baseUrl}/th`,
          ru: `${baseUrl}/ru`,
          "zh-CN": `${baseUrl}/cn`,
        },
      },
    },
  ]

  return [...mainPages, ...servicePages, ...regionalPages, ...legalPages, ...languagePages]
}
