"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Hammer, Paintbrush, Route, Users, Menu, ArrowRight, X } from "lucide-react"
import { useState } from "react"
import { DrawerNavigation } from "@/components/drawer-navigation"
import { SearchDialog } from "@/components/search-dialog"
import { Footer } from "@/components/footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const megaMenuContent = {
    about: {
      title: "Building Excellence",
      description:
        "Our commitment to quality and innovation drives everything we do — from our skilled professionals to our project managers. We excel at delivering projects that meet the highest standards of construction.",
      cta: {
        label: "Discover Our Story",
        href: "#about",
      },
      sections: [
        {
          title: "Mission & Vision",
          description:
            "Our mission is to deliver world-class infrastructure that stands the test of time and contributes to nation-building.",
          image: "/mega-menu-mission.jpg",
          href: "/about/mission-vision",
        },
        {
          title: "Leadership Team",
          description:
            "Our leadership team is united in their commitment to driving progress and excellence in every project we undertake.",
          image: "/mega-menu-leadership.jpg",
          href: "/about/leadership",
        },
        {
          title: "Why Durabuild",
          description:
            "Quality, innovation, and trust are the pillars that make Durabuild the preferred choice for construction projects.",
          image: "/mega-menu-why-us.jpg",
          href: "/about/why-durabuild",
        },
      ],
    },
    sectors: {
      title: "Industry Sectors",
      description:
        "We deliver specialized construction and infrastructure solutions across diverse industrial sectors, from urban development to advanced technology facilities.",
      cta: {
        label: "Explore Our Sectors",
        href: "#sectors",
      },
      sections: [
        {
          title: "Urban Infrastructure",
          description:
            "Comprehensive urban development projects including roads, drainage systems, and civic infrastructure for modern cities.",
          image: "/mega-menu-infrastructure.jpg",
          href: "/sectors/urban-infrastructure", // Updated href to sector page
        },
        {
          title: "Advanced Technology Facilities",
          description:
            "State-of-the-art facilities for IT parks, data centers, and technology hubs with cutting-edge infrastructure.",
          image: "/mega-menu-construction.jpg",
          href: "/sectors/advanced-technology", // Updated href to sector page
        },
        {
          title: "Transportation",
          description:
            "Highways, bridges, metro systems, and transportation infrastructure connecting communities and enabling growth.",
          image: "/mega-menu-infra-projects.jpg",
          href: "/sectors/transportation", // Updated href to sector page
        },
        {
          title: "Water",
          description:
            "Water treatment plants, reservoirs, distribution networks, and water management infrastructure.",
          image: "/mega-menu-water.jpg",
          href: "/sectors/water", // Updated href to sector page
        },
      ],
    },
    services: {
      title: "Comprehensive Solutions",
      description:
        "From residential buildings to large-scale infrastructure projects, we provide end-to-end construction solutions tailored to your specific needs.",
      cta: {
        label: "Explore All Services",
        href: "/services",
      },
      sections: [
        {
          title: "Architecture Planning",
          description: "Innovative architectural planning and structural design solutions.",
          image: "/modern-architectural-blueprints-design-planning.jpg",
          href: "/services/architecture-planning",
        },
        {
          title: "Construction Materials",
          description: "High-quality construction materials for durable and reliable projects.",
          image: "/construction-materials-cement-steel-supplies.jpg",
          href: "/services/construction-materials",
        },
        {
          title: "Construction Services",
          description: "Complete construction solutions for residential, commercial and industrial projects.",
          image: "/construction-site-building-workers-machinery.jpg",
          href: "/services/construction-services",
        },
        {
          title: "Electrical & Technical",
          description: "Advanced electrical and technical service solutions for modern infrastructure.",
          image: "/electrical-wiring-technical-infrastructure-panels.jpg",
          href: "/services/electrical-technical",
        },
        {
          title: "Engineering Services",
          description: "Professional engineering services with high precision and quality execution.",
          image: "/engineering-structural-design-precision-measuremen.jpg",
          href: "/services/engineering-services",
        },
        {
          title: "Infrastructure Development",
          description: "Development of roads, drainage, and public infrastructure systems.",
          image: "/road-construction-infrastructure-development-highw.jpg",
          href: "/services/infrastructure-development",
        },
        {
          title: "Interior & Exterior",
          description: "Modern interior and exterior design and execution services.",
          image: "/interior-design-modern-living-space-decoration.jpg",
          href: "/services/interior-exterior",
        },
        {
          title: "Labour Workforce",
          description: "Skilled workforce supply for construction and industrial projects.",
          image: "/construction-workers-skilled-workforce-safety-gear.jpg",
          href: "/services/labour-workforce",
        },
        {
          title: "Material Supply",
          description: "Reliable material supply services for all types of construction projects.",
          image: "/building-materials-supply-warehouse-inventory.jpg",
          href: "/services/material-supply",
        },
        {
          title: "Project Management",
          description: "End-to-end planning, monitoring, and execution of construction projects.",
          image: "/project-management-planning-blueprint-coordination.jpg",
          href: "/services/project-management",
        },
        {
          title: "Renovation & Maintenance",
          description: "Repair, renovation, and long-term maintenance solutions.",
          image: "/renovation-remodeling-maintenance-repair-work.jpg",
          href: "/services/renovation-maintenance",
        },
        {
          title: "Roads & Bridges",
          description: "Specialized construction of roads, highways, and bridges.",
          image: "/bridge-construction-highway-roads-infrastructure.jpg",
          href: "/services/roads-bridges",
        },
      ],
    },

    projects: {
      title: "Landmark Projects",
      description:
        "Our portfolio showcases diverse projects across residential, commercial, and infrastructure sectors, each delivered with precision and excellence.",
      cta: {
        label: "View All Projects",
        href: "#projects",
      },
      sections: [
        {
          title: "Residential Developments",
          description:
            "Modern housing complexes and luxury apartments designed for comfortable living with world-class amenities.",
          image: "/mega-menu-residential.jpg",
          href: "/projects/residential", // Updated to link to residential projects page
        },
        {
          title: "Commercial Buildings",
          description:
            "State-of-the-art commercial spaces that combine functionality with aesthetic appeal for businesses to thrive.",
          image: "/mega-menu-commercial.jpg",
          href: "/projects/commercial", // Updated to link to commercial projects page
        },
        {
          title: "Infrastructure Works",
          description:
            "Large-scale infrastructure projects including roads, bridges, and government contracts that shape the future.",
          image: "/mega-menu-infra-projects.jpg",
          href: "/projects/infrastructure", // Updated to link to infrastructure projects page
        },
      ],
    },
    csr: {
      title: "Corporate Social Responsibility",
      description:
        "We believe in giving back to society through meaningful initiatives that empower communities, support education, promote health, and encourage sports.",
      cta: {
        label: "Explore Our CSR Initiatives",
        href: "#csr",
      },
      sections: [
        {
          title: "Skill Building and Livelihood",
          description:
            "Empowering communities through vocational training, skill development programs, and livelihood opportunities for sustainable growth.",
          image: "/vocational-training-skill-development-workshop.jpg",
          href: "/csr/skill-building", // Updated href to CSR page
        },
        {
          title: "Education",
          description:
            "Supporting quality education through infrastructure development, scholarships, and learning resources for underprivileged children.",
          image: "/children-in-classroom-education-learning.jpg",
          href: "/csr/education", // Updated href to CSR page
        },
        {
          title: "Health and Hygiene",
          description:
            "Promoting health awareness, sanitation facilities, and hygiene practices for healthier communities and better living standards.",
          image: "/health-hygiene-awareness-community-program.jpg",
          href: "/csr/health-hygiene", // Updated href to CSR page
        },
        {
          title: "India Run Sports",
          description:
            "Encouraging sports participation, building sports infrastructure, and supporting athletes to promote fitness and national pride.",
          image: "/mega-menu-construction.jpg",
          href: "/csr/india-run-sports", // Updated href to CSR page
        },
      ],
    },
    contact: {
      title: "Let's Build Together",
      description:
        "Ready to start your project? Get in touch with our team for a free consultation, site visit, and detailed quotation.",
      cta: {
        label: "Contact Us Today",
        href: "/contact",
      },
      sections: [
        {
          title: "Get a Quote",
          description: "Request a detailed quotation for your project with transparent pricing and no hidden costs.",
          image: "/mega-menu-quote.jpg",
          href: "/contact",
        },
        {
          title: "Visit Our Office",
          description:
            "Located in Dehradun, Uttarakhand. Visit us during working hours or schedule an appointment for project discussion.",
          image: "/mega-menu-office.jpg",
          href: "/contact",
        },
        {
          title: "24/7 Support",
          description:
            "Reach us via phone, WhatsApp, or email. Our team is always ready to assist you with your construction needs.",
          image: "/mega-menu-support.jpg",
          href: "/contact",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <DrawerNavigation isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <div
        onMouseLeave={() => {
          setActiveMegaMenu(null)
        }}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-28">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/logo-horizontal.png"
                    alt="Durabuild Infra Build"
                    width={280}
                    height={80}
                    className="h-16 w-auto"
                  />
                </Link>
              </div>

              <div className="hidden lg:flex items-center gap-2">
                {["about", "sectors", "services", "projects", "csr", "contact"].map((item) => (
                  <div key={item} className="relative" onMouseEnter={() => setActiveMegaMenu(item)}>
                    <Link
                      href={item === "contact" ? "/contact" : `#${item}`}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                        activeMegaMenu === item ? "bg-[#c9a961] text-white" : "text-[#0a3d3d] hover:bg-[#c9a961]/10"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* CHANGE: Removed search icon from homepage navbar */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="w-12 h-12 rounded-full bg-[#b8985a] hover:bg-[#a0824d] text-white flex items-center justify-center transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {activeMegaMenu && (
          <div className="fixed inset-0 z-40 pt-28 bg-white overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <button
              onClick={() => setActiveMegaMenu(null)}
              className="fixed top-32 right-8 w-10 h-10 rounded-full bg-[#C9AC6D] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-colors shadow-lg z-50"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="container mx-auto px-4 lg:px-8 py-16">
              <div className={`grid ${activeMegaMenu === "sectors" ? "lg:grid-cols-4" : "lg:grid-cols-4"} gap-12`}>
                <div className="lg:col-span-1">
                  <h2 className="text-4xl font-bold text-[#0a3d3d] mb-6 text-balance">
                    {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].description}
                  </p>
                  <Button asChild className="inline-flex items-center gap-2" onClick={() => setActiveMegaMenu(null)}>
                    <Link href={megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].cta.href}>
                      <span>{megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].cta.label}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`${activeMegaMenu === "sectors" ? "lg:col-span-3" : "lg:col-span-3"} grid md:grid-cols-2 ${activeMegaMenu === "sectors" ? "lg:grid-cols-2" : activeMegaMenu === "csr" ? "lg:grid-cols-2" : "md:grid-cols-3"} gap-8`}
                >
                  {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].sections.map((section, idx) => (
                    <Link key={idx} href={section.href} className="group" onClick={() => setActiveMegaMenu(null)}>
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#0a3d3d] mb-2 group-hover:text-[#c9a961] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          {/* CHANGE: Replaced hero video with new cinematic construction footage */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-50">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__a-cinematic-10second-slowmotion-video-showing-a-pr__99502-45onNL9JBVTnNDm0HtCBBokc8ILt0d.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Shaping Dreams into Reality</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Building strong foundations, modern designs, and sustainable infrastructure that shapes the future of
              India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground"
              >
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Building Trust, Delivering Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Durabuild Infra Build Pvt. Ltd. is a trusted name in construction, real estate, and infrastructure
                development. We specialize in delivering strong foundations, modern designs, and sustainable projects
                that shape the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With expertise across residential, commercial, and industrial projects, our team ensures precision,
                durability, and timely execution in every work we undertake. From strong foundations to world- class
                designs, we aim to build not just structures, but trust and long-term relationships.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Quality that lasts</h4>
                    <p className="text-muted-foreground text-sm">Premium materials and expert craftsmanship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Innovation that inspires</h4>
                    <p className="text-muted-foreground text-sm">Modern technology and sustainable practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Commitment that delivers</h4>
                    <p className="text-muted-foreground text-sm">On-time completion and transparent communication</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="#contact">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/modern-construction-building-with-workers-and-equi.jpg"
                alt="Construction team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0a3d3d] mb-4">Building Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality and innovation drives everything we do — from our skilled professionals to our
                project managers. We excel at delivering projects that meet the highest standards of construction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/about/mission-vision" className="group block">
                <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/mega-menu-mission.jpg"
                      alt="Mission & Vision"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#0a3d3d] mb-3 group-hover:text-[#c9a961] transition-colors">
                      Mission & Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our mission is to deliver world-class infrastructure that stands the test of time and contributes
                      to nation-building.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/about/leadership" className="group block">
                <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/mega-menu-leadership.jpg"
                      alt="Leadership Team"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#0a3d3d] mb-3 group-hover:text-[#c9a961] transition-colors">
                      Leadership Team
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our leadership team is united in their commitment to driving progress and excellence in every
                      project we undertake.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/about/why-durabuild" className="group block">
                <Card className="border-2 hover:border-[#c9a961] transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/mega-menu-why-us.jpg"
                      alt="Why Durabuild"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#0a3d3d] mb-3 group-hover:text-[#c9a961] transition-colors">
                      Why Durabuild
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Quality, innovation, and trust are the pillars that make Durabuild the preferred choice for
                      construction projects.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/mission-vision">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="sectors" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Sectors We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized construction and infrastructure solutions across key industrial sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Urban Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive urban development projects including roads, drainage systems, public spaces, and civic
                  infrastructure for modern smart cities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Hammer className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Technology Facilities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art facilities for IT parks, data centers, research labs, and technology hubs with
                  cutting-edge infrastructure and smart systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Route className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Transportation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Highways, expressways, bridges, flyovers, metro systems, and transportation infrastructure connecting
                  communities and enabling economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Paintbrush className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Water</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Water treatment plants, reservoirs, distribution networks, sewage systems, and water management
                  infrastructure for sustainable communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and infrastructure solutions tailored to your needs
            </p>
          </div>
          {/* CHANGE: Replaced service cards with clickable cards linking to service pages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/construction-services" className="block group cursor-pointer">
              <Card className="border-2 hover:border-primary transition-colors h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Civil Construction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Residential, commercial & industrial buildings with modern architecture and quality materials.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• High-rise structures</li>
                    <li>• Turnkey projects</li>
                    <li>• Modern complexes</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/infrastructure-development" className="block group cursor-pointer">
              <Card className="border-2 hover:border-primary transition-colors h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Route className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Infrastructure Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Roads, bridges, highways and urban development projects for modern India.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Roads & highways</li>
                    <li>• Government projects</li>
                    <li>• Urban development</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/interior-exterior" className="block group cursor-pointer">
              <Card className="border-2 hover:border-primary transition-colors h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Paintbrush className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Interior & Exterior Works
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Complete painting, plastering, POP, false ceiling, and renovation services.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Interior design</li>
                    <li>• Painting & plastering</li>
                    <li>• Renovation works</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/construction-materials" className="block group cursor-pointer">
              <Card className="border-2 hover:border-primary transition-colors h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Hammer className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Construction Materials
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Premium quality cement, steel, putty, paints, and finishing materials supply.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cement & steel</li>
                    <li>• Paints & tiles</li>
                    <li>• Ready-mix concrete</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/project-management" className="block group cursor-pointer">
              <Card className="border-2 hover:border-primary transition-colors h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Project Management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    End-to-end project execution with planning, estimation, and quality control.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cost estimation</li>
                    <li>• Quality assurance</li>
                    <li>• Site supervision</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across residential, commercial, and infrastructure projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/aerial-view-of-modern-construction-site-with-build.jpg"
                  alt="Residential Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Residential Complex</h3>
                <p className="text-muted-foreground mb-4">Modern apartments with world-class amenities</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Completed</span>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">50+ Units</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/modern-construction-building-with-workers-and-equi.jpg"
                  alt="Commercial Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Commercial Plaza</h3>
                <p className="text-muted-foreground mb-4">High-rise commercial building in prime location</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Ongoing</span>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">8 Floors</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/professional-construction-team-reviewing-blueprint.jpg"
                  alt="Infrastructure Project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Road Infrastructure</h3>
                <p className="text-muted-foreground mb-4">Government highway development project</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Completed</span>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">15 KM</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="csr" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Corporate Social Responsibility</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering communities through meaningful initiatives
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 pb-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Hammer className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Skill Building and Livelihood</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering communities through vocational training, skill development programs, and livelihood
                  opportunities for sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting quality education through infrastructure development, scholarships, and learning resources
                  for underprivileged children.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Paintbrush className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Health and Hygiene</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promoting health awareness, sanitation facilities, and hygiene practices for healthier communities and
                  better living standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Route className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">India Run Sports</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Encouraging sports participation, building sports infrastructure, and supporting athletes to promote
                  fitness and national pride.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/csr">Explore Our CSR Initiatives</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Why Choose Durabuild?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality First Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use only the best materials and advanced technology to ensure long-lasting and durable
                      construction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every project is planned with precision and completed within deadlines without compromising
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our engineers, architects, and skilled workforce bring years of expertise to deliver excellence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cost-Effective Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Competitive pricing with transparent quotations and no hidden costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/team-collaboration-construction.avif"
                alt="Construction team collaboration with digital tablet and blueprints"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have a project in mind? Contact us today for a free consultation and site visit.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Office Address</h3>
                  <p className="text-muted-foreground">
                    Maruti Vihar, Raipur
                    <br />
                    Dehradun, Uttarakhand 248008
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +91-7000329644
                    <br />
                    01353670274
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@durainfra.com
                    <br />
                    support@durainfra.com
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Working Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Civil Construction</option>
                      <option value="infrastructure">Infrastructure Development</option>
                      <option value="realestate">Real Estate</option>
                      <option value="interior">Interior/Exterior Works</option>
                      <option value="materials">Construction Materials</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
