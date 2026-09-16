import type { ReactNode } from "react"

interface PageWrapperProps {
  children: ReactNode
}

// The site header and footer are rendered by app/layout.tsx; this only offsets content below the fixed header.
export function PageWrapper({ children }: PageWrapperProps) {
  return <main className="pt-28">{children}</main>
}
