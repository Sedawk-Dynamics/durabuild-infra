"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Paintbrush, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/mega-menu-water.jpg" alt="Water Infrastructure" fill className="object-cover brightness-50" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Water Infrastructure</h1>
          <p className="text-xl text-white/90 max-w-2xl">Building sustainable water management systems</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Paintbrush className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Water Solutions</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Durabuild delivers complete water infrastructure solutions including treatment plants, reservoirs,
              distribution networks, and sewage systems. Our projects ensure reliable water supply and effective
              wastewater management for sustainable communities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Infrastructure Types</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Water treatment plants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Reservoirs and storage tanks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Distribution pipeline networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sewage treatment facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sustainable design practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Water conservation technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Compliance with environmental norms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Long-term reliability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Water Security for Growing Communities</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Access to clean water is fundamental to community health and development. Our water infrastructure
                projects are designed with sustainability, efficiency, and future growth in mind, ensuring reliable
                water services for generations to come.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Water Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
