import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Project } from "@/data/experiences"

interface ProjectDetailsProps {
  project: Project | null
  onClose: () => void
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[400px]"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <ArrowRight className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">Select a Project</h3>
        <p className="text-muted-foreground max-w-xs">
          Click on a project from the timeline to view detailed information about it.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold">{project.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p
          className="text-muted-foreground mb-6"
          dangerouslySetInnerHTML={{
            __html: (project.details || project.description).replace(/\n/g, '<br />'),
          }}
        />

        {project.technologies && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View Project <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  )
} 