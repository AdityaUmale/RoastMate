"use client"

import { useRef } from "react"
import html2canvas from "html2canvas"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface RoastCardProps {
  roast: string
}

export function RoastCard({ roast }: RoastCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
      }).then((canvas) => {
        const link = document.createElement("a")
        link.download = "valentine-roast-card.png"
        link.href = canvas.toDataURL("image/png")
        link.click()
      })
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <div
        ref={cardRef}
        className="p-4 sm:p-8 bg-gradient-to-br from-pink-100 via-rose-50 to-white rounded-xl shadow-2xl border border-pink-300 relative overflow-hidden max-w-sm mx-auto"
        style={{ aspectRatio: "3 / 4" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/card-pattern.svg')] opacity-5"></div>
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 bottom-2 sm:bottom-4 border-2 border-pink-300/50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <p className="text-gray-800 text-base sm:text-xl font-medium text-center italic leading-relaxed px-2 sm:px-4 font-serif tracking-wide first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-bold first-letter:text-pink-500 first-letter:mr-1 first-letter:float-left overflow-auto max-h-full">
            {roast}
          </p>
        </div>
        <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-xs sm:text-sm text-pink-400 font-serif">RoastMate</div>
      </div>
      <Button
        onClick={handleDownload}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Card
      </Button>
    </div>
  )
}

