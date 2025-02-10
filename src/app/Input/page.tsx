"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { InputForm } from "@/components/InputForm"
import { RoastCard } from "@/components/RoastCard"
import { Spotlight } from "@/components/ui/spotlight-new"

export default function Home() {
  const [roast, setRoast] = useState("")

  const handleSubmit = async (crushInfo: {
    hobbies: string
    quirks: string
    favorites: string
    relationship: string
  }) => {
    try {
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
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 pt-24 sm:pt-28">
        <div className="w-full max-w-4xl mx-auto relative z-10 md:flex md:gap-12 p-4">
          <div className="w-full md:w-1/2 md:mt-10 mt-4">
            <InputForm onSubmit={handleSubmit} />
          </div>
          {roast && <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <RoastCard roast={roast} />
            
          </div>}
          
        </div>
      </main>
    </div>
  )
}

