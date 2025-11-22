"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Cpu, Plane, Droplet, Factory, Lightbulb, Users, Shield } from "lucide-react"

export default function SectorsPage() {
  const sectors = [
    {
      title: "Urban Infrastructure",
      description:
        "Comprehensive urban development projects including roads, drainage systems, and civic infrastructure for modern cities.",
      icon: Building2,
      image: "/urban-city-infrastructure-development-roads-draina.jpg",
      href: "/sectors/urban-infrastructure",
      stats: { projects: "150+", cities: "25+" },
    },
    {
      title: "Advanced Technology",
      description:
        "State-of-the-art facilities for IT parks, data centers, and technology hubs with cutting-edge infrastructure.",
      icon: Cpu,
      image: "/modern-technology-park-data-center-building-it-inf.jpg",
      href: "/sectors/advanced-technology",
      stats: { projects: "75+", capacity: "50M+ sq.ft" },
    },
    {
      title: "Transportation",
      description:
        "Highways, bridges, metro systems, and transportation infrastructure connecting communities and enabling growth.",
      icon: Plane,
      image: "/modern-highway-bridge-transportation-infrastructur.jpg",
      href: "/sectors/transportation",
      stats: { highways: "500+ km", bridges: "120+" },
    },
    {
      title: "Water & Utilities",
      description: "Water treatment plants, reservoirs, distribution networks, and water management infrastructure.",
      icon: Droplet,
      image: "/placeholder.svg?height=400&width=600",
      href: "/sectors/water",
      stats: { plants: "40+", capacity: "200M+ liters/day" },
    },
    {
      title: "Industrial",
      description:
        "Manufacturing facilities, warehouses, and industrial complexes with specialized construction requirements.",
      icon: Factory,
      image: "/placeholder.svg?height=400&width=600",
      href: "/sectors",
      stats: { facilities: "100+", area: "15M+ sq.ft" },
    },
    {
      title: "Energy & Power",
      description: "Power plants, substations, renewable energy facilities, and electrical infrastructure projects.",
      icon: Lightbulb,
      image: "/placeholder.svg?height=400&width=600",
      href: "/sectors",
      stats: { projects: "60+", capacity: "5000+ MW" },
    },
    {
      title: "Education & Healthcare",
      description: "Schools, colleges, hospitals, and healthcare facilities designed for community wellbeing.",
      icon: Users,
      image: "/placeholder.svg?height=400&width=600",
      href: "/sectors",
      stats: { institutions: "200+", beds: "10,000+" },
    },
    {
      title: "Government & Defense",
      description:
        "Government buildings, defense installations, and public sector infrastructure with high security standards.",
      icon: Shield,
      image: "/placeholder.svg?height=400&width=600",
      href: "/sectors",
      stats: { projects: "80+", states: "15+" },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Industry Sectors"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Industry Sectors We Serve</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Specialized construction and infrastructure solutions across diverse industrial sectors, from urban
              development to advanced technology facilities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Building Excellence Across Industries</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With decades of experience across multiple sectors, Durabuild brings specialized expertise, innovative
              solutions, and unwavering commitment to quality in every project we undertake. Our sector-specific
              approach ensures that we understand the unique challenges and requirements of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <Link href={sector.href}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/90 flex items-center justify-center mb-2">
                        <sector.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.description}</p>
                    <div className="flex gap-4 text-xs">
                      {Object.entries(sector.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="font-bold text-primary">{value}</p>
                          <p className="text-muted-foreground capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Durabuild for sector-specific expertise and end-to-end construction solutions
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
