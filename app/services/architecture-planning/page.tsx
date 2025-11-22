"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, Layout, Home, FileText, Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArchitecturePlanningPage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/professional-construction-team-reviewing-blueprint.jpg"
            alt="Architecture & Planning"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Architecture & Planning Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional architectural design, 2D/3D planning, and structural engineering solutions
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Design Excellence in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">800+</div>
              <p className="text-lg text-white/80">Designs Created</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">50+</div>
              <p className="text-lg text-white/80">Architects & Planners</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">100%</div>
              <p className="text-lg text-white/80">Client Approval Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">3D</div>
              <p className="text-lg text-white/80">Visualization</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Design Your Dream Space</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Expert architects and planners to bring your vision to life with innovative designs and practical
              solutions
            </p>
          </div>

          <div className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8">Comprehensive Architecture Services</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Conceptual Design & Planning</h4>
                  <p className="text-muted-foreground">
                    We begin with understanding your vision, site analysis, and developing initial concepts that blend
                    aesthetics with functionality. Our architects create multiple design options for you to choose from.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">3D Visualization & Walkthroughs</h4>
                  <p className="text-muted-foreground">
                    Experience your future space before construction begins with photorealistic 3D renders, virtual
                    walkthroughs, and detailed visualizations that help you make informed decisions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Working Drawings & Documentation</h4>
                  <p className="text-muted-foreground">
                    Complete set of technical drawings including floor plans, elevations, sections, detailed drawings,
                    and specifications required for approval and construction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Architectural Design</h3>
                <p className="text-sm text-muted-foreground">Creative and functional building designs</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">2D/3D Building Planning</h3>
                <p className="text-sm text-muted-foreground">Detailed 3D visualization of your project</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Floor Plans & Elevations</h3>
                <p className="text-sm text-muted-foreground">Comprehensive floor layouts and elevations</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Interior Design</h3>
                <p className="text-sm text-muted-foreground">Aesthetic and functional interior spaces</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Structure Designing</h3>
                <p className="text-sm text-muted-foreground">Structural engineering and load calculations</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Estimate & BOQ Preparation</h3>
                <p className="text-sm text-muted-foreground">Detailed cost estimation and bill of quantities</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Design Case Study</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card className="overflow-hidden mb-4">
                  <div className="relative h-64">
                    <Image src="/modern-residential-villa-exterior-architectural-de.jpg" alt="Before Design" fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-center font-semibold">Initial Concept</p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="overflow-hidden mb-4">
                  <div className="relative h-64">
                    <Image src="/luxury-modern-villa-with-pool-3d-architectural-vis.jpg" alt="After Design" fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-center font-semibold">Final 3D Design</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">Harmony Villa - Chandigarh</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A contemporary 5-bedroom villa design that seamlessly blends modern architecture with natural
                  elements. The design maximizes natural light, ventilation, and creates fluid indoor-outdoor living
                  spaces.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Plot Size</p>
                    <p className="text-lg font-bold">450 Sq.yd</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Built-up Area</p>
                    <p className="text-lg font-bold">5,500 Sq.ft</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Design Time</p>
                    <p className="text-lg font-bold">6 Weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Design Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Understanding requirements" },
                { step: "2", title: "Concept", desc: "Initial design ideas" },
                { step: "3", title: "Design", desc: "Detailed planning" },
                { step: "4", title: "Revision", desc: "Refinement & approval" },
                { step: "5", title: "Documentation", desc: "Final drawings" },
              ].map((phase) => (
                <Card key={phase.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                      {phase.step}
                    </div>
                    <h4 className="font-bold mb-2">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Design Your Project?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert architects and planners
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
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
