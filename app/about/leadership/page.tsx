import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 py-24 pt-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0a3d3d] mb-4 text-balance">Leadership Team</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Our leadership team is united in their commitment to driving progress and excellence in every project we
            undertake.
          </p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
            <Image src="/mega-menu-leadership.jpg" alt="Leadership Team" fill className="object-cover" />
          </div>

          <Card className="border-2 border-[#c9a961]/20 mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0a3d3d] mb-6">Message from the Founder & CEO</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Durabuild Infra Build Pvt. Ltd., we believe that infrastructure is not just about building
                  structures, but about shaping the future. Since the inception of our company, our goal has been clear
                  – to deliver durable, sustainable, and innovative solutions that redefine the standards of
                  construction and infrastructure development in India.
                </p>
                <p>
                  Our journey is guided by a strong commitment to quality, integrity, and customer satisfaction. We
                  understand that every project we undertake carries the responsibility of trust, and we ensure that
                  trust is honored through excellence in execution.
                </p>
                <p>
                  With a dedicated team of professionals and the integration of modern technology, we aim to contribute
                  to nation-building by creating roads, bridges, buildings, and infrastructure that stand strong for
                  generations.
                </p>
                <p>
                  At Durabuild, we do not just construct — we create landmarks of trust and strength. I extend my
                  heartfelt gratitude to our clients, partners, and team members who continuously support and believe in
                  our vision. Together, we will keep building a stronger tomorrow.
                </p>
                <div className="mt-6">
                  <p className="font-bold text-[#0a3d3d]">A.K Singh</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">Durabuild Infra Build Pvt. Ltd.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-[#0a3d3d] mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">AK</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">A.K Singh</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Director</p>
                <p className="text-sm text-muted-foreground">
                  Leading the company's strategic vision and overseeing major project executions with decades of
                  industry experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">SD</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Sandhay</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Director</p>
                <p className="text-sm text-muted-foreground">
                  Expert in construction management and operations, ensuring quality delivery and client satisfaction
                  across all projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#c9a961] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-[#c9a961]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#c9a961]">VS</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Ms. Vezokholu Shijoh</h3>
                <p className="text-sm text-[#c9a961] font-medium mb-3">Manager</p>
                <p className="text-sm text-muted-foreground">
                  Managing day-to-day operations, client relations, and ensuring seamless project coordination and
                  execution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Join Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/why-durabuild">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
