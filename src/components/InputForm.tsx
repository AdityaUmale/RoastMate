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
    roastType: 'loving' | 'funny' | 'savage'
  }) => void
  isGenerating: boolean
}

export function InputForm({ onSubmit, isGenerating }: InputFormProps) {
  const [crushInfo, setCrushInfo] = useState({
    hobbies: "",
    quirks: "",
    favorites: "",
    relationship: "",
    roastType: "funny" as 'loving' | 'funny' | 'savage'
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
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setCrushInfo({ ...crushInfo, roastType: 'loving' })}
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              crushInfo.roastType === 'loving'
                ? 'bg-pink-500 text-white'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            Loving ❤️
          </button>
          <button
            type="button"
            onClick={() => setCrushInfo({ ...crushInfo, roastType: 'funny' })}
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              crushInfo.roastType === 'funny'
                ? 'bg-purple-500 text-white'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            Funny 😄
          </button>
          <button
            type="button"
            onClick={() => setCrushInfo({ ...crushInfo, roastType: 'savage' })}
            className={`p-2 rounded-lg text-sm font-medium transition-all ${
              crushInfo.roastType === 'savage'
                ? 'bg-red-500 text-white'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            Savage 🔥
          </button>
        </div>
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

