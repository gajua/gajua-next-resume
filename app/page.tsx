"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceTimeline from "@/components/experience-timeline"
import ContactForm from "@/components/contact-form"
import { useTheme } from "next-themes"
import Image from "next/image"
import { introItems } from "@/data/intro-items"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"

export default function Home() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const [activeIntroItem, setActiveIntroItem] = useState(0)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale, y }} className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            {profile.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8"
          >
            {profile.role}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12"
          >
            {profile.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="rounded-full px-8">
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToAbout}
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>

        {/* Background blur effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -z-10" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full backdrop-blur-md bg-background/50 border border-border/50"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {profile.about}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Introduce.</h3>

              <div className="space-y-6">
                {introItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-md bg-background/50 border border-border/50 rounded-2xl p-6 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setActiveIntroItem(index)}
                    onClick={() => setActiveIntroItem(index)}
                    animate={{
                      backgroundColor:
                        activeIntroItem === index ? "hsl(var(--primary)/0.1)" : "hsl(var(--background)/0.5)",
                    }}
                  >
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">
                      {item.description.split("개발 스터디")[0]}
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary font-medium hover:underline"
                        >
                          🔗{item.link.text}
                        </a>
                      )}
                      {item.description.split("개발 스터디")[1]}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <AnimatedImage items={introItems} activeIndex={activeIntroItem} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <ExperienceTimeline />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function AnimatedImage({ items, activeIndex }: { items: any[]; activeIndex: number }) {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden backdrop-blur-md bg-background/50 border border-border/50 p-1">
      <div className="w-full h-full rounded-[22px] overflow-hidden relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px]" />
    </div>
  )
}

