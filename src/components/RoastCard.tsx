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
        className="p-4 sm:p-8 bg-gradient-to-br from-pink-100 via-rose-50 to-white rounded-xl shadow-2xl border border-pink-300 relative overflow-hidden max-w-sm mx-auto"
        style={{ aspectRatio: "3 / 4" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/card-pattern.svg')] opacity-5"></div>
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 bottom-2 sm:bottom-4 border-2 border-pink-300/50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <p
            ref={textRef}
            className="text-gray-800 font-medium text-center italic leading-relaxed px-2 sm:px-4 font-serif tracking-wide"
            style={{
              fontSize: `${fontSize}px`,
              maxHeight: '75%',
              overflow: 'hidden',
              margin: 'auto'
            }}
          >
            {roast}
          </p>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-xs sm:text-sm text-pink-400 font-serif">
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

