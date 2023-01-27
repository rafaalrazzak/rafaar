import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Balancer from "react-wrap-balancer"

import DynamicIcon from "@/components/DynamicIcon"
import Link from "@/components/Link"
import Tooltip from "@/components/Tooltip"
import Image from "@/components/Image"

export default function PortfolioCard({
  title,
  description,
  image,
  link,
  stack,
}) {
  return (
    <div className="after:z-2 fixed relative sticky top-24  flex h-64 w-full flex-col justify-between overflow-clip rounded-xl ring-2 ring-white bg-cover  bg-center px-4 py-2 text-white  transition-all duration-300 ease-in-out after:absolute  after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent dark:ring-primary-900">
      <Image
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full rounded-xl object-cover object-center after:absolute  after:inset-0 after:z-10 after:bg-gradient-to-t after:from-black after:via-black after:to-transparent"
        fill
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
      <div className="z-10 flex items-center justify-between">
        {stack && (
          <div className="inline-flex gap-3 rounded-full bg-black/40 px-2 py-1 backdrop-blur-xl">
            {stack.map((tool) => (
              <Tooltip key={tool} title={tool} position="bottom">
                <DynamicIcon name={tool} transform="scale(0.7)" />
              </Tooltip>
            ))}
          </div>
        )}

        <Link
          href={link}
          className="absolute top-2 right-3 inline-flex cursor-pointer rounded-full bg-black/40 p-2 backdrop-blur-xl"
        >
          <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-teal-400" />
        </Link>
      </div>
      <div className="absolute bottom-4 z-10 flex w-full flex-1 flex-col  px-2 pr-8">
        <Balancer className="font-bold text-white">{title}</Balancer>
        <Balancer className="text-xs leading-relaxed text-primary-400 line-clamp-2">
          {description}
        </Balancer>
      </div>
    </div>
  )
}
