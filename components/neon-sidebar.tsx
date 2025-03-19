"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FolderIcon, Award, BookOpen, Code, FileIcon, Star, Menu, Compass, Users } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NeonSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NeonSidebar({ activeTab, setActiveTab }: NeonSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "home", icon: <FolderIcon className="w-5 h-5" />, label: "Home" },
    { id: "projects", icon: <Code className="w-5 h-5" />, label: "Projects" },
    { id: "mentors", icon: <Users className="w-5 h-5" />, label: "Mentors" },
    { id: "career", icon: <Compass className="w-5 h-5" />, label: "Career Path" },
    { id: "certified", icon: <Award className="w-5 h-5" />, label: "Get Certified" },
    { id: "courses", icon: <BookOpen className="w-5 h-5" />, label: "Courses" },
    { id: "assets", icon: <FileIcon className="w-5 h-5" />, label: "Resources" },
    { id: "stars", icon: <Star className="w-5 h-5" />, label: "Success Stories" },
  ]

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setIsOpen(false)
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
  menuItems: Array<{ id: string; icon: JSX.Element; label: string }>
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
              G
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
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-purple-500/10"
                }`}
              >
                <div className={activeTab === item.id ? "text-purple-500" : "text-gray-500"}>{item.icon}</div>
                <span>{item.label}</span>

                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"
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

