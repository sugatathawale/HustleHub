"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  User, Mail, Phone, MapPin, Calendar, 
  Briefcase, Github, Linkedin, Twitter,
  ShoppingBag, Heart, Settings, LogOut 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  // Mock user data - replace with real data from your backend
  const user = {
    name: "John Developer",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    avatar: "/placeholder.svg",
    bio: "Full Stack Developer passionate about creating amazing web experiences",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }

  // Mock purchases data
  const purchases = [
    {
      id: 1,
      name: "AI Chat Assistant",
      date: "2024-03-15",
      price: "$49.99",
      status: "Completed"
    },
    {
      id: 2,
      name: "E-commerce Template",
      date: "2024-02-28",
      price: "$79.99",
      status: "In Progress"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/50 border border-purple-500/30 rounded-xl p-6 space-y-6"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
                <div className="relative rounded-full overflow-hidden border-2 border-purple-500/30">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {user.name}
                </h2>
                <p className="text-gray-400 text-sm">{user.bio}</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{user.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Joined {user.joinDate}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a 
                  href={user.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                </a>
                <a 
                  href={user.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
                <a 
                  href={user.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-purple-400" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </Button>
                <Button variant="outline" className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10">
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="purchases" className="w-full">
              <TabsList className="bg-black/50 border border-purple-500/30">
                <TabsTrigger value="purchases" className="data-[state=active]:bg-purple-500/20">
                  <ShoppingBag className="w-4 h-4 mr-2" /> Purchases
                </TabsTrigger>
                <TabsTrigger value="saved" className="data-[state=active]:bg-purple-500/20">
                  <Heart className="w-4 h-4 mr-2" /> Saved Items
                </TabsTrigger>
              </TabsList>

              <TabsContent value="purchases" className="mt-6">
                <div className="bg-black/50 border border-purple-500/30 rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Your Purchases</h3>
                    <div className="space-y-4">
                      {purchases.map((purchase) => (
                        <div 
                          key={purchase.id}
                          className="flex items-center justify-between p-4 bg-purple-500/5 border border-purple-500/10 rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium">{purchase.name}</h4>
                            <p className="text-sm text-gray-400">{purchase.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-purple-400">{purchase.price}</p>
                            <p className="text-sm text-gray-400">{purchase.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Saved Items</h3>
                  <p className="text-gray-400">You haven't saved any items yet.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 