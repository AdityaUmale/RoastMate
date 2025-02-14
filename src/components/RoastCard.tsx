"use client"

import { useRef } from "react"
import html2canvas from "html2canvas"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface RoastCardProps {
  roast: string
}

import { useEffect, useState } from "react"

export function RoastCard({ roast }: RoastCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [fontSize, setFontSize] = useState(20) // Initial font size

  useEffect(() => {
    const adjustFontSize = () => {
      const textElement = textRef.current
      const cardElement = cardRef.current
      if (!textElement || !cardElement) return

      let currentSize = fontSize
      textElement.style.fontSize = `${currentSize}px`

      while (
        (textElement.scrollHeight > textElement.clientHeight || textElement.scrollWidth > textElement.clientWidth) &&
        currentSize > 12
      ) {
        currentSize -= 0.5
        textElement.style.fontSize = `${currentSize}px`
      }

      setFontSize(currentSize)
    }

    adjustFontSize()
  }, [roast])

  return (
    <div className="mt-8 space-y-4">
      <div
        ref={cardRef}
        className="p-6 sm:p-10 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl relative overflow-hidden max-w-sm mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        style={{ aspectRatio: "3 / 4" }}
      >
        {/* Replace noise.png with CSS gradient pattern */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
        <div className="absolute inset-2 border-2 border-white/30 rounded-2xl"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <p
            ref={textRef}
            className="text-white font-bold text-center leading-relaxed px-3 sm:px-5 font-mono"
            style={{
              fontSize: `${fontSize}px`,
              maxHeight: '75%',
              overflow: 'hidden',
              margin: 'auto',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            }}
          >
            {roast}
          </p>
        </div>
        <div className="absolute bottom-4 left-6 text-sm sm:text-base font-bold text-black">
          RoastMate
        </div>
      </div>
      <Button
        onClick={async () => {
          if (cardRef.current) {
            const canvas = await html2canvas(cardRef.current)
            const link = document.createElement('a')
            link.download = 'roast-card.png'
            link.href = canvas.toDataURL('image/png')
            link.click()
          }
        }}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Card
      </Button>
    </div>
  )
}

