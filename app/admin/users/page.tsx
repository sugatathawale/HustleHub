"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, Mail, Calendar, Shield, MoreVertical, Ban, Crown, Trash2, CheckCircle } from "lucide-react"
import { useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "user" | "premium" | "banned"
  joinedDate: string
  lastActive: string
  projectsPurchased: number
  totalSpent: number
  mentorSessions: number
  status: "active" | "inactive" | "banned"
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Users Management
        </h1>
        <Button 
          onClick={() => {/* Handle invite */}}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <UserPlus className="w-4 h-4 mr-2" /> Invite User
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search users by name or email..." 
            className="pl-10 bg-gray-900/50"
          />
        </div>
        <select className="bg-gray-900/50 rounded-md border border-gray-700 px-4 py-2">
          <option value="all">All Users</option>
          <option value="premium">Premium Users</option>
          <option value="active">Active Users</option>
          <option value="inactive">Inactive Users</option>
          <option value="banned">Banned Users</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Users", value: "1,234", change: "+12%", color: "blue" },
          { title: "Premium Users", value: "256", change: "+5%", color: "purple" },
          { title: "Active Today", value: "789", change: "+8%", color: "green" },
          { title: "Avg. Spend", value: "$145", change: "+15%", color: "pink" },
        ].map((stat, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg bg-gray-900/50 border border-${stat.color}-500/20`}
          >
            <h3 className="text-gray-400 text-sm">{stat.title}</h3>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className={`text-xs text-${stat.color}-400`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Projects</th>
              <th className="px-6 py-3 text-left">Spent</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${user.role === 'premium' ? 'bg-purple-500/20 text-purple-400' : 
                        user.role === 'banned' ? 'bg-red-500/20 text-red-400' : 
                        'bg-gray-500/20 text-gray-400'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.projectsPurchased}</td>
                  <td className="px-6 py-4">${user.totalSpent}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${user.status === 'active' ? 'bg-green-500/20 text-green-400' : 
                        user.status === 'banned' ? 'bg-red-500/20 text-red-400' : 
                        'bg-yellow-500/20 text-yellow-400'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                        <Crown className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                        <Ban className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
          <span className="font-medium">97</span> users
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  )
} 