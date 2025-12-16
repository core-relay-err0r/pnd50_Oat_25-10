"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useModal } from "@/contexts/modal-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { isModalOpen, closeModal, openConsultation } = useModal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const handleConsultationClick = () => {
    openConsultation()
    setIsMenuOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <header
        role="banner"
        className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur-sm"
        onKeyDown={handleKeyDown}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Left: Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            onClick={handleLinkClick}
            aria-label="PND50 - Go to homepage"
          >
            PND50
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
            <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
              Services
            </Link>

            <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
              About us
            </Link>

            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>

            <Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/calculator" className="hidden sm:block">
              <Button className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
                <span className="relative z-10">Schedule Consultation</span>
              </Button>
            </Link>
            {/* Mobile version - enhanced */}
            <Link href="/calculator" className="sm:hidden">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2">
                Schedule
              </Button>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden border-t" role="navigation" aria-label="Mobile navigation">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
              <Link
                href="/services"
                className="text-muted-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none"
                onClick={handleLinkClick}
              >
                Services
              </Link>

              <Link
                href="/about"
                className="text-muted-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none"
                onClick={handleLinkClick}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-muted-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none"
                onClick={handleLinkClick}
              >
                Contact
              </Link>

              <Link
                href="/faq"
                className="text-muted-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>

              <Link
                href="/calculator"
                className="text-primary font-semibold transition-colors hover:text-primary/90 text-left focus:outline-none"
                onClick={handleLinkClick}
              >
                Schedule Consultation
              </Link>
            </div>
          </nav>
        )}
      </header>
      {/* <ConsultationModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  )
}
