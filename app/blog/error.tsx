"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

/** Error boundary for the blog listing — shown if Hashnode is unreachable. */
export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Blog listing failed to load:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#c9a961]/15 text-[#c9a961] flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-[#0a3d3d] mb-4">We couldn&apos;t load the blog</h1>
          <p className="text-muted-foreground mb-8">
            Something went wrong while fetching the latest articles. Please try again in a moment.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
