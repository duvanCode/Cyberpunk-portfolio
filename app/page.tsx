import { MatrixRain } from "@/components/animations/matrix-rain"
import { ScanLines } from "@/components/animations/scan-lines"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0e27] text-[#e0e0e0] overflow-x-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <ScanLines />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <div className="relative z-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
