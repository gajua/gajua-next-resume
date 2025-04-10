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
import AnimatedBackground from "@/components/animated-background"

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
    <AnimatedBackground>
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full  blur-[100px] bg-black/5"
          />
          <motion.div style={{ opacity, scale, y }} className="text-center z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            >
              김세원
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8"
            >
              Fontend Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12"
            >
      
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" variant="outline" onClick={scrollToAbout} className="rounded-full px-8">
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
            role="button"
            tabIndex={0}
            aria-label="Scroll to about section"
            onKeyDown={(e) => e.key === 'Enter' && scrollToAbout()}
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              aria-hidden="true"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </header>

        {/* Theme Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full backdrop-blur-md bg-background/50 border border-border/50"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            role="switch"
            aria-checked={theme === 'dark'}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>

        {/* About Section */}
        <section 
          ref={aboutRef} 
          className="py-24 px-4 md:px-6 max-w-6xl mx-auto"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="text-3xl font-bold mb-4">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                유저의 반응에 희열을 느끼고, 문제 해결을 통해 성취감을 즐기는 프론트엔드 엔지니어입니다.
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
                        borderColor: activeIntroItem === index ? "hsl(var(--primary)/0.5)" : "hsl(var(--border))",
                        backgroundColor:
                          activeIntroItem === index ? "hsl(var(--primary)/0.05)" : "hsl(var(--background)/0.15)",
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
        <section 
          className="py-24 px-4 md:px-6 max-w-6xl mx-auto"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <ExperienceTimeline />
        </section>

        {/* Projects Section */}
        <section 
          className="py-24 px-4 md:px-6 max-w-6xl mx-auto"
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading" className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="flex gap-8 items-center justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section 
          className="py-24 px-4 md:px-6 max-w-6xl mx-auto"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 md:px-6 border-t">
          <nav className="max-w-6xl mx-auto text-center">
            <h2 className="sr-only">Footer Navigation</h2>
            <ul className="space-y-2">
              <li>
                <address className="not-italic">
                  Email: <a href="mailto:sewon0325@gmail.com">sewon0325@gmail.com</a>
                </address>
              </li>
              <li>
                GitHub: <a href="https://github.com/gajua">@gajua</a>
              </li>
              <li>
                <address className="not-italic">
                  Phone: <a href="tel:010-9889-8030">010-9889-8030</a>
                </address>
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              © {new Date().getFullYear()} 김세원. All rights reserved.
            </p>
          </nav>
        </footer>
      </main>
    </AnimatedBackground>
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

