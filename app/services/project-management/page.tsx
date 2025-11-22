"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle2, Mail, Phone } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero Section with Video */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-50"
            poster="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Project Management</h1>
          <p className="text-xl text-white/90 max-w-2xl">Complete project oversight from planning to execution</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">End-to-End Project Execution</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Durabuild provides comprehensive project management services that ensure your construction projects are
              completed on time, within budget, and to the highest quality standards. Our experienced project managers
              oversee every aspect of execution.
            </p>

            <div className="bg-muted/30 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Project Management & Consultancy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Management Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Project Supervision & oversight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cost Estimation & budgeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Material Management & procurement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Turnkey Infrastructure Projects</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">Consultancy Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quality Assurance & Safety Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Architecture & Planning Services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2D/3D Building Planning & design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Estimate & BOQ Preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Labour & Workforce Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Skilled & Unskilled Labour Supply</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Carpenter, Electrician, Plumber, Painter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mason (Raj Mistri)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Site Supervisor & Manager Supply</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Transparent communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Risk mitigation strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Resource optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Timely project delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Professional Project Leadership</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our project management approach combines technical expertise with proven methodologies to deliver
                successful outcomes. We handle the complexity so you can focus on your business goals while we ensure
                your project succeeds.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Project Management Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring project success from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                    alt="Project planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-muted-foreground text-sm">Detailed project scope, timeline, and resource planning</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Project execution"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-muted-foreground text-sm">Coordinated implementation with quality oversight</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="Project monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                <p className="text-muted-foreground text-sm">Real-time tracking and performance measurement</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                    alt="Project completion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-muted-foreground text-sm">Final handover with complete documentation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Successfully Managed Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A portfolio of projects delivered on time, within budget, and exceeding expectations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Commercial project management"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Commercial Complex</h3>
                  <p className="text-white/80 text-sm">Delivered 2 months ahead of schedule</p>
                </div>
              </div>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                alt="Residential project management"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Residential Township</h3>
                  <p className="text-white/80 text-sm">500+ units completed successfully</p>
                </div>
              </div>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                alt="Infrastructure project management"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Bridge Construction</h3>
                  <p className="text-white/80 text-sm">Complex engineering project delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Video Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Management Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our project management approach delivers successful outcomes
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Need Expert Project Management?</h2>
              <p className="text-lg text-muted-foreground">
                Contact our project management team for professional oversight and successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Inquiry</h3>
                  <p className="text-muted-foreground mb-4">Call for project management consultation</p>
                  <a href="tel:+919856655557" className="text-lg font-semibold text-primary hover:underline">
                    +91-9856655557
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Consultation</h3>
                  <p className="text-muted-foreground mb-4">Send your project details for assessment</p>
                  <a href="mailto:info@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                    info@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Let's Manage Your Next Project</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with experienced project managers who ensure successful delivery
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
