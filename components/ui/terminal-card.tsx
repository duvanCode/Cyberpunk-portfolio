"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TerminalCardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function TerminalCard({ title, children, className }: TerminalCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#00f0ff]/30 bg-[#0a0e27]/90 backdrop-blur-sm overflow-hidden",
        "shadow-[0_0_20px_rgba(0,240,255,0.1)]",
        className,
      )}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a2e] border-b border-[#00f0ff]/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff006e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbe0b]" />
          <div className="w-3 h-3 rounded-full bg-[#00f0ff]" />
        </div>
        {title && <span className="font-mono text-xs text-muted-foreground ml-2">{title}</span>}
      </div>
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  )
}
