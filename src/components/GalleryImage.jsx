import clsx from "clsx"

import Image from "./Image"

function GalleryImage({ id, image }) {
  return (
    <div
      className={clsx(
        " relative aspect-[9/10] h-64 w-48  flex-none   overflow-clip  rounded-xl transition-all duration-300  hover:scale-[1.1] sm:rounded-2xl",
        {
          "-rotate-2 hover:-rotate-12 ": id % 2 === 0,
          "rotate-2 hover:rotate-12": id % 2 === 1,
        }
      )}
    >
      <Image
        src={image}
        width={200}
        height={500}
        alt={`Image ${id}ss`}
        className="absolute inset-0 h-full bg-cover object-cover"
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
    </div>
  )
}

export default GalleryImage
