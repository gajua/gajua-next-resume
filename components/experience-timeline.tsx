"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Project } from "@/data/experiences"
import { experiences } from "@/data/experiences"

export default function ExperienceTimeline() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleYears, setVisibleYears] = useState<string[]>(["2023-present"])


  const toggleExperience = (index: number) => {
    if (expandedExperience === index) {
      setExpandedExperience(null)
      setSelectedProject(null)
    } else {
      setExpandedExperience(index)
      setSelectedProject(null)
    }
  }

  const toggleYearVisibility = (year: string) => {
    if (visibleYears.includes(year)) {
      setVisibleYears(visibleYears.filter((y) => y !== year))
    } else {
      setVisibleYears([...visibleYears, year])
    }
  }

  const handleProjectClick = (project: Project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null)
    } else {
      setSelectedProject(project)
    }
  }

  return (
    <div className="space-y-8">
      {/* Year navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {experiences.map((exp, index) => (
          <Button
            key={index}
            variant={visibleYears.includes(exp.year) ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => toggleYearVisibility(exp.year)}
          >
            <Calendar className="w-4 h-4 mr-2" />
            {exp.year}
          </Button>
        ))}
      </div>

      <div className="relative">
        {/* Main content with timeline */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
          {/* Left column - Company info and projects */}
          <div className="space-y-12">
            {experiences.map((yearGroup, yearIndex) => (
              <AnimatePresence key={yearGroup.year}>
                {visibleYears.includes(yearGroup.year) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    {yearGroup.items.map((exp, expIndex) => {
                      const globalIndex = yearIndex * 10 + expIndex // Ensure unique indices

                      return (
                        <motion.div
                          key={`${yearGroup.year}-${expIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                        >
                          <motion.div
                            className={`backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ${
                              expandedExperience === globalIndex ? "shadow-lg" : ""
                            }`}
                            whileHover={{
                              scale: expandedExperience === globalIndex ? 1 : 1.02,
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            {/* Company Header - Always visible */}
                            <div className="p-6 cursor-pointer" onClick={() => toggleExperience(globalIndex)}>
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden backdrop-blur-md bg-background/30 border border-border/50 flex items-center justify-center flex-shrink-0">
                                  <Image
                                    src={exp.logo || "/placeholder.svg"}
                                    alt={exp.company}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-bold">{exp.company}</h3>
                                    <motion.div
                                      animate={{ rotate: expandedExperience === globalIndex ? 180 : 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    </motion.div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{exp.role}</span>
                                    <span className="text-sm text-muted-foreground">• {exp.period}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                              {expandedExperience === globalIndex && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-6">
                                    <div className="h-px w-full bg-border/50 mb-4" />
                                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                      {exp.skills.map((skill, idx) => (
                                        <span
                                          key={idx}
                                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>

                                    <h4 className="text-sm font-semibold uppercase mb-4">Projects</h4>
                                    <div className="grid gap-4">
                                      {exp.projects.map((project, projectIdx) => (
                                        <motion.div
                                          key={projectIdx}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.3, delay: projectIdx * 0.1 }}
                                          className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 ${
                                            selectedProject?.id === project.id ? "border-primary" : "border-transparent"
                                          }`}
                                          onClick={() => handleProjectClick(project)}
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
                                                <ArrowRight
                                                  className={`w-4 h-4 transition-transform ${
                                                    selectedProject?.id === project.id ? "rotate-90" : "rotate-0"
                                                  }`}
                                                />
                                              </h5>
                                              <p className="text-sm text-muted-foreground">{project.description}</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Center column - Timeline line */}
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 bottom-0 w-px bg-border/50"></div>

            {/* Timeline dots */}
            {experiences.map((yearGroup, yearIndex) => (
              <AnimatePresence key={yearGroup.year}>
                {visibleYears.includes(yearGroup.year) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    {yearGroup.items.map((exp, expIndex) => {
                      const globalIndex = yearIndex * 10 + expIndex
                      return (
                        <motion.div
                          key={`dot-${yearGroup.year}-${expIndex}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative"
                          style={{
                            marginTop: expIndex === 0 ? "2.5rem" : "12rem",
                            marginBottom: expIndex === yearGroup.items.length - 1 ? "6rem" : "0",
                          }}
                        >
                          <div
                            className={`w-4 h-4 rounded-full bg-primary z-10 ${
                              expandedExperience === globalIndex ? "ring-4 ring-primary/20" : ""
                            }`}
                          />
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Right column - Project details */}
          <div className="sticky top-24 h-fit self-start">
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">{selectedProject.details}</p>

                    {selectedProject.technologies && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold uppercase mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, idx) => (
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

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
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
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

