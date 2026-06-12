"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, X } from "lucide-react"
import { DrawerNavigation } from "@/components/drawer-navigation"
import { Input } from "@/components/ui/input"

export function SiteNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  const navItems = ["about", "sectors", "services", "projects", "csr", "contact"]

  const servicesSections = [
    {
      title: "Civil Construction",
      description:
        "Expert construction services for residential, commercial, and industrial projects with modern designs and quality execution.",
      image: "/mega-menu-construction.jpg",
      href: "/services/construction-services",
    },
    {
      title: "Roads & Bridges",
      description:
        "Specialized infrastructure construction for roads, highways, bridges, and heavy engineering projects.",
      image: "/mega-menu-infrastructure.jpg",
      href: "/services/roads-bridges",
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
  ]

  const allContent = [
    { title: "About Us", url: "/about/mission-vision", category: "Page" },
    { title: "Mission & Vision", url: "/about/mission-vision", category: "About" },
    { title: "Leadership", url: "/about/leadership", category: "About" },
    { title: "Why Durabuild", url: "/about/why-durabuild", category: "About" },
    { title: "Urban Infrastructure", url: "/sectors/urban-infrastructure", category: "Sector" },
    { title: "Advanced Technology", url: "/sectors/advanced-technology", category: "Sector" },
    { title: "Transportation", url: "/sectors/transportation", category: "Sector" },
    { title: "Water & Utilities", url: "/sectors/water", category: "Sector" },
    { title: "Construction Services", url: "/services/construction-services", category: "Service" },
    { title: "Infrastructure Development", url: "/services/infrastructure-development", category: "Service" },
    { title: "Material Supply Services", url: "/services/material-supply", category: "Service" },
    { title: "Architecture & Planning", url: "/services/architecture-planning", category: "Service" },
    { title: "Engineering Services", url: "/services/engineering-services", category: "Service" },
    { title: "Renovation & Maintenance", url: "/services/renovation-maintenance", category: "Service" },
    { title: "Labour & Workforce", url: "/services/labour-workforce", category: "Service" },
    { title: "Electrical & Technical", url: "/services/electrical-technical", category: "Service" },
    { title: "Project Management & Consultancy", url: "/services/project-management", category: "Service" },
    { title: "Roads, Bridges & Heavy Projects", url: "/services/roads-bridges", category: "Service" },
    { title: "Interior & Exterior Work", url: "/services/interior-exterior", category: "Service" },
    { title: "Residential Developments", url: "/projects/residential", category: "Project" },
    { title: "Commercial Buildings", url: "/projects/commercial", category: "Project" },
    { title: "Infrastructure Works", url: "/projects/infrastructure", category: "Project" },
    { title: "CSR Initiatives", url: "/csr/skill-building", category: "CSR" },
    { title: "Skill Building", url: "/csr/skill-building", category: "CSR" },
    { title: "Education", url: "/csr/education", category: "CSR" },
    { title: "Health & Hygiene", url: "/csr/health-hygiene", category: "CSR" },
    { title: "Contact Us", url: "/contact", category: "Page" },
  ]

  const searchResults = allContent.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <DrawerNavigation isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
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

            <div className="flex items-center gap-6">
              {/* Desktop Navigation - aligned to right */}
              <div className="hidden lg:flex items-center gap-2">
                {navItems.map((item) => (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => item === "services" && setActiveMegaMenu("services")}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      href={item === "contact" ? "/contact" : item === "services" ? "/services" : `/#${item}`}
                      className="px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-200 text-[#0a3d3d] hover:bg-[#c9a961] hover:text-white"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>

                    {item === "services" && activeMegaMenu === "services" && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                        <button
                          onClick={() => setActiveMegaMenu(null)}
                          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#c9ac6d] hover:text-white text-gray-600 flex items-center justify-center transition-colors z-10"
                          aria-label="Close menu"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] px-8 py-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">Comprehensive Solutions</h3>
                          <p className="text-sm text-white/80 max-w-2xl">
                            From residential buildings to large-scale infrastructure projects, we provide end-to-end
                            construction solutions tailored to your specific needs.
                          </p>
                        </div>

                        {/* Services Grid */}
                        <div className="p-6 grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
                          {servicesSections.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-[#c9a961]/20"
                            >
                              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                  src={service.image || "/placeholder.svg"}
                                  alt={service.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-[#0a3d3d] mb-2 group-hover:text-[#c9a961] transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="border-t border-gray-200 px-8 py-4 bg-gray-50">
                          <Link
                            href="/services"
                            onClick={() => setActiveMegaMenu(null)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a961] hover:text-[#b8985a] transition-colors"
                          >
                            Explore All Services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                    <Input
                      type="text"
                      placeholder="Search site..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value)
                        if (e.target.value.trim()) {
                          setSearchOpen(true)
                        } else {
                          setSearchOpen(false)
                        }
                      }}
                      onFocus={() => {
                        if (searchQuery.trim()) {
                          setSearchOpen(true)
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setSearchOpen(false)
                          setSearchQuery("")
                        }
                      }}
                      className="pl-10 pr-10 py-2.5 w-72 text-sm border-2 border-gray-300 focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/20 rounded-lg bg-gray-50 focus:bg-white transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          setSearchOpen(false)
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Results Dropdown */}
                {searchOpen && searchQuery.trim() && searchResults.length > 0 && (
                  <>
                    {/* Overlay to close search */}
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => {
                        setSearchOpen(false)
                      }}
                    />

                    <div className="absolute top-full right-0 mt-2 w-[480px] bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[500px] overflow-hidden z-40">
                      <div className="relative h-32 overflow-hidden border-b border-gray-200">
                        <Image
                          src="/modern-construction-site-with-steel-framework-and-.jpg"
                          alt="Search"
                          fill
                          className="object-cover brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-4 text-white">
                          <p className="text-xs font-semibold uppercase tracking-wide opacity-90">Search Results</p>
                          <p className="text-lg font-bold">{searchResults.length} results found</p>
                        </div>
                      </div>
                      <div className="p-2 max-h-[368px] overflow-y-auto">
                        {searchResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.url}
                            onClick={() => {
                              setSearchOpen(false)
                              setSearchQuery("")
                            }}
                            className="block px-3 py-3 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{result.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{result.url}</p>
                              </div>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#c9ac6d]/10 text-[#c9ac6d]">
                                {result.category}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Menu Button */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="w-12 h-12 rounded-full bg-[#c9ac6d] hover:bg-[#b8985a] text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
