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
      primaryCTA: { label: "Get a Quote", href: "/calculator", icon: <Calculator className="w-4 h-4" /> },
      secondaryCTA: { label: "Contact Us", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
    },
    calculator: {
      title: "Calculate Your Monthly Costs",
      description: "Use our instant calculator to get a personalized quote for your business.",
      primaryCTA: { label: "Open Calculator", href: "/calculator", icon: <Calculator className="w-4 h-4" /> },
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
      secondaryCTA: { label: "Get a Quote", href: "/calculator", icon: <Calculator className="w-4 h-4" /> },
    },
  }

  const config = configs[variant]

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-teal-500 p-8 md:p-12"
      aria-labelledby="cta-title"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title || config.title}
        </h2>
        <p className="text-white/90 text-lg mb-8">{description || config.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
            <Link href={config.primaryCTA.href}>
              {config.primaryCTA.icon}
              <span className="ml-2">{config.primaryCTA.label}</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-semibold bg-transparent"
          >
            <Link href={config.secondaryCTA.href}>
              {config.secondaryCTA.icon}
              <span className="ml-2">{config.secondaryCTA.label}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
