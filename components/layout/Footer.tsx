import React, { Suspense } from "react"
import Link from "next/link"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Calculator, Shield, Target, FileSearch, Phone, Mail, MapPin } from "lucide-react"
import CurrentYear from "@/components/CurrentYear"

const services = [
  {
    name: "Corporate Tax Planning",
    href: "/services/corporate-tax-planning",
    icon: <Calculator className="h-4 w-4 text-primary" />,
    description: "AI-driven strategies to optimize your corporate tax position.",
  },
  {
    name: "VAT Management",
    href: "/services/vat-management",
    icon: <Shield className="h-4 w-4 text-primary" />,
    description: "Automated VAT compliance and real-time reporting.",
  },
  {
    name: "Tax Optimization",
    href: "/services/tax-optimization",
    icon: <Target className="h-4 w-4 text-primary" />,
    description: "Data-driven insights to maximize tax efficiency.",
  },
  {
    name: "Audit Support",
    href: "/services/audit-support",
    icon: <FileSearch className="h-4 w-4 text-primary" />,
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
      
    </TooltipProvider>
  )
}
