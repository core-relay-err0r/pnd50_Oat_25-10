import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react"
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Article Not Found | PND50 Blog",
    }
  }

  return {
    title: `${post.title} | PND50 Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${siteConfig.url}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://pnd50.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={`${siteConfig.url}${post.image}`}
        datePublished={post.dateISO}
        dateModified={post.dateISO}
        author={post.author}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px]">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>

              <div className="max-w-3xl">
                <div className="flex items-center gap-3 flex-wrap mb-4">
                  <span className="bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300 text-sm">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>

                <div className="flex items-center gap-2 mt-6">
                  <User className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-300 text-sm">{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 bg-slate-100 text-slate-600 text-sm px-3 py-1.5 rounded-full"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-li:text-slate-600
                prose-strong:text-slate-900
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200/50 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Need Help with Thai Tax Compliance?</h3>
              <p className="text-slate-600 mb-6">
                Our team of experts can help you navigate Thailand's accounting and tax requirements. Get in touch for a
                free consultation.
              </p>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white/50 border-t border-slate-200/50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                    <article className="bg-white border border-slate-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs text-slate-500 mb-2">{relatedPost.date}</span>
                        <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 flex-1">{relatedPost.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}

function formatContent(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2>${line.slice(3)}</h2>`
      }
      if (line.startsWith("### ")) {
        return `<h3>${line.slice(4)}</h3>`
      }
      if (line.startsWith("- ")) {
        return `<li>${line.slice(2)}</li>`
      }
      if (line.match(/^\d+\.\s\*\*/)) {
        const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*-?\s*(.*)/)
        if (match) {
          return `<li><strong>${match[1]}</strong>${match[2] ? ` - ${match[2]}` : ""}</li>`
        }
      }
      if (line.match(/^\d+\.\s/)) {
        return `<li>${line.replace(/^\d+\.\s/, "")}</li>`
      }
      if (line.trim() === "") return ""
      return `<p>${line}</p>`
    })
    .join("\n")
}
