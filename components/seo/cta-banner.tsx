// CTA Banner for internal linking and conversions
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, MessageCircle } from "lucide-react"

interface CTABannerProps {
  variant?: "default" | "calculator" | "contact" | "services"
  title?: string
  description?: string
}

export function CTABanner({ variant = "default", title, description }: CTABannerProps) {
  const configs = {
    default: {
      title: "Ready to Get Started?",
      description: "Let us handle your accounting while you focus on growing your business.",
      primaryCTA: { label: "Get a Quote", href: "/schedule", icon: <Calculator className="w-4 h-4" /> },
      secondaryCTA: { label: "Contact Us", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
    },
    calculator: {
      title: "Calculate Your Monthly Costs",
      description: "Use our instant calculator to get a personalized quote for your business.",
      primaryCTA: { label: "Open Calculator", href: "/schedule", icon: <Calculator className="w-4 h-4" /> },
      secondaryCTA: { label: "View Services", href: "/services", icon: <ArrowRight className="w-4 h-4" /> },
    },
    contact: {
      title: "Have Questions?",
      description: "Our team of experts is here to help you with all your accounting needs.",
      primaryCTA: { label: "Contact Us", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
      secondaryCTA: { label: "View FAQ", href: "/faq", icon: <ArrowRight className="w-4 h-4" /> },
    },
    services: {
      title: "Explore Our Services",
      description: "From company registration to tax filing, we've got you covered.",
      primaryCTA: { label: "View Services", href: "/services", icon: <ArrowRight className="w-4 h-4" /> },
      secondaryCTA: { label: "Get a Quote", href: "/schedule", icon: <Calculator className="w-4 h-4" /> },
    },
  }

  const config = configs[variant]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">{title || config.title}</h2>
      <p className="text-gray-600 text-center">{description || config.description}</p>
      <div className="flex space-x-4">
        <Button asChild variant="default">
          <Link href={config.primaryCTA.href}>
            {config.primaryCTA.icon} {config.primaryCTA.label}
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={config.secondaryCTA.href}>
            {config.secondaryCTA.icon} {config.secondaryCTA.label}
          </Link>
        </Button>
      </div>
    </div>
  )
}
