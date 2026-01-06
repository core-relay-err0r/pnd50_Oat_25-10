"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SECTIONS } from "./scroll-container"

interface HorizontalNavbarProps {
  currentSection: string
}

export function HorizontalNavbar({ currentSection }: HorizontalNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full")
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current)
    if (isOpen) {
      setHeaderShapeClass("rounded-xl")
    } else {
      shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass("rounded-full"), 300)
    }
    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current)
    }
  }, [isOpen])

  const handleNavClick = (sectionId: string) => {
    closeMobileMenu()
    if ((window as any).scrollToSection) {
      ;(window as any).scrollToSection(sectionId)
    }
  }

  // Filter to only show nav items that should appear in navbar
  const navSections = SECTIONS.filter((s) => s.showInNav && s.id !== "contact")
  const isContactActive = currentSection === "contact"

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm border-none ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        {/* Logo */}
        <button onClick={() => handleNavClick("home")} className="flex items-center">
          <span className="text-xl font-bold text-white">PND50</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navSections.map((section) => {
            const isActive = currentSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="group relative inline-flex flex-col items-center justify-center text-sm"
              >
                <div className="relative overflow-hidden h-5 w-full">
                  <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                    <span
                      className={`${isActive ? "text-white font-medium" : "text-gray-300"} h-5 flex items-center justify-center whitespace-nowrap`}
                    >
                      {section.label}
                    </span>
                    <span className="text-white h-5 flex items-center justify-center whitespace-nowrap">
                      {section.label}
                    </span>
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-horizontal"
                    className="absolute -bottom-1 w-full h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {/* Contact Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className={`px-4 py-2 sm:px-3 text-xs sm:text-sm rounded-full transition-colors duration-200 ${
              isContactActive
                ? "bg-white/20 text-white font-medium"
                : "bg-[rgba(31,31,31,0.62)] text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </button>

          {/* Schedule Button */}
          <div className="relative group">
            <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-blue-500 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3" />
            <Link href="/schedule">
              <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white rounded-full transition-all duration-200 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12M6 12h12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {SECTIONS.filter((s) => s.showInNav).map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`${currentSection === section.id ? "text-white font-medium" : "text-gray-300"} hover:text-white transition-colors w-full text-center`}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          <Link href="/schedule" className="w-full" onClick={closeMobileMenu}>
            <button className="relative z-10 px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-200 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
