import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f5f1e8] text-gray-800">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0a3d3d]">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about/mission-vision"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Vision, Values & Commitments
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about/why-durabuild"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Why Durabuild
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0a3d3d]">Projects</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/projects/residential"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  View More Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/urban-infrastructure"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Regions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0a3d3d]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/construction-services"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Ethics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  More
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0a3d3d]">Careers</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about/why-durabuild"
                  className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm"
                >
                  Why Durabuild
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Life at Durabuild
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0a3d3d]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about/leadership" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  History
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xl font-bold hover:text-[#0a3d3d] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-xl font-bold hover:text-[#0a3d3d] transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xl font-bold hover:text-[#0a3d3d] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xl font-bold hover:text-[#0a3d3d] transition-colors">
                  Suppliers
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-xl font-bold hover:text-[#0a3d3d] transition-colors">
                  Impact Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-horizontal.png"
              alt="Durabuild Infra Build"
              width={180}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <div className="space-y-2 text-gray-800">
              <p className="text-lg font-medium">+91-7000329644</p>
              <p className="text-sm">
                <Link href="mailto:info@durainfra.com" className="hover:text-[#0a3d3d] transition-colors">
                  info@durainfra.com
                </Link>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-gray-700 hover:text-[#0a3d3d] transition-colors text-sm">
                  Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Copyright */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/durainfra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0a3d3d]/10 hover:bg-[#0a3d3d]/20 text-[#0a3d3d] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/durainfra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0a3d3d]/10 hover:bg-[#0a3d3d]/20 text-[#0a3d3d] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/durainfra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0a3d3d]/10 hover:bg-[#0a3d3d]/20 text-[#0a3d3d] flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@durainfra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0a3d3d]/10 hover:bg-[#0a3d3d]/20 text-[#0a3d3d] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">© 2025 Durabuild Corporation</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
