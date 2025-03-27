"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { experiences } from "@/data/experiences"

export default function ExperienceTimeline() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [visibleYears, setVisibleYears] = useState<string[]>(["2021-present"])

  const toggleExperience = (index: number) => {
    if (expandedExperience === index) {
      setExpandedExperience(null)
    } else {
      setExpandedExperience(index)
    }
  }

  const toggleYearVisibility = (year: string) => {
    if (visibleYears.includes(year)) {
      setVisibleYears(visibleYears.filter((y) => y !== year))
    } else {
      setVisibleYears([...visibleYears, year])
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
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -ml-px md:ml-0 transform md:-translate-x-1/2" />

        {experiences.map((yearGroup, yearIndex) => (
          <AnimatePresence key={yearGroup.year}>
            {visibleYears.includes(yearGroup.year) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {yearGroup.items.map((exp, expIndex) => {
                  const globalIndex = yearIndex * 10 + expIndex // Ensure unique indices
                  const isEven = globalIndex % 2 === 0

                  return (
                    <motion.div
                      key={`${yearGroup.year}-${expIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                      className={`relative grid md:grid-cols-2 gap-8 mb-12 ${isEven ? "md:text-right" : ""}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 top-7 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10" />

                      {/* Content */}
                      <div className={`${isEven ? "md:col-start-1" : "md:col-start-2"} pl-8 md:pl-0`}>
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
                            <div className={`flex items-center gap-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
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
                                <div className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}>
                                  <h3 className="text-xl font-bold">{exp.company}</h3>
                                  <motion.div
                                    animate={{ rotate: expandedExperience === globalIndex ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                  </motion.div>
                                </div>
                                <div className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}>
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
                                  <p className={`text-muted-foreground mb-4 ${isEven ? "md:text-right" : ""}`}>
                                    {exp.description}
                                  </p>

                                  <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? "md:justify-end" : ""}`}>
                                    {exp.skills.map((skill, idx) => (
                                      <span
                                        key={idx}
                                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>

                                  <h4
                                    className={`text-sm font-semibold uppercase mb-4 ${isEven ? "md:text-right" : ""}`}
                                  >
                                    Projects
                                  </h4>
                                  <div className="grid gap-4">
                                    {exp.projects.map((project, projectIdx) => (
                                      <motion.div
                                        key={projectIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: projectIdx * 0.1 }}
                                        className="group relative rounded-xl overflow-hidden"
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                      >
                                        <div className="relative aspect-video overflow-hidden rounded-xl">
                                          <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <div className="text-white">
                                              <h5 className="font-bold">{project.name}</h5>
                                              <p className="text-sm text-white/80">{project.description}</p>
                                              <a
                                                href="#"
                                                className="inline-flex items-center text-xs text-white mt-2 hover:underline"
                                              >
                                                View Project
                                                <ExternalLink className="w-3 h-3 ml-1" />
                                              </a>
                                            </div>
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
                      </div>

                      {/* Empty column for alternating layout */}
                      <div className={`hidden md:block ${isEven ? "md:col-start-2" : "md:col-start-1"}`} />
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  )
}

