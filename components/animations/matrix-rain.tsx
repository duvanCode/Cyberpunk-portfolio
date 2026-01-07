"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars = "01<>/{}[]();:=+-*&^%$#@!~`|\\ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(10, 14, 39, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00f0ff"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Random color variation
        const colors = ["#00f0ff", "#ff006e", "#b537f2", "#00f0ff"]
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.globalAlpha = Math.random() * 0.5 + 0.1

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      ctx.globalAlpha = 1
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" aria-hidden="true" />
}
