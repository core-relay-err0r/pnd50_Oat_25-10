import type React from "react"
// FAQ layout with metadata and FAQ Schema
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  openGraph: {
    title: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
    url: `${siteConfig.url}/faq`,
  },
}

// FAQ items for schema (add your actual FAQs here)
const faqItems = [
  {
    question: "What is PND50 and why do I need to file it?",
    answer:
      "PND50 is the annual corporate income tax return in Thailand. All registered companies must file PND50 within 150 days after the end of their accounting period to report their annual income and pay corporate income tax.",
  },
  {
    question: "Do you serve foreign-owned companies in Thailand?",
    answer:
      "Yes, we specialize in serving foreign-owned companies and international businesses operating in Thailand. Our team speaks multiple languages and understands the unique compliance requirements for foreign businesses.",
  },
  {
    question: "What services are included in your packages?",
    answer:
      "Our packages include company registration, monthly bookkeeping, tax compliance, VAT management, payroll services, financial reporting, and dedicated support. The specific services vary by package - Startup, Growth, or Full-Cycle.",
  },
  {
    question: "How long does it take to register a company in Thailand?",
    answer:
      "Company registration in Thailand typically takes 2-3 weeks with our Startup package. We handle all documentation, government submissions, and compliance requirements to ensure a smooth registration process.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Our office is open Monday to Friday, 9:00 AM to 6:00 PM (Thailand time). For urgent matters, Growth and Full-Cycle clients have access to priority and 24/7 support respectively.",
  },
]

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      {children}
    </>
  )
}
