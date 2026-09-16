import type { ReactNode } from "react"
import { PageTransition } from "@/components/page-transition"

// A template re-mounts on every navigation, so each page gets its own entrance and scroll reveals.
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
