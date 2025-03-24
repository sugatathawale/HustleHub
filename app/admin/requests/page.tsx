"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, Mail, Phone, FileText, Clock, DollarSign, Check, X } from "lucide-react"
import { useState } from "react"

interface ProjectRequest {
  id: string
  clientName: string
  email: string
  phone: string
  projectType: string
  complexity: string
  description: string
  budget: string
  timeline: string
  documents: string[]
  status: "pending" | "approved" | "rejected"
  submittedAt: string
}

export default function ProjectRequests() {
  const [requests, setRequests] = useState<ProjectRequest[]>([])
  const [selectedRequest, setSelectedRequest] = useState<ProjectRequest | null>(null)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Project Requests
        </h1>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search requests..." 
            className="pl-10 bg-gray-900/50"
          />
        </div>
        <select className="bg-gray-900/50 rounded-md border border-gray-700 px-4 py-2">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Request Details View */}
      {selectedRequest && (
        <div className="mb-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold">{selectedRequest.clientName}'s Request</h2>
              <p className="text-gray-400">Submitted on {selectedRequest.submittedAt}</p>
            </div>
            <div className="flex gap-2">
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {/* Handle approve */}}
              >
                <Check className="w-4 h-4 mr-2" />
                Approve
              </Button>
              <Button 
                variant="destructive"
                onClick={() => {/* Handle reject */}}
              >
                <X className="w-4 h-4 mr-2" />
                Reject
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Client Information */}
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Client Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{selectedRequest.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{selectedRequest.phone}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>Type: {selectedRequest.projectType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Timeline: {selectedRequest.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>Budget: {selectedRequest.budget}</span>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Project Description</h3>
              <p className="text-gray-300 whitespace-pre-wrap">{selectedRequest.description}</p>
            </div>

            {/* Attached Documents */}
            <div className="col-span-2 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Attached Documents</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedRequest.documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg"
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="flex-1 truncate">{doc}</span>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Requests Table */}
      <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Project Type</th>
              <th className="px-6 py-3 text-left">Budget</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Submitted</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {requests.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  No project requests yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
} 