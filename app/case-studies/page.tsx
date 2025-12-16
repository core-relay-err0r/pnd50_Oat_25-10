import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Target,
  AlertCircle,
  Lightbulb,
  Users,
  Globe,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RelatedLinks } from "@/components/seo/related-links"
import { Calculator, FileText, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | PND50",
  description:
    "Real client success stories from PND50. See how we've helped international businesses navigate Thai accounting and compliance.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/professional-business-handshake-partnership-meeting.jpg"
          alt="Professional business partnership meeting"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/60 to-slate-950/70" />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-8 left-4 md:left-8 inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 group z-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Hero content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-white/80" />
              Real Stories, Real Results
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Client Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light">
                Trusted by Startups from Russia & Vietnam
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              We're proud to support international startups — especially from Russia and Vietnam — helping them manage
              accounting, tax, and compliance with confidence in Thailand.
            </p>

            {/* Authenticity statement */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto transition-all duration-300 hover:bg-white/10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg mb-3">100% Authentic Case Studies</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Every case study featured here represents real projects undertaken by our team. These are genuine
                    client experiences, showcasing our expertise in helping foreign businesses succeed in Thailand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-300" />
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Case Study 1: Russian Startup */}
          <div className="group">
            <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border-b border-border p-10">
                <div className="flex items-start justify-between gap-8 flex-wrap">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      Russia → Thailand
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      Russian Tech Startup Expansion
                    </h2>
                    <p className="text-lg text-muted-foreground font-light">
                      E-commerce platform establishing operations in Bangkok
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">2023</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">6</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Months</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-12">
                {/* Client Background */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Client Background</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base pl-16 font-light">
                    A Russian e-commerce startup with 5 employees decided to expand into Southeast Asia, choosing
                    Bangkok as their regional headquarters. They needed to establish a legal entity and ensure full
                    compliance with Thai accounting and tax regulations from day one.
                  </p>
                </div>

                {/* Project Objectives */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Project Objectives</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pl-16">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Set up Thai limited company within 2 weeks</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Establish compliant accounting system</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Handle monthly VAT and withholding tax filings</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Manage payroll for 5 employees</p>
                    </div>
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Challenges Faced</h3>
                  </div>
                  <div className="space-y-3 pl-16">
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Language Barrier</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Founders spoke limited English and no Thai, making communication with local authorities
                        difficult
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Complex Tax Structure</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Understanding Thai VAT, withholding tax, and corporate income tax requirements
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Tight Timeline</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Needed to be operational within 2 weeks to meet investor commitments
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Solutions Implemented</h3>
                  </div>
                  <div className="space-y-5 pl-16">
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        1
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Bilingual Support Team</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Assigned a dedicated English-speaking accountant who handled all communications with Thai
                          authorities and explained requirements in clear, simple terms
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        2
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Fast-Track Company Registration</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Coordinated with legal partners to complete company registration, tax ID, and VAT registration
                          within 10 days
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        3
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Cloud-Based Accounting Setup</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Implemented TR Cloud system for real-time bookkeeping and automated monthly financial reports
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        4
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Comprehensive Payroll Management</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Set up automated payroll processing with social security and tax withholding for all 5
                          employees
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success in Resolving Problems */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Success in Resolving Problems</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 pl-16">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Language Barrier
                          </p>
                          <p className="text-xl font-bold text-foreground">Fully Resolved</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Bilingual support team eliminated communication challenges, enabling smooth interactions with
                        Thai authorities
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Tight Timeline
                          </p>
                          <p className="text-xl font-bold text-foreground">Exceeded Goals</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Company registration completed in 10 days, beating the 2-week deadline and meeting investor
                        commitments
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Tax Complexity
                          </p>
                          <p className="text-xl font-bold text-foreground">Simplified</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Cloud-based system automated tax calculations and filings, ensuring 100% compliance with zero
                        issues
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-2xl p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex gap-6">
                    <Quote className="w-10 h-10 text-primary flex-shrink-0 opacity-50" />
                    <div className="space-y-5">
                      <p className="text-foreground italic leading-relaxed font-light text-base">
                        "We opened our company in Bangkok last year and needed help with accounting and taxes. PND50
                        took care of everything from registration to monthly reports. They always reply fast, explain
                        things in clear English, and send updates on time. It's very reliable to work with them —
                        everything is transparent and professional."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Dmitry K.</p>
                          <p className="text-sm text-muted-foreground font-light">
                            Founder, Russian E-commerce Startup
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: Vietnamese Tech Entrepreneur */}
          <div className="group">
            <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/20 border-b border-border p-10">
                <div className="flex items-start justify-between gap-8 flex-wrap">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      Vietnam → Thailand
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      Vietnamese SaaS Company Launch
                    </h2>
                    <p className="text-lg text-muted-foreground font-light">
                      Small tech startup entering the Thai market
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">2024</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">8</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Months</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-12">
                {/* Client Background */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Client Background</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base pl-16 font-light">
                    A Vietnamese entrepreneur running a small SaaS business decided to establish a presence in Thailand
                    to serve Southeast Asian clients. With 3 employees and growing transaction volume, they needed
                    reliable accounting and tax support to stay compliant while focusing on product development.
                  </p>
                </div>

                {/* Project Objectives */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Project Objectives</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pl-16">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Streamline bookkeeping and tax filings</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Handle all government paperwork</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Provide clear monthly financial reports</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Ensure audit-ready documentation</p>
                    </div>
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Challenges Faced</h3>
                  </div>
                  <div className="space-y-3 pl-16">
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Limited Accounting Knowledge</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Founder had no background in accounting and found Thai tax regulations confusing
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Time Constraints</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Needed to focus on product development rather than administrative tasks
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Document Organization</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Struggled to keep track of invoices, receipts, and financial documents
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Solutions Implemented</h3>
                  </div>
                  <div className="space-y-5 pl-16">
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        1
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Full-Service Bookkeeping</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Took over all bookkeeping responsibilities, recording transactions and maintaining accurate
                          financial records through TR Cloud
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        2
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Automated Tax Compliance</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Handled all monthly VAT and withholding tax filings, ensuring deadlines were never missed
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        3
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Clear Communication</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Provided monthly financial summaries in plain English, explaining what's happening with the
                          business finances
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        4
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Document Management System</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Organized all financial documents in cloud storage with automated reminders before deadlines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success in Resolving Problems */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Success in Resolving Problems</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 pl-16">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Accounting Knowledge Gap
                          </p>
                          <p className="text-xl font-bold text-foreground">Bridged Successfully</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Full-service bookkeeping eliminated the need for accounting expertise, allowing founder to focus
                        on product
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Time Constraints
                          </p>
                          <p className="text-xl font-bold text-foreground">15+ Hours Saved</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Automated systems and proactive management freed up significant time for core business
                        activities
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Document Chaos
                          </p>
                          <p className="text-xl font-bold text-foreground">Fully Organized</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Cloud-based document management system brought order to scattered files with easy access and
                        search
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-2xl p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex gap-6">
                    <Quote className="w-10 h-10 text-primary flex-shrink-0 opacity-50" />
                    <div className="space-y-5">
                      <p className="text-foreground italic leading-relaxed font-light text-base">
                        "I run a small tech startup in Thailand, and PND50 has made my life so much easier. The team
                        helped with bookkeeping, tax filings, and all government paperwork. They explain everything
                        clearly, so I always understand what's happening. Simple, reliable, and friendly service —
                        highly recommended."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Nguyen T.</p>
                          <p className="text-sm text-muted-foreground font-light">Founder, Vietnamese SaaS Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3: Russian Online Business */}
          <div className="group">
            <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-50/50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border-b border-border p-10">
                <div className="flex items-start justify-between gap-8 flex-wrap">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      Russia → Thailand
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                      Russian Digital Marketing Agency
                    </h2>
                    <p className="text-lg text-muted-foreground font-light">
                      Online business owner seeking clarity and organization
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">2024</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">5</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Months</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-12">
                {/* Client Background */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Client Background</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base pl-16 font-light">
                    A Russian entrepreneur running a digital marketing agency from Thailand found accounting confusing
                    and time-consuming. With clients across multiple countries and various payment methods, they needed
                    a system to keep everything organized and ensure compliance with Thai regulations.
                  </p>
                </div>

                {/* Project Objectives */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Project Objectives</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pl-16">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Simplify accounting processes</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Organize financial documents</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Ensure deadline compliance</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground font-light">Clear, jargon-free communication</p>
                    </div>
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Challenges Faced</h3>
                  </div>
                  <div className="space-y-3 pl-16">
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Confusing Terminology</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Previous accountant used complicated terms that were hard to understand
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Disorganized Records</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Documents scattered across email, cloud storage, and physical files
                      </p>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-muted/50">
                      <p className="text-sm font-semibold text-foreground mb-2">Missed Deadlines</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Occasionally missed filing deadlines due to lack of reminders
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Solutions Implemented</h3>
                  </div>
                  <div className="space-y-5 pl-16">
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        1
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Plain English Communication</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Explained all accounting concepts in simple, clear language without complicated jargon
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        2
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Cloud-Based Organization</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Centralized all documents in a secure cloud system with easy access and search functionality
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        3
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Proactive Deadline Management</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Set up automated reminders before all filing deadlines to ensure nothing was missed
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-base font-bold text-primary">
                        4
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Regular Status Updates</p>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                          Provided monthly summaries of completed tasks and upcoming requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success in Resolving Problems */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Success in Resolving Problems</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 pl-16">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Confusing Terminology
                          </p>
                          <p className="text-xl font-bold text-foreground">Crystal Clear</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Plain English communication replaced jargon, making accounting concepts easy to understand
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Missed Deadlines
                          </p>
                          <p className="text-xl font-bold text-foreground">Never Again</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        Automated reminders and proactive management ensured 100% on-time filing compliance
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200/50 dark:border-purple-800/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                            Disorganized Records
                          </p>
                          <p className="text-xl font-bold text-foreground">Centralized System</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        All documents consolidated in secure cloud storage with instant access and powerful search
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-2xl p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex gap-6">
                    <Quote className="w-10 h-10 text-primary flex-shrink-0 opacity-50" />
                    <div className="space-y-5">
                      <p className="text-foreground italic leading-relaxed font-light text-base">
                        "Accounting in Thailand used to be confusing for us, but PND50 made it very simple. They use
                        cloud systems, keep all documents organized, and remind us before deadlines. The best part is
                        how easy it is to communicate — no complicated terms, just clear answers."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Elena M.</p>
                          <p className="text-sm text-muted-foreground font-light">
                            Owner, Russian Digital Marketing Agency
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24">
          
        </div>

        {/* Related Links Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <RelatedLinks
            title="Explore More"
            links={[
              {
                title: "Our Services",
                description: "See how we can help your business succeed in Thailand",
                href: "/services",
                icon: <FileText className="w-5 h-5" />,
              },
              {
                title: "Price Calculator",
                description: "Get an instant quote tailored to your needs",
                href: "/calculator",
                icon: <Calculator className="w-5 h-5" />,
              },
              {
                title: "FAQ",
                description: "Common questions about Thai accounting & tax",
                href: "/faq",
                icon: <HelpCircle className="w-5 h-5" />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
