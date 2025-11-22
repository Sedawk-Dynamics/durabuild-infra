"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Route,
  Paintbrush,
  Hammer,
  Users,
  ArrowRight,
  Play,
  CheckCircle2,
  Wrench,
  Zap,
  HardHat,
  PenTool,
  Cog,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ServicesPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <PageWrapper>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.4]">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and infrastructure solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Construction & Infrastructure Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Durabuild Infra Build Pvt. Ltd. is a multi-sector infrastructure and construction company offering
                end-to-end solutions for all your construction needs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/services/construction-services" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Construction Services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Construction Services</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Residential, commercial, industrial buildings, and interior/exterior civil works
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/infrastructure-development" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop"
                    alt="Infrastructure Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Route className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Infrastructure Development</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Roads, bridges, drainage systems, highways, and government infrastructure projects
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/material-supply" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                    alt="Material Supply"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Hammer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Material Supply Services</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cement, steel, sand, aggregate, bricks, putty, paints, and ready-mix materials
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/architecture-planning" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                    alt="Architecture & Planning"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Architecture & Planning</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    2D/3D design, floor plans, elevations, interior design, and BOQ preparation
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/engineering-services" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                    alt="Engineering Services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Engineering Services</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Civil, electrical, plumbing, mechanical fabrication, and steel structure work
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/renovation-maintenance" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1562259929-4940e02ed7fe?q=80&w=2070&auto=format&fit=crop"
                    alt="Renovation & Maintenance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Renovation & Maintenance</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    House/office renovation, painting, waterproofing, and repair services
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/labour-workforce" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
                    alt="Labour & Workforce"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Labour & Workforce</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Skilled/unskilled labour, carpenters, electricians, masons, and site supervisors
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/electrical-technical" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
                    alt="Electrical & Technical"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Electrical & Technical</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    House wiring, industrial wiring, solar panel installation, and electrical fitting
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/project-management" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/team-collaboration-construction.avif"
                    alt="Project Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <HardHat className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Project Management</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Supervision, cost estimation, material management, and quality assurance
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/roads-bridges" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop"
                    alt="Roads & Bridges"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Cog className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Roads, Bridges & Heavy Projects</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Village roads, urban development, bridges, culverts, and paver block roads
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/interior-exterior" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/professional-construction-team-reviewing-blueprint.jpg"
                    alt="Interior & Exterior Work"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Interior & Exterior Work</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    False ceiling, modular kitchen, POP, texture, wallpaper, wooden, and glass work
                  </p>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Complete Solution for All Construction Needs</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            From planning to completion, we provide comprehensive construction and infrastructure solutions with quality
            assurance, professional expertise, and timely delivery.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            <span className="px-4 py-2 bg-background rounded-full font-medium">Construction</span>
            <span className="px-4 py-2 bg-background rounded-full font-medium">Infrastructure</span>
            <span className="px-4 py-2 bg-background rounded-full font-medium">Material Supply</span>
            <span className="px-4 py-2 bg-background rounded-full font-medium">Architecture</span>
            <span className="px-4 py-2 bg-background rounded-full font-medium">Engineering</span>
            <span className="px-4 py-2 bg-background rounded-full font-medium">Project Management</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/civil-construction" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/modern-construction-building-with-workers-and-equi.jpg"
                    alt="Civil Construction"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Civil Construction</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Residential, commercial & industrial buildings with modern architecture and quality materials.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>High-rise structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Turnkey projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Modern complexes</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/infrastructure-development" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/modern-construction-site-with-steel-framework-and-.jpg"
                    alt="Infrastructure Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Route className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Infrastructure Development</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Roads, bridges, highways and urban development projects for modern India.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Roads & highways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Government projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Urban development</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/interior-exterior" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/professional-construction-team-reviewing-blueprint.jpg"
                    alt="Interior & Exterior Works"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Paintbrush className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Interior & Exterior Works</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Complete painting, plastering, POP, false ceiling, and renovation services.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Interior design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Painting & plastering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Renovation works</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/construction-materials" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/aerial-view-of-modern-construction-site-with-build.jpg"
                    alt="Construction Materials"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Hammer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Construction Materials</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Premium quality cement, steel, putty, paints, and finishing materials supply.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Cement & steel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Paints & tiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Ready-mix concrete</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/project-management" className="group">
              <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/team-collaboration-construction.avif"
                    alt="Project Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 rounded-lg bg-[#c9a961] flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Project Management</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    End-to-end project execution with planning, estimation, and quality control.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Cost estimation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Site supervision</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-[#c9a961] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#0a3d3d] rounded-2xl overflow-hidden">
            <div className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Excellence in Every Project
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                From groundbreaking to completion, we bring precision, expertise, and innovation to every construction
                project. Our commitment to quality ensures structures that stand the test of time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a961] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">15+ Years of Experience</h4>
                    <p className="text-white/70 text-sm">Delivering excellence across 100+ projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a961] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Certified Professionals</h4>
                    <p className="text-white/70 text-sm">Expert engineers and skilled workforce</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a961] flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Quality Assurance</h4>
                    <p className="text-white/70 text-sm">Premium materials and rigorous testing</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8954e] text-white" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="relative h-[600px] lg:h-auto">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                controls={videoPlaying}
                poster="/aerial-view-of-modern-construction-site-with-build.jpg"
                onClick={() => setVideoPlaying(true)}
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
              </video>
              {!videoPlaying && (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors group"
                >
                  <div className="w-20 h-20 rounded-full bg-[#c9a961] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to deliver projects on time and within budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/professional-construction-team-reviewing-blueprint.jpg"
                  alt="Planning & Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Planning & Design</h3>
              <p className="text-muted-foreground text-sm">Detailed planning and architectural design consultation</p>
            </div>
            <div className="text-center group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/modern-construction-site-with-steel-framework-and-.jpg"
                  alt="Site Preparation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Site Preparation</h3>
              <p className="text-muted-foreground text-sm">Ground preparation and foundation work</p>
            </div>
            <div className="text-center group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/modern-construction-building-with-workers-and-equi.jpg"
                  alt="Construction"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Construction</h3>
              <p className="text-muted-foreground text-sm">Building with precision and quality materials</p>
            </div>
            <div className="text-center group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/aerial-view-of-modern-construction-site-with-build.jpg"
                  alt="Handover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Check & Handover</h3>
              <p className="text-muted-foreground text-sm">Final inspection and project delivery</p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and detailed project quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/#projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
