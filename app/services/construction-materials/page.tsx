import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hammer, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"

export default function ConstructionMaterialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction-materials-cement-steel-warehouse.jpg"
            alt="Construction Materials"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Construction Materials</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Premium quality cement, steel, putty, paints, and finishing materials supply
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Quality Materials for Every Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Durabuild, we supply premium construction materials from trusted brands to ensure your projects are
                built to last. From structural essentials like cement and steel to finishing materials like paints and
                tiles, we provide everything you need under one roof.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our materials meet the highest quality standards and are sourced from certified manufacturers. Whether
                you're building a home, commercial space, or large infrastructure project, we have the right materials
                at competitive prices.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/construction-materials-warehouse-with-cement-bags-.jpg"
                alt="Construction materials warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cement & Steel</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium quality cement and steel from trusted manufacturers for strong foundations and structures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Paints & Tiles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wide selection of paints, tiles, and finishing materials for beautiful interiors and exteriors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ready-Mix Concrete</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh ready-mix concrete delivered on-site with consistent quality and strength specifications.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Construction Material Range</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Material Supply Services (कंस्ट्रक्शन मटेरियल सप्लाई)
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Cement Supply (OPC & PPC)</li>
                  <li>• Steel (TMT Bars)</li>
                  <li>• Sand, Aggregate, Stone</li>
                  <li>• Concrete & Ready-Mix Material</li>
                  <li>• Bricks, Blocks (AAC, fly ash)</li>
                  <li>• Putty, Paint & Construction Chemicals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Finishing Materials
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Interior and exterior paints</li>
                  <li>• Wall putty and primers</li>
                  <li>• Ceramic and vitrified tiles</li>
                  <li>• Marble and granite stones</li>
                  <li>• Waterproofing compounds</li>
                  <li>• Adhesives and sealants</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Building Components
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Bricks and blocks (AAC, fly ash)</li>
                  <li>• Gypsum boards and POP</li>
                  <li>• Doors and windows</li>
                  <li>• Plumbing fittings and pipes</li>
                  <li>• Electrical wiring materials</li>
                  <li>• Hardware and fasteners</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Specialty Products
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Adhesives and sealants</li>
                  <li>• Insulation materials</li>
                  <li>• False ceiling components</li>
                  <li>• Safety equipment</li>
                  <li>• Construction tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Construction Materials Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium quality materials for every stage of your construction project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                alt="Cement and concrete materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Cement & Concrete</h3>
                  <p className="text-white/80 text-sm">Premium quality structural materials</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop"
                alt="Steel and TMT bars materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Steel & TMT Bars</h3>
                  <p className="text-white/80 text-sm">High-grade reinforcement materials</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1631878938523-5f896c223975?q=80&w=2032&auto=format&fit=crop"
                alt="Paint materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Paints & Finishes</h3>
                  <p className="text-white/80 text-sm">Wide range of colors and textures</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Tile materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Tiles & Flooring</h3>
                  <p className="text-white/80 text-sm">Ceramic, vitrified, and marble options</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2069&auto=format&fit=crop"
                alt="Brick materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Bricks & Blocks</h3>
                  <p className="text-white/80 text-sm">AAC blocks and red bricks</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2080&auto=format&fit=crop"
                alt="Construction equipment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Hardware & Tools</h3>
                  <p className="text-white/80 text-sm">Complete range of construction hardware</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Materials, Reliable Delivery</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our extensive network of suppliers and efficient logistics ensure that your materials arrive on time and
                in perfect condition. We maintain large inventories to meet immediate project needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">All materials tested and certified to standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Bulk Discounts</h4>
                    <p className="text-muted-foreground text-sm">Competitive pricing for large orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Expert Guidance</h4>
                    <p className="text-muted-foreground text-sm">Technical support for material selection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Source Materials from Durabuild?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted quality, competitive pricing, and reliable delivery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Certified Quality</h3>
                <p className="text-muted-foreground">
                  All materials sourced from ISI certified manufacturers with quality guarantees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Best prices in the market with bulk order discounts and flexible payment terms
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  On-time delivery to your site with proper handling and storage recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contact Us for Material Quotes</h2>
              <p className="text-lg text-muted-foreground">
                Get competitive pricing on all construction materials with bulk order discounts
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone Orders</h3>
                  <p className="text-muted-foreground mb-4">Call us for material inquiries</p>
                  <a href="tel:+916399015656" className="text-lg font-semibold text-primary hover:underline">
                    +91-6399015656
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Quotes</h3>
                  <p className="text-muted-foreground mb-4">Send us your material list</p>
                  <a href="mailto:support@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                    support@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Construction Materials?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us today for competitive quotes on all your construction material requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
