"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/children-in-classroom-education-learning.jpg"
            alt="Education"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Education Initiatives</h1>
          <p className="text-xl text-white/90 max-w-2xl">Supporting quality education for underprivileged children</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Investing in Future Generations</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Durabuild is committed to supporting quality education for children from underprivileged backgrounds.
              Through infrastructure development, scholarships, and learning resources, we help create opportunities for
              children to access better education and brighter futures.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Initiatives</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>School infrastructure development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scholarship programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Learning materials and resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Digital literacy programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Thousands of students supported</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Improved learning environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Higher enrollment rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Reduced dropout rates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Education is the Foundation of Progress</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe education is the key to breaking the cycle of poverty and creating lasting change. Our
                education initiatives focus on creating better learning environments, providing financial support, and
                ensuring every child has access to quality education regardless of their economic background.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Support Our Cause</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
