import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  // Thai-specific pages
  const thaiPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/th`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          th: `${baseUrl}/th`,
          ru: `${baseUrl}/ru`,
          "zh-CN": `${baseUrl}/cn`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/th/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: `${baseUrl}/services`,
          th: `${baseUrl}/th/services`,
          ru: `${baseUrl}/ru/services`,
          "zh-CN": `${baseUrl}/cn/services`,
        },
      },
    },
    {
      url: `${baseUrl}/th/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
          th: `${baseUrl}/th/about`,
          ru: `${baseUrl}/ru/about`,
          "zh-CN": `${baseUrl}/cn/about`,
        },
      },
    },
    {
      url: `${baseUrl}/th/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          th: `${baseUrl}/th/contact`,
          ru: `${baseUrl}/ru/contact`,
          "zh-CN": `${baseUrl}/cn/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/th/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/faq`,
          th: `${baseUrl}/th/faq`,
          ru: `${baseUrl}/ru/faq`,
          "zh-CN": `${baseUrl}/cn/faq`,
        },
      },
    },
  ]

  // Thai service-specific pages (if you have them)
  const thaiServicePages = ["corporate", "accounting", "tax", "payroll", "advisory"].map((service) => ({
    url: `${baseUrl}/th/services/${service}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/services/${service}`,
        th: `${baseUrl}/th/services/${service}`,
      },
    },
  }))

  return [...thaiPages, ...thaiServicePages]
}
