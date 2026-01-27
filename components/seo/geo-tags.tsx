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
    description:
      "PND50 (ภ.ง.ด.50) tax filing, accounting, and business compliance services for foreign companies operating in Thailand",
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
        description:
          "Primary market - PND50 tax filing, corporate accounting, VAT registration, and full business compliance services",
      },
      {
        "@type": "Country",
        name: "Singapore",
        description:
          "PND50 tax filing and Thai accounting services for Singapore companies expanding to Thailand. Corporate tax compliance for Singapore-Thailand business operations.",
      },
      {
        "@type": "Country",
        name: "Russia",
        description:
          "PND50 tax filing and accounting services for Russian entrepreneurs and digital nomads in Thailand. Thai corporate tax support for Russian business owners.",
      },
      {
        "@type": "Country",
        name: "Taiwan",
        description:
          "PND50 tax filing and accounting services for Taiwanese manufacturers and trading companies in Thailand. Thai tax compliance for Taiwan-Thailand business.",
      },
      {
        "@type": "Country",
        name: "China",
        description:
          "PND50 tax filing and accounting services for Chinese companies with Thailand subsidiaries. Thai corporate tax support for China-Thailand business.",
      },
      {
        "@type": "Country",
        name: "Vietnam",
        description:
          "PND50 tax filing and accounting services for Vietnamese businesses expanding to Thailand. Thai tax compliance support.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Thailand Business Services for Foreign Companies",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PND50 Tax Filing",
            description:
              "Annual corporate income tax return (ภ.ง.ด.50/P.N.D.50) filing for foreign-owned companies in Thailand",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monthly Accounting",
            description: "Thai GAAP compliant bookkeeping and financial reporting for international businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VAT Registration & Filing",
            description: "PP30 VAT filing and compliance for foreign companies in Thailand",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Company Registration",
            description:
              "Thai Limited Company setup for foreign entrepreneurs from Singapore, Russia, Taiwan, and worldwide",
          },
        },
      ],
    },
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
    knowsAbout: [
      "PND50 tax filing Thailand",
      "Thai corporate income tax for foreigners",
      "Singapore company Thailand subsidiary",
      "Russian business Thailand accounting",
      "Taiwan company Thailand tax",
      "Foreign company registration Thailand",
      "Thai VAT for international businesses",
      "Withholding tax Thailand expats",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
