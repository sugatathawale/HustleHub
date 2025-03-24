"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Upload, User, Briefcase, MapPin, Calendar, Mail, Phone, Github, Linkedin, Download, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import GlitchText from "@/components/glitch-text"
import CrazyBackground from "@/components/crazy-background"
import { useRouter } from "next/navigation"
import LoginModal from "@/components/auth/login-modal"
import SignupModal from "@/components/auth/signup-modal"

export default function CustomProjectPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBackToHome = () => {
    // Navigate back to home page
    router.push("/")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setSelectedFiles(prev => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  // Example documentation images
  const documentationImages = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300"
  ]

  const recommendedProjects = [
    {
      id: 1,
      title: "LMS App Using MERN Stack",
      description: "Perfect match for your requirements! Build a complete Learning Management System.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      difficulty: "Intermediate",
      downloadUrl: "/project-files/lms-project.zip",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 2,
      title: "AI Assistant Platform",
      description: "Create your own ChatGPT-like platform with advanced features.",
      technologies: ["Next.js", "OpenAI", "TypeScript"],
      difficulty: "Advanced",
      downloadUrl: "/project-files/ai-assistant.zip",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
      // Optionally redirect to home page
      router.push('/')
    }, 3000)
  }

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CrazyBackground />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white" onClick={handleBackToHome}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>

        <div className="mb-8">
          <GlitchText text="Request Your Custom Project" className="text-3xl font-bold mb-8 text-center" />
          
          {/* Contact info banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-5xl mx-auto mb-10"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 opacity-75 blur-sm" />
            <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-2xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl" />
              
              <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-3 rounded-full">
                    <div className="animate-pulse bg-gradient-to-r from-green-500 to-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="text-white text-lg font-bold">24/7</span>
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400">Need Immediate Assistance?</h3>
                    <p className="text-sm text-gray-300">Our team is available around the clock to answer your queries</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-2 rounded-lg border border-green-500/30">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-white">+1 (888) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-2 rounded-lg border border-green-500/30">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">support@hustlehub.com</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-2 rounded-lg border border-green-500/30">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-8 w-8 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <span className="text-white">+1 (888) 987-6543</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur-sm" />
            <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    FULLY CUSTOMIZED FOR YOU
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Tell Us What You Need</h3>
                  <p className="text-gray-300 mb-6">
                    Submit details about the project you want to build, and our expert team will create a custom solution tailored to your requirements.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-1">✓</div>
                      <p className="text-sm text-gray-300">You define the scope, features, and complexity</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-1">✓</div>
                      <p className="text-sm text-gray-300">We build it with best practices and modern technologies</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-1">✓</div>
                      <p className="text-sm text-gray-300">Receive complete source code with documentation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-green-400 mt-1">✓</div>
                      <p className="text-sm text-gray-300">Optional code walkthrough and explanation</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-5 rounded-lg border border-green-500/20 mb-6">
                    <div className="flex">
                      <div className="mr-3 flex-shrink-0">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-green-300">5.0 (28 reviews)</span>
                        </div>
                        <p className="italic text-green-300 text-sm">
                          "I requested a custom AI chatbot project. Not only did I get amazing code, but I learned so much during the process. Landed a job at a startup the following month!" <span className="font-semibold">- Sarah K.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Documentation showcase */}
                  <h4 className="text-lg font-medium text-green-400 mb-3">Sample Documentation</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {documentationImages.map((img, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="bg-black/50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="11" y1="8" x2="11" y2="14"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          </div>
                        </div>
                        <img src={img} alt={`Documentation example ${index + 1}`} className="w-full h-24 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 opacity-30 blur-sm animate-pulse" />
                    <div className="relative space-y-6 bg-black/90 backdrop-blur-sm p-6 rounded-lg border border-green-500/30">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Project Type</label>
                        <select className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50">
                          <option>Web Application</option>
                          <option>Mobile App</option>
                          <option>AI/ML Project</option>
                          <option>E-commerce Solution</option>
                          <option>Portfolio Website</option>
                          <option>Other (specify below)</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Complexity Level</label>
                        <select className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50">
                          <option>Beginner (Simple features)</option>
                          <option>Intermediate (Multiple features)</option>
                          <option>Advanced (Complex functionality)</option>
                          <option>Expert (Enterprise-level)</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Project Description</label>
                        <textarea 
                          rows={4} 
                          className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50"
                          placeholder="Describe your project requirements, features, and any specific technologies you'd like to use..."
                        ></textarea>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Project Documents (Optional)</label>
                        <div className="relative">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-upload"
                            accept=".pdf,.doc,.docx,.txt,.zip,.rar"
                          />
                          <label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center w-full h-24 px-4 transition bg-black/50 border-2 border-green-500/30 border-dashed rounded-lg cursor-pointer hover:border-green-500/50"
                          >
                            <div className="flex flex-col items-center justify-center pt-2 pb-2">
                              <Upload className="w-6 h-6 mb-2 text-green-400" />
                              <p className="mb-1 text-sm text-gray-300">
                                <span className="font-bold">Upload documents</span>
                              </p>
                              <p className="text-xs text-gray-400">
                                PDF, DOC, DOCX, TXT (MAX. 10MB each)
                              </p>
                            </div>
                          </label>
                        </div>
                        
                        {selectedFiles.length > 0 && (
                          <div className="mt-2">
                            <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto p-2">
                              {selectedFiles.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-2 bg-black/50 border border-green-500/30 rounded-lg"
                                >
                                  <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="text-xs text-gray-300 truncate max-w-[230px]">
                                      {file.name}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => removeFile(index)}
                                    className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                                  >
                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Email Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                            </div>
                            <input 
                              type="email" 
                              className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg py-3 pl-10 pr-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Phone Number (Optional)</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                              </svg>
                            </div>
                            <input 
                              type="tel" 
                              className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg py-3 pl-10 pr-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50"
                              placeholder="+1 (123) 456-7890"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Budget Range</label>
                        <select className="w-full bg-black/80 border-2 border-green-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 hover:border-green-500/50">
                          <option>$500 - $1,000</option>
                          <option>$1,000 - $3,000</option>
                          <option>$3,000 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000+</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded bg-black border-green-500 text-green-500 focus:ring-green-500" />
                          <span className="text-sm text-gray-300">I agree to the <a href="#" className="text-green-400 hover:text-green-300 underline">Terms of Service</a> and <a href="#" className="text-green-400 hover:text-green-300 underline">Privacy Policy</a></span>
                        </label>
                      </div>
                      
                      <div className="space-y-6">
                        <form onSubmit={handleSubmit}>
                          <Button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full py-6 text-lg font-bold shadow-lg shadow-green-500/20 transform transition-all duration-300 hover:translate-y-[-2px]"
                          >
                            Submit Project Request
                          </Button>
                        </form>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-gray-400">You'll receive a response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: 1,
                title: "Submit Requirements",
                description: "Tell us what you need in your custom project"
              },
              {
                number: 2,
                title: "Get Custom Quote",
                description: "Receive a tailored proposal within 24 hours"
              },
              {
                number: 3,
                title: "Receive Your Project",
                description: "Get complete code with documentation and support"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                      <motion.span 
                        className="text-2xl font-bold"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 bg-green-500/90 text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm z-50 flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Project request submitted successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 