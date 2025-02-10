"use client"
import { Spotlight } from "@/components/ui/spotlight-new"
import AnimatedTestimonialsDemo from "@/components/testimonials"
import { Navbar } from "@/components/navbar"

export default function SpotlightNewDemo() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-24 sm:pt-28">
      <Navbar />
      <Spotlight />
      <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="p-4 max-w-6xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Easiest Way to share your feeling to loved ones.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto md:mx-0">
              Input some info about your loved ones, and let them know what u think about them by sharing them a
              humoruos card.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </div>
  )
}

