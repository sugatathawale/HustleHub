import Image from "next/image"

interface Technology {
  name: string
  color: string
}

interface CourseCardProps {
  course: {
    id: number
    title: string
    category?: string
    subtitle?: string
    year?: string
    price?: string
    originalPrice?: string
    image: string
    technologies: string[]
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  const getTechIcon = (tech: string): Technology => {
    switch (tech) {
      case "react":
        return { name: "React", color: "bg-blue-500" }
      case "next":
        return { name: "Next.js", color: "bg-black" }
      case "tailwind":
        return { name: "Tailwind", color: "bg-cyan-500" }
      case "node":
        return { name: "Node.js", color: "bg-green-500" }
      case "stripe":
        return { name: "Stripe", color: "bg-purple-500" }
      default:
        return { name: tech, color: "bg-gray-500" }
    }
  }

  return (
    <div className="bg-[#1a1d26] rounded-xl overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        {course.year && (
          <div className="absolute top-3 left-3 bg-[#1a1d26] px-3 py-1 rounded-full text-xs">{course.year}</div>
        )}
        {course.price && (
          <div className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-md text-sm">
            {course.price}
            {course.originalPrice && (
              <span className="text-gray-500 line-through ml-2 text-xs">{course.originalPrice}</span>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        {course.category && <div className="text-sm text-gray-400 mb-2">{course.category}</div>}
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        {course.subtitle && <p className="text-sm text-gray-300 mb-3">{course.subtitle}</p>}
        {course.technologies.length > 0 && (
          <div className="flex gap-2 mt-3">
            {course.technologies.map((tech, index) => {
              const { color } = getTechIcon(tech)
              return (
                <div key={index} className={`w-6 h-6 ${color} rounded-full flex items-center justify-center text-xs`}>
                  {tech.charAt(0).toUpperCase()}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

