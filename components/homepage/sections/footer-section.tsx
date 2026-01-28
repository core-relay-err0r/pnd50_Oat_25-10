"use client"

import Link from "next/link"
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

const serviceLinks = [
  { name: "Accounting", href: "/services/accounting" },
  { name: "Tax Filing", href: "/services/tax" },
  { name: "Payroll", href: "/services/payroll" },
  { name: "Company Registration", href: "/services/corporate" },
  { name: "Business Advisory", href: "/services/advisory" },
  { name: "Growth Services", href: "/services/growth" },
]

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/blog" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
]

export function FooterSection() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer
      id="footer"
      className="relative bg-slate-900 text-white py-16 md:py-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Background Watermark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-slate-800/20 leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        PND50
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <button
              onClick={() => scrollToSection("#hero")}
              className="inline-block mb-6"
              aria-label="PND50 Home"
            >
              <span className="text-3xl font-bold tracking-tight">PND50</span>
            </button>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Professional accounting and business consulting for foreign companies operating in Thailand since 2015.
            </p>
            <div className="space-y-3" itemScope itemType="https://schema.org/Organization">
              <a
                href="mailto:info@pnd50.com"
                className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                itemProp="email"
              >
                <Mail className="w-4 h-4" />
                info@pnd50.com
              </a>
              <a
                href="tel:+6620172949"
                className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                itemProp="telephone"
              >
                <Phone className="w-4 h-4" />
                +662 017 2949
              </a>
            </div>
          </div>

          {/* Services */}
          <nav
            className="lg:col-span-3"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            aria-label="Services navigation"
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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

          {/* Company */}
          <nav
            className="lg:col-span-2"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            aria-label="Company navigation"
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                      itemProp="url"
                    >
                      <span itemProp="name">{link.name}</span>
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Location */}
          <div className="lg:col-span-3" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">Location</h3>
            <div className="flex items-start gap-2 text-slate-400 text-sm mb-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span itemProp="addressLocality">Bangkok, Thailand</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed" itemProp="addressRegion">
              Serving businesses in Bangkok, Phuket, Chiang Mai, Pattaya, and throughout Thailand.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-slate-500 text-sm">
              <span itemProp="copyrightYear">© 2025</span> PND50. All rights reserved.
            </p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p className="text-slate-500 text-sm">
              Powered by{" "}
              <a
                href="https://burakornpartners.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-4"
              >
                Burakorn Partners
              </a>
            </p>
          </div>
          <nav className="flex items-center gap-6" aria-label="Legal navigation">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
