import { track } from "@vercel/analytics"
import { event as gaEvent } from "@/components/analytics/GoogleAnalytics"

/**
 * Track custom events for user interactions and conversions
 * Sends events to both Vercel Analytics and Google Analytics
 * Both are privacy-friendly and GDPR compliant by default
 */

// Contact form submission tracking
export function trackContactFormSubmission(data: {
  formType: "contact" | "quote" | "consultation"
  source?: string
}) {
  const eventData = {
    formType: data.formType,
    source: data.source || "unknown",
  }

  // Vercel Analytics
  track("Contact Form Submitted", eventData)

  // Google Analytics
  gaEvent({
    action: "form_submit",
    category: "engagement",
    label: `${data.formType}_form`,
  })
}

// Calculator usage tracking
export function trackCalculatorUsage(data: {
  step: string
  completed: boolean
}) {
  const eventData = {
    step: data.step,
    completed: data.completed,
  }

  // Vercel Analytics
  track("Calculator Used", eventData)

  // Google Analytics
  gaEvent({
    action: data.completed ? "calculator_complete" : "calculator_step",
    category: "engagement",
    label: data.step,
  })
}

// Service page view tracking
export function trackServiceView(serviceName: string) {
  // Vercel Analytics
  track("Service Viewed", {
    service: serviceName,
  })

  // Google Analytics
  gaEvent({
    action: "view_service",
    category: "page_view",
    label: serviceName,
  })
}

// Case study interaction tracking
export function trackCaseStudyView(caseStudyName: string) {
  // Vercel Analytics
  track("Case Study Viewed", {
    caseStudy: caseStudyName,
  })

  // Google Analytics
  gaEvent({
    action: "view_case_study",
    category: "engagement",
    label: caseStudyName,
  })
}

// CTA button click tracking
export function trackCTAClick(data: {
  buttonText: string
  location: string
  destination: string
}) {
  const eventData = {
    buttonText: data.buttonText,
    location: data.location,
    destination: data.destination,
  }

  // Vercel Analytics
  track("CTA Clicked", eventData)

  // Google Analytics
  gaEvent({
    action: "click_cta",
    category: "engagement",
    label: `${data.buttonText} - ${data.location}`,
  })
}

// FAQ interaction tracking
export function trackFAQInteraction(question: string) {
  // Vercel Analytics
  track("FAQ Opened", {
    question: question,
  })

  // Google Analytics
  gaEvent({
    action: "open_faq",
    category: "engagement",
    label: question,
  })
}

// Download tracking (for PDFs, guides, etc.)
export function trackDownload(fileName: string) {
  // Vercel Analytics
  track("File Downloaded", {
    fileName: fileName,
  })

  // Google Analytics
  gaEvent({
    action: "download",
    category: "engagement",
    label: fileName,
  })
}

// Newsletter signup tracking
export function trackNewsletterSignup(source: string) {
  // Vercel Analytics
  track("Newsletter Signup", {
    source: source,
  })

  // Google Analytics
  gaEvent({
    action: "newsletter_signup",
    category: "conversion",
    label: source,
  })
}

// Conversion tracking (main conversion events)
export function trackConversion(conversionType: "quote_request" | "contact" | "consultation" | "calculator_complete") {
  // Vercel Analytics
  track("Conversion", {
    type: conversionType,
  })

  // Google Analytics
  gaEvent({
    action: "conversion",
    category: "conversion",
    label: conversionType,
    value: 1,
  })
}
