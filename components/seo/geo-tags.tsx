// Geo/Local SEO Meta Tags Component
import { siteConfig, serviceAreas } from "@/lib/seo-config"

interface GeoTagsProps {
  city?: string
  region?: string
}

export function GeoTags({ city = "Bangkok", region = "Bangkok" }: GeoTagsProps) {
  return (
    <>
      {/* Dublin Core Geo Tags */}
      <meta name="DC.title" content={siteConfig.business.name} />
      <meta name="DC.creator" content={siteConfig.business.name} />
      <meta name="DC.subject" content="Accounting, Tax Services, Business Consulting" />
      <meta name="DC.description" content={siteConfig.description} />
      <meta name="DC.publisher" content={siteConfig.business.name} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Thailand" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="TH" />
      <meta name="geo.placename" content={city} />
      <meta name="geo.position" content={`${siteConfig.business.geo.latitude};${siteConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.business.geo.latitude}, ${siteConfig.business.geo.longitude}`} />

      {/* Language/Region Tags */}
      <meta httpEquiv="content-language" content="en-TH" />
      <link rel="alternate" hrefLang="en" href={siteConfig.url} />
      <link rel="alternate" hrefLang="th" href={`${siteConfig.url}/th`} />
      <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

      {/* Business Contact */}
      <meta name="contact" content={siteConfig.business.email} />
      <meta name="reply-to" content={siteConfig.business.email} />
      <meta name="owner" content={siteConfig.business.name} />
      <meta name="coverage" content="Thailand" />
      <meta name="distribution" content="local" />
      <meta name="target" content="business" />
    </>
  )
}

// Service Area Schema for multiple locations
export function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.business.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      alternateName: area.nameTh,
      containedInPlace: {
        "@type": "Country",
        name: "Thailand",
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// International Service Area Schema for target countries
export function InternationalServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.business.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Thailand",
        description: "Primary market - Full accounting and tax services",
      },
      {
        "@type": "Country",
        name: "Singapore",
        description: "Singapore companies expanding to Thailand",
      },
      {
        "@type": "Country",
        name: "Russia",
        description: "Russian entrepreneurs and businesses in Thailand",
      },
      {
        "@type": "Country",
        name: "Taiwan",
        description: "Taiwanese companies with operations in Thailand",
      },
    ],
    availableLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "Thai",
        alternateName: "th",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
