export interface Skill {
  name: string
  category: "frontend" | "backend" | "tools" | "other"
}

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "GraphQL", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "GSAP", category: "frontend" },
] 