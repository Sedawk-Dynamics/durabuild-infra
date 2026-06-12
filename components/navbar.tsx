"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState } from "react"

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
        href: "/sectors/urban-infrastructure",
      },
      {
        title: "Advanced Technology Facilities",
        description:
          "State-of-the-art facilities for IT parks, data centers, and technology hubs with cutting-edge infrastructure.",
        image: "/mega-menu-construction.jpg",
        href: "/sectors/advanced-technology",
      },
      {
        title: "Transportation",
        description:
          "Highways, bridges, metro systems, and transportation infrastructure connecting communities and enabling growth.",
        image: "/mega-menu-infra-projects.jpg",
        href: "/sectors/transportation",
      },
      {
        title: "Water",
        description: "Water treatment plants, reservoirs, distribution networks, and water management infrastructure.",
        image: "/mega-menu-water.jpg",
        href: "/sectors/water",
      },
    ],
  },
  services: {
    title: "Comprehensive Solutions",
    description:
      "From residential buildings to large-scale infrastructure projects, we provide end-to-end construction solutions tailored to your specific needs.",
    cta: {
      label: "Explore All Services",
      href: "#services",
    },
    sections: [
      {
        title: "Civil Construction",
        description:
          "Expert construction services for residential, commercial, and industrial projects with modern designs and quality execution.",
        image: "/mega-menu-construction.jpg",
        href: "/services/construction-services",
      },
      {
        title: "Infrastructure Development",
        description:
          "Building roads, bridges, and urban infrastructure that connects communities and drives economic growth.",
        image: "/mega-menu-infrastructure.jpg",
        href: "/services/infrastructure-development",
      },
      {
        title: "Project Management",
        description:
          "Complete project oversight from planning to execution, ensuring timely delivery and quality assurance at every stage.",
        image: "/mega-menu-management.jpg",
        href: "/services/project-management",
      },
      {
        title: "Interior & Exterior Works",
        description:
          "Complete painting, plastering, POP, false ceiling, and renovation services for residential and commercial spaces.",
        image: "/mega-menu-construction.jpg",
        href: "/services/interior-exterior",
      },
      {
        title: "Construction Materials",
        description:
          "Premium quality cement, steel, putty, paints, and finishing materials supply from trusted manufacturers.",
        image: "/mega-menu-infrastructure.jpg",
        href: "/services/construction-materials",
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
        href: "#projects",
      },
      {
        title: "Commercial Buildings",
        description:
          "State-of-the-art commercial spaces that combine functionality with aesthetic appeal for businesses to thrive.",
        image: "/mega-menu-commercial.jpg",
        href: "#projects",
      },
      {
        title: "Infrastructure Works",
        description:
          "Large-scale infrastructure projects including roads, bridges, and government contracts that shape the future.",
        image: "/mega-menu-infra-projects.jpg",
        href: "#projects",
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
        href: "/csr/skill-building",
      },
      {
        title: "Education",
        description:
          "Supporting quality education through infrastructure development, scholarships, and learning resources for underprivileged children.",
        image: "/children-in-classroom-education-learning.jpg",
        href: "/csr/education",
      },
      {
        title: "Health and Hygiene",
        description:
          "Promoting health awareness, sanitation facilities, and hygiene practices for healthier communities and better living standards.",
        image: "/health-hygiene-awareness-community-program.jpg",
        href: "/csr/health-hygiene",
      },
      {
        title: "India Run Sports",
        description:
          "Encouraging sports participation, building sports infrastructure, and supporting athletes to promote fitness and national pride.",
        image: "/mega-menu-construction.jpg",
        href: "/csr/india-run-sports",
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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  return (
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
              {["about", "sectors", "services", "projects", "csr", "blog", "contact"].map((item) => {
                const hasMegaMenu = item in megaMenuContent
                const href = item === "contact" ? "/contact" : item === "blog" ? "/blog" : `/#${item}`
                return (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setActiveMegaMenu(hasMegaMenu ? item : null)}
                  >
                    <Link
                      href={href}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                        activeMegaMenu === item ? "bg-[#c9a961] text-white" : "text-[#0a3d3d] hover:bg-[#c9a961]/10"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-4">
              <button
                className="text-[#0a3d3d] hover:text-[#c9a961] transition-colors lg:hidden"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 fixed top-28 left-0 right-0 z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/#about"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#sectors"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sectors
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#csr"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CSR
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0a3d3d] uppercase tracking-wide hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {activeMegaMenu && (
        <div className="fixed inset-0 z-40 pt-28 bg-white animate-in fade-in slide-in-from-top-4 duration-300">
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
  )
}
