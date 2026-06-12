import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Projects | Durabuild Infra Build",
  description:
    "Explore Durabuild's portfolio of residential, commercial, and infrastructure projects delivered with precision and excellence.",
}

const projectCategories = [
  {
    title: "Residential Developments",
    description: "Modern housing complexes and luxury apartments designed for comfortable living with world-class amenities.",
    image: "/aerial-view-of-modern-construction-site-with-build.jpg",
    href: "/projects/residential",
  },
  {
    title: "Commercial Buildings",
    description: "State-of-the-art commercial spaces that combine functionality with aesthetic appeal for businesses to thrive.",
    image: "/modern-construction-building-with-workers-and-equi.jpg",
    href: "/projects/commercial",
  },
  {
    title: "Infrastructure Works",
    description: "Large-scale infrastructure projects including roads, bridges, and government contracts that shape the future.",
    image: "/professional-construction-team-reviewing-blueprint.jpg",
    href: "/projects/infrastructure",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#c9a961] mb-4">Our Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Landmark Projects</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                A portfolio spanning residential, commercial, and infrastructure sectors — each delivered with precision,
                quality, and a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectCategories.map((category) => (
              <Card
                key={category.href}
                className="group overflow-hidden border-2 border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-colors h-full p-0"
              >
                <Link href={category.href} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f1e8]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <h2 className="text-xl font-bold text-[#0a3d3d] mb-3 group-hover:text-[#c9a961] transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{category.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#c9a961] group-hover:gap-3 transition-all">
                      View Projects
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
