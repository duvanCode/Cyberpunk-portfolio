"use client"

import { personalInfo } from "@/data/personal-info"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-[#00f0ff]/20 bg-[#0a0e27]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-xl text-[#00f0ff] mb-2">
              {"<"}
              {personalInfo.name} {"/>"}
            </p>
            <p className="text-sm text-muted-foreground">© {currentYear} Todos los derechos reservados</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#b537f2]/30 text-[#b537f2] hover:bg-[#b537f2] hover:text-[#0a0e27] transition-all duration-300 hover:shadow-[0_0_20px_#b537f2]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#ffbe0b]/30 text-[#ffbe0b] hover:bg-[#ffbe0b] hover:text-[#0a0e27] transition-all duration-300 hover:shadow-[0_0_20px_#ffbe0b]"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0a0e27] transition-all duration-300 hover:shadow-[0_0_20px_#00f0ff]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono flex items-center justify-center gap-1">
            Desarrollado con <Heart className="w-3 h-3 text-[#ff006e] fill-[#ff006e]" /> y mucho ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
