import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  TrendingUp,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  FileCheck,
  Star,
  CheckCircle,
  Sparkles,
  ChevronDown,
  Calculator,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Growth Package | PND50",
  description: "Comprehensive support for growing businesses in Thailand. Complete accounting and tax solutions.",
}

export default function GrowthPackagePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/professional-business-team-analyzing-growth-charts.jpg"
            alt="Growing business team analyzing financial data in Thailand"
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
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                For Expanding Businesses
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Growth Package
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                For Expanding Businesses in Thailand
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Grow with confidence. Complete accounting and tax solutions designed for businesses that need reliability,
              insight, and proactive support every month.
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
                <div className="text-3xl font-bold text-primary mb-1">2-3 Weeks</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">4-10</div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1">Full</div>
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
            {/* Introduction */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Grow with Confidence.
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>When your company starts to scale, your accounting needs become more complex.</p>
                <p>
                  Our <span className="font-semibold text-foreground">Growth Package</span> provides a complete
                  accounting and tax solution designed for businesses that need reliability, insight, and proactive
                  support every month.
                </p>
              </div>
            </section>

            {/* What's Included */}
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
                        Comprehensive bookkeeping with full financial statements prepared by our team through TR Cloud.
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
                        Monthly filings for VAT (P.P.30), withholding tax (PND 1, 3, 53, 54), and mid-year corporate
                        income tax (PND51).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payroll Management */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Payroll Management</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monthly payroll and social security submissions (up to 10 employees).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monthly Financial Reports and Summaries */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Monthly Financial Reports and Summaries
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trial Balance, Balance Sheet, Profit & Loss, and key highlights prepared by our team.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax Planning & Advisory */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Tax Planning & Advisory</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Professional guidance on optimizing tax efficiency and compliance under Thai regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Year-End Financial Reports */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Year-End Financial Reports</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Preparation and submission of your audited or non-audited year-end financial statements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dedicated Accounting Advisor */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Dedicated Accounting Advisor</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A personal contact to ensure smooth, consistent communication throughout the year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose the Growth Package */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Why Choose the Growth Package</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Proactive & Insightful</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We don't just record numbers; we make sure you understand them.
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
                      <h3 className="font-semibold text-foreground mb-2">TR Cloud Efficiency</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All bookkeeping is managed internally by our team using TR Cloud for accurate and consistent
                        results.
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
                      <h3 className="font-semibold text-foreground mb-2">For Growing Teams</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Perfect for companies that have regular transactions and expanding staff.
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
                      <h3 className="font-semibold text-foreground mb-2">Compliance + Clarity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Stay compliant with local tax authorities while keeping full visibility of your financials.
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
                    SMEs or foreign subsidiaries with regular business activity in Thailand
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Companies with 4-10 employees</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Businesses requiring monthly performance tracking and financial clarity
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Companies preparing for annual audits or investor reporting
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step - Enhanced CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-3">Next Step</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Empower your business with accurate data and dependable accounting support.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Contact us today</span> for a personalized quotation
                based on your company's structure and transaction volume.
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
                All bookkeeping is handled internally by our accounting team through{" "}
                <span className="font-semibold text-foreground">TR Cloud</span>, a secure, cloud-based system used for
                internal processing.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All reports and tax documents are sent directly to clients via email for convenience and security.
              </p>
            </div>

            {/* Optional Tagline */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 shadow-sm">
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary fill-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-foreground font-medium leading-relaxed">
                  "Accounting that grows with your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
