"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Target,
  CheckCircle2,
  Heart,
  MessageCircle,
  Cloud,
  Eye,
  Users,
} from "lucide-react"
import { useEffect, useRef } from "react"

const AboutClientPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Centered content */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-primary-foreground mb-8 border border-background/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-2 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-2"></span>
                </span>
                About PND50
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Clear Accounting <br />
                Real People
                <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                  Smart Technology
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate
                Thai accounting and compliance with clarity and confidence.
              </p>

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
      <section className="py-12 sm:py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Text Content - 7 columns on md+ */}
            <div className="col-span-12 md:col-span-7 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000">
              <div className="max-w-prose space-y-4">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Making Accounting Simple and Stress-Free
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We believe that numbers should never cause confusion. Our approach is to make accounting simple and
                  transparent for foreign-owned businesses in Thailand.
                </p>

                <div className="space-y-3 pt-4">
                  {[
                    {
                      icon: Target,
                      title: "Clear",
                      description: "We make accounting simple and transparent — not create confusion.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Compliant",
                      description: "Stay compliant while maintaining full visibility into your financial health.",
                    },
                    {
                      icon: Heart,
                      title: "Stress-Free",
                      description: "Human expertise combined with reliable technology for peace of mind.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image - 5 columns on md+ */}
            <div className="col-span-12 md:col-span-5 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000 delay-200">
              <div className="relative">
                <img
                  src="/professional-accountant-working-with-client-in-mod.jpg"
                  alt="Professional accountant consultation"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[16/10] md:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Image - 5 columns on md+ */}
            <div className="col-span-12 md:col-span-5 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000 delay-200">
              <div className="relative">
                <img
                  src="/images/hero-collage-2.jpg"
                  alt="Client consultation meeting"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[16/10] md:aspect-auto"
                />
              </div>
            </div>

            {/* Text Content - 7 columns on md+ */}
            <div className="col-span-12 md:col-span-7 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000">
              <div className="max-w-prose space-y-4">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase">Who We Work With</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Trusted by International Businesses
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We serve foreign companies registered in Thailand, startups and SMEs expanding in the Thai market, and
                  international subsidiaries operating across Asia.
                </p>

                <div className="space-y-3 pt-4">
                  {[
                    "Foreign companies registered in Thailand",
                    "Startups and SMEs expanding in the Thai market",
                    "International subsidiaries operating across Asia",
                    "E-commerce businesses navigating Thai regulations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 border border-border">
                  <p className="text-base sm:text-lg text-foreground font-medium">
                    Whether you're just starting or already established, PND50 helps you stay organized, compliant, and
                    worry-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Text Content - 7 columns on md+ */}
            <div className="col-span-12 md:col-span-7 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000">
              <div className="max-w-prose space-y-4">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase">How We Work</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Our Approach to Excellence
                </h2>

                <div className="space-y-4 pt-4">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Simple Communication",
                      description: "We speak clearly, avoid jargon, and keep you updated with easy-to-read reports.",
                    },
                    {
                      icon: Cloud,
                      title: "Technology-Driven",
                      description: "Cloud-based reports for secure, real-time access to your financial data.",
                    },
                    {
                      icon: Eye,
                      title: "Transparent Process",
                      description: "Fixed pricing, no hidden fees, and clear timelines for every deliverable.",
                    },
                    {
                      icon: Users,
                      title: "Dedicated Support",
                      description: "A personal accountant who knows your company and responds quickly.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image - 5 columns on md+ */}
            <div className="col-span-12 md:col-span-5 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000 delay-200">
              <div className="relative">
                <img
                  src="/team-of-professionals-working-together-in-modern-o.jpg"
                  alt="Team working together"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[16/10] md:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Image - 5 columns on md+ */}
            <div className="col-span-12 md:col-span-5 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000 delay-200">
              <div className="relative">
                <img
                  src="/professional-accounting-team-portrait-in-modern-of.jpg"
                  alt="Our professional team"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[16/10] md:aspect-auto"
                />

                <div className="mt-4 bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
                      <div className="text-xs text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
                      <div className="text-xs text-muted-foreground">Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - 7 columns on md+ */}
            <div className="col-span-12 md:col-span-7 scroll-animate opacity-0 translate-y-[30px] transition-all duration-1000">
              <div className="max-w-prose space-y-4">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Team</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Expert Accountants Who Understand Your Needs
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PND50 is powered by experienced accountants and advisors who specialize in helping foreign-owned
                  businesses succeed in Thailand.
                </p>

                <div className="space-y-3 pt-4">
                  {[
                    "Certified Thai accountants with international experience",
                    "Specialists in foreign business compliance",
                    "Fluent in English and Thai",
                    "Dedicated to your success",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 border border-border">
                  <p className="text-base sm:text-lg text-foreground font-medium italic">
                    "We are not just your accountants — we are your business partners in Thailand."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Left: Text Content */}
              <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase text-center">
                  Why Choose PND50
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 leading-tight text-center">
                  What Sets Us Apart
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "⚡",
                      title: "Fast Setup",
                      stat: "< 10 Days",
                      description: "Get started quickly",
                    },
                    {
                      icon: "✅",
                      title: "100% Compliant",
                      stat: "Always",
                      description: "On-time with regulations",
                    },
                    {
                      icon: "🛡️",
                      title: "Zero Issues",
                      stat: "Proactive",
                      description: "Compliance management",
                    },
                    {
                      icon: "🌟",
                      title: "Expert Team",
                      stat: "10+ Years",
                      description: "Certified accountants",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 inline-block">
                        {item.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{item.stat}</div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-chart-2 relative overflow-hidden">
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

export default AboutClientPage
