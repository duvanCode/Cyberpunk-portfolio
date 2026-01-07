"use client"

import { useState } from "react"
import { projects, projectCategories } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b537f2] mb-4" style={{ textShadow: "0 0 20px #b537f2" }}>
            {"<"} Proyectos {"/>"}
          </h2>
          <p className="text-muted-foreground font-mono">projects.showcase.init()</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories
            .filter((cat) => cat === "All" || projects.some((p) => p.category === cat))
            .map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
                  "border",
                  activeCategory === category
                    ? "bg-[#00f0ff] text-[#0a0e27] border-[#00f0ff] shadow-[0_0_20px_#00f0ff]"
                    : "bg-transparent text-[#00f0ff] border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_10px_#00f0ff]",
                )}
              >
                {category}
              </button>
            ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">No se encontraron proyectos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  )
}
