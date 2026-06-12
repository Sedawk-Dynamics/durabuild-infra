import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getAllPostSlugs, getPostBySlug, formatPostDate } from "@/lib/hashnode"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://durainfra.com"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

/** Pre-render known posts at build time; new slugs render on-demand (ISR). */
export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch (error) {
    // Don't fail the build if Hashnode is briefly unreachable — pages will
    // still render on-demand via dynamicParams + ISR.
    console.error("generateStaticParams: failed to fetch slugs from Hashnode", error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found | Durabuild Infra Build" }
  }

  const title = post.seoTitle ?? post.title
  const description = post.seoDescription ?? post.brief
  const image = post.ogImage ?? post.coverImage ?? undefined
  const url = `${SITE_URL}/blog/${post.slug}`

  return {
    title: `${title} | Durabuild Infra Build`,
    description,
    alternates: { canonical: url },
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Durabuild Infra Build",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? undefined,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.tags.map((t) => t.name),
      images: image ? [{ url: image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  let post
  try {
    post = await getPostBySlug(slug)
  } catch (error) {
    // Treat a transient fetch failure as "not found" so build/prerender never
    // hard-fails; ISR will regenerate the page on a later request.
    console.error(`BlogPostPage: failed to fetch post "${slug}"`, error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  // JSON-LD structured data for rich search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.brief,
    image: post.coverImage ?? undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: post.author ? { "@type": "Person", name: post.author.name } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Durabuild Infra Build",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <article>
          {/* Header */}
          <header className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a961] transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.slug}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#c9a961]/20 text-[#c9a961]"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
                {post.subtitle && <p className="text-lg md:text-xl text-white/80 mb-8">{post.subtitle}</p>}

                <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                  {post.author && (
                    <span className="inline-flex items-center gap-2">
                      {post.author.profilePicture && (
                        <Image
                          src={post.author.profilePicture}
                          alt={post.author.name}
                          width={36}
                          height={36}
                          className="rounded-full object-cover w-9 h-9"
                        />
                      )}
                      <span className="font-medium text-white">{post.author.name}</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#c9a961]" />
                    {formatPostDate(post.publishedAt)}
                  </span>
                  {post.readTimeInMinutes > 0 && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#c9a961]" />
                      {post.readTimeInMinutes} min read
                    </span>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Cover image */}
          {post.coverImage && (
            <div className="container mx-auto px-4 lg:px-8 -mt-10">
              <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Body */}
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div
              className="blog-content max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Footer CTA */}
            <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0a3d3d] mb-1">Have a project in mind?</h2>
                  <p className="text-muted-foreground text-sm">
                    Talk to our team about your construction or infrastructure needs.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Button asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/blog">More Articles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

// New posts published on Hashnode become available without a redeploy.
export const revalidate = 60
export const dynamicParams = true
