import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/** Skeleton shown while the blog listing fetches from Hashnode. */
export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero placeholder */}
        <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="h-4 w-40 bg-white/20 rounded animate-pulse" />
              <div className="h-12 w-3/4 bg-white/20 rounded animate-pulse" />
              <div className="h-5 w-full bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </section>

        {/* Grid placeholder */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border-2 border-[#c9a961]/20 overflow-hidden">
                <div className="aspect-[16/9] bg-[#f5f1e8] animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-3 w-40 bg-muted rounded animate-pulse" />
                  <div className="h-6 w-5/6 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
