"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

interface Mentor {
  id: string
  name: string
  email: string
  expertise: string[]
  experience: string
  bio: string
  imageUrl: string
  rating: number
  availability: string
  phoneNumber: string
  location: string
  languages: string[]
  certifications: string[]
  socialLinks: {
    linkedin: string
    github: string
    twitter: string
    portfolio: string
  }
  specialization: string[]
  hourlyRate: number
  successRate: number
}

export default function AdminMentors() {
  const [isAddingMentor, setIsAddingMentor] = useState(false)
  const [mentors, setMentors] = useState<Mentor[]>([])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Mentors Management
        </h1>
        <Button 
          onClick={() => setIsAddingMentor(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Mentor
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search mentors..." 
            className="pl-10 bg-gray-900/50"
          />
        </div>
        <select className="bg-gray-900/50 rounded-md border border-gray-700 px-4 py-2">
          <option value="">All Expertise</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full Stack</option>
        </select>
      </div>

      {/* Enhanced Add/Edit Mentor Form */}
      {isAddingMentor && (
        <div className="mb-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Add New Mentor</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Basic Information */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Full Name" className="bg-gray-800" />
                <Input placeholder="Email" type="email" className="bg-gray-800" />
                <Input placeholder="Phone Number" type="tel" className="bg-gray-800" />
                <Input placeholder="Location" className="bg-gray-800" />
              </div>
            </div>

            {/* Professional Details */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Professional Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Primary Expertise" className="bg-gray-800" />
                <Input placeholder="Years of Experience" type="number" className="bg-gray-800" />
                <Input placeholder="Languages (comma-separated)" className="bg-gray-800" />
                <Input placeholder="Certifications (comma-separated)" className="bg-gray-800" />
                <select className="bg-gray-800 rounded-md border border-gray-700 px-4 py-2">
                  <option value="">Select Specialization</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI/ML</option>
                  <option value="cloud">Cloud Architecture</option>
                  <option value="devops">DevOps</option>
                  <option value="security">Security</option>
                </select>
                <Input 
                  placeholder="Success Rate (%)" 
                  type="number" 
                  min="0" 
                  max="100"
                  className="bg-gray-800" 
                />
              </div>
            </div>

            {/* Availability & Rates */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Availability & Rates</h3>
              <div className="grid grid-cols-2 gap-4">
                <select className="bg-gray-800 rounded-md border border-gray-700 px-4 py-2">
                  <option value="">Availability</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="weekends">Weekends Only</option>
                  <option value="evenings">Evenings Only</option>
                  <option value="flexible">Flexible Hours</option>
                </select>
                <Input 
                  placeholder="Hourly Rate ($)" 
                  type="number"
                  min="0" 
                  className="bg-gray-800" 
                />
                <Input 
                  placeholder="Maximum Hours per Week" 
                  type="number"
                  className="bg-gray-800" 
                />
                <select className="bg-gray-800 rounded-md border border-gray-700 px-4 py-2">
                  <option value="">Preferred Time Zone</option>
                  <option value="est">EST (Eastern)</option>
                  <option value="pst">PST (Pacific)</option>
                  <option value="ist">IST (India)</option>
                  <option value="gmt">GMT (London)</option>
                </select>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Social & Professional Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="LinkedIn Profile" className="bg-gray-800" />
                <Input placeholder="GitHub Profile" className="bg-gray-800" />
                <Input placeholder="Twitter Profile" className="bg-gray-800" />
                <Input placeholder="Portfolio Website" className="bg-gray-800" />
              </div>
            </div>

            {/* Bio & Profile */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Bio & Profile</h3>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Professional Bio" 
                  className="bg-gray-800 h-32"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    type="file" 
                    accept="image/*" 
                    className="bg-gray-800"
                    placeholder="Profile Picture" 
                  />
                  <Input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    className="bg-gray-800"
                    placeholder="Resume/CV" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsAddingMentor(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              Save Mentor
            </Button>
          </div>
        </div>
      )}

      {/* Mentors Table */}
      <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-3 text-left">Mentor</th>
              <th className="px-6 py-3 text-left">Expertise</th>
              <th className="px-6 py-3 text-left">Experience</th>
              <th className="px-6 py-3 text-left">Availability</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {mentors.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                  No mentors added yet. Click the Add Mentor button to create one.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
} 