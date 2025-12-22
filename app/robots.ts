import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      // Main search engines - full access
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Yandex"],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/schedule/success"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "anthropic-ai",
          "ClaudeBot",
          "PerplexityBot",
          "Bytespider",
          "CCBot",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: [
          "/",
          "/services/",
          "/services/corporate",
          "/services/accounting",
          "/services/tax",
          "/services/payroll",
          "/services/advisory",
          "/services/growth",
          "/about",
          "/faq",
          "/contact",
          "/case-studies",
          "/calculator",
          "/for/",
          "/th/",
          "/ru/",
          "/cn/",
        ],
        disallow: ["/api/", "/admin/", "/private/", "/schedule/success"],
      },
      {
        userAgent: ["facebookexternalhit", "Twitterbot", "LinkedInBot"],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // Default - allow all
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/schedule/success"],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/th/sitemap.xml`,
      `${baseUrl}/ru/sitemap.xml`,
      `${baseUrl}/cn/sitemap.xml`,
    ],
    host: baseUrl,
  }
}
