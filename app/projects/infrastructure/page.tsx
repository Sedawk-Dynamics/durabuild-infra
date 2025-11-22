"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Route, Badge as Bridge, Construction, Zap } from "lucide-react"

export default function InfrastructureProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mega-menu-infra-projects.jpg"
            alt="Infrastructure Works"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Infrastructure Works</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Large-scale infrastructure projects including roads, bridges, and government contracts that shape the
              future
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Nation Building Through Infrastructure</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our infrastructure division specializes in large-scale civil engineering projects that form the backbone
              of economic development. From highways and bridges to urban infrastructure, we deliver projects that
              connect communities and enable progress.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Working with government agencies and private developers, we bring technical expertise, project management
              excellence, and quality execution to infrastructure projects that stand the test of time and serve
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Infrastructure Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Roads & Highways</h3>
                <p className="text-sm text-muted-foreground">
                  National and state highway construction with modern standards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bridge className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bridges & Flyovers</h3>
                <p className="text-sm text-muted-foreground">Complex bridge construction and urban flyover projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Construction className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Urban Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Drainage, water supply, and civic infrastructure systems
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Government Contracts</h3>
                <p className="text-sm text-muted-foreground">Public sector projects with strict quality standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Infrastructure Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, img: "/highway-construction-four-lane-road-with-workers.jpg" },
              { id: 2, img: "/bridge-infrastructure-construction-steel-structure.jpg" },
              { id: 3, img: "/urban-flyover-elevated-road-infrastructure-project.jpg" },
              { id: 4, img: "/expressway-construction-heavy-machinery-equipment.jpg" },
              { id: 5, img: "/concrete-bridge-over-river-infrastructure-developm.jpg" },
              { id: 6, img: "/metro-rail-construction-elevated-track-urban-trans.jpg" },
            ].map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={`Infrastructure Project ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Highway Expansion Project {item.id}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Four-lane highway construction with modern safety features
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.id % 2 === 0 ? "Completed" : "Ongoing"}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {item.id * 5} KM
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
          <h2 className="text-4xl font-bold mb-6">Partner for Infrastructure Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect with our infrastructure team to discuss large-scale projects and development opportunities
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Infrastructure Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
