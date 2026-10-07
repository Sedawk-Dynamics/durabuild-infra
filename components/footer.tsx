import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { CONTACT, NAV_SECTIONS } from "@/lib/navigation"

const section = (id: string) => NAV_SECTIONS.find((s) => s.id === id)!

const linkColumns = [
  { heading: "Company", links: [...section("about").links, { title: "Contact Us", href: "/contact" }] },
  {
    heading: "Services",
    links: [...section("services").links.slice(0, 6), { title: "View All Services", href: "/services" }],
  },
  { heading: "Projects", links: [...section("projects").links, { title: "Industry Sectors", href: "/sectors" }] },
  { heading: "CSR", links: [...section("csr").links, { title: "All Initiatives", href: "/csr" }] },
]

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/durainfra", icon: <Instagram className="w-4 h-4" /> },
  { label: "WhatsApp", href: "https://wa.me/917000329644", icon: <WhatsAppIcon className="w-4 h-4" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/durainfra", icon: <Linkedin className="w-4 h-4" /> },
  { label: "Facebook", href: "https://www.facebook.com/durainfra", icon: <Facebook className="w-4 h-4" /> },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/durainfra",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  { label: "YouTube", href: "https://www.youtube.com/@durainfra", icon: <Youtube className="w-4 h-4" /> },
]

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, "")}`

export function Footer() {
  return (
    <footer className="bg-[#0a3d3d] text-white/75">
      {/* Contact strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">Have a project in mind?</h2>
            <p className="mt-2 text-sm">Talk to our team for a free consultation and site visit.</p>
          </div>

          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-3">
            <div className="flex gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
              <Phone className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Call Us</p>
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={telHref(phone)}
                    className="block text-sm font-medium text-white hover:text-[#c9a961] transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
              <Mail className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Email Us</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="block text-sm font-medium text-white hover:text-[#c9a961] transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
              <MapPin className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Visit Us</p>
                {CONTACT.address.map((line) => (
                  <p key={line} className="text-sm font-medium text-white">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block rounded-xl bg-white px-4 py-3">
            <Image src="/logo-horizontal.png" alt="Durabuild Infra Build" width={180} height={57} className="h-11 w-auto" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed max-w-sm">
            A trusted name in construction, real estate, and infrastructure development — building strong
            foundations, modern designs, and sustainable projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c9a961] hover:bg-[#b8985a] text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {linkColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c9a961] mb-5">{column.heading}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 text-sm text-white/60">
            <p>© 2026 Durabuild Infra Build Pvt Corporation. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3" aria-label="Social media">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a961] text-white flex items-center justify-center transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
