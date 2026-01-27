/**
 * Vercel Analytics Configuration
 *
 * Vercel Analytics is automatically enabled when deployed to Vercel.
 * No additional configuration or API keys are required.
 *
 * Privacy & Compliance:
 * - No cookies used
 * - No personal data collected
 * - GDPR compliant by default
 * - No consent banner required
 * - Data is anonymized and aggregated
 *
 * Features:
 * - Automatic page view tracking
 * - Custom event tracking
 * - Real-time analytics
 * - Performance metrics
 * - Conversion tracking
 *
 * To view analytics:
 * 1. Go to your Vercel dashboard
 * 2. Select your project
 * 3. Click on "Analytics" tab
 *
 * Custom Events:
 * Use the tracking functions in lib/analytics.ts to track:
 * - Contact form submissions
 * - Calculator usage
 * - Service page views
 * - Case study interactions
 * - CTA clicks
 * - FAQ interactions
 * - Downloads
 * - Newsletter signups
 * - Conversions
 */

export const analyticsConfig = {
  // Enable debug mode in development
  debug: process.env.NODE_ENV === "development",

  // Track page views automatically (enabled by default)
  trackPageViews: true,

  // Custom event tracking enabled
  trackCustomEvents: true,

  // Privacy-friendly settings (Vercel Analytics default)
  privacy: {
    noCookies: true,
    anonymized: true,
    gdprCompliant: true,
  },
}

export default analyticsConfig
