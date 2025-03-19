"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Star, ArrowRight, Compass, Play, Code, Sparkles, Clock, Layers } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CrazyBackground from "@/components/crazy-background"
import FloatingIcons from "@/components/floating-icons"
import GlitchText from "@/components/glitch-text"
import HoverCard3D from "@/components/hover-card-3d"
import NeonSidebar from "@/components/neon-sidebar"
import ParallaxHero from "@/components/parallax-hero"
import MentorSection from "@/components/mentor-section"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const { setTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    setTheme("dark")

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [setTheme])

  if (!mounted) return null

  const projects = [
    {
      id: 1,
      title: "Full Stack DeepSeek Clone",
      description: "Build an AI assistant platform with advanced natural language processing capabilities",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI",
      glow: "blue",
      skills: ["Next.js", "React", "OpenAI API", "TailwindCSS"],
      difficulty: "Advanced",
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "LMS App Using MERN Stack",
      description: "Create a complete learning management system with courses, quizzes, and user progress tracking",
      image: "/placeholder.svg?height=300&width=500",
      category: "Education",
      glow: "green",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      difficulty: "Intermediate",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "E-Commerce App using Next.js",
      description: "Build a fully functional online store with payment processing and inventory management",
      image: "/placeholder.svg?height=300&width=500",
      category: "E-Commerce",
      glow: "pink",
      skills: ["Next.js", "Stripe", "MongoDB", "TailwindCSS"],
      difficulty: "Intermediate",
      duration: "5 weeks",
    },
    {
      id: 4,
      title: "Responsive Portfolio Website",
      description: "Create a stunning portfolio website to showcase your skills and projects to potential employers",
      image: "/placeholder.svg?height=300&width=500",
      category: "Portfolio",
      glow: "yellow",
      skills: ["React", "Framer Motion", "TailwindCSS", "Three.js"],
      difficulty: "Beginner",
      duration: "3 weeks",
    },
    {
      id: 5,
      title: "Job Portal App Using MERN Stack",
      description: "Build a platform for job seekers and employers with advanced filtering and application tracking",
      image: "/placeholder.svg?height=300&width=500",
      category: "Jobs",
      glow: "cyan",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      difficulty: "Advanced",
      duration: "7 weeks",
    },
    {
      id: 6,
      title: "AI Image Generator SaaS App",
      description: "Create a text-to-image generation platform with subscription tiers and gallery features",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI",
      glow: "purple",
      skills: ["React", "Node.js", "Stable Diffusion API", "Stripe"],
      difficulty: "Advanced",
      duration: "6 weeks",
    },
  ]

  const mentors = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      company: "Google",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["React", "Next.js", "UI/UX"],
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Full Stack Engineer",
      company: "Microsoft",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["MERN Stack", "AWS", "System Design"],
      rating: 4.8,
      reviews: 93,
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "AI Specialist",
      company: "OpenAI",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Machine Learning", "Python", "LLMs"],
      rating: 5.0,
      reviews: 84,
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Senior Backend Developer",
      company: "Amazon",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Node.js", "Databases", "System Architecture"],
      rating: 4.7,
      reviews: 112,
    },
  ]

  const handleProjectClick = (id: number) => {
    router.push(`/project/${id}`)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <CrazyBackground />
      <FloatingIcons />

      {/* Cursor follower */}
      <div
        className="fixed w-24 h-24 rounded-full pointer-events-none mix-blend-screen bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-xl z-10"
        style={{
          left: `${mousePosition.x - 48}px`,
          top: `${mousePosition.y - 48}px`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="flex">
        <NeonSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <header className="relative z-20 flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="relative w-12 h-12"
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
                <div className="absolute inset-1 flex items-center justify-center rounded-md bg-black">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    H
                  </span>
                </div>
              </motion.div>
              <GlitchText text="HustleHub." className="text-2xl font-bold" />
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm animate-pulse" />
                <div className="relative flex items-center gap-2 bg-black/80 backdrop-blur-sm p-3 px-6 rounded-full border border-purple-500/30">
                  <Flame className="text-orange-500 animate-pulse" />
                  <span className="text-sm">Find your perfect career path today!</span>
                  <Button className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full animate-bounce">
                    MEET YOUR MENTOR!
                  </Button>
                </div>
              </motion.div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <ParallaxHero />

                <div className="mt-12">
                  <div className="flex items-center justify-between mb-8">
                    <GlitchText text="Career-Building Projects" className="text-3xl font-bold" />
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 gap-2">
                      View all projects <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 6).map((project) => (
                      <HoverCard3D key={project.id} glow={project.glow} onClick={() => handleProjectClick(project.id)}>
                        <div className="p-6 h-full flex flex-col">
                          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full bg-${project.glow}-500/20 text-${project.glow}-500`}
                              >
                                {project.category}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                                {project.difficulty}
                              </span>
                            </div>
                            <div className="absolute top-3 right-3">
                              <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                                <Clock className="h-3 w-3 text-white" />
                                <span className="text-xs text-white">{project.duration}</span>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                {skill}
                              </span>
                            ))}
                            {project.skills.length > 3 && (
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                +{project.skills.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="mt-auto flex justify-between items-center">
                            <Button variant="ghost" className="text-white/70 hover:text-white gap-1 p-0">
                              <Play className="h-4 w-4 text-red-500" /> Watch preview
                            </Button>
                            <Button
                              className={`bg-${project.glow}-500/20 text-${project.glow}-500 hover:bg-${project.glow}-500/30 rounded-full`}
                            >
                              <Sparkles className="mr-2 h-4 w-4" /> View Project
                            </Button>
                          </div>
                        </div>
                      </HoverCard3D>
                    ))}
                  </div>
                </div>

                <div className="mt-20">
                  <GlitchText text="Meet Your Career Mentors" className="text-3xl font-bold mb-8 text-center" />
                  <MentorSection mentors={mentors} />
                </div>

                <div className="mt-20 mb-10">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 text-center">
                      <h2 className="text-3xl font-bold mb-4">Ready to accelerate your career?</h2>
                      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get personalized guidance from industry experts and build projects that will make your portfolio
                        stand out.
                      </p>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg">
                        Start Your Journey Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <GlitchText text="All Career-Building Projects" className="text-3xl font-bold mb-8" />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                      <HoverCard3D key={project.id} glow={project.glow} onClick={() => handleProjectClick(project.id)}>
                        <div className="p-6 h-full flex flex-col">
                          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full bg-${project.glow}-500/20 text-${project.glow}-500`}
                              >
                                {project.category}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                                {project.difficulty}
                              </span>
                            </div>
                            <div className="absolute top-3 right-3">
                              <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                                <Clock className="h-3 w-3 text-white" />
                                <span className="text-xs text-white">{project.duration}</span>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                {skill}
                              </span>
                            ))}
                            {project.skills.length > 3 && (
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                +{project.skills.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="mt-auto flex justify-between items-center">
                            <Button variant="ghost" className="text-white/70 hover:text-white gap-1 p-0">
                              <Play className="h-4 w-4 text-red-500" /> Watch preview
                            </Button>
                            <Button
                              className={`bg-${project.glow}-500/20 text-${project.glow}-500 hover:bg-${project.glow}-500/30 rounded-full`}
                            >
                              <Sparkles className="mr-2 h-4 w-4" /> View Project
                            </Button>
                          </div>
                        </div>
                      </HoverCard3D>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "mentors" && (
              <motion.div
                key="mentors"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <GlitchText text="Find Your Perfect Mentor" className="text-3xl font-bold mb-8 text-center" />
                  <MentorSection mentors={mentors} expanded={true} />
                </div>
              </motion.div>
            )}

            {activeTab === "career" && (
              <motion.div
                key="career"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <GlitchText text="Your Career Path" className="text-3xl font-bold mb-8" />

                  <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 transform -translate-x-1/2" />

                    {[
                      {
                        title: "Beginner",
                        description: "Start with the fundamentals of web development",
                        icon: <Code />,
                      },
                      {
                        title: "Frontend Developer",
                        description: "Master React and modern UI frameworks",
                        icon: <Compass />,
                      },
                      {
                        title: "Full Stack Developer",
                        description: "Learn backend technologies and databases",
                        icon: <Layers />,
                      },
                      {
                        title: "Specialized Expert",
                        description: "Become an expert in AI, DevOps, or Mobile",
                        icon: <Star />,
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative mb-16 ${index % 2 === 0 ? "ml-auto pl-12 pr-0" : "mr-auto pr-12 pl-0"} w-full md:w-1/2`}
                      >
                        <div className="absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-1/2 z-10" />
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                          <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 rounded-full bg-purple-500/20 text-purple-500">{step.icon}</div>
                              <h3 className="text-2xl font-bold">{step.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{step.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {Array.from({ length: 3 + index }).map((_, i) => (
                                <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                  Skill {i + 1}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

