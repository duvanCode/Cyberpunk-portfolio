"use client"

import { cn } from "@/lib/utils"
import { forwardRef, type ButtonHTMLAttributes } from "react"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "magenta" | "yellow" | "purple"
  size?: "sm" | "md" | "lg"
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", size = "md", children, ...props }, ref) => {
    const variantStyles = {
      cyan: "border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0a0e27] shadow-[0_0_10px_#00f0ff,inset_0_0_10px_rgba(0,240,255,0.1)]",
      magenta:
        "border-[#ff006e] text-[#ff006e] hover:bg-[#ff006e] hover:text-[#0a0e27] shadow-[0_0_10px_#ff006e,inset_0_0_10px_rgba(255,0,110,0.1)]",
      yellow:
        "border-[#ffbe0b] text-[#ffbe0b] hover:bg-[#ffbe0b] hover:text-[#0a0e27] shadow-[0_0_10px_#ffbe0b,inset_0_0_10px_rgba(255,190,11,0.1)]",
      purple:
        "border-[#b537f2] text-[#b537f2] hover:bg-[#b537f2] hover:text-[#0a0e27] shadow-[0_0_10px_#b537f2,inset_0_0_10px_rgba(181,55,242,0.1)]",
    }

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "relative font-mono font-semibold border-2 rounded-lg transition-all duration-300",
          "hover:shadow-[0_0_30px_currentColor] active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className,
          "flex items-center justify-center"
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)
NeonButton.displayName = "NeonButton"
