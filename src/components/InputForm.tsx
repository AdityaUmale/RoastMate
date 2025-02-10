"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface InputFormProps {
  onSubmit: (crushInfo: {
    hobbies: string
    quirks: string
    favorites: string
    relationship: string
  }) => void
  isGenerating: boolean
}

export function InputForm({ onSubmit, isGenerating }: InputFormProps) {
  const [crushInfo, setCrushInfo] = useState({
    hobbies: "",
    quirks: "",
    favorites: "",
    relationship: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCrushInfo({ ...crushInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(crushInfo)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Textarea
          name="hobbies"
          placeholder="Hobbies"
          value={crushInfo.hobbies}
          onChange={handleChange}
          className="w-full bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500 focus:ring-purple-500"
        />
        <Textarea
          name="quirks"
          placeholder="Funny Quirks"
          value={crushInfo.quirks}
          onChange={handleChange}
          className="w-full bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500 focus:ring-purple-500"
        />
        <Textarea
          name="favorites"
          placeholder="Favorite Things"
          value={crushInfo.favorites}
          onChange={handleChange}
          className="w-full bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500 focus:ring-purple-500"
        />
        <Textarea
          name="relationship"
          placeholder="Relationship Dynamics"
          value={crushInfo.relationship}
          onChange={handleChange}
          className="w-full bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500 focus:ring-purple-500"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isGenerating}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isGenerating ? "Generating..." : "Generate Roast"}
      </Button>
    </form>
  )
}

