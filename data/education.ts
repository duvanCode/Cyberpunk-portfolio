export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  status: string
  startYear: string
  endYear: string
  description: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Ingeniería de Software",
    institution: "Universidad de Cartagena",
    location: "Cartagena, Bolívar",
    status: "En curso",
    startYear: "2020",
    endYear: "Presente",
    description: "Formación profesional en desarrollo de software y sistemas",
  },
  {
    id: 2,
    degree: "Tecnólogo en Gestión de Redes de Datos",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    location: "Cartagena, Bolívar",
    status: "Completado",
    startYear: "2021",
    endYear: "Agosto 2022",
    description: "Especialización en gestión y administración de infraestructura de redes",
  },
]

export interface Reference {
  id: number
  name: string
  role: string
  phone: string
  relationship: string
}

export const references: Reference[] = [
  {
    id: 1,
    name: "Óscar Garcés",
    role: "Desarrollador de Software",
    phone: "+57 302 2229456",
    relationship: "Colega profesional",
  },
  {
    id: 2,
    name: "Sergio Vega",
    role: "Desarrollador Mobile",
    phone: "+57 304 3707188",
    relationship: "Colega profesional",
  },
  {
    id: 3,
    name: "Carlos Montalvo",
    role: "Desarrollador de Software",
    phone: "+57 316 8754734",
    relationship: "Colega profesional",
  },
]
