"use client"

import { useState, useEffect } from "react"
import { personalInfo } from "@/data/personal-info"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a0e27]/90 backdrop-blur-md border-b border-[#00f0ff]/20 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-mono font-bold text-xl text-[#00f0ff] hover:text-[#ff006e] transition-colors">
            {"<"}
            {personalInfo.name.split(" ")[0]} {"/>"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-sm transition-all duration-300 relative",
                  activeSection === item.href.replace("#", "")
                    ? "text-[#00f0ff]"
                    : "text-muted-foreground hover:text-[#00f0ff]",
                )}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#00f0ff] hover:text-[#ff006e] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#00f0ff]/20">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-mono text-sm py-2 px-4 rounded transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-[#00f0ff] bg-[#00f0ff]/10"
                      : "text-muted-foreground hover:text-[#00f0ff] hover:bg-[#00f0ff]/5",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
