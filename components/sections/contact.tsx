"use client"

import type React from "react"

import { useState } from "react"
import { personalInfo } from "@/data/personal-info"
import { references } from "@/data/education"
import { TerminalCard } from "@/components/ui/terminal-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Send, Linkedin, Github, Mail, Phone, User, MessageSquare } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("¡Mensaje enviado! Te contactaré pronto.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00f0ff] neon-cyan mb-4">
            {"<"} Contacto {"/>"}
          </h2>
          <p className="text-muted-foreground font-mono">connection.establish()</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <TerminalCard title="~/contact/send-message.sh">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                  <User className="w-4 h-4 text-[#00f0ff]" />
                  nombre:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e27] border border-[#00f0ff]/30 text-foreground font-mono focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] outline-none transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                  <Mail className="w-4 h-4 text-[#ff006e]" />
                  email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e27] border border-[#ff006e]/30 text-foreground font-mono focus:border-[#ff006e] focus:shadow-[0_0_10px_#ff006e] outline-none transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-[#b537f2]" />
                  mensaje:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0e27] border border-[#b537f2]/30 text-foreground font-mono focus:border-[#b537f2] focus:shadow-[0_0_10px_#b537f2] outline-none transition-all min-h-[120px] resize-none"
                  placeholder="Tu mensaje..."
                  required
                />
              </div>

              <NeonButton type="submit" variant="cyan" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </NeonButton>
            </form>
          </TerminalCard>

          {/* Contact Info & References */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <TerminalCard title="~/contact/direct.json">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#00f0ff] mb-4">Contacto Directo</h3>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e27] border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#00f0ff]" />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-[#00f0ff]">
                    {personalInfo.email}
                  </span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e27] border border-[#ff006e]/20 hover:border-[#ff006e] transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#ff006e]" />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-[#ff006e]">
                    {personalInfo.phone}
                  </span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e27] border border-[#b537f2]/20 hover:border-[#b537f2] transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-[#b537f2]" />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-[#b537f2]">
                    LinkedIn Profile
                  </span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e27] border border-[#ffbe0b]/20 hover:border-[#ffbe0b] transition-colors group"
                >
                  <Github className="w-5 h-5 text-[#ffbe0b]" />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-[#ffbe0b]">
                    GitHub Profile
                  </span>
                </a>
              </div>
            </TerminalCard>

            {/* References */}
            <TerminalCard title="~/contact/references.list">
              <h3 className="text-lg font-semibold text-[#ffbe0b] mb-4">Referencias</h3>
              <div className="space-y-3">
                {references.map((ref) => (
                  <div key={ref.id} className="p-3 rounded-lg bg-[#0a0e27] border border-[#ffbe0b]/20">
                    <p className="font-semibold text-foreground">{ref.name}</p>
                    <p className="text-sm text-[#ff006e]">{ref.role}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </TerminalCard>
          </div>
        </div>
      </div>
    </section>
  )
}
