import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

/** Shown when a blog slug doesn't match any Hashnode post. */
export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#c9a961]/15 text-[#c9a961] flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-[#0a3d3d] mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">
            The post you&apos;re looking for may have been moved or no longer exists.
          </p>
          <Button asChild>
            <Link href="/blog">Browse All Articles</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
