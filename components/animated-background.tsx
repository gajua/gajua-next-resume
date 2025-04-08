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

  const baseRotateX = useTransform(smoothScroll, [0, 1], [0, 90])
  const baseRotateY = useTransform(smoothScroll, [0, 1], [0, 180])
  const baseRotateZ = useTransform(smoothScroll, [0, 1], [0, 135])

  const throttledMouseMove = (e: MouseEvent) => {
    if (!window.requestAnimationFrame) {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 2 - 1
      const y = (clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    } else {
      window.requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const x = (clientX / window.innerWidth) * 2 - 1
        const y = (clientY / window.innerHeight) * 2 - 1
        setMousePosition({ x, y })
      })
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", throttledMouseMove)
    return () => window.removeEventListener("mousemove", throttledMouseMove)
  }, [])


  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      aria-hidden="true"
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 우측 위 큰 원*/}
        <motion.div
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full border border-primary/10 backdrop-blur-3xl"
          style={{
            willChange: "transform",
            transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0)`,
            rotateX: baseRotateX,
            rotateY: baseRotateY,
            rotateZ: baseRotateZ,
          }}
        />

        {/* 좌측 작은 원*/}
        <motion.div
          className="absolute bottom-1/4 left-[15%] w-[300px] h-[300px] rounded-full border border-primary/10 backdrop-blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
          style={{
            willChange: "transform",
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          animate={{ rotate: -360 }}
        />

        {/* 우측 중앙 작은 원*/}
        <motion.div
          className="absolute top-[60%] right-[25%] w-[200px] h-[200px] rounded-full border border-primary/10 backdrop-blur-3xl shadow-[0_0_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(255,255,255,0.02)]"
          style={{
            rotate: baseRotateX,
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
        />

        {/* 좌측 위 작은 네모*/}
        <motion.div
          className="absolute top-[20%] left-[20%] w-[250px] h-[250px] rounded-3xl border border-primary/10 backdrop-blur-3xl shadow-[0_0_35px_rgba(0,0,0,0.08)] dark:shadow-[0_0_35px_rgba(255,255,255,0.03)]"
          style={{
            rotate: baseRotateZ,
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          animate={{ rotate: -360 }}
        />

        {/* 우측 아래 작은 네모 */}
        <motion.div
          className="absolute bottom-[15%] right-[15%] w-[350px] h-[200px] rounded-3xl border border-primary/10 backdrop-blur-3xl shadow-[0_0_40px_rgba(0,0,0,0.09)] dark:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
          style={{
            rotate: baseRotateY,
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          animate={{ rotate: 360 }}
        />
      </div>

      {children}
    </div>
  )
}

