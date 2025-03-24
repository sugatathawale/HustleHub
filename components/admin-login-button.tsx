"use client"

import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function AdminLoginButton() {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button 
        variant="outline" 
        className="border-purple-500/30 hover:bg-purple-500/10 text-gray-400 hover:text-white flex items-center gap-2"
        onClick={() => router.push('/admin/login')}
      >
        <Lock className="w-4 h-4" />
        Admin Portal
      </Button>
    </motion.div>
  )
} 