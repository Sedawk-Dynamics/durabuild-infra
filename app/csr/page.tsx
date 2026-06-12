import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | Durabuild Infra Build",
  description:
    "Durabuild's CSR initiatives empower communities through skill building, education, health & hygiene, and sports.",
}

const initiatives = [
  {
    title: "Skill Building & Livelihood",
    description: "Empowering communities through vocational training, skill development programs, and livelihood opportunities for sustainable growth.",
    image: "/vocational-training-skill-development-workshop.jpg",
    href: "/csr/skill-building",
  },
  {
    title: "Education",
    description: "Supporting quality education through infrastructure development, scholarships, and learning resources for underprivileged children.",
    image: "/children-in-classroom-education-learning.jpg",
    href: "/csr/education",
  },
  {
    title: "Health & Hygiene",
    description: "Promoting health awareness, sanitation facilities, and hygiene practices for healthier communities and better living standards.",
    image: "/health-hygiene-awareness-community-program.jpg",
    href: "/csr/health-hygiene",
  },
  {
    title: "India Run Sports",
    description: "Encouraging sports participation, building sports infrastructure, and supporting athletes to promote fitness and national pride.",
    image: "/mega-menu-construction.jpg",
    href: "/csr/india-run-sports",
  },
]

export default function CsrPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#c9a961] mb-4">Giving Back</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Corporate Social Responsibility</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                We believe in building more than structures. Through meaningful initiatives in education, skill
                development, health, and sports, we empower the communities we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {initiatives.map((initiative) => (
              <Card
                key={initiative.href}
                className="group overflow-hidden border-2 border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-colors h-full p-0"
              >
                <Link href={initiative.href} className="flex flex-col sm:flex-row h-full">
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 overflow-hidden bg-[#f5f1e8]">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6">
                    <h2 className="text-xl font-bold text-[#0a3d3d] mb-3 group-hover:text-[#c9a961] transition-colors">
                      {initiative.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{initiative.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#c9a961] group-hover:gap-3 transition-all">
                      Learn More
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
