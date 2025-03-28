"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 80,
    mass: 1.2
  })

  const baseRotateX = useTransform(smoothScroll, [0, 1], [0, 180])
  const baseRotateY = useTransform(smoothScroll, [0, 1], [0, 360])
  const baseRotateZ = useTransform(smoothScroll, [0, 1], [0, 270])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 2 - 1
      const y = (clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full border border-primary/10 backdrop-blur-3xl"
          style={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
            rotateX: baseRotateX,
            rotateY: baseRotateY,
            rotateZ: baseRotateZ,
          }}
          animate={{ rotate: 360 }}
          transition={{
            rotate: {
              duration: 50,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-[15%] w-[300px] h-[300px] rounded-full border border-primary/10 backdrop-blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
          style={{
            rotate: baseRotateY,
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute top-[60%] right-[25%] w-[200px] h-[200px] rounded-full border border-primary/10 backdrop-blur-3xl shadow-[0_0_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(255,255,255,0.02)]"
          style={{
            rotate: baseRotateX,
            x: mousePosition.x * 15,
            y: mousePosition.y * 15,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute top-[20%] left-[20%] w-[250px] h-[250px] rounded-3xl border border-primary/10 backdrop-blur-3xl shadow-[0_0_35px_rgba(0,0,0,0.08)] dark:shadow-[0_0_35px_rgba(255,255,255,0.03)]"
          style={{
            rotate: baseRotateZ,
            x: mousePosition.x * -25,
            y: mousePosition.y * -25,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 100, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[15%] w-[350px] h-[200px] rounded-3xl border border-primary/10 backdrop-blur-3xl shadow-[0_0_40px_rgba(0,0,0,0.09)] dark:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
          style={{
            rotate: baseRotateY,
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 110, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
          style={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          style={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      {children}
    </div>
  )
}

