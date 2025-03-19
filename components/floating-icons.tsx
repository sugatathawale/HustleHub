"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, FileCode, Braces, Database, Globe, Cpu, Server, Layers } from "lucide-react"

interface FloatingIcon {
  id: number
  icon: JSX.Element
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const iconComponents = [
      <Code key="code" />,
      <FileCode key="filecode" />,
      <Braces key="braces" />,
      <Database key="database" />,
      <Globe key="globe" />,
      <Cpu key="cpu" />,
      <Server key="server" />,
      <Layers key="layers" />,
    ]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 15; i++) {
      newIcons.push({
        id: i,
        icon: iconComponents[i % iconComponents.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-purple-500/20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  )
}

