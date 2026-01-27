"use client"

import { HeroSection } from "@/components/homepage/hero-section"
import { LogoCarousel } from "@/components/homepage/logo-carousel"
import { FeatureCards } from "@/components/homepage/feature-cards"
import { StatsSection } from "@/components/homepage/stats-section"
import { TestimonialsTabs } from "@/components/homepage/testimonials-tabs"
import { TrustBadges } from "@/components/homepage/trust-badges"
import { CTASection } from "@/components/homepage/cta-section"
import { LandingFooter } from "@/components/landing-footer"

export default function PND50Landing() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section with rotating text */}
      <HeroSection />

      {/* Logo Carousel - Trusted by companies */}
      <LogoCarousel />

      {/* Feature Cards - Services overview */}
      <FeatureCards />

      {/* Stats Section - Key metrics */}
      <StatsSection />

      {/* Testimonials with Tabs */}
      <TestimonialsTabs />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <footer className="py-6 bg-slate-900 border-t border-slate-800">
        <LandingFooter variant="dark" absolute={false} />
      </footer>
    </main>
  )
}
