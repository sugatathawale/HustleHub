"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Settings, LogOut, UserCircle } from "lucide-react"
import LoginModal from "./login-modal"
import SignupModal from "./signup-modal"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface User {
  name: string
  image?: string
}

export default function AuthButton() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  
  // Placeholder for authentication state - replace with your auth logic
  const isAuthenticated = true // Changed to true for testing
  const user: User = {
    name: "John Developer",
    image: "/placeholder.svg"
  }
  
  const router = useRouter()
  
  const openLogin = () => {
    setIsLoginOpen(true)
    setIsSignupOpen(false)
  }
  
  const openSignup = () => {
    setIsSignupOpen(true)
    setIsLoginOpen(false)
  }
  
  const closeModals = () => {
    setIsLoginOpen(false)
    setIsSignupOpen(false)
  }
  
  if (isAuthenticated && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 bg-black/50 border border-purple-500/30 rounded-full hover:bg-purple-500/10"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/30">
              <img 
                src={user.image} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white">{user.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          className="w-56 bg-black/90 border border-purple-500/30 text-white"
        >
          <DropdownMenuItem 
            onClick={() => router.push('/profile')}
            className="flex items-center gap-2 cursor-pointer hover:bg-purple-500/10"
          >
            <UserCircle className="w-4 h-4 text-purple-400" />
            <span>View Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => router.push('/profile?tab=settings')}
            className="flex items-center gap-2 cursor-pointer hover:bg-purple-500/10"
          >
            <Settings className="w-4 h-4 text-purple-400" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => {/* Add logout logic */}}
            className="flex items-center gap-2 cursor-pointer text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  return (
    <>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          className="text-gray-300 hover:text-white"
          onClick={openLogin}
        >
          Log in
        </Button>
        <Button 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          onClick={openSignup}
        >
          Sign up
        </Button>
      </div>
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeModals} 
        onSwitch={openSignup} 
      />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={closeModals} 
        onSwitch={openLogin} 
      />
    </>
  )
} 