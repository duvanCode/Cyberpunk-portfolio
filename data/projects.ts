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
    id: 4,
    title: "Synaptic Net - Neural Networks Library",
    category: "Machine Learning",
    description: "Librería PHP ligera para construir y entrenar redes neuronales desde cero con funciones de activación personalizables.",
    longDescription:
      "Synaptic Net es una librería educativa de PHP que permite construir y entrenar redes neuronales simples sin depender de frameworks externos de ML. Implementa neuronas personalizables, capas, funciones de activación (Sigmoid, ReLU) y backpropagation desde cero, siendo ideal para aprender cómo interactúan internamente los componentes de una red neuronal.",
    technologies: ["PHP", "Machine Learning", "Backpropagation", "Neural Networks"],
    features: [
      "Neuronas y capas personalizables",
      "Múltiples funciones de activación (Sigmoid, ReLU)",
      "Implementación de backpropagation desde cero",
      "Soporte para perceptrones multicapa (MLP)",
      "Código educativo y completamente legible",
    ],
    image: "/neural-network-visualization-dark.png",
    demoUrl: null,
    githubUrl: "https://github.com/duvanCode/synaptic_net",
    year: "2024",
    role: "Full Stack Developer",
    teamSize: "Individual",
    highlights: [
      "Implementación completa de redes neuronales en PHP puro",
      "Algoritmo de backpropagation educativo y optimizado",
      "Ejemplo funcional del problema XOR con >98% de precisión",
    ],
  },
  {
    id: 5,
    title: "Payment Checkout System",
    category: "E-commerce",
    description: "Sistema completo de checkout y procesamiento de pagos con arquitectura limpia y frontend reactivo.",
    longDescription:
      "Sistema de e-commerce full-stack que maneja el flujo completo de una transacción: desde la selección de productos hasta el procesamiento de pagos mediante integración con pasarelas externas. El backend implementa Clean Architecture con separación de responsabilidades (Domain, Application, Infrastructure), mientras el frontend ofrece una experiencia fluida con Redux y React. Incluye gestión de stock en tiempo real, webhooks para notificaciones asíncronas y sincronización de estados.",
    technologies: [
      "NestJS",
      "TypeScript",
      "React",
      "Redux",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Jest",
      "Axios",
    ],
    features: [
      "Clean Architecture con alta cobertura de pruebas (98%+)",
      "Integración completa con pasarelas de pago",
      "Procesamiento de webhooks asíncronos",
      "Gestión de stock en tiempo real",
      "Checkout multi-paso con validación inline",
      "API REST documentada con Swagger",
      "Sistema de sincronización de estados",
      "Diseño responsivo y micro-animaciones",
    ],
    image: "/payment-checkout-system-dark.png",
    demoUrl: "http://pay.store.ondeploy.space",
    githubUrl: "https://github.com/duvanCode/payment-checkout-system-front",
    year: "2024-2025",
    role: "Full Stack Developer",
    teamSize: "Individual",
    highlights: [
      "Arquitectura escalable y mantenible con Clean Architecture",
      "Sistema completo de gestión de transacciones y stock",
      "Cobertura de pruebas del 98% en capas críticas",
      "Integración fluida frontend-backend con estado centralizado",
    ],
  },
  {
    id: 6,
    title: "Cloud Server Extension",
    category: "Productivity",
    description: "Extensión de Chrome para compartir archivos y portapapeles entre dispositivos de forma rápida y sencilla.",
    longDescription:
      "Extensión de navegador Chrome que facilita el intercambio de archivos y contenido del portapapeles entre múltiples dispositivos. Permite acceder a tus archivos desde cualquier lugar con solo iniciar sesión. Desarrollada en JavaScript vanilla con una arquitectura interesante para frontend sin frameworks pesados.",
    technologies: ["JavaScript Vanilla", "Chrome Extension API", "OAuth 2.0", "QR Login"],
    features: [
      "Múltiples métodos de autenticación (tradicional, OAuth 2.0, QR)",
      "Carga rápida de archivos a la nube",
      "Portapapeles sincronizado entre dispositivos",
      "Acceso instantáneo desde cualquier PC o móvil",
      "Arquitectura frontend sin frameworks externos",
    ],
    image: "/cloud-extension-chrome-dark.png",
    demoUrl: null,
    githubUrl: "https://github.com/duvanCode/cloudServerExtension",
    year: "2024",
    role: "Frontend Developer",
    teamSize: "Individual",
    highlights: [
      "Implementación de múltiples métodos de autenticación",
      "Arquitectura vanilla JS escalable y modular",
      "Sincronización en tiempo real del portapapeles",
    ],
  },
]
export const projectCategories = ["All", "Productivity", "E-commerce", "Machine Learning", "Mobile", "IoT", "AI/ML"]
