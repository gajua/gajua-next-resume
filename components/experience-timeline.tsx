"use client"

import { useState } from "react"
import { Project } from "@/data/experiences"
import { experiences } from "@/data/experiences"
import { YearNavigation } from "./experience/year-navigation"
import { ExperienceCard } from "./experience/experience-card"
import { ProjectDetails } from "./experience/project-details"

export default function ExperienceTimeline() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleYears, setVisibleYears] = useState<string[]>(["2025 - Present"])

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
      <YearNavigation
        experiences={experiences}
        visibleYears={visibleYears}
        onToggleYear={toggleYearVisibility}
      />

      <div className="relative">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
          {/* Left column - Experience cards */}
          <div>
            {experiences
              .filter(yearGroup => visibleYears.includes(yearGroup.year))
              .map((yearGroup, yearIndex) => (
                yearGroup.items.map((exp, expIndex) => {
                  const globalIndex = yearIndex * 10 + expIndex;
                  return (
                    <div key={`${yearGroup.year}-${expIndex}`} className="relative flex items-start gap-4">
                      {/* Dot */}
                      <div className="absolute right-[-2rem] top-[2.5rem] z-10">
                        <div
                          className={`w-4 h-4 rounded-full bg-primary z-10 ${
                            expandedExperience === globalIndex ? "ring-4 ring-primary/20" : ""
                          }`}
                        />
                      </div>
                      
                      {/* Card */}
                      <ExperienceCard
                        experience={exp}
                        isExpanded={expandedExperience === globalIndex}
                        onToggle={() => toggleExperience(globalIndex)}
                        onProjectClick={handleProjectClick}
                      />
                    </div>
                  )
                })
              ))}
          </div>
          {/* Center column - Timeline */}
          <div className="relative flex flex-col items-center">
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

