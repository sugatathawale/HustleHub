"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Dummy admin credentials with different roles
const ADMIN_CREDENTIALS = [
  {
    role: "Super Admin",
    email: "superadmin@hustlehub.com",
    password: "super123",
    color: "from-red-400 to-orange-400"
  },
  {
    role: "Admin",
    email: "admin@hustlehub.com",
    password: "admin123",
    color: "from-purple-400 to-pink-400"
  },
  {
    role: "Content Manager",
    email: "content@hustlehub.com",
    password: "content123",
    color: "from-blue-400 to-cyan-400"
  },
  {
    role: "Mentor Manager",
    email: "mentor@hustlehub.com",
    password: "mentor123",
    color: "from-green-400 to-emerald-400"
  }
]

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [showCredentials, setShowCredentials] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const admin = ADMIN_CREDENTIALS.find(cred => cred.email === email && cred.password === password)
    
    if (admin) {
      // In a real app, you'd set proper authentication tokens here
      localStorage.setItem("adminAuth", "true")
      localStorage.setItem("adminRole", admin.role)
      router.push("/admin")
    } else {
      setError("Invalid credentials")
    }
  }

  const handleQuickLogin = (cred: typeof ADMIN_CREDENTIALS[0]) => {
    setEmail(cred.email)
    setPassword(cred.password)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Admin Login
            </h1>
            <p className="text-gray-400 mt-2">Access HustleHub dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Email Address</label>
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/60 border-purple-500/30 pl-10"
                  placeholder="admin@hustlehub.com"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/60 border-purple-500/30 pl-10"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Login to Dashboard
            </Button>
          </form>

          <div className="mt-6">
            <Button
              type="button"
              variant="ghost"
              className="w-full text-gray-400 flex items-center justify-between"
              onClick={() => setShowCredentials(!showCredentials)}
            >
              <span>Show Demo Credentials</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showCredentials ? 'rotate-180' : ''}`} />
            </Button>

            {showCredentials && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 space-y-3"
              >
                {ADMIN_CREDENTIALS.map((cred, index) => (
                  <motion.div
                    key={cred.role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => handleQuickLogin(cred)}
                  >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r opacity-75 blur-sm transition-opacity group-hover:opacity-100"
                         style={{ backgroundImage: `linear-gradient(to right, ${cred.color.split(' ')[1]}, ${cred.color.split(' ')[3]})` }} />
                    <div className="relative bg-black/60 p-3 rounded-lg border border-purple-500/30">
                      <div className="font-medium text-transparent bg-clip-text bg-gradient-to-r"
                           style={{ backgroundImage: `linear-gradient(to right, ${cred.color.split(' ')[1]}, ${cred.color.split(' ')[3]})` }}>
                        {cred.role}
                      </div>
                      <div className="text-sm text-gray-400">
                        Email: {cred.email}
                        <br />
                        Password: {cred.password}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 