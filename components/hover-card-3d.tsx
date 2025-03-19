"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface HoverCard3DProps {
  children: React.ReactNode
  glow?: string
}

export default function HoverCard3D({ children, glow = "purple" }: HoverCard3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = (y - centerY) / 10
    const rotateYValue = (centerX - x) / 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setRotateX(0)
        setRotateY(0)
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-${glow}-500 to-purple-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-300`}
      />
      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/30 h-full">
        {children}
      </div>

      {isHovering && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-${glow}-500/10 to-purple-600/10 rounded-xl pointer-events-none`}
          style={{
            transform: "translateZ(20px)",
          }}
        />
      )}
    </motion.div>
  )
}

