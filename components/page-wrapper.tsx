import type { ReactNode } from "react"
import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNavbar />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
  )
}
