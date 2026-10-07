"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, Send, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { CONTACT } from "@/lib/navigation"

const whatsappUrl = "https://wa.me/917000329644"
type Message = { role: "user" | "assistant"; text: string }

function getReply(question: string) {
  const text = question.toLowerCase()
  if (/\b(quote|price|cost|budget|estimate)\b/.test(text)) {
    return "For a project quotation, share your project type, location, approximate area, and requirements through our contact form or WhatsApp. Our team can discuss the details with you."
  }
  if (/\b(hours|time|open|working|sunday|saturday)\b/.test(text)) {
    return "Our office hours are Monday to Saturday, 9:00 AM to 5:00 PM. Call +91 70003 29644 to arrange a visit."
  }
  if (/\b(office|address|location|where|visit)\b/.test(text)) {
    return `Our head office is at ${CONTACT.address.join(", ")}. Call +91 70003 29644 to speak with our team.`
  }
  if (/\b(contact|phone|call|number|email|whatsapp|human|person|team)\b/.test(text)) {
    return `Call our office on +91 70003 29644 or email ${CONTACT.email}. You can also use the WhatsApp link below to contact our team directly.`
  }
  if (/\b(service|services|construction|build|building|renovation|interior|material|engineering)\b/.test(text)) {
    return "We offer construction, infrastructure development, architecture and planning, engineering, interiors and exteriors, renovation, material supply, and project management. Explore our Services page or contact us to discuss your project."
  }
  if (/\b(hi|hello|hey|namaste)\b/.test(text)) {
    return "Hello! I can help with Durabuild's services, quotations, office location, working hours, and contact details. What would you like to know?"
  }
  return "I can answer common questions about our services, quotes, office, and contact details. For anything specific to your project, please use the contact form or chat with our team on WhatsApp below."
}

export function SiteAssistant() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! I'm Durabuild's FAQ assistant. Ask me about our services, a project quote, or how to reach our team." },
  ])
  const conversation = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight
  }, [messages, open])

  function ask(question: string) {
    const trimmed = question.trim().slice(0, 500)
    if (!trimmed) return
    setMessages((previous) => [...previous, { role: "user", text: trimmed }, { role: "assistant", text: getReply(trimmed) }])
    setInput("")
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    ask(input)
  }

  return (
    <>
      {pathname === "/" && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
          aria-label="Chat with Durabuild on WhatsApp: +91 70003 29644"
          className="fixed bottom-6 left-4 z-40 flex h-14 items-center gap-2 rounded-full bg-[#128c4a] px-4 text-white shadow-xl transition-colors hover:bg-[#0d733b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:left-6">
          <WhatsAppIcon className="h-7 w-7" />
          <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
        </a>
      )}
      <div className="fixed bottom-24 right-4 z-40 sm:right-6">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button type="button" aria-label={open ? "Close Durabuild assistant" : "Open Durabuild assistant"}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0a3d3d] text-white shadow-xl transition-colors hover:bg-[#164d4d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a3d3d]">
              {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </button>
          </PopoverTrigger>
          <PopoverContent side="top" align="end" sideOffset={12} collisionPadding={16}
            aria-labelledby="assistant-title" aria-describedby="assistant-description"
            className="flex max-h-[min(34rem,calc(100dvh-11rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border-[#0a3d3d]/15 p-0 shadow-2xl">
            <div className="flex shrink-0 items-start justify-between gap-3 bg-[#0a3d3d] p-4 text-white">
              <div>
                <h2 id="assistant-title" className="font-semibold">Durabuild Assistant</h2>
                <p id="assistant-description" className="mt-1 text-xs text-white/80">Automated answers to common questions</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded p-1 hover:bg-white/10"><X className="h-5 w-5" /></button>
            </div>
            <div ref={conversation} role="log" aria-label="Conversation" aria-live="polite" tabIndex={0}
              className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
              {messages.map((message, index) => (
                <div key={index} className={`max-w-[90%] whitespace-pre-wrap break-words rounded-xl px-3 py-2 text-sm leading-relaxed ${message.role === "user" ? "ml-auto bg-[#0a3d3d] text-white" : "border border-slate-200 bg-white text-slate-700"}`}>
                  <span className="sr-only">{message.role === "user" ? "You: " : "Assistant: "}</span>{message.text}
                </div>
              ))}
            </div>
            <div className="shrink-0 space-y-3 border-t bg-white p-3">
              <div className="flex flex-wrap gap-2">
                {["Services", "Get a quote", "Office hours"].map((question) => (
                  <button key={question} type="button" onClick={() => ask(question)} className="rounded-full border border-[#0a3d3d]/20 px-3 py-1.5 text-xs text-[#0a3d3d] hover:bg-slate-100">{question}</button>
                ))}
              </div>
              <form onSubmit={submit} className="flex gap-2">
                <label htmlFor="assistant-question" className="sr-only">Your question</label>
                <input id="assistant-question" value={input} onChange={(event) => setInput(event.target.value)} maxLength={500}
                  placeholder="Type your question…" className="min-w-0 flex-1 rounded-lg border px-3 py-2 text-base focus-visible:outline-[#0a3d3d]" />
                <button type="submit" disabled={!input.trim()} aria-label="Send question" className="rounded-lg bg-[#0a3d3d] px-3 text-white disabled:opacity-40"><Send className="h-4 w-4" /></button>
              </form>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#0a3d3d]">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Talk to us on WhatsApp</a>
                <Link href="/contact" onClick={() => setOpen(false)} className="hover:underline">Contact us</Link>
                <Link href="/services" onClick={() => setOpen(false)} className="hover:underline">Services</Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
