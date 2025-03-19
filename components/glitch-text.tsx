"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {text}

        {isGlitching && (
          <>
            <motion.div
              className="absolute inset-0 text-red-500 opacity-80"
              animate={{ x: [-1, 1, 0] }}
              transition={{ duration: 0.2 }}
            >
              {text}
            </motion.div>
            <motion.div
              className="absolute inset-0 text-blue-500 opacity-80"
              animate={{ x: [1, -1, 0] }}
              transition={{ duration: 0.2 }}
            >
              {text}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

