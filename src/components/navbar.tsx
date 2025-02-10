import Link from "next/link"
import { Flame } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-xl sm:text-3xl font-bold relative group">
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-orange-500 animate-pulse" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient-x">
                Roast Mate
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div>
            <Link
              href="/Input"
              className="
                relative inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base overflow-hidden font-bold text-white rounded-lg group
                bg-gradient-to-br from-purple-600 to-blue-500 
                hover:from-purple-500 hover:to-blue-400
                transition-all duration-300 ease-out
                shadow-[0_0_20px_rgba(168,85,247,0.4)]
                hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
              "
            >
              <span className="relative">
                Get Started
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

