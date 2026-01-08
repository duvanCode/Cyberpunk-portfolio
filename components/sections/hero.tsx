"use client"

import { personalInfo } from "@/data/personal-info"
import { GlitchText } from "@/components/ui/glitch-text"
import { NeonButton } from "@/components/ui/neon-button"
import { useEffect, useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

// Generar posiciones fijas para evitar hydration mismatch
const NEURAL_LINES = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x1: (i * 7 + 13) % 100,
  y1: (i * 11 + 23) % 100,
  x2: (i * 13 + 37) % 100,
  y2: (i * 17 + 41) % 100,
  delay: i * 0.2,
}))

const FLOATING_PARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: (i * 13 + 17) % 100,
  top: (i * 19 + 29) % 100,
  opacity: 0.2 + (i % 5) * 0.1,
  duration: 3 + (i % 4),
  delay: (i % 3) * 0.7,
}))

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [mounted, setMounted] = useState(false)
  const fullText = personalInfo.subtitle

  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#00f0ff" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
          {/* Animated connection lines - Fixed positions */}
          {NEURAL_LINES.map((line) => (
            <line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="#00f0ff"
              strokeWidth="0.5"
              opacity="0.2"
              className="animate-pulse"
              style={{ animationDelay: `${line.delay}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#00f0ff]" />
        </div>

        {/* Avatar with Neon Border */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#b537f2] to-[#ff006e] animate-spin-slow opacity-75 blur-sm"
            style={{ animationDuration: "3s" }}
          />
          <img
            src={personalInfo.avatar || "/placeholder.svg"}
            alt={personalInfo.name}
            className="relative w-full h-full rounded-full object-cover border-4 border-[#0a0e27]"
          />
          {/* Online Status Indicator */}
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#00f0ff] border-4 border-[#0a0e27] animate-pulse" />
        </div>

        {/* Name with Glitch Effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <GlitchText text={personalInfo.name} className="text-[#00f0ff] neon-cyan" />
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ff006e] mb-4 font-mono">{personalInfo.title}</h2>

        {/* Animated Subtitle */}
        <div className="h-8 mb-8">
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            {typedText}
            <span className="inline-block w-2 h-5 bg-[#00f0ff] ml-1 animate-pulse" />
          </p>
        </div>

        {/* Location */}
        <p className="text-muted-foreground mb-8 font-mono text-sm">📍 {personalInfo.location}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NeonButton
            variant="cyan"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contactar
          </NeonButton>
          <NeonButton
            variant="magenta"
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Proyectos
          </NeonButton>
        </div>

      </div>

      {/* Floating particles - Fixed positions */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {FLOATING_PARTICLES.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-[#00f0ff]"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}