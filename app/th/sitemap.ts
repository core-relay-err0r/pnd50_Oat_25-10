import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  const createAlternates = (path: string) => ({
    languages: {
      en: `${baseUrl}${path}`,
      th: `${baseUrl}/th${path}`,
      ru: `${baseUrl}/ru${path}`,
      "zh-CN": `${baseUrl}/cn${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  })

  // Thai-specific pages
  const thaiPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/th`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: createAlternates(""),
    },
    {
      url: `${baseUrl}/th/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: createAlternates("/services"),
    },
    {
      url: `${baseUrl}/th/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createAlternates("/about"),
    },
    {
      url: `${baseUrl}/th/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: createAlternates("/contact"),
    },
    {
      url: `${baseUrl}/th/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: createAlternates("/faq"),
    },
    {
      url: `${baseUrl}/th/schedule`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: createAlternates("/schedule"),
    },
  ]

  // Thai service-specific pages
  const thaiServicePages = ["corporate", "accounting", "tax", "payroll", "advisory", "growth"].map((service) => ({
    url: `${baseUrl}/th/services/${service}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: createAlternates(`/services/${service}`),
  }))

  return [...thaiPages, ...thaiServicePages]
}
