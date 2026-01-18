"use client"

import { cn } from "@/lib/utils"
import type { Project } from "@/data/projects"
import { useState } from "react"
import { NeonButton } from "./neon-button"
import { ExternalLink, Github, X } from "lucide-react"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div
        className={cn(
          "group relative rounded-lg border border-[#00f0ff]/20 bg-[#1a1a2e]/80 backdrop-blur-sm overflow-hidden",
          "transition-all duration-500 hover:border-[#00f0ff]/50",
          "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]",
          "cursor-pointer",
        )}
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={() => setIsExpanded(true)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-mono">
            {project.category}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-[#00f0ff] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono rounded bg-[#0a0e27] border border-[#b537f2]/30 text-[#b537f2]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono rounded bg-[#0a0e27] border border-[#ff006e]/30 text-[#ff006e]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Year & Role */}
          <div className="flex justify-between items-center text-xs text-muted-foreground font-mono pt-2 border-t border-[#00f0ff]/10">
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 to-[#b537f2]/5" />
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e27]/90 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto rounded-lg border border-[#00f0ff]/30 bg-[#1a1a2e] shadow-[0_0_50px_rgba(0,240,255,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0a0e27] border border-[#ff006e]/50 text-[#ff006e] hover:bg-[#ff006e] hover:text-[#0a0e27] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
            </div>

            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-mono">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-sm font-mono">{project.year}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#00f0ff]">{project.title}</h2>
              </div>

              <p className="text-muted-foreground">{project.longDescription}</p>

              {/* Features */}
              <div>
                <h4 className="text-sm font-mono text-[#ffbe0b] mb-3 uppercase tracking-wider">Características</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#00f0ff] mt-1">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-mono text-[#ff006e] mb-3 uppercase tracking-wider">Logros Destacados</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#ff006e] mt-1">★</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-mono text-[#b537f2] mb-3 uppercase tracking-wider">Tecnologías</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono rounded bg-[#0a0e27] border border-[#b537f2]/30 text-[#b537f2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#00f0ff]/20">
                <div>
                  <span className="text-xs text-muted-foreground font-mono uppercase">Rol</span>
                  <p className="text-foreground">{project.role}</p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-mono uppercase">Equipo</span>
                  <p className="text-foreground">{project.teamSize}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {project.demoUrl && (
                  <NeonButton variant="cyan" size="sm" onClick={() => window.open(project.demoUrl!, "_blank")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </NeonButton>
                )}
                {project.githubUrl && (
                  <NeonButton variant="purple" size="sm" onClick={() => window.open(project.githubUrl!, "_blank")}>
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </NeonButton>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
