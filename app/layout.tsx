"use client"

import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AuthButton from "@/components/auth/auth-button"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AuthButton />
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white flex items-center gap-2"
                onClick={() => router.push('/admin/login')}
              >
                <Lock className="w-4 h-4" />
                Admin
              </Button>
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'