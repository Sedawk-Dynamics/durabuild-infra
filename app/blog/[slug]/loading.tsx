import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/** Skeleton shown while an individual post fetches from Hashnode. */
export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] pt-40 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="h-4 w-28 bg-white/20 rounded animate-pulse" />
              <div className="h-12 w-full bg-white/20 rounded animate-pulse" />
              <div className="h-12 w-2/3 bg-white/20 rounded animate-pulse" />
              <div className="h-5 w-1/2 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 -mt-10">
          <div className="max-w-4xl mx-auto aspect-[16/9] rounded-xl bg-[#f5f1e8] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-muted rounded animate-pulse"
                style={{ width: `${90 - (i % 3) * 15}%` }}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
