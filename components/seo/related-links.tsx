import type React from "react"
// Related Links Component for Internal SEO Linking
import Link from "next/link"
import { ArrowRight, Calculator, FileText, HelpCircle, Users, Building2 } from "lucide-react"

interface RelatedLink {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  variant?: "cards" | "list" | "inline"
}

const defaultLinks: Record<string, RelatedLink[]> = {
  services: [
    {
      title: "Price Calculator",
      description: "Get an instant quote for your accounting needs",
      href: "/calculator",
      icon: <Calculator className="w-5 h-5" />,
    },
    {
      title: "Our Services",
      description: "Explore our full range of accounting services",
      href: "/services",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "FAQ",
      description: "Find answers to common questions",
      href: "/faq",
      icon: <HelpCircle className="w-5 h-5" />,
    },
  ],
  about: [
    {
      title: "About Us",
      description: "Learn about our team and mission",
      href: "/about",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Case Studies",
      description: "See how we've helped businesses like yours",
      href: "/case-studies",
      icon: <Building2 className="w-5 h-5" />,
    },
  ],
}

export function RelatedLinks({ title = "Related Pages", links, variant = "cards" }: RelatedLinksProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-full transition-colors"
          >
            {link.title}
            <ArrowRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    )
  }

  if (variant === "list") {
    return (
      <nav aria-label={title} className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">{title}</h3>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors group"
              >
                {link.icon && <span className="text-slate-400 group-hover:text-sky-500">{link.icon}</span>}
                <span>{link.title}</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  // Cards variant (default)
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50/50 to-sky-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                {link.icon}
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pre-configured related links sections
export function ServicesRelatedLinks() {
  return (
    <RelatedLinks
      title="Explore More"
      links={[
        {
          title: "Price Calculator",
          description: "Get an instant quote tailored to your business",
          href: "/calculator",
          icon: <Calculator className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "FAQ",
          description: "Common questions about Thai accounting & tax",
          href: "/faq",
          icon: <HelpCircle className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Contact Us",
          description: "Speak with our expert advisors",
          href: "/contact",
          icon: <Users className="w-5 h-5 text-sky-600 mt-1" />,
        },
      ]}
    />
  )
}

export function CalculatorRelatedLinks() {
  return (
    <RelatedLinks
      title="Learn More"
      links={[
        {
          title: "Our Services",
          description: "Detailed breakdown of what we offer",
          href: "/services",
          icon: <FileText className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Case Studies",
          description: "See how we've helped businesses succeed",
          href: "/case-studies",
          icon: <Building2 className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "About Us",
          description: "Meet the team behind PND50",
          href: "/about",
          icon: <Users className="w-5 h-5 text-sky-600 mt-1" />,
        },
      ]}
    />
  )
}

export function FAQRelatedLinks() {
  return (
    <RelatedLinks
      title="Need More Help?"
      links={[
        {
          title: "Contact Us",
          description: "Get personalized answers from our team",
          href: "/contact",
          icon: <Users className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Our Services",
          description: "Explore our accounting packages",
          href: "/services",
          icon: <FileText className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Price Calculator",
          description: "Calculate your monthly accounting costs",
          href: "/calculator",
          icon: <Calculator className="w-5 h-5 text-sky-600 mt-1" />,
        },
      ]}
    />
  )
}

export function ContactRelatedLinks() {
  return (
    <RelatedLinks
      title="While You Wait"
      links={[
        {
          title: "FAQ",
          description: "Find quick answers to common questions",
          href: "/faq",
          icon: <HelpCircle className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Our Services",
          description: "Learn about what we offer",
          href: "/services",
          icon: <FileText className="w-5 h-5 text-sky-600 mt-1" />,
        },
        {
          title: "Case Studies",
          description: "See our success stories",
          href: "/case-studies",
          icon: <Building2 className="w-5 h-5 text-sky-600 mt-1" />,
        },
      ]}
    />
  )
}
