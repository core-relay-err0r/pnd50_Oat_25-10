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
  { code: "en", name: "English", flag: "🇺🇸", href: "/" },
  { code: "th", name: "ไทย", flag: "🇹🇭", href: "/th" },
  { code: "ru", name: "Русский", flag: "🇷🇺", href: "/ru" },
  { code: "zh", name: "中文", flag: "🇨🇳", href: "/cn" },
]

function setLocaleCookie(locale: string) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365}`
}

export default function Footer() {
  const pathname = usePathname()
  const [langOpen, setLangOpen] = useState(false)

  const currentLocale = pathname.startsWith("/th")
    ? "th"
    : pathname.startsWith("/ru")
      ? "ru"
      : pathname.startsWith("/cn")
        ? "cn"
        : "en"

  const getLocalizedHref = (href: string) => {
    if (currentLocale === "en") return href
    return `/${currentLocale}${href}`
  }

  if (
    pathname === "/" ||
    pathname === "/schedule" ||
    pathname === "/schedule/success" ||
    pathname === "/th" ||
    pathname === "/ru" ||
    pathname === "/cn"
  ) {
    return null
  }

  const handleLanguageSelect = (langCode: string) => {
    const locale = langCode === "zh" ? "cn" : langCode
    setLocaleCookie(locale)
    setLangOpen(false)
  }

  return (
    <footer
      className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Background Watermark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-slate-800/30 leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        PND50
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link
              href={currentLocale === "en" ? "/" : `/${currentLocale}`}
              className="inline-block mb-6"
              aria-label="PND50 Home"
            >
              <span className="text-3xl font-bold tracking-tight">PND50</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Professional accounting and business consulting for foreign companies operating in Thailand since 2015.
            </p>
            <div className="flex items-center gap-4" itemScope itemType="https://schema.org/Organization">
              <a
                href="mailto:info@pnd50.com"
                className="text-slate-400 hover:text-white transition-colors text-sm"
                itemProp="email"
              >
                info@pnd50.com
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="tel:+6620172949"
                className="text-slate-400 hover:text-white transition-colors text-sm"
                itemProp="telephone"
              >
                +662 017 2949
              </a>
            </div>
          </div>

          {/* Services - with navigation schema */}
          <nav
            className="lg:col-span-3"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            aria-label="Services navigation"
          >
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    itemProp="url"
                  >
                    <span itemProp="name">{link.name}</span>
                    <ArrowUpRight
                      className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company - with navigation schema */}
          <nav
            className="lg:col-span-2"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            aria-label="Company navigation"
          >
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalizedHref(link.href)}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    itemProp="url"
                  >
                    <span itemProp="name">{link.name}</span>
                    <ArrowUpRight
                      className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Location & Language */}
          <div className="lg:col-span-3" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wide">Location</h3>
            <p className="text-slate-400 text-sm mb-2" itemProp="addressLocality">
              Bangkok, Thailand
            </p>
            <p className="text-slate-500 text-xs leading-relaxed mb-6" itemProp="addressRegion">
              Serving businesses in Bangkok, Phuket, Chiang Mai, Pattaya, and throughout Thailand.
            </p>

            {/* Language Selector */}
            <div className="relative inline-block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors border border-slate-700 rounded-full px-4 py-2"
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Language</span>
                <ChevronUp
                  className={`w-3 h-3 transition-transform ${langOpen ? "" : "rotate-180"}`}
                  aria-hidden="true"
                />
              </button>
              {langOpen && (
                <div
                  className="absolute bottom-full left-0 mb-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden min-w-[140px] z-50"
                  role="menu"
                >
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                      hrefLang={lang.code}
                      role="menuitem"
                    >
                      <span aria-hidden="true">{lang.flag}</span>
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
          <p className="text-slate-500 text-sm">
            <span itemProp="copyrightYear">© 2025</span> PND50. All rights reserved.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal navigation">
            <Link
              href={getLocalizedHref("/privacy-policy")}
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={getLocalizedHref("/terms-of-service")}
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
