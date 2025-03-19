"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Play,
  Pause,
  Star,
  Clock,
  Calendar,
  Award,
  Users,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlitchText from "@/components/glitch-text"
import CrazyBackground from "@/components/crazy-background"
import { useRouter } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // This would normally come from an API or database
  const project = {
    id: Number.parseInt(params.id),
    title: "Full Stack DeepSeek Clone",
    description:
      "Build an AI assistant platform with advanced natural language processing capabilities. This project will teach you how to integrate with OpenAI's API, build a responsive chat interface, and deploy your application to production.",
    longDescription: `
      In this comprehensive project, you'll learn how to build a complete AI assistant platform similar to ChatGPT. 
      
      You'll start by setting up a Next.js application with a modern UI using TailwindCSS. Then, you'll integrate with OpenAI's API to power your AI assistant. You'll learn how to handle streaming responses, manage conversation history, and implement various AI features.
      
      The project covers both frontend and backend development, including:
      
      - Building a responsive chat interface with real-time updates
      - Implementing user authentication and profile management
      - Creating a system for saving and organizing conversations
      - Deploying your application to production with proper security measures
      
      By the end of this project, you'll have a portfolio-ready application that demonstrates your full-stack development skills and understanding of AI integration.
    `,
    image: "/placeholder.svg?height=500&width=1000",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "AI",
    glow: "blue",
    skills: [
      "Next.js",
      "React",
      "OpenAI API",
      "TailwindCSS",
      "Authentication",
      "Deployment",
      "TypeScript",
      "Database Design",
    ],
    difficulty: "Advanced",
    duration: "8 weeks",
    prerequisites: ["Basic React knowledge", "JavaScript fundamentals", "HTML/CSS experience"],
    learningOutcomes: [
      "Build and deploy a full-stack AI application",
      "Integrate with external APIs securely",
      "Implement real-time features in a web application",
      "Design and develop a responsive user interface",
      "Handle authentication and user management",
    ],
    mentor: {
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      company: "Google",
      image: "/placeholder.svg?height=200&width=200",
    },
    reviews: {
      average: 4.8,
      count: 127,
      breakdown: [
        { stars: 5, percentage: 85 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
      ],
    },
    curriculum: [
      {
        title: "Project Setup and Introduction",
        lessons: [
          "Introduction to the project and technologies",
          "Setting up Next.js with TypeScript",
          "Configuring TailwindCSS and UI components",
        ],
      },
      {
        title: "Building the Chat Interface",
        lessons: [
          "Designing the chat UI components",
          "Implementing the chat message system",
          "Adding animations and transitions",
        ],
      },
      {
        title: "OpenAI API Integration",
        lessons: [
          "Setting up the OpenAI client",
          "Handling API requests and responses",
          "Implementing streaming responses",
        ],
      },
      {
        title: "User Authentication and Profiles",
        lessons: [
          "Setting up authentication with NextAuth.js",
          "Creating user profiles and preferences",
          "Securing API routes and data",
        ],
      },
      {
        title: "Conversation Management",
        lessons: [
          "Designing the database schema",
          "Implementing conversation saving and loading",
          "Adding search and filtering capabilities",
        ],
      },
      {
        title: "Advanced Features and Deployment",
        lessons: [
          "Adding advanced AI features and customization",
          "Optimizing performance and user experience",
          "Deploying to Vercel and setting up monitoring",
        ],
      },
    ],
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CrazyBackground />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
              <div className="relative rounded-xl overflow-hidden">
                <div className="relative aspect-video bg-gray-900">
                  <Image
                    src="/placeholder.svg?height=500&width=1000"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-900 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" className="text-white gap-1 p-1">
                      <Play className="h-4 w-4" /> Preview
                    </Button>
                    <div className="w-px h-6 bg-gray-700" />
                    <Button variant="ghost" className="text-white gap-1 p-1">
                      <Download className="h-4 w-4" /> Resources
                    </Button>
                  </div>
                  <Button variant="ghost" className="text-white gap-1 p-1">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="curriculum" onClick={() => setActiveTab("curriculum")}>
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger value="reviews" onClick={() => setActiveTab("reviews")}>
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger value="mentor" onClick={() => setActiveTab("mentor")}>
                    Mentor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <GlitchText text={project.title} className="text-3xl font-bold mb-4" />
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-500">
                        {project.category}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/20 text-white">
                        {project.difficulty}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {project.duration}
                      </span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg">{project.description}</p>
                      <div className="whitespace-pre-line mt-6">{project.longDescription}</div>
                    </div>
                  </div>

                  <div className="mt-8 bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
                    <h3 className="text-xl font-bold mb-4">🚀 Career Boost Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">✅</div>
                        <p>Showcase AI integration skills that are in extremely high demand</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">✅</div>
                        <p>Demonstrate expertise in modern React and Next.js patterns</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">✅</div>
                        <p>Prove your ability to build production-ready, scalable applications</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">✅</div>
                        <p>Stand out with a portfolio piece that actually impresses technical interviewers</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 bg-purple-500/10 p-6 rounded-xl border border-purple-500/20">
                    <h3 className="text-xl font-bold mb-4">📦 What's Included</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">📂</div>
                        <p>Complete source code with clean, documented architecture</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">📝</div>
                        <p>Installation guide and setup instructions</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">🔧</div>
                        <p>Configuration templates for all necessary services</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">🔑</div>
                        <p>API integration examples with secure practices</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">📄</div>
                        <p>Resume bullet points to highlight your implementation (Premium only)</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Skills You'll Learn</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Learning Outcomes</h3>
                    <ul className="space-y-3">
                      {project.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-500">
                            <ChevronRight className="h-4 w-4" />
                          </div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Project Curriculum</h2>

                  <div className="space-y-6">
                    {project.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
                        <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                          <h3 className="text-xl font-bold mb-4">
                            Module {sectionIndex + 1}: {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs font-bold">
                                  {lessonIndex + 1}
                                </div>
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="text-center p-6 bg-gray-900/50 rounded-xl">
                        <div className="text-5xl font-bold mb-2">{project.reviews.average}</div>
                        <div className="flex justify-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(project.reviews.average) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-400">{project.reviews.count} reviews</div>
                      </div>

                      <div className="mt-6 space-y-2">
                        {project.reviews.breakdown.map((item) => (
                          <div key={item.stars} className="flex items-center gap-2">
                            <div className="w-12 text-sm">{item.stars} stars</div>
                            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-500" style={{ width: `${item.percentage}%` }} />
                            </div>
                            <div className="w-8 text-sm text-right">{item.percentage}%</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-4">Student Reviews</h3>

                      {/* This would normally be populated from an API */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="mb-6 p-6 bg-gray-900/50 rounded-xl">
                          <div className="flex justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800">
                                <Image src="/placeholder.svg?height=40&width=40" alt="User" width={40} height={40} />
                              </div>
                              <div>
                                <div className="font-bold">Student {i + 1}</div>
                                <div className="text-sm text-gray-400">2 weeks ago</div>
                              </div>
                            </div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 5 - (i % 2) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p>
                            This project was exactly what I needed to level up my skills. The curriculum is
                            well-structured and the mentor support was excellent. I learned so much and now have an
                            impressive project for my portfolio.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="mentor" className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Meet Your Project Mentor</h2>

                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30">
                          <Image
                            src={project.mentor.image || "/placeholder.svg"}
                            alt={project.mentor.name}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold mb-1">{project.mentor.name}</h3>
                          <p className="text-blue-400 mb-3">
                            {project.mentor.role} at {project.mentor.company}
                          </p>

                          <p className="text-gray-300 mb-4">
                            With over 10 years of experience in web development and AI integration, Alex has worked on
                            projects for major tech companies and startups. He specializes in building scalable
                            applications with modern JavaScript frameworks and has a passion for teaching and mentoring
                            new developers.
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Next.js", "TypeScript", "AI Integration", "System Design"].map(
                              (skill, index) => (
                                <span
                                  key={index}
                                  className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-400"
                                >
                                  {skill}
                                </span>
                              ),
                            )}
                          </div>

                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                            Schedule Interview
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-blue-500/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                            <h4 className="font-bold mb-2">Success Rate</h4>
                            <div className="text-2xl font-bold text-blue-400">94%</div>
                            <p className="text-sm text-gray-400">of mentees land interviews</p>
                          </div>
                          
                          <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                            <h4 className="font-bold mb-2">Mentored</h4>
                            <div className="text-2xl font-bold text-blue-400">200+</div>
                            <p className="text-sm text-gray-400">developers to success</p>
                          </div>
                          
                          <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                            <h4 className="font-bold mb-2">Response Time</h4>
                            <div className="text-2xl font-bold text-blue-400">&lt; 24 hrs</div>
                            <p className="text-sm text-gray-400">quick guidance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 relative overflow-hidden">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-2xl" />
                      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl" />
                      
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Exclusive Mentorship Event</h3>
                        <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Coming Soon</div>
                      </div>
                      
                      <div className="relative mb-6">
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                          In 15 Days!
                        </div>
                        <Image
                          src="/placeholder.svg?height=200&width=600"
                          alt="Mentorship Webinar"
                          width={600}
                          height={200}
                          className="rounded-lg w-full h-[150px] object-cover"
                        />
                      </div>
                      
                      <h4 className="text-lg font-bold mb-2">"Breaking into Tech Giants: Resume & Project Secrets"</h4>
                      <p className="text-gray-300 mb-4">Join {project.mentor.name} for an exclusive live workshop revealing insider tips on what top companies look for in developer portfolios.</p>
                      
                      <div className="p-4 bg-black/40 rounded-lg mb-4 border border-blue-500/20">
                        <p className="italic text-blue-300 text-sm">
                          "Last time we did this, three attendees got calls from FAANG recruiters the same week. Coincidence? I think not!" 
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-400">Early Bird Price</div>
                          <div className="text-xl font-bold text-white">$29.99</div>
                        </div>
                        <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full">
                          Reserve Your Spot
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link href="/mentors" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                      View All Mentors <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-bold mb-4">Elevate Your Developer Portfolio</h3>
                  <p className="text-gray-300 mb-6">
                    This project will make your resume stand out and impress recruiters. Get the complete code and build it yourself!
                  </p>

                  <div className="p-4 bg-blue-500/10 rounded-lg mb-4 border border-blue-500/20">
                    <p className="italic text-blue-300 text-sm">
                      "Recruiters be like: 'Oh, you built a DeepSeek clone? Let me fast-track your application real quick!'" 
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <span>Lifetime access to code</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-400" />
                      <span>Free community support</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Project Code</span>
                      <span className="font-bold text-xl">$49</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">Get the complete source code with documentation</p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-6">
                      Buy Now
                    </Button>
                  </div>

                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg border border-green-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Premium Package</span>
                      <span className="font-bold text-xl">$149</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">Complete source code + 1-on-1 mentor setup and walkthrough</p>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full py-6">
                      Get Premium Access
                    </Button>
                    <p className="text-xs text-center mt-2 text-gray-400">HR-approved resume suggestion included!</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-bold mb-4">Why This Project?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Resume Gold</h4>
                        <p className="text-sm text-gray-300">"So you're telling me this project alone might get me an interview? Shut up and take my money!"</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">Real-World Skills</h4>
                        <p className="text-sm text-gray-300">Builds exactly the skills companies are desperate to hire for right now</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">100% Satisfaction</h4>
                        <p className="text-sm text-gray-300">30-day money-back guarantee if it doesn't impress your potential employers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="relative">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm" />
          <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-2">Purchase</h3>
                <p className="text-gray-300">Choose your package and complete the payment process securely</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-2">Access</h3>
                <p className="text-gray-300">Instantly receive a ZIP folder with complete source code and documentation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-gray-300">Follow the setup guide to get your project running and customize it</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-2">Premium Package Bonus:</h3>
              <p>Get a 45-minute one-on-one call with one of our expert mentors who will help you set up the project, explain the architecture, and provide customization tips to make it truly yours!</p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

