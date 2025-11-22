"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle2, Package, Truck, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MaterialSupplyPage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction-materials-warehouse-with-cement-bags-.jpg"
            alt="Material Supply"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Material Supply Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Premium quality cement, steel, sand, aggregate, bricks, putty, paints, and construction materials
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Supply Chain Excellence</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">50K+</div>
              <p className="text-lg text-white/80">Tons Supplied</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">1000+</div>
              <p className="text-lg text-white/80">Projects Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">24hrs</div>
              <p className="text-lg text-white/80">Delivery Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">100%</div>
              <p className="text-lg text-white/80">Quality Certified</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Quality Construction Materials</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              We supply premium quality construction materials from trusted brands to ensure your projects are built to
              last
            </p>
          </div>

          <div className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8">Why Choose Our Materials?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Package className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Genuine Products</h4>
                  <p className="text-muted-foreground">
                    All materials sourced directly from authorized manufacturers and dealers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Truck className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Timely Delivery</h4>
                  <p className="text-muted-foreground">
                    24-hour delivery service to your construction site anywhere in the region
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">ISI Certified</h4>
                  <p className="text-muted-foreground">
                    All products meet ISI standards and come with quality certifications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/cement-bags-stacked-in-warehouse-construction-mate.jpg" alt="Cement" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Cement Supply</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium grade cement from leading brands like UltraTech, ACC, Ambuja
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>OPC 43 & 53 Grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>PPC Cement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/steel-tmt-bars-rods-construction-site-reinforcemen.jpg" alt="Steel" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Steel & TMT Bars</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-grade reinforcement materials from TATA, JSW, Jindal
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fe 500, Fe 550 Grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>All sizes 8mm to 32mm</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/sand-aggregate-stone-gravel-construction-material-.jpg" alt="Sand and Aggregate" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sand, Aggregate, Stone</h3>
                <p className="text-sm text-muted-foreground mb-4">Premium quality construction aggregates</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>River sand, M-sand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>20mm, 40mm aggregate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/ready-mix-concrete-truck-pouring-construction-site.jpg" alt="Concrete" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Concrete & Ready-Mix</h3>
                <p className="text-sm text-muted-foreground mb-4">Fresh ready-mix concrete delivery</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>M15 to M40 grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom mix design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/red-clay-bricks-stacked-construction-material-maso.jpg" alt="Bricks" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Bricks & Blocks</h3>
                <p className="text-sm text-muted-foreground mb-4">Durable construction bricks and blocks</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Red clay bricks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>AAC blocks, fly ash bricks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src="/paint-buckets-colors-wall-putty-finishing-material.jpg" alt="Paints" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Putty, Paint & Chemicals</h3>
                <p className="text-sm text-muted-foreground mb-4">Wide range of colors and textures</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Asian, Berger, Nerolac</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Interior & exterior paints</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Material Supply Case Study</h3>
            <Card>
              <div className="grid md:grid-cols-2">
                <div className="relative h-96">
                  <Image
                    src="/large-construction-project-materials-delivery-truc.jpg"
                    alt="Township Project Material Supply"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Green Valley Township - Material Supply</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Complete material supply for a 300-unit residential township project. We delivered 5000 tons of
                    cement, 2000 tons of steel, and all finishing materials over 24 months with zero delays.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Material</p>
                      <p className="text-lg font-bold">12,000 Tons</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Duration</p>
                      <p className="text-lg font-bold">24 Months</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">On-time Delivery</p>
                      <p className="text-lg font-bold">100%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client Satisfaction</p>
                      <p className="text-lg font-bold">5 Stars</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Construction Materials?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us for bulk orders and delivery to your construction site
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
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
