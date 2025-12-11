"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageSquare, Target, CheckCircle2, Heart, Users, Award, Clock } from "lucide-react"
import { Testimonial } from "@/components/ui/testimonial-card"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const AboutClientPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and minimal */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-4">
              About PND50
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Regional corporate specialist with <span className="text-primary">global standards</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate Thai
              accounting and compliance with clarity and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean numbered cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { number: "10+", label: "Years Experience", icon: Clock },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "100%", label: "Compliant", icon: CheckCircle2 },
              { number: "24h", label: "Response Time", icon: Award },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-50 text-primary mb-4">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Side by side layout */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/design-mode/1762249087-4ee906051d74732ad592c02379087e35-4.png.jpeg"
                  alt="Professional team consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-100 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Making Accounting Simple and Stress-Free
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that numbers should never cause confusion. Our approach is to make accounting simple and
                transparent for foreign-owned businesses in Thailand.
              </p>

              <div className="space-y-6">
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
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Clean grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet the People Behind PND50</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to your business success.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                name: "Panida",
                role: "Managing Director",
                image: "/images/design-mode/1762253199-5dad463014758156b5bfb284002cae3f-1%20%281%29.png",
              },
              {
                name: "Team Member",
                role: "Senior Accountant",
                image: "/images/design-mode/1762253343-033ac0ccd097640356a38028c4f0f916-1.png.jpeg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Businesses Across Thailand
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're proud to support international startups — especially from Russia and Vietnam — helping them manage
              accounting, tax, and compliance with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Testimonial
                name="Sarah Mitchell"
                role="Operations Manager"
                company="TechStart Asia"
                rating={5}
                image="https://i.pravatar.cc/150?u=sarah"
                testimonial="PND50 transformed our accounting process completely. Their AI-powered system made compliance effortless and saved our team countless hours every month."
              />
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Testimonial
                name="Michael Chen"
                role="CEO"
                company="Digital Commerce Co."
                rating={5}
                image="https://i.pravatar.cc/150?u=michael"
                testimonial="As a foreign company navigating Thai regulations, PND50 was a game-changer. They handle everything with precision and clarity."
              />
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Testimonial
                name="Priya Sharma"
                role="Finance Director"
                company="Southeast Ventures"
                rating={5}
                image="https://i.pravatar.cc/150?u=priya"
                testimonial="The combination of expert accountants and modern technology sets PND50 apart. They're proactive, transparent, and make financial reporting stress-free."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Clean gradient */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Simplify Accounting in Thailand — Together
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Your business deserves clear, compliant, and modern accounting support. Reach out today to see how we can
              help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group">
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
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500"
              >
                <Link href="/calculator" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutClientPage
