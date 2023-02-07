import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

import Image from "@/components/Image"

function Card({
  bg = "bg-gradient-to-r from-pink-600 to-purple-600",
  className: addClassName,
  children,
  img,
  ...props
}) {
  return (
    <div
      className={clsx(
        "relative mx-auto flex max-w-screen-sm items-center justify-center",
        addClassName
      )}
      {...props}
    >
      <div className="relative">
        {bg && (
          <div
            className={clsx(
              "duration-1500 absolute -inset-0.5 -m-3 animate-tilt rounded-lg  opacity-75 blur-xl  transition",
              bg
            )}
          />
        )}

        <div
          className={clsx(
            "relative rounded-xl bg-gradient-to-br from-gray-800 to-black p-0.5 drop-shadow-sm"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center justify-center overflow-clip rounded-xl bg-black",
              !img && "p-12"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function ImageCard({ src, title, className: addClassName, ...props }) {
  return (
    <Card
      img
      className={clsx(
        "flex flex-col items-center justify-center p-0",
        addClassName
      )}
      {...props}
    >
      <div
        className={
          "flex w-full items-center border-b border-gray-800 px-4 py-2"
        }
      >
        <div className={"flex items-center gap-2"}>
          <div className={"h-2 w-2 rounded-full bg-red-500"} />
          <div className={"h-2 w-2 rounded-full bg-yellow-500"} />
          <div className={"h-2 w-2 rounded-full bg-green-500"} />
        </div>
        <div
          className={
            "max-w-64 mx-auto flex items-center gap-2 rounded-xl bg-black py-1 text-xs outline outline-1 outline-gray-800"
          }
        >
          <div
            className={
              "mx-4 flex w-full items-center justify-between gap-1 text-xs text-gray-500"
            }
          >
            <MagnifyingGlassIcon className={"h-3 w-3"} />
            <span className="flex flex-1">{title || "Search everything!"}</span>
          </div>
        </div>
      </div>

      <Image
        src={src}
        alt={"Images"}
        className={clsx("aspect-video object-cover")}
        width={800}
        height={600}
      />
    </Card>
  )
}

export { Card, ImageCard }
