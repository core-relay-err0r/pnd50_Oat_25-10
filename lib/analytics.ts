import { track } from "@vercel/analytics"

/**
 * Track custom events for user interactions and conversions
 * Vercel Analytics is privacy-friendly and GDPR compliant by default
 */

// Contact form submission tracking
export function trackContactFormSubmission(data: {
  formType: "contact" | "quote" | "consultation"
  source?: string
}) {
  track("Contact Form Submitted", {
    formType: data.formType,
    source: data.source || "unknown",
  })
}

// Calculator usage tracking
export function trackCalculatorUsage(data: {
  step: string
  completed: boolean
}) {
  track("Calculator Used", {
    step: data.step,
    completed: data.completed,
  })
}

// Service page view tracking
export function trackServiceView(serviceName: string) {
  track("Service Viewed", {
    service: serviceName,
  })
}

// Case study interaction tracking
export function trackCaseStudyView(caseStudyName: string) {
  track("Case Study Viewed", {
    caseStudy: caseStudyName,
  })
}

// CTA button click tracking
export function trackCTAClick(data: {
  buttonText: string
  location: string
  destination: string
}) {
  track("CTA Clicked", {
    buttonText: data.buttonText,
    location: data.location,
    destination: data.destination,
  })
}

// Client portal access tracking
export function trackClientPortalAccess() {
  track("Client Portal Accessed")
}

// FAQ interaction tracking
export function trackFAQInteraction(question: string) {
  track("FAQ Opened", {
    question: question,
  })
}

// Download tracking (for PDFs, guides, etc.)
export function trackDownload(fileName: string) {
  track("File Downloaded", {
    fileName: fileName,
  })
}

// Newsletter signup tracking
export function trackNewsletterSignup(source: string) {
  track("Newsletter Signup", {
    source: source,
  })
}

// Conversion tracking (main conversion events)
export function trackConversion(conversionType: "quote_request" | "contact" | "consultation" | "calculator_complete") {
  track("Conversion", {
    type: conversionType,
  })
}
