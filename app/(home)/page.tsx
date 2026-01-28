"use client"

import { ScrollSpyNavbar } from "@/components/homepage/scroll-spy-navbar"
import { HeroSection } from "@/components/homepage/hero-section"
import { LogoCarousel } from "@/components/homepage/logo-carousel"
import { ServicesSection } from "@/components/homepage/sections/services-section"
import { AboutSection } from "@/components/homepage/sections/about-section"
import { FAQSection } from "@/components/homepage/sections/faq-section"
import { ContactSection } from "@/components/homepage/sections/contact-section"
import { FooterSection } from "@/components/homepage/sections/footer-section"

export default function PND50Landing() {
  return (
    <>
      {/* Scroll-spy Navbar */}
      <ScrollSpyNavbar />

      <div id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
          <LogoCarousel />
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  )
}
