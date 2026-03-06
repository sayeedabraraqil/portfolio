export const personalInfo = {
  name: "Alex Chen",
  title: "Full Stack Developer & Creative Engineer",
  subtitle: "Building the future, one line of code at a time",
  email: "alex@example.com",
  location: "San Francisco, CA",
  bio: "I craft digital experiences that blend technical excellence with creative design. Passionate about building products that make a difference.",
  avatar: "/avatar.jpg",
  resume: "/resume.pdf"
}

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:alex@example.com", icon: "mail" }
]

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  image: string
  github: string
  live: string
  featured: boolean
  color: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NeuralNet Studio",
    description: "AI-powered design tool that generates UI components using machine learning",
    longDescription: "NeuralNet Studio is a revolutionary design tool that leverages machine learning to automatically generate beautiful UI components. Built with Next.js and TensorFlow, it features real-time preview, customizable styles, and seamless export to code.",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML",
    image: "/projects/neural.jpg",
    github: "#",
    live: "#",
    featured: true,
    color: "#6366f1"
  },
  {
    id: 2,
    title: "DevFlow Platform",
    description: "Full-stack project management platform with real-time collaboration",
    longDescription: "A comprehensive project management platform built for modern development teams. Features real-time collaboration, automated CI/CD integration, and intelligent task assignment powered by AI.",
    tech: ["React", "Node.js", "WebSockets", "Redis"],
    category: "Web",
    image: "/projects/devflow.jpg",
    github: "#",
    live: "#",
    featured: true,
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "MobileKit UI",
    description: "Cross-platform mobile UI component library with 200+ components",
    longDescription: "A production-ready mobile UI component library built with React Native. Features 200+ customizable components, dark mode support, and accessibility-first design.",
    tech: ["React Native", "TypeScript", "Storybook"],
    category: "Mobile",
    image: "/projects/mobilekit.jpg",
    github: "#",
    live: "#",
    featured: false,
    color: "#06b6d4"
  },
  {
    id: 4,
    title: "OpenData Hub",
    description: "Open source data visualization and analysis platform",
    longDescription: "An open-source platform for data visualization and analysis. Features drag-and-drop dashboard builder, 50+ chart types, and real-time data streaming capabilities.",
    tech: ["Vue.js", "D3.js", "Python", "Apache Kafka"],
    category: "Open Source",
    image: "/projects/opendata.jpg",
    github: "#",
    live: "#",
    featured: false,
    color: "#10b981"
  },
  {
    id: 5,
    title: "SmartHome AI",
    description: "IoT home automation system with AI-powered energy optimization",
    longDescription: "An intelligent home automation system that uses AI to optimize energy consumption. Supports 1000+ IoT devices, voice commands, and predictive maintenance alerts.",
    tech: ["Python", "TensorFlow", "MQTT", "React"],
    category: "AI/ML",
    image: "/projects/smarthome.jpg",
    github: "#",
    live: "#",
    featured: false,
    color: "#f59e0b"
  },
  {
    id: 6,
    title: "CloudSync Pro",
    description: "Multi-cloud file synchronization and backup solution",
    longDescription: "Enterprise-grade multi-cloud file synchronization solution supporting AWS, GCP, and Azure. Features end-to-end encryption, version history, and automated backup policies.",
    tech: ["Go", "AWS", "GCP", "Docker", "Kubernetes"],
    category: "Web",
    image: "/projects/cloudsync.jpg",
    github: "#",
    live: "#",
    featured: false,
    color: "#ec4899"
  }
]

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  backend: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Linux"],
  other: ["Machine Learning", "UI/UX Design", "System Design", "Agile"]
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  type: string
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "TechCorp AI",
    role: "Senior Frontend Engineer",
    period: "2023 - Present",
    description: "Led development of AI-powered dashboard serving 100k+ users. Implemented real-time data visualization and improved performance by 40%.",
    tech: ["React", "TypeScript", "Python"],
    type: "work"
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built and scaled a SaaS platform from 0 to 10k users. Developed microservices architecture and RESTful APIs.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    type: "work"
  },
  {
    id: 3,
    company: "Google Summer of Code",
    role: "Open Source Contributor",
    period: "2020",
    description: "Contributed to major open source projects. Implemented new features and fixed critical bugs in developer tools.",
    tech: ["Python", "JavaScript", "Go"],
    type: "education"
  },
  {
    id: 4,
    company: "UC Berkeley",
    role: "B.S. Computer Science",
    period: "2017 - 2021",
    description: "Graduated with honors. Focused on algorithms, machine learning, and software engineering principles.",
    tech: ["Java", "Python", "C++"],
    type: "education"
  }
]

export const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "GitHub Stars", value: 2400, suffix: "+" },
  { label: "Cups of Coffee", value: 1337, suffix: "" }
]
