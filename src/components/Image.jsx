import clsx from "clsx"
import NextImage from "next/image"
import { useState } from "react"

function Image({ className: addClassName, ...rest }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <NextImage
      {...rest}
      quality={isLoading ? "1" : "75"}
      className={clsx(
        "duration-700 ease-in-out ",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        addClassName
      )}
      onLoadingComplete={() => setIsLoading(!isLoading)}
    />
  )
}

export default Image
