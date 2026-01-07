export interface Experience {
  id: number
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  projects: string[]
}

export const experience: Experience[] = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "SISMA Corporation S.A.S.",
    location: "Colombia",
    startDate: "Abril 2025",
    endDate: "Actualidad",
    current: true,
    description: "Desarrollo de sistemas empresariales para el sector salud.",
    achievements: [
      "Diseño y optimización de consultas SQL complejas para grandes volúmenes de datos",
      "Desarrollo de APIs RESTful escalables y mantenibles",
      "Implementación de procedimientos almacenados (PL/SQL) de alto rendimiento",
    ],
    technologies: [".NET Core", "SQL Server", "PL/SQL", "PHP", "RESTful APIs"],
    projects: ["Sistema Presupuestal Hospitalario", "Sistema de Costeo Automatizado"],
  },
  {
    id: 2,
    position: "Desarrollador Full Stack",
    company: "SmartInfo",
    location: "Colombia",
    startDate: "Abril 2023",
    endDate: "Marzo 2025",
    current: false,
    description: "Desarrollo de plataformas de telemedicina y monitoreo de salud en tiempo real.",
    achievements: [
      "Arquitectura de sistemas de comunicación en tiempo real (WebSockets, Socket.io)",
      "Autenticación multi-factor y sistemas de seguridad (OAuth 2.0, OTP multicanal)",
      "Integración de webhooks con servicios externos",
      "APIs de geolocalización y tracking en tiempo real",
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "React", "WebSockets", "PostgreSQL"],
    projects: ["Vivlinio", "Doc"],
  },
]
