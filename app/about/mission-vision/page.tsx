import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 lg:px-8 py-24 pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0a3d3d] mb-8 text-balance">Our Mission & Vision</h1>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
            <Image src="/mega-menu-mission.jpg" alt="Mission and Vision" fill className="object-cover" />
          </div>

          <div className="space-y-12">
            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#0a3d3d] mb-6">Our Mission</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Durabuild Infra Build Pvt. Ltd., our mission is to deliver excellence in every project we
                    undertake. We are committed to:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Deliver Excellence:</strong> Provide top-quality construction, real estate, and
                        infrastructure solutions that stand the test of time.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Build Trust:</strong> Establish long-term relationships with clients through
                        transparency, reliability, and a customer-first approach.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Promote Innovation:</strong> Adopt modern technologies and sustainable practices for
                        smarter and eco-friendly infrastructure.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Empower Growth:</strong> Create opportunities that contribute to economic development
                        and uplift communities.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#0a3d3d] mb-6">Our Vision</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our vision is to reshape the future of construction in India and establish ourselves as a trusted
                    leader in the industry:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Be a Leader:</strong> Become one of India's most trusted and innovative construction &
                        infrastructure companies.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Set New Benchmarks:</strong> Deliver world-class quality in real estate, construction
                        materials, and infrastructure projects.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Sustainable Future:</strong> Create eco-friendly and future-ready structures that
                        support a greener tomorrow.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Nation Building:</strong> Contribute towards India's growth by developing strong,
                        reliable, and modern infrastructure.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#c9a961] font-bold">•</span>
                      <span>
                        <strong>Global Presence:</strong> Expand our footprint beyond India and establish Durabuild as a
                        globally recognized brand.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a961]/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#0a3d3d] mb-6">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Integrity</h3>
                    <p className="text-muted-foreground">Transparency, honesty, and ethics in all our operations.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Quality Commitment</h3>
                    <p className="text-muted-foreground">Ensuring highest quality and durability in every project.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Innovation</h3>
                    <p className="text-muted-foreground">Embracing new ideas, technology, and modern solutions.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Customer Centricity</h3>
                    <p className="text-muted-foreground">Prioritizing customer needs and delivering excellence.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">Eco-friendly and energy-efficient construction solutions.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Excellence</h3>
                    <p className="text-muted-foreground">Setting new standards in performance and delivery.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/leadership">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
