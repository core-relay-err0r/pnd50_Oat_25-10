"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Phone, MapPin, Globe, ChevronUp, ArrowRight } from "lucide-react"

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
    <footer className="py-12 md:py-16 lg:py-20 border-t border-slate-200/60 bg-gradient-to-b from-transparent via-white/50 to-slate-50/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-slate-200/60">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg max-w-2xl mx-auto text-pretty">
            Schedule a free consultation to discuss how we can support your business in Thailand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-md border-2 border-slate-200/80 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-sky-400/80 hover:bg-white/90 hover:text-sky-600 transition-all hover:scale-105 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-sky-200/50"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-sky-600 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@pnd50.com"
                  className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-sky-500" />
                  info@pnd50.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66843563805"
                  className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-sky-500" />
                  +66 84 356 3805
                </a>
              </li>
              <li>
                <span className="text-slate-600 text-sm flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  Bangkok, Thailand
                </span>
              </li>
            </ul>
            <p className="text-slate-500 text-xs mt-6 leading-relaxed">
              Serving foreign businesses in Bangkok, Phuket, Chiang Mai, Pattaya, and throughout Thailand.
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">PND50</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Helping foreign businesses succeed in Thailand since 2015. Expert accounting, tax, and compliance support.
            </p>
            <div className="relative inline-block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 text-sm transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Language</span>
                <ChevronUp className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-white rounded-md shadow-lg border border-slate-100 overflow-hidden min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 PND50. Professional accounting and business consultant for expats in Thailand.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-sky-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
