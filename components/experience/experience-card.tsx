import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { ExperienceItem, Project } from "@/data/experiences"
import { ProjectCard } from "./project-card"

interface ExperienceCardProps {
  experience: ExperienceItem
  isExpanded: boolean
  onToggle: () => void
  onProjectClick: (project: Project) => void
  selectedProjectId?: string | null
}

export function ExperienceCard({ experience, isExpanded, onToggle, onProjectClick, selectedProjectId }: ExperienceCardProps) {
  return (
    <motion.div
      className={`backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 mb-8 ${
        isExpanded ? "shadow-lg" : ""
      }`}
      whileHover={{
        scale: isExpanded ? 1 : 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Company Header */}
      <div className="p-6 cursor-pointer" onClick={onToggle} tabIndex={0} onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onToggle()
        }
      }} >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden backdrop-blur-md bg-background/30 border border-border/50 flex items-center justify-center flex-shrink-0">
            <Image
              src={experience.logo || "/placeholder.svg"}
              alt={experience.company}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{experience.role}</span>
              <span className="text-sm text-muted-foreground">• {experience.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <div className="h-px w-full bg-border/50 mb-4" />
          <p className="text-muted-foreground mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {experience.skills.map((skill, idx) => (
              <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {skill}
              </span>
            ))}
          </div>

          <h4 className="text-sm font-semibold uppercase mb-4">Projects</h4>
          <div className="grid gap-4">
            {experience.projects.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
                onClick={() => onProjectClick(project)}
                isActive={selectedProjectId === project.id}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 