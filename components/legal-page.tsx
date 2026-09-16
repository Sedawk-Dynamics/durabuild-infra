import type { ReactNode } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { CONTACT } from "@/lib/navigation"

export interface LegalSection {
  id: string
  title: string
  body: ReactNode
}

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-[#0a3d3d] to-[#0d4d4d] text-white pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c9a961] mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{title}</h1>
            <p className="text-lg text-white/80 leading-relaxed">{intro}</p>
            <p className="mt-6 text-sm text-white/60">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="On this page" className="lg:sticky lg:top-36">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">On this page</p>
              <ol className="space-y-1 border-l border-gray-200">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block -ml-px border-l-2 border-transparent pl-4 py-1.5 text-sm text-muted-foreground hover:text-[#0a3d3d] hover:border-[#c9a961] transition-colors"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="lg:col-span-9 max-w-3xl">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="pb-10 mb-10 border-b border-gray-100 last:border-0">
                <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4 flex gap-3">
                  <span className="text-[#c9a961]">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-[#0a3d3d] [&_a]:text-[#0a3d3d] [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-[#b8985a]">
                  {section.body}
                </div>
              </section>
            ))}

            <div className="rounded-2xl bg-[#f5f1e8] p-8">
              <h2 className="text-xl font-bold text-[#0a3d3d] mb-2">Questions about this page?</h2>
              <p className="text-muted-foreground mb-6">
                Reach out to us and we&apos;ll respond as soon as possible.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 text-sm">
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                  <a href={`mailto:${CONTACT.email}`} className="text-[#0a3d3d] font-medium break-all hover:text-[#b8985a]">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                  <div>
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="block text-[#0a3d3d] font-medium hover:text-[#b8985a]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                  <p className="text-[#0a3d3d] font-medium">{CONTACT.address.join(", ")}</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0a3d3d] hover:bg-[#0d4d4d] text-white text-sm font-medium px-5 py-2.5 transition-colors"
              >
                Go to Contact Page
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
