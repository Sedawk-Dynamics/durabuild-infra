"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Route, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mega-menu-infra-projects.jpg"
            alt="Transportation Infrastructure"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Transportation Infrastructure</h1>
          <p className="text-xl text-white/90 max-w-2xl">Connecting communities and enabling economic growth</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Route className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Building India's Transportation Network</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Durabuild specializes in large-scale transportation infrastructure projects including highways,
              expressways, bridges, flyovers, and metro systems. Our expertise in complex civil engineering ensures
              reliable, safe, and efficient transportation networks that connect cities and regions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Types</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Highway and expressway construction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Bridge and flyover development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Metro rail infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Road widening and upgrades</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quality Standards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>IRC and MORT&H compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced construction techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Safety-first approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Environmental protection measures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Engineering Excellence in Transportation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our transportation projects are built to withstand heavy traffic loads, extreme weather conditions, and
                the test of time. We combine engineering excellence with efficient project management to deliver
                transportation infrastructure that drives economic development and improves connectivity.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
