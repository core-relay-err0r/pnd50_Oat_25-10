// Dynamic sitemap generation for SEO
import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          th: `${baseUrl}/th`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
          th: `${baseUrl}/th/about`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services`,
          th: `${baseUrl}/th/services`,
        },
      },
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/calculator`,
          th: `${baseUrl}/th/calculator`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          th: `${baseUrl}/th/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/faq`,
          th: `${baseUrl}/th/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/case-studies`,
          th: `${baseUrl}/th/case-studies`,
        },
      },
    },
  ]

  // Service pages
  const servicePages = [
    "accounting",
    "tax-planning",
    "tax-optimization",
    "pnd50-filing",
    "vat-management",
    "withholding-tax",
    "audit-support",
    "business-consulting",
    "corporate-tax-planning",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/services/${service}`,
        th: `${baseUrl}/th/services/${service}`,
      },
    },
  }))

  // Package pages
  const packagePages = ["startup", "growth", "full-cycle"].map((pkg) => ({
    url: `${baseUrl}/services/packages/${pkg}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/services/packages/${pkg}`,
        th: `${baseUrl}/th/services/packages/${pkg}`,
      },
    },
  }))

  // Legal pages (lower priority)
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  return [...mainPages, ...servicePages, ...packagePages, ...legalPages]
}
