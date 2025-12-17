"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const AnimatedNavLink = ({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
}) => {
  const defaultTextColor = isActive ? "text-white font-medium" : "text-gray-300"
  const hoverTextColor = "text-white"
  const textSizeClass = "text-sm"

  return (
    <Link href={href} className={`group relative inline-flex flex-col items-center justify-center ${textSizeClass}`}>
      <div className="relative overflow-hidden h-5 w-full">
        <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
          <span className={`${defaultTextColor} h-5 flex items-center justify-center`}>{children}</span>
          <span className={`${hoverTextColor} h-5 flex items-center justify-center`}>{children}</span>
        </div>
      </div>
      {isActive && (
        <motion.div
          layoutId="navbar-active"
          className="absolute -bottom-1 w-full h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full")
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl")
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full")
      }, 300)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [isOpen])

  const logoElement = (
    <Link href="/" className="flex items-center">
      <span className="text-xl font-bold text-white">PND50</span>
    </Link>
  )

  const navLinksData = [
    { label: "Services", href: "/services" },
    { label: "About us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ]

  const isContactActive = pathname === "/contact"
  const isCalculatorActive = pathname === "/schedule"

  const contactButtonElement = (onClickHandler?: () => void) => (
    <Link href="/contact" className="w-full sm:w-auto" onClick={onClickHandler}>
      <button
        className={`px-4 py-2 sm:px-3 text-xs sm:text-sm rounded-full transition-colors duration-200 w-full sm:w-auto ${
          isContactActive
            ? "bg-white/20 text-white font-medium"
            : "bg-[rgba(31,31,31,0.62)] text-gray-300 hover:text-white"
        }`}
      >
        Contact
      </button>
    </Link>
  )

  const scheduleButtonElement = (onClickHandler?: () => void) => (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full
                     hidden sm:block
                     bg-blue-500
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
      ></div>
      <Link href="/schedule" onClick={onClickHandler}>
        <button
          className={`relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-white rounded-full transition-all duration-200 w-full sm:w-auto ${
            isCalculatorActive
              ? "bg-gradient-to-br from-blue-400 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              : "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          }`}
        >
          Schedule Consultation
        </button>
      </Link>
    </div>
  )

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm border-none ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href} isActive={pathname === link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {contactButtonElement()}
          {scheduleButtonElement()}
        </div>

        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12M6 12h12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-white font-medium" : "text-gray-300"} hover:text-white transition-colors w-full text-center`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {contactButtonElement(closeMobileMenu)}
          {scheduleButtonElement(closeMobileMenu)}
        </div>
      </div>
    </header>
  )
}
