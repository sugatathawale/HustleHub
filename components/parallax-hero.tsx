"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Users } from "lucide-react"
import GlitchText from "./glitch-text"

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div ref={ref} className="relative h-[70vh] overflow-hidden rounded-3xl" style={{ opacity }}>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/80 z-10" style={{ y }} />

      <motion.div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <GlitchText
            text="Find Your Perfect Career Path"
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white"
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Build career-defining projects with guidance from industry experts
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Explore Projects
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg group"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet Mentors
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

