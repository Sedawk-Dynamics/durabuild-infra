import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Paintbrush, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"

export default function InteriorExteriorPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior-design-painting-and-renovation-work.jpg"
            alt="Interior & Exterior Works"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Interior & Exterior Works</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Complete painting, plastering, POP, false ceiling, and renovation services
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Paintbrush className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Transform Your Spaces</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Durabuild, we bring creativity and precision to every interior and exterior project. From complete
                painting services to intricate plasterwork, false ceilings, and full-scale renovations, our skilled
                craftsmen ensure your spaces look stunning and last for years.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you're refreshing a single room or transforming an entire building, we deliver exceptional
                quality with attention to detail, using premium materials and modern techniques.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/professional-interior-painting-and-plastering-work.jpg"
                alt="Interior work in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Design & Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom interior designs tailored to your style and needs, executed with precision and care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Painting & Plastering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional painting services for walls, ceilings, and exteriors with flawless finishes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Renovation Works</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete renovation services to breathe new life into old spaces with modern aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Interior & Exterior Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Interior & Exterior Work
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• False Ceiling installations</li>
                  <li>• Modular Kitchen design & setup</li>
                  <li>• POP, Wall Texture, Wallpaper</li>
                  <li>• Wooden Work (carpentry)</li>
                  <li>• Aluminum & Glass Work</li>
                  <li>• Complete interior design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Painting Services
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Interior wall painting</li>
                  <li>• Exterior facade painting</li>
                  <li>• Texture coating and finishes</li>
                  <li>• Waterproofing treatments</li>
                  <li>• House Wiring & Electrical work</li>
                  <li>• Industrial Wiring solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Renovation & Maintenance
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• House Renovation & remodeling</li>
                  <li>• Office Renovation & upgrades</li>
                  <li>• Painting, Plaster, Putty Work</li>
                  <li>• Waterproofing Solutions</li>
                  <li>• Repair & Maintenance Work</li>
                  <li>• Complete space transformation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Electrical & Technical Services
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• House Wiring installations</li>
                  <li>• Industrial Wiring systems</li>
                  <li>• Solar Panel Installation</li>
                  <li>• Electrical Fitting & Repair Works</li>
                  <li>• Lighting design & setup</li>
                  <li>• Complete electrical solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interior & Exterior Work in Progress</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our skilled craftsmen transform spaces with precision and artistry
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__aerial-view-of-a-construction-site-with-cranes-and__87511-v6sgtKqiPO5dcQWgiKwUXwI5rZGzgv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Interior & Exterior Transformations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beautiful spaces created through expert craftsmanship and attention to detail
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop"
                alt="Modern interior design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Modern Living Room</h3>
                  <p className="text-white/80 text-sm">Contemporary interior design & execution</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop"
                alt="Bedroom interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Luxury Bedroom</h3>
                  <p className="text-white/80 text-sm">Premium finishing & false ceiling work</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070&auto=format&fit=crop"
                alt="Kitchen interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Modern Kitchen</h3>
                  <p className="text-white/80 text-sm">Complete renovation & interior work</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Office interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Corporate Office</h3>
                  <p className="text-white/80 text-sm">Professional workspace design</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Exterior painting"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Exterior Painting</h3>
                  <p className="text-white/80 text-sm">Premium facade finishing work</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
                alt="Bathroom renovation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Bathroom Renovation</h3>
                  <p className="text-white/80 text-sm">Complete remodeling & tiling work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Before & After Transformations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we transform dated spaces into modern, beautiful environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">Before Renovation</h3>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                  alt="Room before renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">After Renovation</h3>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
                  alt="Room after renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Interior & Exterior Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality craftsmanship, premium materials, and attention to detail
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Craftsmen</h3>
                <p className="text-muted-foreground">
                  Skilled professionals with years of experience in interior and exterior finishing work
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
                <p className="text-muted-foreground">
                  Only the best paints, plaster, and finishing materials for lasting beauty and durability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">On-Time Completion</h3>
                <p className="text-muted-foreground">
                  Efficient project management ensuring your spaces are ready when you need them
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for interior and exterior work quotes and design consultations
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call for Quotes</h3>
                  <p className="text-muted-foreground mb-4">Speak with our design consultants</p>
                  <a href="tel:+916399015656" className="text-lg font-semibold text-primary hover:underline">
                    +91-6399015656
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Your Requirements</h3>
                  <p className="text-muted-foreground mb-4">Send project photos and details</p>
                  <a href="mailto:support@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                    support@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and detailed quote for your interior or exterior project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
