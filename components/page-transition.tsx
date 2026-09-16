"use client"

import { useEffect, useRef, type ReactNode } from "react"

// Elements that fade up as they scroll into view. Styles live in app/globals.css ([data-reveal]).
const REVEAL_SELECTOR = [
  "h2",
  '[data-slot="card"]',
  "figure",
  ".rounded-lg.overflow-hidden:has(> img)",
  ".rounded-xl.overflow-hidden:has(> img)",
].join(", ")

const STAGGER_MS = 90
const MAX_STAGGER_MS = 450

export function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    // Only hide elements that start below the fold, so nothing visible ever flickers.
    const fold = window.innerHeight * 0.92
    const targets = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.parentElement?.closest(REVEAL_SELECTOR) && el.getBoundingClientRect().top > fold,
    )
    targets.forEach((el) => el.setAttribute("data-reveal", ""))

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            const el = entry.target as HTMLElement
            observer.unobserve(el)
            el.style.transitionDelay = `${Math.min(index * STAGGER_MS, MAX_STAGGER_MS)}ms`
            el.setAttribute("data-reveal", "in")
            // Hand control back to the element's own styles (e.g. hover effects) once revealed
            timers.push(
              window.setTimeout(() => {
                el.removeAttribute("data-reveal")
                el.style.transitionDelay = ""
              }, 1400),
            )
          })
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
      targets.forEach((el) => {
        el.removeAttribute("data-reveal")
        el.style.transitionDelay = ""
      })
    }
  }, [])

  return (
    <div ref={ref} data-page>
      {children}
    </div>
  )
}
