"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}



export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Search database with all pages, services, and content
  const searchableContent = [
    {
      title: "Civil Construction",
      category: "Services",
      description: "Residential, commercial & industrial buildings",
      href: "/services/construction-services",
      keywords: ["construction", "building", "residential", "commercial", "industrial"],
    },
    {
      title: "Infrastructure Development",
      category: "Services",
      description: "Roads, bridges, highways and urban development",
      href: "/services/infrastructure-development",
      keywords: ["infrastructure", "roads", "bridges", "highways", "urban"],
    },
    {
      title: "Project Management",
      category: "Services",
      description: "End-to-end project execution and quality control",
      href: "/services/project-management",
      keywords: ["management", "planning", "execution", "quality"],
    },
    {
      title: "Interior & Exterior Works",
      category: "Services",
      description: "Complete painting, plastering, and renovation services",
      href: "/services/interior-exterior",
      keywords: ["interior", "exterior", "painting", "plastering", "renovation"],
    },
    {
      title: "Construction Materials",
      category: "Services",
      description: "Premium quality cement, steel, and finishing materials",
      href: "/services/construction-materials",
      keywords: ["materials", "cement", "steel", "supplies"],
    },
    {
      title: "Residential Projects",
      category: "Projects",
      description: "Modern housing complexes and luxury apartments",
      href: "/projects/residential",
      keywords: ["residential", "apartments", "housing", "homes"],
    },
    {
      title: "Commercial Projects",
      category: "Projects",
      description: "State-of-the-art commercial spaces",
      href: "/projects/commercial",
      keywords: ["commercial", "office", "business", "plaza"],
    },
    {
      title: "Infrastructure Projects",
      category: "Projects",
      description: "Large-scale infrastructure development",
      href: "/projects/infrastructure",
      keywords: ["infrastructure", "roads", "bridges", "government"],
    },
    {
      title: "Urban Infrastructure",
      category: "Sectors",
      description: "Urban development and civic infrastructure",
      href: "/sectors/urban-infrastructure",
      keywords: ["urban", "city", "civic", "development"],
    },
    {
      title: "Advanced Technology Facilities",
      category: "Sectors",
      description: "IT parks, data centers, and technology hubs",
      href: "/sectors/advanced-technology",
      keywords: ["technology", "IT", "data center", "tech hub"],
    },
    {
      title: "Transportation",
      category: "Sectors",
      description: "Highways, bridges, and metro systems",
      href: "/sectors/transportation",
      keywords: ["transportation", "highways", "metro", "transit"],
    },
    {
      title: "Water",
      category: "Sectors",
      description: "Water treatment and distribution infrastructure",
      href: "/sectors/water",
      keywords: ["water", "treatment", "distribution", "reservoir"],
    },
    {
      title: "Mission & Vision",
      category: "About",
      description: "Our mission and vision for the future",
      href: "/about/mission-vision",
      keywords: ["mission", "vision", "goals", "values"],
    },
    {
      title: "Leadership Team",
      category: "About",
      description: "Meet our leadership and management team",
      href: "/about/leadership",
      keywords: ["leadership", "team", "management", "executives"],
    },
    {
      title: "Why Durabuild",
      category: "About",
      description: "What makes us the preferred choice",
      href: "/about/why-durabuild",
      keywords: ["why", "choose", "benefits", "advantages"],
    },
    {
      title: "Contact Us",
      category: "Contact",
      description: "Get in touch with our team",
      href: "/contact",
      keywords: ["contact", "phone", "email", "address", "location"],
    },
    {
      title: "Skill Building & Livelihood",
      category: "CSR",
      description: "Vocational training and skill development",
      href: "/csr/skill-building",
      keywords: ["skill", "training", "vocational", "livelihood"],
    },
    {
      title: "Education",
      category: "CSR",
      description: "Supporting quality education initiatives",
      href: "/csr/education",
      keywords: ["education", "learning", "schools", "scholarships"],
    },
    {
      title: "Health & Hygiene",
      category: "CSR",
      description: "Promoting health awareness and sanitation",
      href: "/csr/health-hygiene",
      keywords: ["health", "hygiene", "sanitation", "wellness"],
    },
    {
      title: "India Run Sports",
      category: "CSR",
      description: "Sports infrastructure and athlete support",
      href: "/csr/india-run-sports",
      keywords: ["sports", "athletics", "fitness", "games"],
    },
  ]

  const searchResults = searchableContent.filter((item) => {
    const query = searchQuery.toLowerCase()
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.keywords.some((keyword) => keyword.includes(query))
    )
  })

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={onClose} />

      {/* Search Dialog */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 p-4 animate-in slide-in-from-top-4 duration-300">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search pages, services, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg border-0 focus-visible:ring-0"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {searchQuery.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Start typing to search...</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Try searching for services, projects, or sectors</p>
              </div>
            ) : (
              <div className="space-y-2">
                {searchResults.map((result, idx) => (
                  <Link
                    key={idx}
                    href={result.href}
                    onClick={onClose}
                    className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#c9a961] uppercase">{result.category}</span>
                        </div>
                        <h3 className="font-bold text-[#0a3d3d] group-hover:text-[#c9a961] transition-colors mb-1">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{result.description}</p>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#c9a961] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {searchQuery.length > 0 && searchResults.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-500 text-center">
              Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
