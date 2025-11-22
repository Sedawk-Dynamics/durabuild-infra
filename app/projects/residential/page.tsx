"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, Users, Calendar } from "lucide-react"

export default function ResidentialProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mega-menu-residential.jpg"
            alt="Residential Developments"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Residential Developments</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Modern housing complexes and luxury apartments designed for comfortable living with world-class amenities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Creating Dream Homes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Durabuild, we specialize in creating residential spaces that combine comfort, functionality, and modern
              aesthetics. Our residential projects range from affordable housing complexes to luxury apartments, each
              designed with meticulous attention to detail and quality construction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that a home is more than just four walls—it's where memories are made, families grow, and
              dreams take shape. That's why we focus on creating living spaces that enhance quality of life through
              thoughtful design, premium materials, and world-class amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Residential Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Housing</h3>
                <p className="text-sm text-muted-foreground">
                  Quality homes within reach for first-time homebuyers and young families
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Luxury Apartments</h3>
                <p className="text-sm text-muted-foreground">
                  Premium living spaces with high-end finishes and exclusive amenities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gated Communities</h3>
                <p className="text-sm text-muted-foreground">
                  Secure residential complexes with community facilities and green spaces
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Homes</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized home construction tailored to your unique requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Residential Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, img: "/modern-residential-apartment-complex-exterior-view.jpg" },
              { id: 2, img: "/luxury-high-rise-residential-building-with-glass-f.jpg" },
              { id: 3, img: "/contemporary-housing-society-with-landscaped-garde.jpg" },
              { id: 4, img: "/elegant-residential-towers-with-swimming-pool-amen.jpg" },
              { id: 5, img: "/modern-gated-community-residential-development-aer.jpg" },
              { id: 6, img: "/premium-residential-building-with-balconies-and-pa.jpg" },
            ].map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={`Residential Project ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Paradise Heights Phase {item.id}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Modern 3-4 BHK apartments with premium amenities</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.id % 2 === 0 ? "Completed" : "Ongoing"}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {40 + item.id * 10} Units
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to explore our residential projects and find the perfect home for your family
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
