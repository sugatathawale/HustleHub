import { FolderIcon, Award, BookOpen, Code, FileIcon, Star, ImageIcon, Briefcase } from "lucide-react"

export default function Sidebar() {
  const menuItems = [
    { icon: <FolderIcon className="w-5 h-5" />, label: "Projects" },
    { icon: <Award className="w-5 h-5" />, label: "Get Certified" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Courses" },
    { icon: <Code className="w-5 h-5" />, label: "Source Code" },
    { icon: <FileIcon className="w-5 h-5" />, label: "Project Assets" },
    { icon: <Star className="w-5 h-5" />, label: "HustleHub Stars" },
    { icon: <ImageIcon className="w-5 h-5" />, label: "Stock Pictures" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Get Job 10X Faster" },
  ]

  return (
    <aside className="w-60 bg-[#0f1117] border-r border-gray-800 p-4 hidden md:block">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-md flex items-center justify-center">
          <span className="text-white font-bold">G</span>
        </div>
        <span className="text-xl font-bold">HustleHub.</span>
      </div>

      <nav>
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="text-gray-400">{item.icon}</div>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

