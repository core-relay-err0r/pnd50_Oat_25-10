import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | PND50 - Thailand Business & Tax Insights",
  description:
    "Expert insights on Thailand business compliance, accounting, PND50 tax filing, and regulations for foreign companies and expats.",
  alternates: {
    canonical: "https://pnd50.com/blog",
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-sky-200/60 shadow-sm shadow-sky-100/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              Knowledge Center
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                Thailand Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                Insights & Guides
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">
              Expert articles on Thai accounting, tax compliance, PND50 filing, and business setup for foreign companies
              and expats.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 flex-wrap mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Resources - Backlinks */}
      <section className="py-16 bg-slate-50/80 border-t border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/tax"
              className="group bg-white rounded-xl p-6 border border-slate-200/50 hover:shadow-lg hover:border-sky-200 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Tax Filing Services
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Professional PND50 and corporate tax filing services for foreign companies in Thailand.
              </p>
              <span className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/services/accounting"
              className="group bg-white rounded-xl p-6 border border-slate-200/50 hover:shadow-lg hover:border-sky-200 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Accounting Services
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Full-service bookkeeping and financial reporting compliant with Thai accounting standards.
              </p>
              <span className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/case-studies"
              className="group bg-white rounded-xl p-6 border border-slate-200/50 hover:shadow-lg hover:border-sky-200 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                Client Success Stories
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                See how we have helped foreign companies successfully navigate Thai business compliance.
              </p>
              <span className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium">
                View case studies <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/faq"
              className="text-slate-600 hover:text-sky-600 text-sm underline underline-offset-4 transition-colors"
            >
              Frequently Asked Questions
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/calculator"
              className="text-slate-600 hover:text-sky-600 text-sm underline underline-offset-4 transition-colors"
            >
              Accounting Fee Calculator
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-sky-600 text-sm underline underline-offset-4 transition-colors"
            >
              Contact Us
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/schedule"
              className="text-slate-600 hover:text-sky-600 text-sm underline underline-offset-4 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
