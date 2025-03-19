"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Award, 
  Briefcase, 
  Linkedin, 
  Github,
  CheckCircle,
  Video,
  MessageSquare,
  Share2
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlitchText from "@/components/glitch-text"
import CrazyBackground from "@/components/crazy-background"
import { useRouter } from "next/navigation"

export default function MentorPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("about")
  const [showBookingModal, setShowBookingModal] = useState(false)

  // This would normally come from an API or database
  const mentor = {
    id: Number.parseInt(params.id),
    name: params.id === "1" ? "Alex Johnson" : 
          params.id === "2" ? "Sophia Chen" : 
          params.id === "3" ? "Marcus Williams" : "Priya Sharma",
    role: params.id === "1" ? "Senior Frontend Developer" : 
          params.id === "2" ? "Full Stack Engineer" : 
          params.id === "3" ? "AI Specialist" : "Senior Backend Developer",
    company: params.id === "1" ? "Google" : 
             params.id === "2" ? "Microsoft" : 
             params.id === "3" ? "OpenAI" : "Amazon",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 10 years of experience in tech, I've helped hundreds of developers land their dream jobs through personalized mentorship and portfolio development. My specialty is preparing candidates for technical interviews and helping them stand out in competitive application processes.",
    expertise: params.id === "1" ? ["React", "Next.js", "UI/UX", "JavaScript", "Technical Interviews"] : 
              params.id === "2" ? ["MERN Stack", "AWS", "System Design", "Algorithms", "Career Planning"] : 
              params.id === "3" ? ["Machine Learning", "Python", "LLMs", "AI Engineering", "Research"] : 
              ["Node.js", "Databases", "System Architecture", "API Design", "Performance"],
    successRate: "94%",
    placements: ["Google", "Meta", "Amazon", "Microsoft", "Startups"],
    yearsExperience: params.id === "1" ? 12 : params.id === "2" ? 8 : params.id === "3" ? 10 : 9,
    mentored: params.id === "1" ? 240 : params.id === "2" ? 150 : params.id === "3" ? 180 : 200,
    rating: params.id === "1" ? 4.9 : params.id === "2" ? 4.8 : params.id === "3" ? 5.0 : 4.7,
    reviews: params.id === "1" ? 127 : params.id === "2" ? 93 : params.id === "3" ? 84 : 112,
    hourlyRate: params.id === "1" ? 149 : params.id === "2" ? 129 : params.id === "3" ? 179 : 139,
    availableDates: [
      "May 15, 2023 - 10:00 AM",
      "May 15, 2023 - 2:00 PM",
      "May 16, 2023 - 11:00 AM",
      "May 17, 2023 - 3:00 PM",
      "May 18, 2023 - 9:00 AM",
    ],
    testimonials: [
      {
        name: "David K.",
        role: "Frontend Developer at Netflix",
        text: "After just 3 sessions with this mentor, I completely revamped my portfolio and interview approach. Landed 4 offers in a month!",
        rating: 5,
      },
      {
        name: "Michelle T.",
        role: "Software Engineer at Stripe",
        text: "The mock interviews and feedback were invaluable. My mentor knew exactly what big tech companies look for and prepared me perfectly.",
        rating: 5,
      },
      {
        name: "Raj P.",
        role: "Full Stack Developer",
        text: "Worth every penny. My salary increased by 40% after following the career strategy we mapped out together.",
        rating: 5,
      },
    ],
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CrazyBackground />

      {/* Floating event card */}
      <div className="fixed right-4 top-4 z-50 md:right-8 md:top-8 max-w-xs">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm animate-pulse" />
          <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
            <div className="absolute -right-2 -top-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              15 DAYS LEFT!
            </div>
            <h3 className="text-lg font-bold mb-2">Exclusive Mentorship Event</h3>
            <p className="text-sm text-gray-300 mb-2">
              "{mentor.name}'s 1-hour session has changed my entire career trajectory!" - Former Mentee
            </p>
            <div className="flex justify-between items-center">
              <div className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                Only 5 spots left
              </div>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs rounded-full"
                onClick={() => setShowBookingModal(true)}
              >
                Reserve Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to mentors
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                <p className="text-xl text-purple-400 mb-2">{mentor.role} at {mentor.company}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(mentor.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                    />
                  ))}
                  <span className="text-white ml-2">{mentor.rating}</span>
                  <span className="text-gray-400 ml-1">({mentor.reviews} reviews)</span>
                </div>

                <p className="text-gray-300 mb-6 max-w-2xl">{mentor.bio}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 rounded-full">
                    <MessageSquare className="mr-2 h-4 w-4" /> Message
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 rounded-full">
                    <Share2 className="mr-2 h-4 w-4" /> Share Profile
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="about" onClick={() => setActiveTab("about")}>
                    About
                  </TabsTrigger>
                  <TabsTrigger value="reviews" onClick={() => setActiveTab("reviews")}>
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger value="experience" onClick={() => setActiveTab("experience")}>
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="schedule" onClick={() => setActiveTab("schedule")}>
                    Schedule
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{mentor.yearsExperience}+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{mentor.mentored}+</div>
                      <div className="text-sm text-gray-300">Developers Mentored</div>
                    </div>
                    <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{mentor.successRate}</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                  </div>

                  <div className="relative mb-8">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-xl font-bold mb-4">Why Choose This Mentor?</h3>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="bg-purple-500/20 rounded-full p-2 h-fit">
                            <Award className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-bold">Industry Expert</h4>
                            <p className="text-gray-300">Worked at top companies like {mentor.company} and mentored hundreds of successful developers</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="bg-purple-500/20 rounded-full p-2 h-fit">
                            <Briefcase className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-bold">Job Placement Success</h4>
                            <p className="text-gray-300">Helped candidates secure positions at {mentor.placements.slice(0, 3).join(", ")} and more</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="bg-purple-500/20 rounded-full p-2 h-fit">
                            <CheckCircle className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-bold">Personalized Approach</h4>
                            <p className="text-gray-300">Tailored guidance for your specific career goals and technical needs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 mb-8">
                    <p className="italic text-purple-300 text-sm">
                      "A single hour with {mentor.name} is worth more than a month of online courses. Their insights completely changed my approach to interviewing!" - Recent Mentee
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">What Others Are Saying</h2>

                  <div className="space-y-6">
                    {mentor.testimonials.map((testimonial, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm" />
                        <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                          <div className="flex justify-between mb-3">
                            <div>
                              <div className="font-bold">{testimonial.name}</div>
                              <div className="text-sm text-purple-400">{testimonial.role}</div>
                            </div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300">{testimonial.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>

                  <div className="relative mb-8">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <div className="space-y-8">
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="text-xl font-bold">{mentor.company}</h3>
                            <div className="text-sm text-gray-400">2018 - Present</div>
                          </div>
                          <div className="text-purple-400 mb-2">{mentor.role}</div>
                          <p className="text-gray-300">
                            Led development of key products and mentored junior developers. Implemented best practices and modern architecture patterns.
                          </p>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="text-xl font-bold">Previous Top Tech Company</h3>
                            <div className="text-sm text-gray-400">2015 - 2018</div>
                          </div>
                          <div className="text-purple-400 mb-2">Senior Developer</div>
                          <p className="text-gray-300">
                            Built scalable applications and services. Collaborated with cross-functional teams to deliver high-impact projects.
                          </p>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="text-xl font-bold">Tech Startup</h3>
                            <div className="text-sm text-gray-400">2012 - 2015</div>
                          </div>
                          <div className="text-purple-400 mb-2">Developer</div>
                          <p className="text-gray-300">
                            Early employee who helped scale the product from prototype to production with millions of users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-xl font-bold mb-4">Education & Certifications</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="font-bold">Master's in Computer Science</div>
                          <div className="text-sm text-gray-400">Top Technical University</div>
                        </div>
                        <div>
                          <div className="font-bold">Industry Certifications</div>
                          <div className="text-sm text-gray-400">AWS Solutions Architect, Google Cloud Professional, etc.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="schedule" className="space-y-6">
                  <div className="relative mb-8">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur-sm" />
                    <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                      <div className="absolute -right-4 -top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        HOT OFFER!
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">Upcoming Group Masterclass</h3>
                      <p className="text-gray-300 mb-4">
                        Join {mentor.name}'s exclusive 2-hour masterclass on "How to Ace Technical Interviews at Top Tech Companies" - Limited to just 20 participants!
                      </p>
                      
                      <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg mb-4">
                        <div>
                          <div className="font-bold">May 25, 2023</div>
                          <div className="text-sm text-gray-400">7:00 PM - 9:00 PM EST</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-400">$99</div>
                          <div className="text-xs text-gray-400 line-through">$199</div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-black/40 rounded-lg mb-4 border border-green-500/20">
                        <p className="italic text-green-300 text-sm">
                          "Last masterclass attendee: 'I implemented what I learned and got offers from 3 FAANG companies in the same week!'" 
                        </p>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full">
                        Reserve Your Spot (15 spots left)
                      </Button>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Available Interview Slots</h2>
                  <p className="text-gray-300 mb-4">Book a 1-on-1 interview preparation session with {mentor.name}:</p>

                  <div className="space-y-3">
                    {mentor.availableDates.map((date, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm" />
                        <div className="relative flex justify-between items-center bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30">
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-500/20 p-3 rounded-full">
                              <Calendar className="h-5 w-5 text-purple-400" />
                            </div>
                            <div>
                              <div className="font-medium">{date}</div>
                              <div className="text-sm text-gray-400">60-minute session</div>
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between bg-purple-900/20 p-4 rounded-lg mt-6">
                    <div>
                      <div className="font-bold">Private Mentorship Rate</div>
                      <div className="text-gray-400">One-on-one personalized guidance</div>
                    </div>
                    <div className="text-2xl font-bold">${mentor.hourlyRate}/hr</div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                  <h3 className="text-xl font-bold mb-4">Schedule Your Interview Prep</h3>
                  <p className="text-gray-300 mb-6">
                    Get personalized guidance on how to ace your technical interviews and land your dream job.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-purple-400" />
                      <span>Mock interviews with real feedback</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span>Portfolio review and enhancement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-purple-400" />
                      <span>Company-specific preparation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span>Flexible scheduling</span>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 p-4 rounded-lg mb-6 border border-purple-500/20">
                    <p className="italic text-purple-300 text-sm mb-2">
                      "This was the best investment in my career ever. After one session, I completely changed my approach and landed my dream job!" - Chris T.
                    </p>
                    <div className="text-xs text-right text-gray-400">📈 Success rate: {mentor.successRate}</div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-6">
                    Book Your Session Now
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur-sm" />
                <div className="relative bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-2xl" />
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl" />
                  
                  <h3 className="text-xl font-bold mb-4 relative z-10">Most Valuable 60 Minutes</h3>
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      IN 15 DAYS!
                    </div>
                    <div className="text-xs bg-black/50 text-white px-2 py-1 rounded-full border border-white/20">
                      Limited Capacity
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 relative z-10">
                    Join this exclusive live session that could completely change your career trajectory. Learn insider secrets about hiring at top tech companies!
                  </p>
                  
                  <div className="p-4 bg-black/40 rounded-lg mb-4 border border-green-500/20 relative z-10">
                    <p className="italic text-green-300 text-sm">
                      "One hour with {mentor.name} taught me more than 6 months of interview prep courses. Now I work at my dream company!" 
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <div>
                      <div className="text-sm text-gray-400">Early Bird Price</div>
                      <div className="text-xl font-bold text-white">$49</div>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full">
                      Save Your Seat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 