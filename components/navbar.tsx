"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, Menu, Search } from "lucide-react"
import { DrawerNavigation } from "@/components/drawer-navigation"
import { SearchDialog } from "@/components/search-dialog"
import { NAV_SECTIONS } from "@/lib/navigation"

export function Navbar() {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  const active = NAV_SECTIONS.find((section) => section.id === activeId)

  // Frosted header once the page scrolls, plus a thin reading-progress line
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 8)
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  // Close the dropdown whenever the route changes
  useEffect(() => {
    setActiveId(null)
  }, [pathname])

  useEffect(() => {
    if (!activeId) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [activeId])

  const isCurrentSection = (href: string) => {
    const base = "/" + href.split("/")[1]
    return pathname === base || pathname.startsWith(base + "/")
  }

  return (
    <>
      <DrawerNavigation isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Dim the page while a dropdown is open */}
      <div
        aria-hidden
        className={`fixed inset-0 top-28 z-40 bg-black/25 pointer-events-none transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      <header className="fixed top-0 left-0 right-0 z-50" onMouseLeave={() => setActiveId(null)}>
        <nav
          className={`relative border-b transition-[background-color,box-shadow,border-color] duration-500 ${
            scrolled || active
              ? "bg-white/90 backdrop-blur-xl border-gray-200/70 shadow-[0_10px_30px_-18px_rgba(10,61,61,0.35)]"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div
            ref={progressRef}
            aria-hidden
            className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#c9a961] to-[#e0c98e] [transform:scaleX(0)] transition-none"
          />
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-28">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-horizontal.png"
                  alt="Durabuild Infra Build"
                  width={280}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              </Link>

              <ul className="hidden lg:flex items-center gap-1">
                {NAV_SECTIONS.map((section) => {
                  const open = activeId === section.id
                  const current = isCurrentSection(section.href)
                  return (
                    <li key={section.id} onMouseEnter={() => setActiveId(section.id)}>
                      <Link
                        href={section.href}
                        onFocus={() => setActiveId(section.id)}
                        aria-expanded={open}
                        className={`flex items-center gap-1.5 px-4 xl:px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide transition-colors ${
                          open
                            ? "bg-[#c9a961] text-white"
                            : current
                              ? "bg-[#c9a961]/15 text-[#0a3d3d]"
                              : "text-[#0a3d3d] hover:bg-[#c9a961]/10"
                        }`}
                      >
                        {section.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="flex items-center gap-3" onMouseEnter={() => setActiveId(null)}>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-12 h-12 rounded-full border border-gray-200 text-[#0a3d3d] hover:border-[#c9a961] hover:text-[#c9a961] flex items-center justify-center transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="w-12 h-12 rounded-full bg-[#c9a961] hover:bg-[#b8985a] text-white flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown panel */}
          {active && (
            <div
              key={active.id}
              className="hidden lg:block absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="container mx-auto px-4 lg:px-8 py-10">
                <div className="grid grid-cols-4 gap-10">
                  <div className="col-span-1 border-r border-gray-100 pr-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a961] mb-3">{active.label}</p>
                    <h2 className="text-2xl xl:text-3xl font-bold text-[#0a3d3d] mb-4 text-balance">{active.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{active.description}</p>
                    <Link
                      href={active.cta.href}
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0a3d3d] hover:bg-[#0d4d4d] text-white text-sm font-medium px-5 py-2.5 transition-colors"
                    >
                      {active.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <ul
                    className={`col-span-3 grid gap-2 content-start max-h-[60vh] overflow-y-auto ${
                      active.links.length > 4 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {active.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveId(null)}
                          className="group flex items-center gap-4 p-3 rounded-xl hover:bg-[#f5f1e8] transition-colors"
                        >
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={link.image}
                              alt=""
                              fill
                              sizes="64px"
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-[#0a3d3d] group-hover:text-[#b8985a] transition-colors">
                              {link.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
