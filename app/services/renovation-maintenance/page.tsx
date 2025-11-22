"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Paintbrush, Droplet, Wrench, Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RenovationMaintenancePage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior-design-painting-and-renovation-work.jpg"
            alt="Renovation & Maintenance"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Renovation & Maintenance Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            House/office renovation, painting, plaster, putty, waterproofing, and repair services
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">800+</div>
              <div className="text-sm md:text-base text-white/80">Renovations Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">95%</div>
              <div className="text-sm md:text-base text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">15 Days</div>
              <div className="text-sm md:text-base text-white/80">Avg. Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">10 Yrs</div>
              <div className="text-sm md:text-base text-white/80">Warranty Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Transform Your Space</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Professional renovation and maintenance services to refresh and restore your property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">House Renovation</h3>
                <p className="text-sm text-muted-foreground">Complete home renovation and remodeling</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office Renovation</h3>
                <p className="text-sm text-muted-foreground">Corporate space renovation and redesign</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Paintbrush className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Painting, Plaster, Putty Work</h3>
                <p className="text-sm text-muted-foreground">Interior and exterior painting services</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Waterproofing Solutions</h3>
                <p className="text-sm text-muted-foreground">Roof, terrace, and bathroom waterproofing</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Repair & Maintenance Work</h3>
                <p className="text-sm text-muted-foreground">Regular maintenance and repair services</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Before & After Transformations</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image src="/old-worn-out-living-room-before-renovation-damaged.jpg" alt="Before Renovation" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    Before
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Living Room - Before</h3>
                <p className="text-sm text-muted-foreground">Old damaged walls, peeling paint, and outdated fixtures</p>
              </div>
              <div>
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image src="/beautiful-modern-renovated-living-room-fresh-paint.jpg" alt="After Renovation" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                    After
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Living Room - After</h3>
                <p className="text-sm text-muted-foreground">
                  Modern design, fresh paint, new lighting, and elegant finishes
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/kitchen-renovation-modern-cabinets-granite-counter.jpg"
                  alt="Kitchen Renovation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Kitchen Remodeling</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/bathroom-renovation-modern-tiles-fixtures-waterpro.jpg"
                  alt="Bathroom Renovation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Bathroom Upgrade</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden group">
                <Image
                  src="/office-interior-renovation-modern-workspace-false-.jpg"
                  alt="Office Renovation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Office Makeover</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Study: Complete Home Renovation</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image src="/complete-home-renovation-modern-interior-design-be.jpg" alt="Home Renovation" fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Exterior Painting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Waterproofing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#0a3d3d] text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">Project Details</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Complete renovation of a 2500 sq.ft. residential house including painting, waterproofing, electrical
                    upgrades, and interior redesign.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">₹18 Lakhs</div>
                      <div className="text-sm text-white/70">Total Investment</div>
                    </div>
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">45 Days</div>
                      <div className="text-sm text-white/70">Completion Time</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Complete Waterproofing</h4>
                      <p className="text-sm text-muted-foreground">
                        Eliminated all leakage issues with advanced waterproofing solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Premium Painting</h4>
                      <p className="text-sm text-muted-foreground">
                        High-quality Asian Paints with 8-year warranty on all surfaces
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Modern Interiors</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete interior redesign with false ceiling, lighting, and fixtures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Renovate?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a site visit and get a free renovation estimate
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
              <Link href="/contact">Book Site Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
