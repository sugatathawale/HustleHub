"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Calendar, MessageSquare } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Mentor {
  id: number
  name: string
  role: string
  company: string
  image: string
  expertise: string[]
  rating: number
  reviews: number
}

interface MentorSectionProps {
  mentors: Mentor[]
  expanded?: boolean
}

export default function MentorSection({ mentors, expanded = false }: MentorSectionProps) {
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mentors.map((mentor) => (
        <motion.div
          key={mentor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: mentor.id * 0.1 }}
          className="relative group"
          onMouseEnter={() => setHoveredMentor(mentor.id)}
          onMouseLeave={() => setHoveredMentor(null)}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 h-full flex flex-col">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-300">
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {hoveredMentor === mentor.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-2"
                  >
                    <span className="text-xs text-white font-medium px-2 py-1 rounded-full bg-purple-500/50 backdrop-blur-sm">
                      View Profile
                    </span>
                  </motion.div>
                )}
              </div>

              <h3 className="text-xl font-bold">{mentor.name}</h3>
              <p className="text-purple-400">{mentor.role}</p>
              <p className="text-sm text-gray-400 mb-3">{mentor.company}</p>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">{mentor.reviews} reviews</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {mentor.expertise.map((skill, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto space-y-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full gap-2">
                <MessageSquare className="h-4 w-4" /> Message
              </Button>
              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 rounded-full gap-2"
              >
                <Calendar className="h-4 w-4" /> Schedule Session
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

