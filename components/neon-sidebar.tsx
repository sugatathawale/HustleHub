"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FolderIcon, Award, BookOpen, Code, FileIcon, Star, Menu, Compass, Users, PlusCircle, Sparkles } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

interface NeonSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NeonSidebar({ activeTab, setActiveTab }: NeonSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const menuItems = [
    { id: "home", icon: <FolderIcon className="w-5 h-5" />, label: "Home" },
    { id: "projects", icon: <Code className="w-5 h-5" />, label: "Projects" },
    { id: "mentors", icon: <Users className="w-5 h-5" />, label: "Mentors" },
    { id: "custom-project", icon: <PlusCircle className="w-5 h-5" />, label: "Request Project", isSpecial: true },
    { id: "career", icon: <Compass className="w-5 h-5" />, label: "Career Path" },
    { id: "certified", icon: <Award className="w-5 h-5" />, label: "Get Certified" },
    { id: "courses", icon: <BookOpen className="w-5 h-5" />, label: "Courses" },
    { id: "assets", icon: <FileIcon className="w-5 h-5" />, label: "Resources" },
    { id: "stars", icon: <Star className="w-5 h-5" />, label: "Success Stories" },
  ]

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setIsOpen(false)
    
    // Special handling for custom-project tab
    if (id === "custom-project") {
      router.push("/custom-project")
    }
  }

  return (
    <>
      {/* Mobile menu trigger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-purple-500/30">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-r border-purple-500/30 bg-black">
            <div className="h-full">
              <SidebarContent menuItems={menuItems} activeTab={activeTab} handleTabChange={handleTabChange} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <div className="w-64 border-r border-purple-500/30 bg-black/50 backdrop-blur-sm hidden md:block">
        <SidebarContent menuItems={menuItems} activeTab={activeTab} handleTabChange={handleTabChange} />
      </div>
    </>
  )
}

interface SidebarContentProps {
  menuItems: Array<{ id: string; icon: React.ReactNode; label: string; isSpecial?: boolean }>
  activeTab: string
  handleTabChange: (id: string) => void
}

function SidebarContent({ menuItems, activeTab, handleTabChange }: SidebarContentProps) {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-12">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="relative w-10 h-10"
        >
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
          <div className="absolute inset-1 flex items-center justify-center rounded-md bg-black">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              H
            </span>
          </div>
        </motion.div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        HustleHub.
        </span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 relative group
                  ${item.isSpecial ? 'overflow-hidden' : ''}
                  ${activeTab === item.id
                    ? item.isSpecial
                      ? "bg-gradient-to-r from-green-600/20 to-blue-600/20 text-white border border-green-500/30"
                      : "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-500/30"
                    : item.isSpecial 
                      ? "bg-gradient-to-r from-green-600/20 to-blue-600/20 text-white border border-green-500/30 hover:from-green-600/30 hover:to-blue-600/30"
                      : "text-gray-400 hover:text-white hover:bg-purple-500/10"
                  }`}
              >
                {item.isSpecial && (
                  <>
                    <div className="absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl group-hover:opacity-100 opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-xl group-hover:opacity-100 opacity-60 transition-opacity duration-300"></div>
                  </>
                )}
                
                <div className={
                  activeTab === item.id 
                    ? item.isSpecial ? "text-green-400" : "text-purple-500" 
                    : item.isSpecial ? "text-green-400" : "text-gray-500"
                }>
                  {item.icon}
                </div>
                
                <span className="relative z-10">{item.label}</span>
                
                {item.isSpecial && (
                  <Sparkles className="w-3 h-3 text-green-400 absolute right-3 animate-pulse" />
                )}

                {activeTab === item.id && !item.isSpecial && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {activeTab === item.id && item.isSpecial && (
                  <motion.div
                    layoutId="activeSpecialTab"
                    className="absolute left-0 w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-purple-500/20">
        <div className="text-xs text-gray-500 text-center">
          <p>© 2025 HustleHub</p>
          <p className="mt-1">Career Edition</p>
        </div>
      </div>
    </div>
  )
}

