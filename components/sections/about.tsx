"use client"

import { personalInfo } from "@/data/personal-info"
import { systemMetrics } from "@/data/skills"
import { education } from "@/data/education"
import { TerminalCard } from "@/components/ui/terminal-card"
import { MetricCard } from "@/components/ui/metric-card"
import { GraduationCap, MapPin, Code2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00f0ff] neon-cyan mb-4">
            {"<"} Sobre Mí {"/>"}
          </h2>
          <p className="text-muted-foreground font-mono">system.info.load()</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio Terminal */}
          <TerminalCard title="~/about/bio.md">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00f0ff]">
                <Code2 className="w-4 h-4" />
                <span className="font-semibold">{personalInfo.name}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <span className="text-[#ff006e]">{">"}</span> {personalInfo.bio}
              </p>

              <div className="pt-4 border-t border-[#00f0ff]/20 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-[#ffbe0b]" />
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#b537f2]">📧</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#00f0ff] hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#ff006e]">📱</span>
                  <span className="text-muted-foreground">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </TerminalCard>

          {/* Education */}
          <TerminalCard title="~/education/timeline.json">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-6">
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#00f0ff] to-[#b537f2]" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#0a0e27] border-2 border-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#ffbe0b]" />
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${edu.status === "En curso" ? "bg-[#00f0ff]/20 text-[#00f0ff]" : "bg-[#b537f2]/20 text-[#b537f2]"}`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-[#ff006e]">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.startYear} - {edu.endYear} • {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TerminalCard>
        </div>

        {/* System Metrics */}
        <div className="mt-12">
          <h3 className="text-xl font-mono text-center text-[#ffbe0b] mb-8">[ SYSTEM_METRICS.monitor() ]</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {systemMetrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                unit={metric.unit}
                color={metric.color}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
