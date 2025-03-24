"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export default function LoginModal({ isOpen, onClose, onSwitch }: {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-black/90 border border-purple-500/30 rounded-xl p-6 shadow-xl">
        <Button 
          variant="ghost" 
          className="absolute right-2 top-2 p-2 text-gray-400 hover:text-white" 
          onClick={onClose}
        >
          <X size={18} />
        </Button>
        
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Login to HustleHub
        </h2>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Email Address</label>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/60 border-purple-500/30"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Password</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/60 border-purple-500/30"
            />
          </div>
          
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Login
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account? 
            <button 
              onClick={onSwitch}
              className="ml-1 text-purple-400 hover:text-purple-300"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
} 