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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Left: Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={handleLinkClick}
          >
            PND50
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#services" className="text-gray-600 transition-colors hover:text-blue-600">
              Services
            </Link>

            <Link href="/about" className="text-gray-600 transition-colors hover:text-blue-600">
              About
            </Link>

            <Link href="/calculator" className="text-gray-600 transition-colors hover:text-blue-600">
              Quote
            </Link>

            <Link
              href="/#contact"
              className="text-gray-600 transition-colors hover:text-blue-600"
              onClick={handleContactClick}
            >
              Contact
            </Link>
          </nav>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/calculator">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:scale-105 text-sm sm:text-base px-3 sm:px-4">
                Schedule
                <span className="hidden sm:inline ml-1">Consultation</span>
              </Button>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
              <Link
                href="/#services"
                className="text-gray-600 transition-colors hover:text-blue-600"
                onClick={handleLinkClick}
              >
                Services
              </Link>

              <Link
                href="/about"
                className="text-gray-600 transition-colors hover:text-blue-600"
                onClick={handleLinkClick}
              >
                About
              </Link>

              <Link
                href="/calculator"
                className="text-gray-600 transition-colors hover:text-green-600"
                onClick={handleLinkClick}
              >
                Quote
              </Link>

              <Link
                href="/#contact"
                className="text-gray-600 transition-colors hover:text-blue-600"
                onClick={handleContactClick}
              >
                Contact
              </Link>

              <Link
                href="/calculator"
                className="text-blue-600 font-semibold transition-colors hover:text-blue-700 text-left"
                onClick={handleLinkClick}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* <ConsultationModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  )
}
