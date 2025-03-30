import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Project } from "@/data/experiences"

interface ProjectCardProps {
  project: Project
  onClick: () => void
  isActive: boolean
}

export function ProjectCard({ project, onClick, isActive }: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 ${isActive ? "border-primary" : "border-transparent"} hover:border-primary`}
      onClick={onClick} 
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4 p-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h5 className="font-bold flex items-center gap-2">
            {project.name}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 duration-300 ${isActive ? "rotate-90" : ""}`} />
          </h5>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </motion.div>
  )
} 