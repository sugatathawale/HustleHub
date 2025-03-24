"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Star, ArrowRight, Compass, Play, Code, Sparkles, Clock, Layers, Filter, Lock, CheckCircle } from "lucide-react"
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
import FloatingQuotes from "@/components/floating-quotes"
import AdminLoginButton from "@/components/admin-login-button"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const { setTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    setMounted(true)
    setTheme("dark")

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Redirect to /custom-project when that tab is selected
    if (activeTab === "custom-project") {
      router.push("/custom-project")
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [setTheme, activeTab, router])

  if (!mounted) return null

  const projects = [
    {
      id: 1,
      title: "Full Stack DeepSeek Clone",
      description: "Build an AI assistant platform with advanced natural language processing capabilities",
      image: "/placeholder.svg?height=300&width=500",
      category: "Fullstack",
      glow: "blue",
      skills: ["Next.js", "React", "OpenAI API", "TailwindCSS"],
      difficulty: "Advanced",
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "Modern React Dashboard",
      description: "Create a beautiful and responsive admin dashboard with React and TailwindCSS",
      image: "/placeholder.svg?height=300&width=500",
      category: "Frontend",
      glow: "pink",
      skills: ["React", "TailwindCSS", "Charts.js", "Framer Motion"],
      difficulty: "Intermediate",
      duration: "4 weeks",
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true
    return project.category.toLowerCase() === activeFilter
  })

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "fullstack", label: "Full Stack", icon: "🚀" },
    { id: "hero", label: "Hero Projects", icon: "⭐" }
  ]

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
              <AdminLoginButton />
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
                  <div className="flex flex-col space-y-6 mb-8">
                    <div className="flex items-center justify-between">
                      <GlitchText text="Career-Building Projects" className="text-3xl font-bold" />
                      <Button variant="ghost" className="text-purple-400 hover:text-purple-300 gap-2">
                        View all projects <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          onClick={() => setActiveFilter(category.id)}
                          className={`rounded-full transition-all duration-300 ${
                            activeFilter === category.id
                              ? "bg-purple-600 text-white"
                              : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                          }`}
                        >
                          <span className="mr-2">{category.icon}</span>
                          {category.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 via-black to-blue-900 border border-purple-500/20">
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                      </div>
                      
                      <div className="relative p-8 flex flex-col md:flex-row items-center gap-6">
                        {/* Project Preview */}
                        <div className="w-full md:w-1/2">
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <div className="absolute top-2 right-2 px-3 py-1 bg-purple-500 text-white text-xs rounded-full animate-pulse">
                              New Launch 🚀
                            </div>
                            <img 
                              src="/full-stack-deepseak.png" 
                              alt="Full Stack DeepSeek Clone" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="w-full md:w-1/2 space-y-4">
                          <h2 className="text-2xl font-bold text-white">
                            Full Stack DeepSeek Clone
                          </h2>
                          <p className="text-gray-300">
                            Build an AI assistant platform similar to ChatGPT. This project will significantly boost your portfolio and catch recruiters' attention.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-purple-300">
                              <CheckCircle className="w-5 h-5" />
                              <span>Perfect for FAANG company applications</span>
                            </div>
                            <div className="flex items-center gap-2 text-purple-300">
                              <CheckCircle className="w-5 h-5" />
                              <span>Demonstrates full-stack expertise</span>
                            </div>
                            <div className="flex items-center gap-2 text-purple-300">
                              <CheckCircle className="w-5 h-5" />
                              <span>Shows AI integration capabilities</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                              Start Building Now
                            </Button>
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {[1,2,3].map((i) => (
                                  <div key={i} className="w-8 h-8 rounded-full border-2 border-purple-900 bg-gray-800">
                                    <img 
                                      src={`/user${i}.jpg`} 
                                      alt="User" 
                                      className="w-full h-full rounded-full"
                                    />
                                  </div>
                                ))}
                              </div>
                              <span className="text-sm text-gray-400">
                                +45 developers enrolled this week
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => handleProjectClick(project.id)}
                        className="cursor-pointer"
                      >
                        <HoverCard3D glow={project.glow}>
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
                                <span className={`text-xs px-2 py-1 rounded-full bg-${project.glow}-500/20 text-${project.glow}-500`}>
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
                              <Button className={`bg-${project.glow}-500/20 text-${project.glow}-500 hover:bg-${project.glow}-500/30 rounded-full`}>
                                <Sparkles className="mr-2 h-4 w-4" /> View Project
                              </Button>
                            </div>
                          </div>
                        </HoverCard3D>
                      </motion.div>
                    ))}
                  </motion.div>
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

                  {/* Featured Projects Slider */}
                  <div className="relative mb-12 overflow-hidden">
                    {/* Add a wrapper for continuous sliding */}
                    <div 
                      className="animate-scroll hover:animation-play-state-paused"
                      style={{ display: 'flex', gap: '1.5rem' }}
                    >
                      {/* First set of cards */}
                      <div className="flex gap-6 min-w-max">
                        {/* Featured Project Card 1 */}
                        <div className="w-[400px]">
                          <div className="relative rounded-xl bg-gradient-to-r from-blue-900 via-black to-purple-900 border border-blue-500/20 overflow-hidden">
                            <div className="p-6">
                              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full animate-pulse z-10">
                                Most Popular 🔥
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3">LMS App Using MERN Stack</h3>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">MongoDB</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Express</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">React</span>
                              </div>

                              <p className="text-sm text-gray-300 mb-4">
                                Build a complete LMS that will impress FAANG recruiters. Used by developers now at Google & Meta.
                              </p>

                              <div className="flex items-center justify-between">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                                  Start Building
                                </Button>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-2">
                                    {[1,2].map((i) => (
                                      <div key={i} className="w-6 h-6 rounded-full border-2 border-blue-900 bg-gray-800 overflow-hidden">
                                        <img 
                                          src={`/user${i}.jpg`} 
                                          alt="Developer" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-400">+120 enrolled</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Featured Project Card 2 */}
                        <div className="w-[400px]">
                          <div className="relative rounded-xl bg-gradient-to-r from-purple-900 via-black to-pink-900 border border-purple-500/20 overflow-hidden">
                            <div className="p-6">
                              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full animate-pulse z-10">
                                New Launch 🚀
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3">AI Assistant Platform</h3>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Next.js</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">OpenAI</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">TypeScript</span>
                              </div>

                              <p className="text-sm text-gray-300 mb-4">
                                Create a ChatGPT-like platform. Perfect for showing AI integration skills to employers.
                              </p>

                              <div className="flex items-center justify-between">
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                                  View Project
                                </Button>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-2">
                                    {[1,2].map((i) => (
                                      <div key={i} className="w-6 h-6 rounded-full border-2 border-purple-900 bg-gray-800 overflow-hidden">
                                        <img 
                                          src={`/user${i}.jpg`} 
                                          alt="Developer" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-400">+45 enrolled</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duplicate the cards for continuous scrolling */}
                      <div className="flex gap-6 min-w-max">
                        {/* Duplicate of Featured Project Card 1 */}
                        <div className="w-[400px]">
                          <div className="relative rounded-xl bg-gradient-to-r from-blue-900 via-black to-purple-900 border border-blue-500/20 overflow-hidden">
                            <div className="p-6">
                              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full animate-pulse z-10">
                                Most Popular 🔥
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3">LMS App Using MERN Stack</h3>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">MongoDB</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Express</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">React</span>
                              </div>

                              <p className="text-sm text-gray-300 mb-4">
                                Build a complete LMS that will impress FAANG recruiters. Used by developers now at Google & Meta.
                              </p>

                              <div className="flex items-center justify-between">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                                  Start Building
                                </Button>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-2">
                                    {[1,2].map((i) => (
                                      <div key={i} className="w-6 h-6 rounded-full border-2 border-blue-900 bg-gray-800 overflow-hidden">
                                        <img 
                                          src={`/user${i}.jpg`} 
                                          alt="Developer" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-400">+120 enrolled</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Duplicate of Featured Project Card 2 */}
                        <div className="w-[400px]">
                          <div className="relative rounded-xl bg-gradient-to-r from-purple-900 via-black to-pink-900 border border-purple-500/20 overflow-hidden">
                            <div className="p-6">
                              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full animate-pulse z-10">
                                New Launch 🚀
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3">AI Assistant Platform</h3>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Next.js</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">OpenAI</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">TypeScript</span>
                              </div>

                              <p className="text-sm text-gray-300 mb-4">
                                Create a ChatGPT-like platform. Perfect for showing AI integration skills to employers.
                              </p>

                              <div className="flex items-center justify-between">
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                                  View Project
                                </Button>
                                
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-2">
                                    {[1,2].map((i) => (
                                      <div key={i} className="w-6 h-6 rounded-full border-2 border-purple-900 bg-gray-800 overflow-hidden">
                                        <img 
                                          src={`/user${i}.jpg`} 
                                          alt="Developer" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-400">+45 enrolled</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rest of your project grid remains the same */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                      <div key={project.id} onClick={() => handleProjectClick(project.id)} className="cursor-pointer">
                        <HoverCard3D glow={project.glow}>
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
                      </div>
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
                  
                  {/* Sliding announcement card */}
                  <div className="relative mb-12 overflow-hidden">
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: "0%" }}
                      transition={{ 
                        type: "spring", 
                        damping: 20, 
                        stiffness: 100,
                        delay: 0.3
                      }}
                      className="relative max-w-3xl mx-auto"
                    >
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur-sm animate-pulse" />
                      <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-2xl" />
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl" />
                        
                        <div className="flex items-center justify-between relative z-10">
                          <div>
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 animate-pulse">
                              BIGGEST EVENT YET!
                            </div>
                            <h3 className="text-xl font-bold mb-2">Tech Career Transformation Summit</h3>
                            <p className="text-gray-300 text-sm mb-2">
                              Join all our top mentors for a 3-hour immersive session that could redefine your entire career trajectory!
                            </p>
                            <div className="flex items-center gap-2 text-xs mt-3">
                              <div className="bg-black/60 text-white px-2 py-1 rounded-full border border-white/20">
                                In 15 days
                              </div>
                              <div className="bg-black/60 text-white px-2 py-1 rounded-full border border-white/20">
                                Limited to 50 participants
                              </div>
                              <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full font-medium">
                                30 spots left!
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-400 line-through">$199</div>
                            <div className="text-2xl font-bold text-white mb-2">$79</div>
                            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full whitespace-nowrap">
                              Reserve Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
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

            {activeTab === "assets" && (
              <motion.div
                key="assets"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 text-center max-w-2xl">
                      <h2 className="text-3xl font-bold mb-6">
                        <GlitchText text="Resources Coming Soon" />
                      </h2>
                      <p className="text-xl text-gray-300 mb-6">
                        We're preparing a comprehensive collection of resources to help you accelerate your career journey.
                      </p>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                          <Button className="relative bg-black hover:bg-black/90 text-white border border-purple-500/30 rounded-full px-6 py-3">
                            Get Notified When Ready
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "stars" && (
              <motion.div
                key="stars"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 text-center max-w-2xl">
                      <h2 className="text-3xl font-bold mb-6">
                        <GlitchText text="Success Stories Coming Soon" />
                      </h2>
                      <p className="text-xl text-gray-300 mb-6">
                        We're collecting inspiring success stories from our community members who have transformed their careers with HustleHub.
                      </p>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                          <Button className="relative bg-black hover:bg-black/90 text-white border border-purple-500/30 rounded-full px-6 py-3">
                            Submit Your Story
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "certified" && (
              <motion.div
                key="certified"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 text-center max-w-2xl">
                      <h2 className="text-3xl font-bold mb-6">
                        <GlitchText text="Certification Coming Soon" />
                      </h2>
                      <p className="text-xl text-gray-300 mb-6">
                        Our industry-recognized certification program is under development. Get certified and stand out in the job market!
                      </p>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                          <Button className="relative bg-black hover:bg-black/90 text-white border border-purple-500/30 rounded-full px-6 py-3">
                            Join Waitlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "courses" && (
              <motion.div
                key="courses"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 text-center max-w-2xl">
                      <h2 className="text-3xl font-bold mb-6">
                        <GlitchText text="Courses Coming Soon" />
                      </h2>
                      <p className="text-xl text-gray-300 mb-6">
                        Our team is working on creating high-quality courses taught by industry experts to help you master in-demand skills.
                      </p>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                          <Button className="relative bg-black hover:bg-black/90 text-white border border-purple-500/30 rounded-full px-6 py-3">
                            Get Early Access
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Add this section for the floating quotes */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Developer Wisdom™ 
          </h2>
          <FloatingQuotes />
        </motion.div>
      </section>

      <footer className="py-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-gray-500 hover:text-gray-400 text-sm flex items-center gap-2"
            onClick={() => router.push('/admin/login')}
          >
            <Lock className="w-3 h-3" />
            Admin Access
          </Button>
        </div>
      </footer>
    </div>
  )
}

