"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Store, Briefcase, TrendingUp } from "lucide-react"

export default function CommercialProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mega-menu-commercial.jpg"
            alt="Commercial Buildings"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Commercial Buildings</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              State-of-the-art commercial spaces that combine functionality with aesthetic appeal for businesses to
              thrive
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Building Business Success</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our commercial construction expertise spans office complexes, retail spaces, shopping malls, and mixed-use
              developments. We create business environments that enhance productivity, attract customers, and provide
              long-term value for investors and occupants.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, we deliver commercial spaces that meet modern business needs with smart
              design, energy efficiency, and strategic location advantages. Our projects are built to support business
              growth and create lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Commercial Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                <p className="text-sm text-muted-foreground">
                  Modern workspaces designed for productivity and collaboration
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Retail Spaces</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic retail locations with high visibility and foot traffic
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Parks</h3>
                <p className="text-sm text-muted-foreground">Integrated business campuses with modern infrastructure</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mixed-Use Developments</h3>
                <p className="text-sm text-muted-foreground">
                  Versatile spaces combining commercial and residential uses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Commercial Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                title: "Business Hub Tower 1",
                status: "Ongoing",
              },
              {
                id: 2,
                image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2074&auto=format&fit=crop",
                title: "Business Hub Tower 2",
                status: "Completed",
              },
              {
                id: 3,
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
                title: "Business Hub Tower 3",
                status: "Completed",
                floors: 7,
              },
              {
                id: 4,
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop",
                title: "Business Hub Tower 4",
                status: "Ongoing",
                floors: 8,
              },
              {
                id: 5,
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2073&auto=format&fit=crop",
                title: "Business Hub Tower 5",
                status: "Completed",
                floors: 9,
              },
              {
                id: 6,
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
                title: "Business Hub Tower 6",
                status: "Ongoing",
                floors: 10,
              },
            ].map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Grade-A office space with modern amenities and parking
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{item.status}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {item.floors || item.id + 4} Floors
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
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Business Space</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us to create commercial spaces that drive business success and property value
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
