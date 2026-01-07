"use client"

export function ScanLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.1) 2px, rgba(0, 240, 255, 0.1) 4px)",
        }}
      />
      {/* Moving scan line */}
      <div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-20"
        style={{
          animation: "scan-line 8s linear infinite",
        }}
      />
    </div>
  )
}
