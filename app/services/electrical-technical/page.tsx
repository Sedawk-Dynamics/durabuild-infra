"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Sun, Home, Factory, Phone, Mail, CheckCircle2, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElectricalTechnicalPage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-construction-site-with-steel-framework-and-.jpg"
            alt="Electrical & Technical"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Electrical & Technical Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            House wiring, industrial wiring, solar panel installation, and electrical fitting services
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a3d3d] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Electrical Excellence</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">2000+</div>
              <p className="text-lg text-white/80">Installations Done</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">50+</div>
              <p className="text-lg text-white/80">Certified Electricians</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">5MW</div>
              <p className="text-lg text-white/80">Solar Capacity Installed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c9a961] mb-2">Zero</div>
              <p className="text-lg text-white/80">Safety Incidents</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Complete Electrical Solutions</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Professional electrical installation, maintenance, and repair services for residential and commercial
              properties
            </p>
          </div>

          <div className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8">Comprehensive Electrical Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Safety First Approach
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  All our electricians are licensed, certified, and trained in the latest safety protocols. We use only
                  ISI-marked wires, MCBs, and electrical components to ensure complete safety.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Quality Guaranteed
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We provide 2-year warranty on all electrical installations and use premium brands like Havells,
                  Polycab, Finolex, and Anchor for complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">House Wiring</h3>
                <p className="text-sm text-muted-foreground mb-4">Complete residential electrical wiring</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>New construction wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rewiring & upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industrial Wiring</h3>
                <p className="text-sm text-muted-foreground mb-4">Heavy-duty industrial electrical systems</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Factory electrical setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>3-phase connections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Solar Panel Installation</h3>
                <p className="text-sm text-muted-foreground mb-4">Renewable energy solutions</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>On-grid & off-grid systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Government subsidy assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Electrical Fitting & Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">Installation and repair services</p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fan, light, switch fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>MCB, DB panel installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Solar Installation Case Study</h3>
            <Card>
              <div className="grid md:grid-cols-2">
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">500kW Rooftop Solar - Industrial Complex</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Designed and installed a 500kW rooftop solar system for a manufacturing facility, reducing their
                    electricity costs by 70%. The system generates 2000 units daily and has a payback period of just 4
                    years.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">System Capacity</p>
                      <p className="text-lg font-bold">500 kW</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Daily Generation</p>
                      <p className="text-lg font-bold">2000 Units</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Cost Savings</p>
                      <p className="text-lg font-bold">70%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Installation Time</p>
                      <p className="text-lg font-bold">45 Days</p>
                    </div>
                  </div>
                </CardContent>
                <div className="relative h-96">
                  <Image
                    src="/rooftop-solar-panels-installation-industrial-build.jpg"
                    alt="Solar Installation Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Electrical Services?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our certified electricians for installation and repair work
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
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
