"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import CTASection from "@/components/layout/CTASection"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const blogPosts = [
  {
    slug: "what-is-pnd50",
    title: "What is PND50 (ภ.ง.ด.50)? Complete Guide for Foreign Businesses",
    description:
      "Everything you need to know about PND50 - Thailand's annual corporate income tax return form. Filing requirements, deadlines, penalties, and step-by-step guide.",
    category: "Tax Guide",
    readTime: "12 min read",
    date: "June 22, 2025",
    featured: true,
    published: true,
    tags: ["PND50", "ภ.ง.ด.50", "Corporate Tax", "Tax Filing"],
  },
  {
    slug: "pnd50-vs-pnd51",
    title: "PND50 vs PND51: Understanding Thailand's Corporate Tax Forms",
    description:
      "Learn the difference between PND50 (ภ.ง.ด.50) annual tax return and PND51 (ภ.ง.ด.51) half-year tax return. When to file each form, common mistakes, and how they work together.",
    category: "Tax Forms",
    readTime: "10 min read",
    date: "June 22, 2025",
    featured: true,
    published: true,
    tags: ["PND50", "PND51", "ภ.ง.ด.50", "ภ.ง.ด.51"],
  },
  {
    slug: "thailand-tax-guide",
    title: "Tax Guide for Foreign Companies in Thailand",
    description:
      "Comprehensive tax guide covering business registration, corporate income tax (PND50/PND51), VAT, withholding taxes, and social security for foreign businesses in Thailand.",
    category: "Comprehensive Guide",
    readTime: "15 min read",
    date: "June 22, 2025",
    featured: true,
    published: true,
    tags: ["Foreign Business", "Thailand Tax", "VAT", "Withholding Tax"],
  },
  {
    slug: "pnd50-filing-deadline",
    title: "PND50 Filing Deadline 2025: Important Dates & Penalties",
    description:
      "Don't miss your PND50 (ภ.ง.ด.50) filing deadline. Learn about due dates, extension options, and late filing penalties for Thailand corporate tax.",
    category: "Tax Deadline",
    readTime: "5 min read",
    date: "Coming Soon",
    featured: false,
    published: false,
    tags: ["PND50 Deadline", "Tax Penalty", "Filing Date"],
  },
  {
    slug: "pnd50-documents-required",
    title: "Documents Required for PND50 Filing in Thailand",
    description:
      "Complete checklist of documents needed to file your PND50 (ภ.ง.ด.50) corporate tax return. Financial statements, supporting documents, and preparation tips.",
    category: "Tax Guide",
    readTime: "7 min read",
    date: "Coming Soon",
    featured: false,
    published: false,
    tags: ["PND50 Documents", "Tax Filing", "Financial Statements"],
  },
  {
    slug: "thailand-accounting-standards",
    title: "Thailand Accounting Standards for Foreign Businesses",
    description:
      "Understanding Thai Financial Reporting Standards (TFRS) and accounting requirements for foreign-owned companies in Thailand.",
    category: "Accounting",
    readTime: "10 min read",
    date: "Coming Soon",
    featured: false,
    published: false,
    tags: ["TFRS", "Accounting Standards", "Financial Reporting"],
  },
]

