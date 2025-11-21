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
      <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm pt-4">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 bg-slate-900/50 rounded-full border border-white/10 shadow-lg backdrop-blur-md max-w-5xl">
          {/* Left: Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            PND50
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/services" className="text-slate-300 transition-colors hover:text-white">
              Services
            </Link>

            <Link href="/about" className="text-slate-300 transition-colors hover:text-white">
              About us
            </Link>

            <Link href="/faq" className="text-slate-300 transition-colors hover:text-white">
              FAQ
            </Link>

            <Link href="/contact" className="text-slate-300 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/calculator" className="hidden sm:block">
              <Button className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Schedule Consultation</span>
              </Button>
            </Link>
            {/* Mobile version - enhanced */}
            <Link href="/calculator" className="sm:hidden">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 rounded-full">
                Schedule
              </Button>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden rounded-md p-2 text-slate-300 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-slate-900/95 border border-white/10 rounded-2xl backdrop-blur-md shadow-xl overflow-hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Link
                href="/services"
                className="text-slate-300 transition-colors hover:text-white"
                onClick={handleLinkClick}
              >
                Services
              </Link>

              <Link
                href="/about"
                className="text-slate-300 transition-colors hover:text-white"
                onClick={handleLinkClick}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-slate-300 transition-colors hover:text-white"
                onClick={handleLinkClick}
              >
                Contact
              </Link>

              <Link href="/faq" className="text-slate-300 transition-colors hover:text-white" onClick={handleLinkClick}>
                FAQ
              </Link>

              <Link
                href="/calculator"
                className="text-blue-400 font-semibold transition-colors hover:text-blue-300 text-left"
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
