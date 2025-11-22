"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, School, CheckCircle2, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ConstructionServicesPage() {
  return (
    <>
      <SiteNavbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.4]">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Construction Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Residential, commercial & industrial buildings with modern architecture and quality materials
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">500+</div>
              <p className="text-lg text-white/80">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">25M+</div>
              <p className="text-lg text-white/80">Sq.ft Built</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">98%</div>
              <p className="text-lg text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">15+</div>
              <p className="text-lg text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Complete Construction Solutions</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              From residential homes to large-scale industrial complexes, we provide end-to-end construction services
              with precision, quality, and timely delivery.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Residential Building</h3>
                <p className="text-sm text-muted-foreground">Houses, villas, duplex, apartments with modern design</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Commercial Building</h3>
                <p className="text-sm text-muted-foreground">Offices, malls, showrooms, retail spaces</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Industrial Construction</h3>
                <p className="text-sm text-muted-foreground">Factories, warehouses, godowns, storage facilities</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <School className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Institutional Buildings</h3>
                <p className="text-sm text-muted-foreground">Schools, colleges, hospitals, public buildings</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Boundary Wall</h3>
                <p className="text-sm text-muted-foreground">
                  Compound walls, security fencing, perimeter construction
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Interior & Exterior</h3>
                <p className="text-sm text-muted-foreground">Complete civil works, finishing, and painting</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Turnkey Projects</h3>
                <p className="text-sm text-muted-foreground">Complete project execution from start to finish</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">High-rise Structures</h3>
                <p className="text-sm text-muted-foreground">Multi-story buildings with advanced engineering</p>
              </CardContent>
            </Card>
          </div>

          {/* Construction Process Section */}
          <div className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Construction Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Site Preparation & Foundation</h4>
                    <p className="text-muted-foreground">
                      Land survey, soil testing, excavation, and laying strong foundation with quality materials
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Structural Construction</h4>
                    <p className="text-muted-foreground">
                      RCC column, beam, slab work with high-grade concrete and steel reinforcement
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Finishing & Handover</h4>
                    <p className="text-muted-foreground">
                      Interior/exterior work, painting, flooring, electrical, plumbing, and quality inspection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Case Study</h3>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-96">
                  <Image src="/modern-commercial-building-construction-site-with-.jpg" alt="Skyline Corporate Tower" fill className="object-cover" />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Skyline Corporate Tower</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A 12-story commercial complex built in just 18 months with advanced construction techniques,
                    featuring modern amenities, sustainable design, and Grade-A office spaces.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Duration</p>
                      <p className="text-lg font-bold">18 Months</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Built-up Area</p>
                      <p className="text-lg font-bold">2.5 Lakh Sq.ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Type</p>
                      <p className="text-lg font-bold">Commercial</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-bold">Chandigarh</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Construction Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/high-rise-residential-apartment-complex-under-cons.jpg"
                  alt="High-rise Residential"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg">High-rise Residential Complex</p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/modern-commercial-office-tower-glass-facade.jpg"
                  alt="Commercial Tower"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg">Modern Commercial Tower</p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/industrial-warehouse-factory-construction.jpg"
                  alt="Industrial Warehouse"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg">Logistics and Industrial Hub</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Durabuild for Construction?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    ISI marked materials, experienced engineers, and strict quality control at every stage
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Timely Delivery</h4>
                  <p className="text-muted-foreground">
                    Proven track record of completing projects on time with detailed planning and execution
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Cost Efficiency</h4>
                  <p className="text-muted-foreground">
                    Transparent pricing, optimized material usage, and value engineering to stay within budget
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Safety First</h4>
                  <p className="text-muted-foreground">
                    Comprehensive safety protocols, trained workforce, and regular safety audits
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team for consultation and detailed quotation
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
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
