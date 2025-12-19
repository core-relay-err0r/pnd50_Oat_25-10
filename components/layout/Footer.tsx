"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, ChevronUp, ArrowUpRight } from "lucide-react"

const serviceLinks = [
  { name: "Accounting", href: "/services/accounting" },
  { name: "Tax Filing", href: "/services/tax" },
  { name: "Payroll", href: "/services/payroll" },
  { name: "Company Registration", href: "/services/corporate" },
  { name: "Business Advisory", href: "/services/advisory" },
  { name: "Growth Services", href: "/services/growth" },
]

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Case Studies", href: "/case-studies" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", href: "/services" },
  { code: "th", name: "ไทย", flag: "🇹🇭", href: "/th/services" },
  { code: "ru", name: "Русский", flag: "🇷🇺", href: "/ru/services" },
  { code: "zh", name: "中文", flag: "🇨🇳", href: "/zh/services" },
]

export default function Footer() {
  const pathname = usePathname()
  const [langOpen, setLangOpen] = useState(false)

  if (pathname === "/" || pathname === "/schedule" || pathname === "/schedule/success") {
    return null
  }

  return (
    <footer className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Background Watermark */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-slate-800/30 leading-none select-none pointer-events-none whitespace-nowrap">
        PND50
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight">PND50</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Professional accounting and business consulting for foreign companies operating in Thailand since 2015.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@pnd50.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                info@pnd50.com
              </a>
              <span className="text-slate-700">|</span>
              <a href="tel:+66843563805" className="text-slate-400 hover:text-white transition-colors text-sm">
                +66 84 356 3805
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Language */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Location</h3>
            <p className="text-slate-400 text-sm mb-2">Bangkok, Thailand</p>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Serving businesses in Bangkok, Phuket, Chiang Mai, Pattaya, and throughout Thailand.
            </p>

            {/* Language Selector */}
            <div className="relative inline-block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors border border-slate-700 rounded-full px-4 py-2"
              >
                <Globe className="w-4 h-4" />
                <span>Language</span>
                <ChevronUp className={`w-3 h-3 transition-transform ${langOpen ? "" : "rotate-180"}`} />
              </button>
              {langOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">© 2025 PND50. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
