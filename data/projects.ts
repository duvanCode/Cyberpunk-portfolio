export interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  image: string
  demoUrl: string | null
  githubUrl: string | null
  year: string
  role: string
  teamSize: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Vivlinio - Health Monitoring Platform",
    category: "HealthTech",
    description: "Plataforma de monitoreo de datos de salud en tiempo real mediante dispositivos wearables.",
    longDescription:
      "Sistema que recolecta y procesa datos de salud en tiempo real, categorizando información del paciente mediante dispositivos wearables y sensores IoT. La plataforma permite a los profesionales de la salud monitorear múltiples pacientes simultáneamente con alertas automatizadas.",
    technologies: ["Node.js", "Express.js", "React", "WebSockets", "PostgreSQL", "Socket.io"],
    features: [
      "Integración con wearables en tiempo real",
      "Sistema centralizado de procesamiento de datos",
      "Dashboard de monitoreo de pacientes",
      "Alertas y notificaciones automáticas",
    ],
    image: "/health-monitoring-dashboard-dark-theme-neon.jpg",
    demoUrl: null,
    githubUrl: null,
    year: "2023-2024",
    role: "Full Stack Developer",
    teamSize: "4-6 personas",
    highlights: [
      "Arquitectura WebSockets para comunicación en tiempo real",
      "Procesamiento de millones de datos de sensores",
      "Sistema de alertas predictivas",
    ],
  },
  {
    id: 2,
    title: "Doc - Telemedicine Platform",
    category: "HealthTech",
    description: "Plataforma de telemedicina que conecta doctores certificados con pacientes en tiempo real.",
    longDescription:
      "Sistema de conexión rápida y segura entre doctores y pacientes mediante videollamadas y chat en tiempo real. Incluye gestión de citas, historial médico encriptado y sistema de geolocalización para encontrar especialistas cercanos.",
    technologies: ["Node.js", "TypeScript", "React", "WebSockets", "PostgreSQL", "OAuth 2.0"],
    features: [
      "Videollamadas en tiempo real",
      "Sistema de citas programadas",
      "Autenticación multi-factor (OAuth 2.0)",
      "Historial médico encriptado",
      "Geolocalización de doctores",
    ],
    image: "/telemedicine-app-interface-dark-theme.jpg",
    demoUrl: null,
    githubUrl: null,
    year: "2023-2025",
    role: "Full Stack Developer",
    teamSize: "5-8 personas",
    highlights: [
      "Implementación de OTP multicanal (WhatsApp, SMS, Email)",
      "APIs de geolocalización y tracking",
      "Sistema de webhooks con servicios externos",
    ],
  },
  {
    id: 3,
    title: "Sistema Presupuestal Hospitalario",
    category: "Enterprise",
    description: "Plataforma integral de gestión presupuestal multi-hospitalaria en .NET Core.",
    longDescription:
      "Sistema empresarial para optimizar procesos de planificación y control financiero en el sector salud. Maneja múltiples hospitales con distribución automática de centros de costos y reportes financieros en tiempo real.",
    technologies: [".NET Core", "SQL Server", "PL/SQL", "PHP", "RESTful APIs"],
    features: [
      "Gestión presupuestal multi-hospital",
      "Sistema de costeo automatizado",
      "Distribución de centros de costos",
      "Reportes financieros en tiempo real",
    ],
    image: "/financial-dashboard-enterprise-dark-theme.jpg",
    demoUrl: null,
    githubUrl: null,
    year: "2025",
    role: "Full Stack Developer",
    teamSize: "3-5 personas",
    highlights: [
      "Optimización de consultas SQL para millones de registros",
      "Procedimientos almacenados de alto rendimiento",
      "Reducción significativa de tiempos de procesamiento",
    ],
  },
]

export const projectCategories = ["All", "HealthTech", "Enterprise", "Web Development", "Mobile", "IoT", "AI/ML"]
