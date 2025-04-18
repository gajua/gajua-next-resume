"use client"

import { useState } from "react"
import { Project } from "@/data/experiences"
import { experiences } from "@/data/experiences"
import { YearNavigation } from "./experience/year-navigation"
import { ExperienceCard } from "./experience/experience-card"
import { ProjectDetails } from "./experience/project-details"
import { motion, AnimatePresence } from "framer-motion"

export default function ExperienceTimeline() {
  const [expandedExperiencePeriod, setExpandedExperiencePeriod] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleYears, setVisibleYears] = useState<string[]>(["2025 - Present"])

  const toggleExperience = (period: string) => {
    if (expandedExperiencePeriod === period) {
      setExpandedExperiencePeriod(null)
      setSelectedProject(null)
    } else {
      setExpandedExperiencePeriod(period)
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
      <YearNavigation
        experiences={experiences}
        visibleYears={visibleYears}
        onToggleYear={toggleYearVisibility}
      />

      <div className="relative">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
          {/* Left column - Experience cards */}
          <div>
            <AnimatePresence>
              {experiences
                .filter(yearGroup => visibleYears.includes(yearGroup.year))
                .map((yearGroup) => (
                  yearGroup.items.map((exp) => (
                    <motion.div
                      key={exp.period}
                      className="relative flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Dot */}
                      <div className="absolute right-[-2rem] top-[2.5rem] z-10">
                        <div
                          className={`w-4 h-4 rounded-full bg-primary z-10 ${
                            expandedExperiencePeriod === exp.period ? "ring-4 ring-primary/20" : ""
                          }`}
                        />
                      </div>
                      
                      {/* Card */}
                      <ExperienceCard
                        experience={exp}
                        isExpanded={expandedExperiencePeriod === exp.period}
                        onToggle={() => toggleExperience(exp.period)}
                        onProjectClick={handleProjectClick}
                        selectedProjectId={selectedProject?.id}
                      />
                    </motion.div>
                  ))
                ))}
            </AnimatePresence>
          </div>
          {/* Center column - Timeline */}
          <div className="relative flex flex-col items-center -z-10">
            <div className="absolute top-0 bottom-0 w-px bg-border/50" />
          </div>
          {/* Right column - Project details */}
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </div>
    </div>
  )
}

