"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, ChevronUp } from "lucide-react"

const serviceLinks = [
  { name: "Accounting in Thailand", href: "/services/accounting" },
  { name: "Tax Filing in Thailand", href: "/services/tax" },
  { name: "Payroll in Thailand", href: "/services/payroll" },
  { name: "Open Business in Thailand", href: "/services/corporate" },
  { name: "Business Advisory", href: "/services/advisory" },
  { name: "Growth Services", href: "/services/growth" },
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

  const hiddenPaths = ["/", "/schedule"]
  if (hiddenPaths.includes(pathname)) {
    return null
  }

  return (
    <footer className="py-8 md:py-10 border-t border-slate-200/60 bg-gradient-to-b from-transparent to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Compact Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Brand + CTA Column */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-slate-800 mb-2">PND50</h3>
            <p className="text-slate-500 text-xs mb-3 leading-relaxed">
              Expert accounting & tax for foreign businesses in Thailand.
            </p>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors"
            >
              Schedule consultation →
            </Link>
          </div>

          {/* Services Column - Compact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Services</h3>
            <ul className="space-y-1.5">
              {serviceLinks.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-slate-500 hover:text-sky-600 transition-colors text-xs">
                    {service.name.replace(" in Thailand", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Compact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Contact</h3>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <a href="mailto:info@pnd50.com" className="hover:text-sky-600 transition-colors">
                  info@pnd50.com
                </a>
              </li>
              <li>
                <a href="tel:+66843563805" className="hover:text-sky-600 transition-colors">
                  +66 84 356 3805
                </a>
              </li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>

          {/* Language Column - Compact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Language</h3>
            <div className="relative inline-block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-sky-600 text-xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
                <ChevronUp className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-white rounded-md shadow-lg border border-slate-100 overflow-hidden min-w-[100px] z-50">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-sky-600 transition-colors"
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

        {/* Bottom Bar - Compact */}
        <div className="mt-6 pt-4 border-t border-slate-200/40 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <p>© 2025 PND50. Accounting for expats in Thailand.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-sky-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-sky-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
