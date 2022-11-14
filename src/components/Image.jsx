import NextImage from "next/image"
import clsx from "clsx"
import { useState } from "react"

function Image({ rounded, ...rest }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <NextImage
      {...rest}
      quality={isLoading ? "5" : "75"}
      className={clsx(
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        rounded && "rounded-full",
      )}
      onLoadingComplete={() => setIsLoading(!isLoading)}
    />
  )
}

export default Image
