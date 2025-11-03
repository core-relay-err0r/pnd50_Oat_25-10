import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "About PND50 | Our Mission & Expertise in Thai Accounting",
  description:
    "Learn about PND50, a Burakorn Partners company. We're dedicated to revolutionizing accounting for foreign-owned businesses in Thailand with technology and expert guidance.",
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-primary-foreground mb-8 border border-background/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-2 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-2"></span>
              </span>
              About PND50
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
              Clear Accounting <br />
              Real People
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Smart Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate Thai
              accounting and compliance with clarity and confidence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Making Accounting Simple and Stress-Free
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Clear",
                  description:
                    "We believe that numbers should never cause confusion. Our approach is to make accounting simple and transparent — not create confusion.",
                },
                {
                  icon: "✅",
                  title: "Compliant",
                  description:
                    "Our goal is to help you stay compliant while giving you full visibility into your company's financial health.",
                },
                {
                  icon: "😌",
                  title: "Stress-Free",
                  description:
                    "We combine human expertise with reliable technology to make accounting easier, faster, and more transparent for every client.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Who We Work With</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Trusted by International Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We serve foreign companies registered in Thailand, startups and SMEs expanding in the Thai market, and
                international subsidiaries operating across Asia.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌍",
                  title: "Foreign Companies",
                  description: "Companies registered in Thailand navigating local regulations",
                  color: "from-blue-500/10 to-blue-600/20",
                },
                {
                  icon: "🚀",
                  title: "Startups & SMEs",
                  description: "Growing businesses expanding in the Thai market",
                  color: "from-emerald-500/10 to-emerald-600/20",
                },
                {
                  icon: "🏢",
                  title: "International Subsidiaries",
                  description: "Global companies with operations across Asia",
                  color: "from-purple-500/10 to-purple-600/20",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're just starting or already established, PND50 helps you stay organized, compliant, and
                worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Our Approach to Excellence
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "💬",
                  title: "Simple Communication",
                  description:
                    "We speak clearly, avoid accounting jargon, and keep you updated every month with easy-to-read reports every month.",
                },
                {
                  icon: "☁️",
                  title: "Technology-Driven",
                  description:
                    "All reports are prepared using the Cloud for secure, real-time access. No hidden fees, and clear timelines for every deliverable.",
                },
                {
                  icon: "🔍",
                  title: "Transparent Process",
                  description: "Fixed pricing, no hidden fees, and clear timelines for every deliverable.",
                },
                {
                  icon: "🤝",
                  title: "Dedicated Support",
                  description: "You'll have a personal accountant who knows your company and responds quickly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-8 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Team</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Accountants Who Understand Your Needs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                PND50 is powered by a group of experienced accountants and advisors who specialize in helping
                foreign-owned businesses succeed in Thailand.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-3xl p-12 border border-border">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Each team member brings a mix of Thai expertise and international standards
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Ensuring accuracy, reliability, and trust in every interaction.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Certified Thai accountants with international experience",
                      "Specialists in foreign business compliance",
                      "Fluent in English and Thai",
                      "Dedicated to your success",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center border-2 border-border">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">👥</div>
                      <p className="text-2xl font-bold text-foreground mb-2">Our Team</p>
                      <p className="text-muted-foreground">Dedicated professionals committed to your success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground italic">
                "We are not just your accountants — we are your business partners in Thailand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Why Choose PND50</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">What Sets Us Apart</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Fast Setup",
                  description: "Get started in days, not weeks",
                  stat: "10 Days",
                  color: "from-blue-500/10 to-blue-600/20",
                },
                {
                  icon: "✅",
                  title: "100% Compliant",
                  description: "Always on-time with Thai regulations",
                  stat: "100%",
                  color: "from-emerald-500/10 to-emerald-600/20",
                },
                {
                  icon: "🛡️",
                  title: "Zero Issues",
                  description: "Proactive compliance management",
                  stat: "0 Issues",
                  color: "from-purple-500/10 to-purple-600/20",
                },
                {
                  icon: "🌟",
                  title: "Expert Team",
                  description: "Certified accountants at your service",
                  stat: "10+ Years",
                  color: "from-orange-500/10 to-orange-600/20",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center`}
                >
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-chart-2 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Let's Simplify Accounting in Thailand — Together.
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your business deserves clear, compliant, and modern accounting support. Reach out today to see how we can
            help.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/calculator" className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
