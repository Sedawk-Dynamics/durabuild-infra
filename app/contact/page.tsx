"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    query: "",
    message: "",
  })

  // Web3Forms public access key (safe to expose client-side).
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "6017c6cb-c86f-4800-bb05-06e6c18d7053"

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setStatusMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${formData.name || "website"} — ${formData.query || "General"}`,
          from_name: "Durabuild Website",
          ...formData,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        setStatusMessage("Thank you! Your message has been sent. Our team will get back to you within 24 hours.")
        setFormData({ name: "", organization: "", email: "", phone: "", query: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const officeLocations = [
    {
      title: "Dehradun (Head Office)",
      address: "Maruti Vihar, Raipur, Dehradun, Uttarakhand - 248008",
      phone: "+91-9855665557",
      phone2: "6399015656",
      email: "info@gmail.com",
    },
    {
      title: "Mumbai Office",
      address: "Coming Soon - Corporate Centre, Andheri East, Mumbai - 400069",
      phone: "+91-9855665557",
      email: "mumbai@gmail.com",
    },
    {
      title: "Delhi Office",
      address: "Coming Soon - Connaught Place, New Delhi - 110001",
      phone: "+91-9855665557",
      email: "delhi@gmail.com",
    },
    {
      title: "Bangalore Office",
      address: "Coming Soon - Whitefield, Bangalore - 560066",
      phone: "+91-9855665557",
      email: "bangalore@gmail.com",
    },
    {
      title: "Hyderabad Office",
      address: "Coming Soon - HITEC City, Hyderabad - 500081",
      phone: "+91-9855665557",
      email: "hyderabad@gmail.com",
    },
    {
      title: "Pune Office",
      address: "Coming Soon - Hinjewadi, Pune - 411057",
      phone: "+91-9855665557",
      email: "pune@gmail.com",
    },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d3d] to-[#164d4d]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our team for project consultations and inquiries
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">General Enquiries</h3>
                <a href="mailto:info@gmail.com" className="text-primary hover:underline">
                  info@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone Support</h3>
                <a href="tel:9855665557" className="text-primary hover:underline">
                  +91-9855665557
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Support Enquiries</h3>
                <a href="mailto:support@gmail.com" className="text-primary hover:underline">
                  support@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Office Phone</h3>
                <a href="tel:6399015656" className="text-primary hover:underline">
                  6399015656
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0a3d3d] to-[#164d4d]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Presence Across India</h2>
            <div className="h-1 w-32 bg-[#c5a572]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0a3d3d] mb-6">{office.title}</h3>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-[#0a9bd7] flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700 leading-relaxed">{office.address}</p>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-[#0a9bd7] flex-shrink-0" />
                      <div className="text-sm">
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-gray-700 hover:text-[#0a3d3d] transition-colors"
                        >
                          {office.phone}
                        </a>
                        {office.phone2 && (
                          <>
                            <br />
                            <a
                              href={`tel:${office.phone2.replace(/[^0-9+]/g, "")}`}
                              className="text-gray-700 hover:text-[#0a3d3d] transition-colors"
                            >
                              {office.phone2}
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-[#0a9bd7] flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-gray-700 hover:text-[#0a3d3d] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Drop Us A Line</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium mb-2">
                        Organisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your organization"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Id <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="query" className="block text-sm font-medium mb-2">
                      What is my query about? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Query</option>
                      <option value="Civil Construction">Civil Construction</option>
                      <option value="Infrastructure Development">Infrastructure Development</option>
                      <option value="Real Estate">Real Estate & Housing</option>
                      <option value="Interior & Exterior">Interior & Exterior Works</option>
                      <option value="Construction Materials">Construction Materials Supply</option>
                      <option value="Project Management">Project Management & Consultancy</option>
                      <option value="Job Enquiry">Job Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Start typing here..."
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto px-12"
                      disabled={status === "sending"}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {status === "sending" ? "Sending..." : "Submit"}
                    </Button>

                    {status === "success" && (
                      <p
                        role="status"
                        className="text-sm font-medium text-[#0a3d3d] bg-[#c9a961]/10 border border-[#c9a961]/30 rounded-lg px-4 py-3"
                      >
                        {statusMessage}
                      </p>
                    )}
                    {status === "error" && (
                      <p
                        role="alert"
                        className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                      >
                        {statusMessage}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Head Office</h2>
            <p className="text-lg text-muted-foreground">Visit us or reach out through any of our channels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Dehradun Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Maruti Vihar, Raipur
                      <br />
                      Dehradun, Uttarakhand 248008
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Contact Numbers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <a href="tel:9855665557" className="hover:text-primary transition-colors">
                        +91-9855665557
                      </a>
                      <br />
                      <a href="tel:6399015656" className="hover:text-primary transition-colors">
                        6399015656
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday - Saturday
                      <br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-muted">
                <iframe
                  src="https://maps.google.com/maps?q=Maruti+Vihar+Raipur+Dehradun+Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow us on Social Media</h2>
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/durainfra"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057 1.645.069 4.849.069 3.204 0 3.584-.012 4.849-.072 4.358-.2 6.78 2.618 6.98 6.98.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/durainfra"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/919855665557"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
