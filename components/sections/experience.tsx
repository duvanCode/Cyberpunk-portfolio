"use client"

import { experience } from "@/data/experience"
import { TerminalCard } from "@/components/ui/terminal-card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff006e] neon-magenta mb-4">
            {"<"} Experiencia {"/>"}
          </h2>
          <p className="text-muted-foreground font-mono">career.timeline.render()</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#b537f2] to-[#ff006e] hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a0e27] border-3 border-[#00f0ff] shadow-[0_0_20px_#00f0ff] hidden md:block z-10">
                  {exp.current && <div className="absolute inset-1 rounded-full bg-[#00f0ff] animate-pulse" />}
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <TerminalCard title={`~/experience/${exp.company.toLowerCase().replace(/\s/g, "-")}.log`}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Briefcase className="w-4 h-4 text-[#ff006e]" />
                          <h3 className="text-lg font-semibold text-[#00f0ff]">{exp.position}</h3>
                        </div>
                        <p className="text-[#ff006e] font-semibold">{exp.company}</p>
                        <div
                          className={`flex flex-wrap gap-3 text-xs text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        >
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                        {exp.current && (
                          <span className="inline-block px-2 py-1 text-xs rounded bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50">
                            ACTIVO
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm">{exp.description}</p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs font-mono text-[#ffbe0b] mb-2 uppercase tracking-wider">Logros</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-[#00f0ff] mt-1">▹</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono rounded bg-[#0a0e27] border border-[#b537f2]/30 text-[#b537f2]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TerminalCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
