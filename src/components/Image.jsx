"use client"

import NextImage from "next/image"
import { useState } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

function completeLoad() {
  console.log("Complete")
}

function Image({ ...rest }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <NextImage
      {...rest}
      loading="lazy"
      quality={isLoading ? "5" : "75"}
      className={cn(
        "object-cover duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0",
      )}
      onLoadingComplete={completeLoad}
    />
  )
}

export default Image
