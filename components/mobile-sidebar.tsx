import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-[#0f1117] border-r border-gray-800">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

