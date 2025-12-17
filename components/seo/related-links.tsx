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
      href: "/schedule", // Updated from /calculator to /schedule
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="block bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            {link.icon && <span className="text-slate-400">{link.icon}</span>}
            <h4 className="text-lg font-semibold mt-2 mb-1">{link.title}</h4>
            <p className="text-slate-600 text-sm">{link.description}</p>
          </div>
          <div className="bg-sky-50 p-4 flex justify-end items-center">
            <ArrowRight className="w-5 h-5 text-sky-600" />
          </div>
        </Link>
      ))}
    </div>
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
          href: "/schedule", // Updated from /calculator to /schedule
          icon: <Calculator className="w-5 h-5" />,
        },
        {
          title: "FAQ",
          description: "Common questions about Thai accounting & tax",
          href: "/faq",
          icon: <HelpCircle className="w-5 h-5" />,
        },
        {
          title: "Contact Us",
          description: "Speak with our expert advisors",
          href: "/contact",
          icon: <Users className="w-5 h-5" />,
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
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: "Case Studies",
          description: "See how we've helped businesses succeed",
          href: "/case-studies",
          icon: <Building2 className="w-5 h-5" />,
        },
        {
          title: "About Us",
          description: "Meet the team behind PND50",
          href: "/about",
          icon: <Users className="w-5 h-5" />,
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
          icon: <Users className="w-5 h-5" />,
        },
        {
          title: "Our Services",
          description: "Explore our accounting packages",
          href: "/services",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: "Price Calculator",
          description: "Calculate your monthly accounting costs",
          href: "/schedule", // Updated from /calculator to /schedule
          icon: <Calculator className="w-5 h-5" />,
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
          icon: <HelpCircle className="w-5 h-5" />,
        },
        {
          title: "Our Services",
          description: "Learn about what we offer",
          href: "/services",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: "Case Studies",
          description: "See our success stories",
          href: "/case-studies",
          icon: <Building2 className="w-5 h-5" />,
        },
      ]}
    />
  )
}
