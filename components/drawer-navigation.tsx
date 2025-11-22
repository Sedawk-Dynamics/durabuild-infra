"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Search, ChevronDown, ChevronUp, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface DrawerNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export function DrawerNavigation({ isOpen, onClose }: DrawerNavigationProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const navigationSections = [
    {
      id: "people",
      title: "People",
      links: [
        { label: "Vision, Values & Commitments", href: "/about/mission-vision" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Why Durabuild", href: "/about/why-durabuild" },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      links: [
        { label: "View More Projects", href: "/projects/residential" },
        { label: "Residential Developments", href: "/projects/residential" },
        { label: "Commercial Buildings", href: "/projects/commercial" },
        { label: "Infrastructure Works", href: "/projects/infrastructure" },
      ],
    },
    {
      id: "approach",
      title: "Approach",
      links: [
        { label: "Civil Construction", href: "/services/civil-construction" },
        { label: "Infrastructure Development", href: "/services/infrastructure-development" },
        { label: "Project Management", href: "/services/project-management" },
        { label: "Interior & Exterior Works", href: "/services/interior-exterior" },
      ],
    },
    {
      id: "careers",
      title: "Careers",
      links: [
        { label: "Why Durabuild", href: "/about/why-durabuild" },
        { label: "Career Opportunities", href: "/contact" },
        { label: "Life at Durabuild", href: "/csr" },
      ],
    },
    {
      id: "suppliers",
      title: "Suppliers",
      links: [
        { label: "Construction Materials", href: "/services/construction-materials" },
        { label: "Material Supply", href: "/services/construction-materials" },
      ],
    },
    {
      id: "media",
      title: "Media",
      links: [
        { label: "Projects Gallery", href: "/projects/residential" },
        { label: "Blog", href: "/contact" },
      ],
    },
    {
      id: "impact",
      title: "Impact Report",
      links: [{ label: "CSR Initiatives", href: "/csr/skill-building" }],
    },
    {
      id: "history",
      title: "History",
      links: [{ label: "Our Journey", href: "/about/leadership" }],
    },
    {
      id: "contact",
      title: "Contact",
      links: [{ label: "Get in Touch", href: "/contact" }],
    },
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const filteredSections = navigationSections
    .map((section) => ({
      ...section,
      links: section.links.filter(
        (link) =>
          link.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.links.length > 0 || section.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-full max-w-md bg-white z-[60] transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0a3d3d]">NAVIGATION</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#c9ac6d] hover:bg-[#b8985a] text-white flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search navigation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-base"
            />
          </div>
          {/* Navigation Sections */}
          <nav className="space-y-2">
            {filteredSections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:text-[#c9ac6d] transition-colors group"
                >
                  <span className="text-lg font-bold text-[#c9ac6d] group-hover:text-[#b8985a]">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-[#c9ac6d]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#c9ac6d]" />
                  )}
                </button>
                {expandedSection === section.id && (
                  <div className="pb-4 pl-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                    {section.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        onClick={onClose}
                        className="block py-2 text-gray-600 hover:text-[#0a3d3d] hover:pl-2 transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Featured Projects Section - FIX APPLIED HERE */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">FEATURED PROJECTS</h3>
            <div className="space-y-4">
              <Link href="/projects/residential" onClick={onClose} className="block group">
                <div className="relative h-32 mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="/aerial-view-of-modern-construction-site-with-build.jpg" // Use your actual image path
                    alt="Residential Complex"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white font-semibold text-sm">Residential Complex</p>
                </div>
                <p className="text-xs text-gray-500 uppercase">Modern Living Spaces</p>
              </Link>
              <Link href="/projects/commercial" onClick={onClose} className="block group">
                <div className="relative h-32 mb-2 rounded-lg overflow-hidden">
                  <Image
                    src="/modern-construction-building-with-workers-and-equi.jpg" // Use your actual image path
                    alt="Commercial Plaza"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white font-semibold text-sm">Commercial Plaza</p>
                </div>
                <p className="text-xs text-gray-500 uppercase">Business Hub</p>
              </Link>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9ac6d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">+91-7000329644</p>
                  <p className="text-xs text-gray-500">Mon-Sat, 9 AM - 5 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9ac6d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">info@gmail.com</p>
                  <p className="text-xs text-gray-500">24/7 support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9ac6d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Maruti Vihar, Raipur</p>
                  <p className="text-xs text-gray-500">Dehradun, Uttarakhand 248008</p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <div className="mt-8">
            <Button asChild className="w-full" size="lg">
              <Link href="/contact" onClick={onClose}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
