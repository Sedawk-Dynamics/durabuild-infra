"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Route, Badge as Bridge, Construction, Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RoadsBridgesPage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/mega-menu-water.jpg" alt="Roads & Bridges" fill className="object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Roads, Bridges & Heavy Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Village roads, urban development, bridges, culverts, drains, and paver block roads
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">250+ Km</div>
              <div className="text-sm md:text-base text-white/80">Roads Constructed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">85+</div>
              <div className="text-sm md:text-base text-white/80">Bridge Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">₹500+ Cr</div>
              <div className="text-sm md:text-base text-white/80">Projects Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">20+</div>
              <div className="text-sm md:text-base text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Infrastructure Development Experts</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Large-scale road and bridge construction projects for government and private sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Village Road Construction</h3>
                <p className="text-sm text-muted-foreground">Rural connectivity and village road development</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Urban Road Development</h3>
                <p className="text-sm text-muted-foreground">City roads, streets, and urban infrastructure</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bridge className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bridge Projects</h3>
                <p className="text-sm text-muted-foreground">Small and large bridge construction</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Construction className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Culverts & Drains</h3>
                <p className="text-sm text-muted-foreground">Drainage systems and water management</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pavements</h3>
                <p className="text-sm text-muted-foreground">Footpaths, dividers, and street construction</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Paver Block Road</h3>
                <p className="text-sm text-muted-foreground">Interlocking paver block roads</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Infrastructure Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Highway Construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">4-Lane Highway Project</h3>
                    <p className="text-white/90">45 km of modern highway construction</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Bridge Construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">Major Bridge Project</h3>
                    <p className="text-white/90">120-meter span river bridge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Village Road"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Village Connectivity</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Culvert Construction"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Drainage Systems</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Paver Block Road"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Paver Block Roads</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Study: Urban Highway Development</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Urban Highway Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Road Construction"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Street Lighting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#0a3d3d] text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    12 km urban highway with flyover, street lighting, drainage, and landscaping connecting major city
                    zones.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">₹85 Cr</div>
                      <div className="text-sm text-white/70">Project Value</div>
                    </div>
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">24 Months</div>
                      <div className="text-sm text-white/70">Duration</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">6-Lane Expressway Standard</h4>
                      <p className="text-sm text-muted-foreground">
                        High-capacity road with advanced pavement technology and 20-year design life
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Smart Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">
                        LED street lighting, CCTV surveillance, and automated traffic management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Sustainability Features</h4>
                      <p className="text-sm text-muted-foreground">
                        Rainwater harvesting pits, solar street lights, and green belt development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Plan Your Infrastructure Project</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us for road and bridge construction projects
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91-9855665557</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@durainfra.com</span>
              </div>
            </div>
            <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8954e] text-white" asChild>
              <Link href="/contact">Discuss Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
