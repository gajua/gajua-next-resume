"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="backdrop-blur-md bg-background/50 border border-border/50 rounded-full px-4 py-1.5 text-sm font-medium"
    >
      {name}
    </motion.div>
  )
}

