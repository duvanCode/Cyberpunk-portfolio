export interface Skill {
  name: string
  level: number
  icon?: string
  category?: string
}

export interface Skills {
  languages: Skill[]
  frontend: Skill[]
  backend: Skill[]
  databases: Skill[]
  realtime: Skill[]
  cloud: Skill[]
  tools: Skill[]
}

export const skills: Skills = {
  languages: [
    { name: "JavaScript", level: 95, category: "language" },
    { name: "TypeScript", level: 90, category: "language" },
    { name: "PHP", level: 85, category: "language" },
    { name: "C#", level: 80, category: "language" },
    { name: "Java", level: 75, category: "language" },
    { name: "SQL", level: 90, category: "language" },
  ],
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Vue.js", level: 85, icon: "💚" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "📄" },
  ],
  backend: [
    { name: "Node.js", level: 95, icon: "🟢" },
    { name: "Express.js", level: 95, icon: "🚂" },
    { name: ".NET Core", level: 85, icon: "🔷" },
    { name: "Laravel", level: 80, icon: "🔺" },
  ],
  databases: [
    { name: "PostgreSQL", level: 90, icon: "🐘" },
    { name: "SQL Server", level: 90, icon: "🗄️" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "MySQL", level: 85, icon: "🐬" },
    { name: "Redis", level: 80, icon: "⚡" },
    { name: "Firebase", level: 75, icon: "🔥" },
  ],
  realtime: [
    { name: "WebSockets", level: 95, icon: "🔌" },
    { name: "Socket.io", level: 95, icon: "⚡" },
    { name: "Server-Sent Events", level: 80, icon: "📡" },
  ],
  cloud: [
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "Google Cloud", level: 75, icon: "🌩️" },
    { name: "Firebase", level: 80, icon: "🔥" },
    { name: "VPS", level: 85, icon: "🖥️" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "📝" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "GitHub", level: 90, icon: "🐙" },
    { name: "Jira", level: 85, icon: "📊" },
    { name: "VSCode", level: 95, icon: "💻" },
  ],
}

export interface SystemMetric {
  label: string
  value: number
  unit: string
  color: "cyan" | "magenta" | "yellow" | "purple"
}

export const systemMetrics: SystemMetric[] = [
  { label: "Code Quality", value: 95, unit: "%", color: "cyan" },
  { label: "Performance", value: 92, unit: "%", color: "magenta" },
  { label: "Security Level", value: 88, unit: "%", color: "yellow" },
  { label: "Scalability", value: 90, unit: "%", color: "purple" },
  { label: "Projects Completed", value: 15, unit: "+", color: "cyan" },
  { label: "Years Experience", value: 3, unit: "y", color: "magenta" },
]
