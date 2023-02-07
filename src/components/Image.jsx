import clsx from "clsx"
import NextImage from "next/image"
import { useState } from "react"

function Image({ className: addClassName, ...rest }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <NextImage
      quality={isLoading ? "1" : "75"}
      className={clsx(
        "duration-700 ease-in-out ",
        { "opacity-0": isLoading },
        addClassName
      )}
      onLoadingComplete={() => setIsLoading(!isLoading)}
      alt="Image"
      {...rest}
    />
  )
}

export default Image
