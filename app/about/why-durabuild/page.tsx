import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function WhyDurabuildPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 py-24 pt-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0a3d3d] mb-4 text-balance">Why Choose Durabuild?</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Quality, innovation, and trust are the pillars that make Durabuild the preferred choice for construction
            projects.
          </p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
            <Image src="/mega-menu-why-us.jpg" alt="Why Durabuild" fill className="object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Quality First Approach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We use only the best materials and advanced technology to ensure long-lasting and durable
                  construction. Every project undergoes rigorous quality checks at each stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">On-Time Delivery</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We value your time. Every project is planned with precision and completed within deadlines without
                  compromising on quality or safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Cost-Effective Solutions</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We provide competitive pricing without compromising on quality. Transparent quotations with no hidden
                  costs ensure you get the best value for your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Expert Team</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our engineers, architects, and skilled workforce bring years of expertise to deliver excellence in
                  every aspect of construction and infrastructure development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Innovative Technology</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  From smart project management to sustainable building methods, we adopt the latest practices and
                  technologies to stay ahead in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">End-to-End Services</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  From planning and designing to execution and maintenance, we provide complete infrastructure solutions
                  under one roof for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Trusted by Clients</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Transparency, trust, and long-term relationships are at the core of everything we do. Our reputation
                  is built on satisfied clients and successful projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#c9a961]" />
                  <h3 className="text-2xl font-bold text-[#0a3d3d]">Sustainable Practices</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize eco-friendly construction methods and energy-efficient designs to create a sustainable
                  future for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-[#c9a961] bg-[#c9a961]/5">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-[#0a3d3d] mb-4">Ready to Build Your Dream Project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have trusted Durabuild for their construction needs. Let's turn
                your vision into reality.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
