"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: "startups", label: "Startups" },
  { id: "expats", label: "Expat Businesses" },
  { id: "established", label: "Established Companies" },
]

const testimonials = {
  startups: [
    {
      quote: "PND50 helped us set up our accounting from day one. Their AI dashboard made tracking expenses effortless, and we passed our first audit without a single issue.",
      author: "Michael Chen",
      role: "Founder, TechFlow Asia",
      image: "/diverse-businessman.png",
      rating: 5,
    },
    {
      quote: "As a first-time entrepreneur in Thailand, I was overwhelmed by tax requirements. PND50's team explained everything clearly and handled all filings perfectly.",
      author: "Emma Rodriguez",
      role: "CEO, Digital Nomad Co",
      image: "/professional-woman-diverse.png",
      rating: 5,
    },
  ],
  expats: [
    {
      quote: "Running a business in a foreign country is challenging enough. PND50 removed all the accounting stress - they speak my language and understand expat needs.",
      author: "James Wilson",
      role: "Director, Bangkok Consulting",
      image: "/diverse-businessman.png",
      rating: 5,
    },
    {
      quote: "The bilingual support is incredible. I can communicate in English while they handle everything in Thai with the Revenue Department.",
      author: "Sophie Laurent",
      role: "Owner, French Bakery BKK",
      image: "/professional-woman-diverse.png",
      rating: 5,
    },
  ],
  established: [
    {
      quote: "We switched from a traditional firm and immediately saw the difference. Real-time dashboards, proactive tax planning, and 5x faster monthly closing.",
      author: "Somchai Wattana",
      role: "CFO, Thai Manufacturing Ltd",
      image: "/thai-businesswoman.png",
      rating: 5,
    },
    {
      quote: "PND50's advisory services helped us optimize our tax structure and save over 2 million baht last year. Highly recommended for growing businesses.",
      author: "Prasert Jaidee",
      role: "Managing Director, Export Corp",
      image: "/diverse-businessman.png",
      rating: 5,
    },
  ],
}

export function TestimonialsTabs() {
  const [activeTab, setActiveTab] = useState("startups")
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
    )
  }, [activeTab])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by businesses{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              like yours
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies across Thailand are transforming their accounting with PND50.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials[activeTab as keyof typeof testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
