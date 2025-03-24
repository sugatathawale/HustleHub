"use client"

import { motion } from "framer-motion"

const quotes = [
  "Be selfish, think of your CV first 😈",
  "Your resume looking like heaven? More like 404 Not Found 😇",
  "I'm not lazy, I'm just in power saving mode 🔋",
  "Why do programmers prefer dark mode? Because light attracts bugs 🪲",
  "My code doesn't have bugs, it has random features 🎲",
  "Git push --force (because I'm a rebel) 🏴‍☠️",
  "404: Work-Life Balance Not Found 💀",
  "I don't always test my code, but when I do, I do it in production 🚀"
]

export default function FloatingQuotes() {
  return (
    <div className="relative w-full overflow-hidden bg-black/20 rounded-xl py-8">
      <div className="animate-scroll">
        <div className="flex space-x-8 px-4">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="relative px-6 py-4 rounded-xl bg-black/40 border border-purple-500/20 backdrop-blur-sm">
                <p className="text-xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 