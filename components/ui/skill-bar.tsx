"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"

interface SkillBarProps {
  name: string
  level: number
  icon?: string
  delay?: number
}

export function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-foreground flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {name}
        </span>
        <span className="font-mono text-xs text-[#00f0ff]">{level}%</span>
      </div>
      <div className="h-2 bg-[#0a0e27] rounded-full overflow-hidden border border-[#00f0ff]/20">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            "bg-gradient-to-r from-[#00f0ff] to-[#b537f2]",
            "shadow-[0_0_10px_#00f0ff]",
          )}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}
