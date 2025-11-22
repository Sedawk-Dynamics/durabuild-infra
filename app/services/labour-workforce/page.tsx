"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, HardHat, Wrench, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LabourWorkforcePage() {
  return (
    <>
      <SiteNavbar />

      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-construction-building-with-workers-and-equi.jpg"
            alt="Labour & Workforce"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Labour & Workforce Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Skilled & unskilled labour supply for all types of construction projects
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Professional Workforce Supply</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Experienced and trained construction workers for your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Skilled Labour</h3>
                <p className="text-sm text-muted-foreground">Trained construction workers</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Unskilled Labour</h3>
                <p className="text-sm text-muted-foreground">Helper and support staff</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Carpenter</h3>
                <p className="text-sm text-muted-foreground">Wood work specialists</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Electrician</h3>
                <p className="text-sm text-muted-foreground">Electrical installation experts</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Plumber</h3>
                <p className="text-sm text-muted-foreground">Plumbing work professionals</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Painter</h3>
                <p className="text-sm text-muted-foreground">Painting and finishing experts</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Mason (Raj Mistri)</h3>
                <p className="text-sm text-muted-foreground">Brick and concrete specialists</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Welder & Fabricator</h3>
                <p className="text-sm text-muted-foreground">Metal work professionals</p>
              </CardContent>
            </Card>

            <Card className="border-2 md:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Site Supervisor & Manager</h3>
                <p className="text-sm text-muted-foreground">Experienced supervisors for project management</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#0a3d3d] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Workforce for Your Project?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us for skilled and unskilled labour supply
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
              <Link href="/contact">Request Labour</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
