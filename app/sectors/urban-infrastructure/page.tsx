"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function UrbanInfrastructurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mega-menu-infrastructure.jpg"
            alt="Urban Infrastructure"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Urban Infrastructure</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Building modern cities with comprehensive infrastructure solutions
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Urban Development</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Durabuild specializes in creating modern urban infrastructure that supports sustainable city development.
              Our projects encompass roads, drainage systems, public spaces, and civic infrastructure designed to meet
              the evolving needs of smart cities across India.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Road network development and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Drainage and sewage systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Public spaces and civic amenities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Smart city infrastructure</span>
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
                      <span>Sustainable and eco-friendly solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Compliance with government standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Long-lasting durable infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Timely project completion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Durabuild for Urban Infrastructure?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With extensive experience in urban development projects, we bring technical expertise, innovative
                solutions, and commitment to quality that ensures your city infrastructure projects are completed to the
                highest standards. Our team works closely with government authorities and urban planners to deliver
                infrastructure that serves communities for generations.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
