"use client"

import { useState, useEffect } from "react"
import { 
  LayoutDashboard, Users, FolderKanban, 
  BookOpen, Settings, LogOut, Menu, FileText 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if admin is logged in
    const adminAuth = localStorage.getItem("adminAuth")
    if (!adminAuth && pathname !== "/admin/login") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (!isAuthenticated) return null

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
      href: "/admin",
    },
    {
      title: "Projects",
      icon: <FolderKanban className="w-4 h-4" />,
      href: "/admin/projects",
    },
    {
      title: "Users",
      icon: <Users className="w-4 h-4" />,
      href: "/admin/users",
    },
    {
      title: "Mentors",
      icon: <BookOpen className="w-4 h-4" />,
      href: "/admin/mentors",
    },
    {
      title: "Project Requests",
      icon: <FileText className="w-4 h-4" />,
      href: "/admin/requests",
    },
    {
      title: "Settings",
      icon: <Settings className="w-4 h-4" />,
      href: "/admin/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              {isSidebarOpen && (
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  HustleAdmin
                </span>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      pathname === item.href 
                        ? "bg-purple-600 text-white" 
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}>
                      {item.icon}
                      {isSidebarOpen && <span>{item.title}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-800">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {isSidebarOpen && "Logout"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : "ml-20"
      }`}>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 