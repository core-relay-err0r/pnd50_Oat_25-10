import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Building2,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  FileCheck,
  MessageCircle,
  Star,
  CheckCircle,
  Sparkles,
  ChevronDown,
  TrendingUp,
  Briefcase,
  ClipboardCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Full-Cycle Package | PND50",
  description:
    "Complete end-to-end solution for established businesses in Thailand. Comprehensive accounting, complete compliance.",
}

export default function FullCyclePackagePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/professional-business-team-analyzing-growth-charts.jpg"
            alt="Established business team managing comprehensive accounting in Thailand"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
          {/* Gradient accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        {/* Back button - positioned absolutely */}
        <Link
          href="/services"
          className="absolute top-8 left-4 md:left-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group z-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Services</span>
        </Link>

        {/* Hero content - centered */}
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Icon and badge */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 animate-float">
                <Building2 className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Complete End-to-End Solution
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Full-Cycle Package
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                For Established Companies Operating in Thailand
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive accounting. Complete compliance. Focus on your business — we'll take care of everything
              else.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/calculator">Get a Quote</Link>
              </Button>
            </div>

            {/* Key features preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">9</div>
                <div className="text-sm text-muted-foreground">Services Included</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">Unlimited</div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      <div id="details" className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Introduction Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Comprehensive Accounting. Complete Compliance.
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  As your company grows, accounting, tax, and legal requirements become more detailed and demanding.
                </p>
                <p>
                  Our <span className="font-semibold text-foreground">Full-Cycle Package</span> is designed for
                  established businesses that need ongoing, professional accounting, tax compliance, and corporate
                  support — all managed seamlessly by our experienced team.
                </p>
              </div>
            </section>

            {/* What's Included Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">What's Included</h2>
              <div className="grid gap-6">
                {/* Monthly Bookkeeping */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Bookkeeping</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Full-cycle accounting, including general ledger maintenance, reconciliation, and financial
                        statement preparation through TR Cloud.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax Compliance */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Tax Compliance</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monthly VAT (P.P.30), withholding tax (PND 1, 3, 53, 54), and annual corporate tax (PND50,
                        PND51) filings handled with precision and consistency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Staff Management */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Staff Management</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Complete payroll calculation and social security filing for an unlimited number of employees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monthly Financial Reports and Highlights */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Monthly Financial Reports and Highlights
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trial Balance, Balance Sheet, Profit & Loss, and summaries prepared by our internal team.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quarterly Reviews & Financial Analysis */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Quarterly Reviews & Financial Analysis
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Regular financial insight to monitor business performance and plan ahead.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Audit Coordination */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <ClipboardCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Audit Coordination</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Liaising directly with external auditors, preparing audit schedules, and supporting
                        audit-related documentation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corporate Secretarial Support */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Corporate Secretarial Support</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Assistance with shareholder changes, company updates, and annual DBD filings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax and Business Advisory */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Tax and Business Advisory</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Strategic tax and compliance advice for complex or cross-border operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dedicated Account Manager */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Dedicated Account Manager</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A single point of contact for communication and ongoing updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                Why Choose the Full-Cycle Package
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">End-to-End Service</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        From bookkeeping to audit preparation and corporate filings, we handle it all.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Internal TR Cloud System</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our team uses TR Cloud internally to ensure consistency, accuracy, and secure record-keeping.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Trusted by Foreign Companies</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ideal for established subsidiaries and international operations in Thailand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Peace of Mind</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Stay compliant all year, without managing multiple vendors or systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Who This Package Is For */}
            <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-5">Who This Package Is For</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Established companies or subsidiaries operating in Thailand
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Medium-to-large organizations with high transaction volume
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Businesses requiring annual audits or corporate updates
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Companies seeking long-term accounting and compliance management
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step - Enhanced CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-3">Next Step</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Focus on your business — we'll take care of everything else.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Contact us today</span> to learn how PND50 can manage
                your full accounting cycle with accuracy and efficiency.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/calculator">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-background hover:bg-accent">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>

            {/* Note on Accounting System */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Note on Accounting System</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                All bookkeeping and reporting are managed internally by our accounting team through{" "}
                <span className="font-semibold text-foreground">TR Cloud</span>, a secure cloud-based accounting system
                used for internal operations only.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All financial reports, tax filings, and related documents are shared directly with clients via email for
                security and convenience.
              </p>
            </div>

            {/* Optional Tagline */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 shadow-sm">
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary fill-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-foreground font-medium leading-relaxed">
                  "Complete accounting care — from books to boardroom."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
