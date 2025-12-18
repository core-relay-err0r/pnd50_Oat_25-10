// Robots.txt configuration for SEO
import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo-config"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      // Main search engines
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Yandex"],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // AI crawlers - allow for better AI search visibility
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
        ],
        allow: ["/", "/services/", "/about", "/faq", "/contact"],
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // Default - allow all
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
