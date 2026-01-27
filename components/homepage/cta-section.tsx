"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current.querySelector(".cta-content"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to simplify your{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Thai business accounting
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Join 200+ businesses that trust PND50 for their accounting and tax needs. 
            Get started with a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            No commitment required. We'll analyze your needs and provide a custom quote.
          </p>
        </div>
      </div>
    </section>
  )
}
