"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, Youtube, Image, Link, DollarSign, Star } from "lucide-react"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  basePrice: number
  premiumPrice: number
  difficulty: string
  duration: string
  technologies: string[]
  features: string[]
  youtubeUrl: string
  demoLink: string
  githubLink: string
  images: string[]
  isPremium: boolean
  requirements: string[]
  learningOutcomes: string[]
}

export default function AdminProjects() {
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Projects Management
        </h1>
        <Button 
          onClick={() => setIsAddingProject(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Project
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search projects..." 
            className="pl-10 bg-gray-900/50"
          />
        </div>
        <select className="bg-gray-900/50 rounded-md border border-gray-700 px-4 py-2">
          <option value="">All Categories</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full Stack</option>
        </select>
      </div>

      {/* Enhanced Add/Edit Project Form */}
      {isAddingProject && (
        <div className="mb-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Add New Project
            {/* Premium toggle */}
            <div className="ml-auto flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <label className="text-sm">Premium Project</label>
              <input type="checkbox" className="rounded bg-gray-800 border-gray-600" />
            </div>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Basic Information */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Project Title" className="bg-gray-800" />
                <select className="bg-gray-800 rounded-md border border-gray-700 px-4 py-2">
                  <option value="">Select Category</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Full Stack</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI/ML</option>
                </select>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Base Price" type="number" className="pl-10 bg-gray-800" />
                </div>
                <div className="relative">
                  <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-4 h-4" />
                  <Input placeholder="Premium Price" type="number" className="pl-10 bg-gray-800" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Project Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <select className="bg-gray-800 rounded-md border border-gray-700 px-4 py-2">
                  <option value="">Select Difficulty</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
                <Input placeholder="Duration (e.g., '2 weeks')" className="bg-gray-800" />
                <Input placeholder="Technologies (comma-separated)" className="bg-gray-800" />
                <Input placeholder="Required Skills" className="bg-gray-800" />
              </div>
              <Textarea 
                placeholder="Project Description" 
                className="bg-gray-800 h-32 mt-4"
              />
            </div>

            {/* Media Section */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Media & Links</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
                  <Input placeholder="YouTube Tutorial URL" className="pl-10 bg-gray-800" />
                </div>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                  <Input placeholder="Live Demo URL" className="pl-10 bg-gray-800" />
                </div>
                <div className="relative">
                  <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                  <Input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    className="pl-10 bg-gray-800"
                    onChange={(e) => setSelectedImages(e.target.files)} 
                  />
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Learning Outcomes</h3>
              <Textarea 
                placeholder="What will students learn? (One outcome per line)" 
                className="bg-gray-800 h-32"
              />
            </div>

            {/* Premium Features */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Premium Features</h3>
              <Textarea 
                placeholder="Additional features for premium version (One feature per line)" 
                className="bg-gray-800 h-32"
              />
            </div>
          </div>

          {/* Preview Section */}
          {selectedImages && selectedImages.length > 0 && (
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Image Preview</h3>
              <div className="grid grid-cols-4 gap-4">
                {Array.from(selectedImages).map((file, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={`Preview ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsAddingProject(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              Save Project
            </Button>
          </div>
        </div>
      )}

      {/* Projects Table */}
      <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Base Price</th>
              <th className="px-6 py-3 text-left">Premium Price</th>
              <th className="px-6 py-3 text-left">Difficulty</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {projects.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No projects added yet. Click the Add Project button to create one.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
} 