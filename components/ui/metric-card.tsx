"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface MetricCardProps {
  label: string
  value: number
  unit: string
  color: "cyan" | "magenta" | "yellow" | "purple"
  delay?: number
}

export function MetricCard({ label, value, unit, color, delay = 0 }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const colorStyles = {
    cyan: {
      text: "text-[#00f0ff]",
      bg: "bg-[#00f0ff]",
      border: "border-[#00f0ff]/30",
      shadow: "shadow-[0_0_15px_rgba(0,240,255,0.3)]",
    },
    magenta: {
      text: "text-[#ff006e]",
      bg: "bg-[#ff006e]",
      border: "border-[#ff006e]/30",
      shadow: "shadow-[0_0_15px_rgba(255,0,110,0.3)]",
    },
    yellow: {
      text: "text-[#ffbe0b]",
      bg: "bg-[#ffbe0b]",
      border: "border-[#ffbe0b]/30",
      shadow: "shadow-[0_0_15px_rgba(255,190,11,0.3)]",
    },
    purple: {
      text: "text-[#b537f2]",
      bg: "bg-[#b537f2]",
      border: "border-[#b537f2]/30",
      shadow: "shadow-[0_0_15px_rgba(181,55,242,0.3)]",
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(counter)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <div
      className={cn(
        "relative p-4 rounded-lg border bg-[#1a1a2e]/80 backdrop-blur-sm transition-all duration-500",
        colorStyles[color].border,
        colorStyles[color].shadow,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">{label}</div>
      <div className={cn("text-3xl font-bold font-mono", colorStyles[color].text)}>
        {displayValue}
        <span className="text-lg ml-1">{unit}</span>
      </div>
      {/* Progress bar for percentage values */}
      {unit === "%" && (
        <div className="mt-3 h-1 bg-[#0a0e27] rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-1000", colorStyles[color].bg)}
            style={{ width: isVisible ? `${value}%` : "0%" }}
          />
        </div>
      )}
    </div>
  )
}
