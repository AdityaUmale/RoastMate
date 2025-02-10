"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { InputForm } from "@/components/InputForm"
import { RoastCard } from "@/components/RoastCard"
import { Spotlight } from "@/components/ui/spotlight-new"

export default function Home() {
  const [roast, setRoast] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = async (crushInfo: {
    hobbies: string
    quirks: string
    favorites: string
    relationship: string
  }) => {
    try {
      setIsGenerating(true)
      const response = await fetch("/api/generateRoast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crushInfo),
      })

      if (!response.ok) {
        throw new Error("Failed to generate roast")
      }

      const data = await response.json()
      setRoast(data.roast)
    } catch (error) {
      console.error(error)
      alert("Error generating roast. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 pt-24 sm:pt-28">
        <div className="w-full max-w-4xl mx-auto relative z-10 md:flex md:gap-12 p-4">
          <div className="w-full md:w-1/2 md:mt-10 mt-4">
            <InputForm onSubmit={handleSubmit} isGenerating={isGenerating} />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            {roast ? (
              <RoastCard roast={roast} />
            ) : (
              <div className="p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-center mt-12 ml-4">
                <p className="text-gray-400 text-lg">
                  Fill in the details about your friend and click &quot;Generate Roast&quot; to create a personalized roast card! 🎭
                </p>
                <div className="mt-4 text-pink-400/60 text-sm">
                  Your roast card will appear here ✨
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

