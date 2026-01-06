"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, CheckCircle2, Heart, Award, Users, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [stats, setStats] = useState({ years: 0, clients: 0, satisfaction: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!hasAnimated) return
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const targets = { years: 10, clients: 150, satisfaction: 100 }
    const current = { years: 0, clients: 0, satisfaction: 0 }
    const increments = {
      years: targets.years / steps,
      clients: targets.clients / steps,
      satisfaction: targets.satisfaction / steps,
    }

    const timer = setInterval(() => {
      current.years = Math.min(current.years + increments.years, targets.years)
      current.clients = Math.min(current.clients + increments.clients, targets.clients)
      current.satisfaction = Math.min(current.satisfaction + increments.satisfaction, targets.satisfaction)
      setStats({
        years: Math.floor(current.years),
        clients: Math.floor(current.clients),
        satisfaction: Math.floor(current.satisfaction),
      })
      if (
        current.years >= targets.years &&
        current.clients >= targets.clients &&
        current.satisfaction >= targets.satisfaction
      ) {
        clearInterval(timer)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [hasAnimated])

  return (
    <div className="w-full h-full min-h-screen overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-sky-50/80 relative">
      {/* Hero Section */}
      <section className="relative pb-24 overflow-hidden md:pb-32 md:pt-28 pt-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
          animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -15, 0, 15, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
        />
        <div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 lg:px-0 max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-sky-200/60 shadow-sm shadow-sky-100/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                </span>
                About PND50
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-slate-900">Regional corporate</span>
                <br />
                <span className="text-slate-900">specialist with</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent font-extrabold">
                  Global standards
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                PND50 is an accounting and advisory firm based in Thailand, helping foreign-owned businesses navigate
                Thai accounting and compliance with clarity and confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white px-8 text-lg font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center gap-2 border-0"
                    style={{ minHeight: "60px", height: "60px" }}
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Team Portraits */}
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[600px] h-full mx-auto">
                <div className="absolute top-[8%] left-[2%] w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full opacity-90 z-0 bg-emerald-200" />
                <div className="absolute top-[3%] right-[12%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-teal-400 opacity-80 z-0" />
                <div className="absolute bottom-[12%] right-[2%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-slate-700 opacity-90 z-0" />

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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setHasAnimated(true)}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto relative z-10 max-w-6xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                value: stats.years,
                suffix: "+",
                label: "Years of Excellence",
                icon: Award,
                gradient: "from-blue-500 to-sky-400",
              },
              {
                value: stats.clients,
                suffix: "+",
                label: "Happy Clients",
                icon: Users,
                gradient: "from-sky-500 to-teal-400",
              },
              {
                value: stats.satisfaction,
                suffix: "%",
                label: "Client Satisfaction",
                icon: TrendingUp,
                gradient: "from-teal-500 to-emerald-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 mb-6">
                  <stat.icon className="w-8 h-8 text-sky-600" strokeWidth={2} />
                </div>
                <div
                  className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="text-center lg:text-left"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Making Thai Accounting{" "}
                <span className="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
                  Clear & Stress-Free
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe accounting should empower, not confuse. Our approach combines expert knowledge with modern
                technology.
              </p>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Target,
                    title: "Crystal Clear",
                    description: "Plain-English communication about your numbers",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Always Compliant",
                    description: "Stay ahead of deadlines with proactive management",
                  },
                  { icon: Heart, title: "Peace of Mind", description: "Human expertise backed by reliable technology" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative w-full order-first lg:order-last"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/design-mode/1762249087-4ee906051d74732ad592c02379087e35-4.png.jpeg"
                  alt="Professional team consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
