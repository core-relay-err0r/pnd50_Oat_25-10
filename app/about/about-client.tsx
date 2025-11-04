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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                About PND50
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Regional corporate specialist with
                <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent font-extrabold">
                  global standards
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate
                Thai accounting and compliance with clarity and confidence.
              </p>

              <Button asChild size="lg" className="group">
                <Link href="/services" className="flex items-center gap-2">
                  About us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right: Team Portraits in Circular Composition */}
            <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000 delay-200 relative w-full h-[400px] lg:h-[500px]">
              {/* Decorative circles */}
              <div className="absolute top-[10%] left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-orange-500 opacity-90 z-0"></div>
              <div className="absolute top-[5%] right-[15%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-400 opacity-80 z-0"></div>
              <div className="absolute bottom-[15%] right-[5%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-700 opacity-90 z-0"></div>

              {/* Portrait 1 - Top Right */}
              <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/design-mode/1762253199-5dad463014758156b5bfb284002cae3f-1%20%281%29.png"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Portrait 2 - Bottom Left */}
              <div className="absolute bottom-[10%] left-[15%] w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/design-mode/1762253343-033ac0ccd097640356a38028c4f0f916-1.png.jpeg"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image - Centered at top on mobile, right side on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[50px] transition-all duration-1000 delay-200 relative w-full min-w-0 lg:order-last order-first">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-full">
                  <img
                    src="/images/design-mode/1762249087-4ee906051d74732ad592c02379087e35-4.png.jpeg"
                    alt="Professional team consultation meeting"
                    className="w-full h-full object-cover parallax-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-chart-2/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
                  Making Accounting Simple and Stress-Free
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed break-words">
                  We believe that numbers should never cause confusion. Our approach is to make accounting simple and
                  transparent for foreign-owned businesses in Thailand.
                </p>

                <div className="space-y-4 sm:space-y-6">
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
                    <div key={index} className="flex items-start gap-4 group mx-auto lg:mx-0 max-w-md lg:max-w-none">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 break-words">{item.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image - Centered at top on mobile, right side on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[50px] transition-all duration-1000 delay-200 relative w-full min-w-0 order-first lg:-ml-12">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-full">
                  <img
                    src="/images/design-mode/1762249261-d06258d7eb72520e54142497e865c10a-1.png.jpeg"
                    alt="Professional women in business consultation"
                    className="w-full h-full object-cover parallax-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Who We Work With</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
                  Trusted by International Businesses
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed break-words">
                  We serve foreign companies registered in Thailand, startups and SMEs expanding in the Thai market, and
                  international subsidiaries operating across Asia.
                </p>

                <div className="space-y-4 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                  {[
                    "Foreign companies registered in Thailand",
                    "Startups and SMEs expanding in the Thai market",
                    "International subsidiaries operating across Asia",
                    "E-commerce businesses navigating Thai regulations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground font-medium text-base sm:text-lg text-left break-words min-w-0 flex-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 border border-border">
                  <p className="text-base sm:text-lg text-foreground font-medium break-words">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image - Centered at top on mobile, right side on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[50px] transition-all duration-1000 delay-200 relative w-full min-w-0 lg:order-last order-first">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-full">
                  <img
                    src="/team-of-professionals-working-together-in-modern-o.jpg"
                    alt="Team working together"
                    className="w-full h-full object-cover parallax-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">How We Work</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
                  Our Approach to Excellence
                </h2>

                <div className="space-y-4 sm:space-y-6">
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
                      className="p-4 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 group mx-auto lg:mx-0 max-w-md lg:max-w-none"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors break-words">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image - Centered at top on mobile, right side on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[50px] transition-all duration-1000 delay-200 relative w-full min-w-0 order-first lg:-ml-16">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-full">
                  <img
                    src="/professional-accounting-team-portrait-in-modern-of.jpg"
                    alt="Our professional team"
                    className="w-full h-full object-cover parallax-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>

                  {/* Team stats overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-background/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-border max-w-full">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                      <div className="min-w-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground break-words">Years Experience</div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground break-words">Happy Clients</div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground break-words">Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Team</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
                  Expert Accountants Who Understand Your Needs
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed break-words">
                  PND50 is powered by experienced accountants and advisors who specialize in helping foreign-owned
                  businesses succeed in Thailand.
                </p>

                <div className="space-y-4 mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                  {[
                    "Certified Thai accountants with international experience",
                    "Specialists in foreign business compliance",
                    "Fluent in English and Thai",
                    "Dedicated to your success",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="text-foreground font-medium text-base sm:text-lg text-left break-words min-w-0 flex-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 border border-border">
                  <p className="text-base sm:text-lg text-foreground font-medium italic break-words">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
