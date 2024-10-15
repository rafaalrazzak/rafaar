"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const careerData = [
  { year: 2024, title: "Junior Developer", description: "First steps into professional coding", color: "bg-blue-600" },
  { year: 2025, title: "Mid-level Developer", description: "Taking on more complex projects", color: "bg-green-600" },
  { year: 2026, title: "Senior Developer", description: "Leading development initiatives", color: "bg-yellow-600" },
  { year: 2027, title: "Team Lead", description: "Managing a small dev team", color: "bg-orange-600" },
  { year: 2028, title: "Project Manager", description: "Overseeing multiple projects", color: "bg-red-600" },
  { year: 2029, title: "Development Manager", description: "Steering department strategy", color: "bg-purple-600" },
  { year: 2030, title: "Director of Engineering", description: "Shaping company-wide tech direction", color: "bg-indigo-600" },
  { year: 2031, title: "VP of Technology", description: "Driving technological innovation", color: "bg-pink-600" },
  { year: 2032, title: "CTO", description: "Setting the technological vision", color: "bg-teal-600" },
  { year: 2033, title: "Tech Entrepreneur", description: "Launching a groundbreaking startup", color: "bg-cyan-600" },
]

export default function Career() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : careerData.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < careerData.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">Rafa&lsquo;s Grows</h1>
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div className={`w-32 h-32 ${careerData[currentIndex].color} rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-4xl font-bold text-white">{careerData[currentIndex].year}</span>
                </div>
                <h2 className="text-3xl font-semibold text-gray-100 mb-4">{careerData[currentIndex].title}</h2>
                <p className="text-xl text-gray-300 max-w-md">{careerData[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>
            <div className="flex space-x-2">
              {careerData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}