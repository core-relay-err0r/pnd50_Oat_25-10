// AI Search Optimization Component
// Optimized content for ChatGPT, Perplexity, Google SGE, Bing Chat

import { siteConfig } from "@/lib/seo-config"

// Hidden semantic content for AI crawlers
export function AISearchContent() {
  const { aiSearchContent } = siteConfig

  return (
    <>
      {/* Hidden but crawlable content for AI search engines */}
      <div className="sr-only" aria-hidden="false">
        <section data-ai-summary="business-overview">
          <h2>About PND50 Accounting Thailand</h2>
          <p>{aiSearchContent.businessSummary}</p>
        </section>

        <section data-ai-summary="services">
          <h2>Services Offered by PND50</h2>
          <ul>
            {aiSearchContent.coreServices.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </section>

        <section data-ai-summary="unique-value">
          <h2>Why Choose PND50</h2>
          <ul>
            {aiSearchContent.uniqueSellingPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        <section data-ai-summary="target-audience">
          <h2>Who We Serve</h2>
          <ul>
            {aiSearchContent.targetAudience.map((audience, i) => (
              <li key={i}>{audience}</li>
            ))}
          </ul>
        </section>

        <section data-ai-summary="faq">
          <h2>Frequently Asked Questions</h2>
          {aiSearchContent.frequentlyAskedQuestions.map((faq, i) => (
            <article key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

// Speakable content for voice assistants
export function SpeakableContent({
  title,
  summary,
}: {
  title: string
  summary: string
}) {
  return (
    <div className="speakable sr-only" data-speakable="true">
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  )
}

// Entity definition for knowledge graphs
export function EntityDefinition() {
  const entitySchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${siteConfig.url}/#corporation`,
    name: siteConfig.business.name,
    alternateName: ["PND50", "PND 50", "พีเอ็นดี50"],
    description: siteConfig.aiSearchContent.businessSummary,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: siteConfig.business.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: "Bangkok, Thailand",
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    knowsAbout: [
      "Thai accounting",
      "PND50 tax filing",
      "Corporate income tax",
      "VAT Thailand",
      "Foreign business compliance",
      "Company registration Thailand",
      "Withholding tax",
      "Audit support",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certified Public Accountant",
        recognizedBy: {
          "@type": "Organization",
          name: "Federation of Accounting Professions Thailand",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }} />
}

// Question-Answer pairs for AI search (QAPage schema)
export function QAPageSchema() {
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: siteConfig.aiSearchContent.frequentlyAskedQuestions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        upvoteCount: 42,
        dateCreated: "2024-01-15",
        author: {
          "@type": "Organization",
          name: siteConfig.business.name,
        },
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }} />
}
