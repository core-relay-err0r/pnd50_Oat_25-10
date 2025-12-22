// Structured Data Components for SEO
// JSON-LD Schema.org markup for rich snippets

import { siteConfig } from "@/lib/seo-config"

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    alternateName: "Inspired by P.N.D.50 (ภ.ง.ด.50) - Thailand Corporate Income Tax Return",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    foundingDate: siteConfig.business.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin, siteConfig.social.twitter],
    knowsAbout: [
      "Thai accounting standards",
      "Corporate income tax Thailand",
      "PND50 tax filing",
      "VAT management",
      "Foreign business compliance",
      "Company registration Thailand",
      "Open business in Thailand",
      "Thailand company formation for foreigners",
      "BOI promotion application",
      "Foreign Business License Thailand",
    ],
    slogan: siteConfig.tagline,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// LocalBusiness Schema (for local SEO)
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.business.name,
    alternateName: "PND50 - ภ.ง.ด.50 Accounting Services Thailand",
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: siteConfig.business.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.business.geo.latitude,
        longitude: siteConfig.business.geo.longitude,
      },
      geoRadius: "50000", // 50km radius
    },
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "THB",
    availableLanguage: ["English", "Thai", "Russian", "Chinese"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// Service Schema
interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  price?: string
  priceCurrency?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = siteConfig.business.name,
  price,
  priceCurrency = "THB",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.business.address.streetAddress,
        addressLocality: siteConfig.business.address.addressLocality,
        addressRegion: siteConfig.business.address.addressRegion,
        postalCode: siteConfig.business.address.postalCode,
        addressCountry: siteConfig.business.address.addressCountry,
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    serviceType: "Accounting Service",
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency,
        availability: "https://schema.org/InStock",
      },
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// FAQ Schema
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// WebSite Schema (for sitelinks searchbox)
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-US", "th-TH"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// Professional Service Schema (more specific)
export function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.business.name,
    alternateName: "PND50 (ภ.ง.ด.50) - AI Boutique Accounting & Tax Consultant",
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    description: siteConfig.description,
    foundingDate: siteConfig.business.foundingDate,
    award: "Best Accounting Firm for Foreign Businesses 2023",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting & Consulting Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Tax Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PND50 Filing",
                description: "Annual corporate income tax filing service",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "VAT Management",
                description: "Complete VAT registration and filing services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tax Planning",
                description: "Strategic tax planning and optimization",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Accounting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Monthly Bookkeeping",
                description: "Professional bookkeeping and financial recording",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Audit Support",
                description: "Audit preparation and support services",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Business Setup Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Company Registration Thailand",
                description: "Complete company registration service for foreigners to open business in Thailand",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "BOI Promotion Application",
                description: "Board of Investment promotion application and support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Foreign Business License",
                description: "Foreign Business License application for 100% foreign-owned companies",
              },
            },
          ],
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SpeakableSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PND50 - AI Boutique Accounting & Consultant Thailand",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article", "h1", "h2", ".speakable"],
    },
    url: siteConfig.url,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// Article Schema with support for Person or Organization author type
interface ArticleSchemaProps {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author?: string
  authorType?: "Person" | "Organization"
  authorUrl?: string
  authorJobTitle?: string
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "PND50 Team",
  authorType = "Organization",
  authorUrl,
  authorJobTitle,
}: ArticleSchemaProps) {
  const authorSchema =
    authorType === "Person"
      ? {
          "@type": "Person",
          name: author,
          url: authorUrl || siteConfig.url,
          jobTitle: authorJobTitle || "Accounting Expert",
          worksFor: {
            "@type": "Organization",
            name: siteConfig.business.name,
          },
        }
      : {
          "@type": "Organization",
          name: author,
          url: authorUrl || siteConfig.url,
        }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: authorSchema,
    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig.url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// WebPage Schema with datePublished/dateModified for E-E-A-T
interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  breadcrumb?: { name: string; url: string }[]
}

export function WebPageSchema({ name, description, url, datePublished, dateModified, breadcrumb }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    ...(breadcrumb && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      },
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// Author Schema for E-E-A-T signals
interface AuthorSchemaProps {
  name: string
  jobTitle: string
  description?: string
  image?: string
  credentials?: string[]
  sameAs?: string[]
}

export function AuthorSchema({ name, jobTitle, description, image, credentials = [], sameAs = [] }: AuthorSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    image: image || `${siteConfig.url}/team/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.business.name,
      url: siteConfig.url,
    },
    ...(credentials.length > 0 && {
      hasCredential: credentials.map((cred) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: cred,
        recognizedBy: {
          "@type": "Organization",
          name: "Federation of Accounting Professions Thailand",
        },
      })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// ServicePage Schema combining Service + WebPage with dates
interface ServicePageSchemaProps {
  name: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  price?: string
  breadcrumb: { name: string; url: string }[]
}

export function ServicePageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
  price,
  breadcrumb,
}: ServicePageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "Organization",
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
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    serviceType: "Accounting Service",
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "THB",
        availability: "https://schema.org/InStock",
      },
    }),
    // WebPage metadata for E-E-A-T
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`,
      datePublished,
      dateModified,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
