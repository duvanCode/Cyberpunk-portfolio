"use client"

import { skills } from "@/data/skills"
import { SkillBar } from "@/components/ui/skill-bar"
import { TerminalCard } from "@/components/ui/terminal-card"

export function Skills() {
  const skillCategories = [
    { key: "languages" as const, title: "Lenguajes", color: "#00f0ff" },
    { key: "frontend" as const, title: "Frontend", color: "#ff006e" },
    { key: "backend" as const, title: "Backend", color: "#b537f2" },
    { key: "databases" as const, title: "Bases de Datos", color: "#ffbe0b" },
    { key: "realtime" as const, title: "Real-Time", color: "#00f0ff" },
    { key: "cloud" as const, title: "Cloud & DevOps", color: "#ff006e" },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffbe0b] neon-yellow mb-4">
            {"<"} Skills {"/>"}
          </h2>
          <p className="text-muted-foreground font-mono">skills.analyze.scan()</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <TerminalCard key={category.key} title={`~/skills/${category.key}.config`}>
              <div className="space-y-1 mb-4">
                <h3 className="text-lg font-semibold" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <div className="h-0.5 w-12 rounded" style={{ backgroundColor: category.color }} />
              </div>
              <div className="space-y-4">
                {skills[category.key].map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={categoryIndex * 100 + index * 50}
                  />
                ))}
              </div>
            </TerminalCard>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-12">
          <TerminalCard title="~/skills/tools.list">
            <h3 className="text-lg font-semibold text-[#b537f2] mb-4">Herramientas & Tecnologías</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a0e27] border border-[#b537f2]/30 hover:border-[#b537f2] transition-colors group"
                >
                  <span className="text-lg">{tool.icon}</span>
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-[#b537f2] transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  )
}
