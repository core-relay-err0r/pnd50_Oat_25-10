"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Mail, MessageSquare, Target, CheckCircle2, Heart } from "lucide-react"
import { useEffect, useRef } from "react"
import { Testimonial } from "@/components/ui/testimonial-card"

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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-8 sm:mb-12 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-6 scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                About PND50
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Regional corporate specialist with
                <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent font-extrabold">
                  Global standards
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate
                Thai accounting and compliance with clarity and confidence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="group h-12 px-8 text-base w-full sm:w-auto">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 h-12 px-8 text-base w-full sm:w-auto"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Team Portraits in Circular Composition */}
            <div className="lg:col-span-6 scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000 delay-200 relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Container for centered composition */}
              <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-full h-full mx-auto perspective-1000">
                <div className="absolute top-[10%] left-[5%] w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full opacity-90 z-0 bg-emerald-200 animate-float-slow"></div>
                <div className="absolute top-[5%] right-[10%] w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-teal-400 opacity-80 z-0 animate-float-slower"></div>
                <div className="absolute bottom-[15%] right-[5%] w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-slate-700 opacity-90 z-0 animate-float"></div>

                <div className="absolute top-[15%] right-[15%] w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 hover:scale-105 transition-transform duration-500 hover:z-20 hover:shadow-primary/20">
                  <img
                    src="/images/design-mode/1762253199-5dad463014758156b5bfb284002cae3f-1%20%281%29.png"
                    alt="Team member"
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-[10%] left-[10%] w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 hover:scale-105 transition-transform duration-500 hover:z-20 hover:shadow-primary/20">
                  <img
                    src="/images/design-mode/1762253343-033ac0ccd097640356a38028c4f0f916-1.png.jpeg"
                    alt="Team member"
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 sm:py-32 lg:py-40 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Image - Centered at top on mobile, right side on desktop */}
              <div className="lg:col-span-6 scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[50px] transition-all duration-1000 delay-200 relative w-full min-w-0 lg:order-last order-first">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mx-auto max-w-lg lg:max-w-full group">
                  <img
                    src="/images/design-mode/1762249087-4ee906051d74732ad592c02379087e35-4.png.jpeg"
                    alt="Professional team consultation meeting"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg z-20 transform transition-transform duration-500 hover:-translate-y-1">
                    <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-100">
                      <div className="px-2">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Years</div>
                      </div>
                      <div className="px-2">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clients</div>
                      </div>
                      <div className="px-2">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="lg:col-span-6 scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-bold text-primary mb-4 tracking-widest uppercase">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Making Accounting Simple and Stress-Free
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe that numbers should never cause confusion. Our approach is to make accounting simple and
                  transparent for foreign-owned businesses in Thailand.
                </p>

                <div className="space-y-8">
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
                    <div key={index} className="flex items-start gap-6 group mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="text-left min-w-0 flex-1 pt-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Success Stories Section */}
      <section className="py-20 sm:py-32 lg:py-40 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-chart-2/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-24">
              <p className="text-sm font-bold text-primary mb-4 tracking-widest uppercase">Our Success Stories</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Trusted by Businesses Across Thailand
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We&#39;re proud to support international startups — especially from Russia and Vietnam. Helping them
                manage accounting, tax, and compliance with confidence in Thailand.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Testimonial
                name="Sarah Mitchell"
                role="Operations Manager"
                company="TechStart Asia"
                rating={5}
                image="https://i.pravatar.cc/150?u=sarah"
                testimonial="PND50 transformed our accounting process completely. Their AI-powered system made compliance effortless and saved our team countless hours every month. The real-time support in English was invaluable."
              />
              <Testimonial
                name="Michael Chen"
                role="CEO"
                company="Digital Commerce Co."
                rating={5}
                image="https://i.pravatar.cc/150?u=michael"
                testimonial="As a foreign company navigating Thai regulations, PND50 was a game-changer. They handle everything with precision and clarity. No more confusion about deadlines or compliance requirements."
              />
              <Testimonial
                name="Priya Sharma"
                role="Finance Director"
                company="Southeast Ventures"
                rating={5}
                image="https://i.pravatar.cc/150?u=priya"
                testimonial="The combination of expert accountants and modern technology sets PND50 apart. They're proactive, transparent, and make financial reporting stress-free. Highly recommend for any international business in Thailand."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-32 lg:py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-[1400px]">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Simplify Accounting in Thailand — Together.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Your business deserves clear, compliant, and modern accounting support. Reach out today to see how we can
            help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 h-14 px-10 text-lg group">
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-10 text-lg"
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
