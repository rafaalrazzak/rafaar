import clsx from "clsx"

import Project from "@/data/Project"

import Image from "./Image"

function ProjectImage() {
  return (
    <div className="relative inset-x-0 flex justify-center gap-5  py-12 sm:gap-8">
      {Project.map((project, index) => (
        <div
          key={index}
          className={clsx(
            " relative aspect-[9/10] h-64 w-48  flex-none   overflow-clip  rounded-xl transition-all duration-300  hover:scale-[1.1] sm:rounded-2xl",
            {
              "-rotate-2 hover:-rotate-12 ": index % 2 === 0,
              "rotate-2 hover:rotate-12": index % 2 === 1,
            }
          )}
        >
          <Image
            src={project.url}
            width={200}
            height={500}
            alt={project.name}
            className="absolute inset-0 h-full bg-cover object-cover"
            sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectImage
