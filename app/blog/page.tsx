import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import { getPosts } from "@/lib/hashnode"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://durainfra.com"

export const metadata: Metadata = {
  title: "Blog | Durabuild Infra Build",
  description:
    "Insights, updates, and expertise from Durabuild Infra Build on construction, infrastructure development, and engineering across India.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Blog | Durabuild Infra Build",
    description:
      "Insights, updates, and expertise from Durabuild Infra Build on construction, infrastructure development, and engineering across India.",
    siteName: "Durabuild Infra Build",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Durabuild Infra Build",
    description:
      "Insights, updates, and expertise from Durabuild Infra Build on construction and infrastructure development.",
  },
}

export default async function BlogPage() {
  // Fetch defensively: a Hashnode outage (or non-JSON response) should render a
  // graceful notice rather than crashing static generation / the build.
  let posts: Awaited<ReturnType<typeof getPosts>>["posts"] = []
  let loadFailed = false
  try {
    posts = (await getPosts(12)).posts
  } catch (error) {
    console.error("BlogPage: failed to fetch posts from Hashnode", error)
    loadFailed = true
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#c9a961] mb-4">
                Durabuild Journal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Insights from the Ground Up
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Perspectives on construction, infrastructure, and engineering — straight from the teams building India&apos;s
                future.
              </p>
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          {posts.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-20">
              <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">
                {loadFailed ? "Articles are temporarily unavailable" : "No posts yet"}
              </h2>
              <p className="text-muted-foreground mb-8">
                {loadFailed
                  ? "We couldn't reach the blog right now. Please check back in a few minutes."
                  : "We're busy on site. New articles are on the way — check back soon."}
              </p>
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} priority={index < 3} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Revalidate the page itself periodically so newly published Hashnode posts
// appear automatically (works alongside the fetch-level ISR in lib/hashnode).
export const revalidate = 60