const PostCard = ({ post, index, isFeatured }: { post: (typeof blogPosts)[0]; index: number; isFeatured: boolean }) => {
  const cardContent = isFeatured ? (
    <Card className="group relative h-full overflow-hidden border-slate-200/50 bg-white/70 backdrop-blur-sm transition-all hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <CardHeader className="relative">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="bg-sky-100 text-sky-700">
            {post.category}
          </Badge>
          {post.published ? (
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
              {post.date}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
              {post.date}
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-xl text-slate-800 group-hover:text-sky-600 transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-slate-600">{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <div className="mb-4 flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-slate-200 text-slate-600">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-sky-600 group-hover:underline">
            {post.published ? "Read more" : "Coming soon"} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card className="group overflow-hidden border-slate-200/50 bg-white/70 backdrop-blur-sm transition-all hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="bg-sky-100 text-sky-700">
              {post.category}
            </Badge>
            {post.published ? (
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                {post.date}
              </Badge>
            ) : (
              <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                {post.date}
              </Badge>
            )}
          </div>
          <h3 className="mb-1 text-lg font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">{post.description}</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1 text-sky-600">
            {post.published ? "Read" : "Soon"} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Card>
  )

  if (post.published) {
    return (
      <Link href={`/blog/${post.slug}`} className="block">
        {cardContent}
      </Link>
    )
  }
  return cardContent
}

export default function BlogPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ]}
      />
      <FAQSchema faqs={blogFAQs} />

      <main className="min-h-screen">
        <AnimatedGridBackground className="min-h-screen" variant="light">
          {/* Floating shapes - decorative elements */}
          <motion.div
            className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg"
            animate={{
              rotate: [45, 135, 225, 315, 405],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[40%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-300/40 to-sky-300/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />

          {/* Background blurs - decorative */}
          <div
            className="absolute top-20 left-10 w-[30vw] max-w-[500px] h-[30vw] max-h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-20 right-10 w-[28vw] max-w-[450px] h-[28vw] max-h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 bg-gradient-to-br from-slate-50/80 via-white/90 to-sky-50/80">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="mx-auto max-w-3xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge variant="outline" className="mb-4 border-sky-300 bg-sky-50/80 text-sky-700">
                    PND50 Knowledge Base
                  </Badge>
                  <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                      PND50 Blog
                    </span>
                    <span className="block text-xl font-medium text-slate-600 md:text-2xl mt-2">
                      ภ.ง.ด.50 Thailand Tax Guide
                    </span>
                  </h1>
                  <motion.p
                    className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Expert guides and tutorials on <strong className="text-blue-600">PND50 (ภ.ง.ด.50)</strong> tax
                    filing, accounting best practices, and business compliance for foreign companies in Thailand.
                  </motion.p>
                </motion.div>
              </div>
            </section>

            {/* Featured Posts */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                  className="mb-8 text-2xl font-bold text-slate-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Featured Articles
                </motion.h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <PostCard post={post} index={index} isFeatured={true} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* All Posts */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                  className="mb-8 text-2xl font-bold text-slate-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  More Articles
                </motion.h2>
                <div className="grid gap-4">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    >
                      <PostCard post={post} index={index} isFeatured={false} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 pb-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <CTASection />
                </motion.div>
              </div>
            </section>
          </div>
        </AnimatedGridBackground>
      </main>
    </>
  )
}

// FAQ for schema
const blogFAQs = [
  {
    question: "What is PND50 (ภ.ง.ด.50)?",
    answer:
      "PND50 (ภ.ง.ด.50 or P.N.D.50) is Thailand's Annual Corporate Income Tax Return form. All companies registered in Thailand must file this form within 150 days after their fiscal year ends to report their annual income and pay corporate income tax.",
  },
  {
    question: "When is the PND50 filing deadline?",
    answer:
      "PND50 is due within 150 days after the end of the company's accounting period. For calendar year companies (Jan-Dec), this means May 30 of the following year. E-filing provides an extra 8 days extension.",
  },
  {
    question: "What is the difference between PND50 and PND51?",
    answer:
      "PND50 (ภ.ง.ด.50) is the annual corporate income tax return filed after year-end based on actual audited profits. PND51 (ภ.ง.ด.51) is the mid-year return filed halfway through the year based on estimated profits as a prepayment.",
  },
  {
    question: "Do foreign companies need to file PND50 in Thailand?",
    answer:
      "Yes, all companies doing business in Thailand, including foreign-owned companies (Thai Limited Companies with foreign shareholders), must file PND50 annually. This applies regardless of whether the company made a profit or loss.",
  },
]
