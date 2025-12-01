"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Mail, MessageSquare, Target, CheckCircle2, Heart } from "lucide-react"
import { useEffect, useRef } from "react"
import { LogoCloud } from "@/components/ui/logo-cloud"
import { cn } from "@/lib/utils"

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
]

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
      <section className="relative pb-24 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 overflow-hidden md:pb-32 md:pt-28 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 lg:px-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

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
                  Global standards
                </span>
              </h1>

              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate
                Thai accounting and compliance with clarity and confidence.
              </p>

              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Right: Team Portraits in Circular Composition */}
            <div className="scroll-animate opacity-0 translate-y-[50px] transition-all duration-1000 delay-200 relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
              {/* Container for centered composition */}
              <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[600px] h-full mx-auto">
                <div className="absolute top-[8%] left-[2%] w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full opacity-90 z-0 bg-emerald-200"></div>
                <div className="absolute top-[3%] right-[12%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-teal-400 opacity-80 z-0"></div>
                <div className="absolute bottom-[12%] right-[2%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-slate-700 opacity-90 z-0"></div>

                <div className="absolute top-[12%] right-[8%] w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/design-mode/1762253199-5dad463014758156b5bfb284002cae3f-1%20%281%29.png"
                    alt="Team member"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute bottom-[8%] left-[12%] w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/design-mode/1762253343-033ac0ccd097640356a38028c4f0f916-1.png.jpeg"
                    alt="Team member"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Team stats overlay */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-background relative overflow-hidden lg:scale-[0.85] lg:origin-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-background/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-border max-w-full z-20">
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
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-chart-2/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              </div>

              {/* Text Content - Centered on mobile, left-aligned on desktop */}
              <div className="scroll-animate opacity-0 translate-y-[30px] sm:translate-x-[-50px] transition-all duration-1000 text-center lg:text-left flex flex-col justify-center min-w-0 w-full">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
                  Making Accounting Simple and Stress-Free
                </h2>
                <p className="sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed break-words text-sm">
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
                        <p className="sm:text-base text-muted-foreground leading-relaxed break-words text-xs">
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

      {/* Our Success Stories Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div
              aria-hidden="true"
              className={cn(
                "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
                "bg-[radial-gradient(ellipse_at_center,var(--color-foreground)_0.1,transparent_50%)]",
                "blur-[30px] opacity-10",
              )}
            />
            <div className="w-full">
              <h2 className="mb-5 text-center">
                <span className="block font-medium text-2xl text-muted-foreground">Already trusted by</span>
                <span className="font-black text-2xl text-primary tracking-tight md:text-3xl">Best in the Game</span>
              </h2>

              <LogoCloud logos={logos} />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      {/* Placeholder for How We Work Section */}

      {/* Our Team Section */}
      {/* Placeholder for Our Team Section */}

      {/* Why Choose Us Section */}

      {/* Call to Action Section */}
      <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-chart-2 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 leading-tight md:text-5xl">
            Let's Simplify Accounting in Thailand — Together.
          </h2>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed md:text-lg text-lg">
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
