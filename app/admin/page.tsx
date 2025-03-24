"use client"

import { Card } from "@/components/ui/card"
import {
  Users, FolderKanban, TrendingUp, 
  DollarSign, BookOpen, Star
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: <Users className="w-5 h-5" />,
      color: "blue"
    },
    {
      title: "Active Projects",
      value: "45",
      change: "+5%",
      icon: <FolderKanban className="w-5 h-5" />,
      color: "purple"
    },
    {
      title: "Revenue",
      value: "$12,345",
      change: "+23%",
      icon: <DollarSign className="w-5 h-5" />,
      color: "green"
    },
    {
      title: "Active Mentors",
      value: "23",
      change: "+2",
      icon: <BookOpen className="w-5 h-5" />,
      color: "pink"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                  {stat.icon}
                </div>
                <div className={`text-${stat.color}-400 flex items-center gap-1`}>
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-2">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900 border-gray-800">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium">New project purchase</p>
                  <p className="text-sm text-gray-400">User123 purchased Full Stack DeepSeek Clone</p>
                </div>
                <div className="ml-auto text-sm text-gray-400">
                  2 hours ago
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
} 