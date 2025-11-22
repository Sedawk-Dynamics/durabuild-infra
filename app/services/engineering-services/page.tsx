"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Droplets, Factory, Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EngineeringServicesPage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-construction-site-with-steel-framework-and-.jpg"
            alt="Engineering Services"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Engineering Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Civil, electrical, plumbing, mechanical fabrication, and steel structure engineering
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">150+</div>
              <div className="text-sm md:text-base text-white/80">Expert Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">98%</div>
              <div className="text-sm md:text-base text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-2">25+</div>
              <div className="text-sm md:text-base text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Professional Engineering Solutions</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Comprehensive engineering services for all types of construction and infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Civil Engineering Works</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Structural design, foundation work, and site development
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Power distribution, wiring, and electrical installations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Plumbing Work</h3>
                <p className="text-sm text-muted-foreground mb-4">Water supply, drainage, and sanitation systems</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mechanical Fabrication</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom metal fabrication and mechanical installations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Welding & Steel Structure</h3>
                <p className="text-sm text-muted-foreground mb-4">Steel frame construction and welding services</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Engineering Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/civil-engineering-structural-design-foundation-wor.jpg"
                  alt="Civil Engineering Work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Civil Engineering</h3>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/electrical-engineering-power-distribution-panel-wi.jpg"
                  alt="Electrical Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Electrical Systems</h3>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/plumbing-pipes-water-supply-drainage-sanitation-sy.jpg"
                  alt="Plumbing Work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Plumbing Solutions</h3>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/steel-structure-fabrication-welding-metal-framewor.jpg"
                  alt="Steel Structure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Steel Structures</h3>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/mechanical-fabrication-custom-metal-work-industria.jpg"
                  alt="Mechanical Fabrication"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">Mechanical Fabrication</h3>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image
                  src="/hvac-ventilation-air-conditioning-duct-installatio.jpg"
                  alt="HVAC Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">HVAC Systems</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Case Study: Commercial Complex Engineering
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/modern-commercial-building-engineering-electrical-.jpg"
                    alt="Commercial Complex Engineering"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="relative h-[120px] flex-1 rounded-lg overflow-hidden">
                    <Image src="/electrical-panel-room-power-distribution-commercia.jpg" alt="Electrical Room" fill className="object-cover" />
                  </div>
                  <div className="relative h-[120px] flex-1 rounded-lg overflow-hidden">
                    <Image src="/plumbing-mechanical-room-pipes-valves-commercial-b.jpg" alt="Mechanical Room" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#0a3d3d] text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Complete engineering services for a 5-floor commercial complex including civil, electrical,
                    plumbing, HVAC, and fire safety systems.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">₹2.8 Cr</div>
                      <div className="text-sm text-white/70">Project Value</div>
                    </div>
                    <div>
                      <div className="text-[#c9a961] font-bold text-2xl">18 Months</div>
                      <div className="text-sm text-white/70">Completion Time</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Advanced MEP Systems</h4>
                      <p className="text-sm text-muted-foreground">
                        Integrated mechanical, electrical, and plumbing systems with BMS automation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Energy Efficiency</h4>
                      <p className="text-sm text-muted-foreground">
                        30% reduction in energy consumption through smart engineering solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Safety Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Full compliance with NBC fire safety and structural codes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Engineering Services?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our expert engineers for your project requirements
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
              <Link href="/contact">Contact Engineers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
