import React, { Suspense } from "react"
import Link from "next/link"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Calculator, Shield, HandCoins, Target, FileSearch, Phone, Mail, MapPin } from "lucide-react"
import CurrentYear from "@/components/CurrentYear"

const services = [
  {
    name: "Corporate Tax Planning",
    href: "/services/corporate-tax-planning",
    icon: <Calculator className="h-4 w-4 text-blue-400" />,
    description: "AI-driven strategies to optimize your corporate tax position.",
  },
  {
    name: "VAT Management",
    href: "/services/vat-management",
    icon: <Shield className="h-4 w-4 text-blue-400" />,
    description: "Automated VAT compliance and real-time reporting.",
  },
  {
    name: "Withholding Tax",
    href: "/services/withholding-tax",
    icon: <HandCoins className="h-4 w-4 text-blue-400" />,
    description: "Seamless WHT management with automated calculations.",
  },
  {
    name: "Tax Optimization",
    href: "/services/tax-optimization",
    icon: <Target className="h-4 w-4 text-blue-400" />,
    description: "Data-driven insights to maximize tax efficiency.",
  },
  {
    name: "Audit Support",
    href: "/services/audit-support",
    icon: <FileSearch className="h-4 w-4 text-blue-400" />,
    description: "Proactive audit defense with predictive risk analysis.",
  },
]

export default function Footer() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bangkok, Thailand")}`
  const phoneUrl = "tel:+6621234567"
  const emailUrl = "mailto:info@pnd50.com"
  const telegramUrl = "https://t.me/66843563805"
  const whatsappUrl = "https://wa.me/66843563805"

  return (
    <TooltipProvider delayDuration={100}>
      <footer id="contact" className="bg-slate-900 text-slate-400 font-sans">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                PND50
              </Link>
              <p className="text-sm mb-4">
                <a
                  href="https://burakornpartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Powered by Burakorn Partners
                </a>
              </p>
              <p className="text-sm">
                Tech-driven accounting for foreign-owned businesses in Thailand. A proud subsidiary of Burakorn Partners
                Group.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Services</h4>
              <ul className="space-y-3 text-sm">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="flex items-center text-slate-400">
                      <span className="w-6 h-6 mr-2 rounded-full bg-slate-800 flex items-center justify-center">
                        {React.cloneElement(service.icon, {
                          className: "h-4 w-4 text-blue-400",
                        })}
                      </span>
                      {service.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Bangkok, Thailand
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-slate-500" />
                  <a href={phoneUrl} className="hover:text-white transition-colors">
                    +66 2 017 2949
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-slate-500" />
                  <a href={emailUrl} className="hover:text-white transition-colors">
                    info@pnd50.com
                  </a>
                </li>
                <li className="flex items-center">
                  <img src="/images/icons8-telegram.gif" alt="Telegram" className="h-4 w-4 mr-3 flex-shrink-0" />
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +66 84 356 3805
                  </a>
                </li>
                <li className="flex items-center">
                  <img src="/images/icons8-whatsapp.gif" alt="WhatsApp" className="h-4 w-4 mr-3 flex-shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +66 84 356 3805
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-800 pt-8 text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-500">
                ©{" "}
                <Suspense fallback={<span>...</span>}>
                  <CurrentYear />
                </Suspense>{" "}
                PND50, a Burakorn Partners Group company.
              </p>
              <div className="flex items-center gap-x-4 text-slate-500">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  )
}
