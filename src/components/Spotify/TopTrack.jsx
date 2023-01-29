import { usePalette } from "color-thief-react"
import Balancer from "react-wrap-balancer"

import Image from "@/components/Image"
import { SpotifyIcon } from "@/icons"

import Link from "../Link"
import LinkTo from "./LinkTo"

export default function TopTrack({ songUrl, songImage, title, artist }) {
  const { data: dominantColor } = usePalette(songImage, 2, "hex", {
    crossOrigin: "RAF",
  })

  return (
    <div
      className="group/nowPlaying  top-24 flex max-h-32 w-[20rem] grow items-center overflow-clip rounded-xl ring-2 ring-white drop-shadow-sm dark:ring-primary-900  "
      style={{
        background: dominantColor
          ? dominantColor[0]
          : "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Image
        src={songImage}
        alt={title}
        className="aspect-square rounded-r-lg bg-contain bg-center object-cover  object-center "
        fill
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${
            dominantColor ? dominantColor[0] : "#00000"
          } 30%, rgba(255, 255, 255, 0) 100%)`,
        }}
      ></div>

      <div className="relative flex w-full  items-center justify-between rounded-xl">
        <div
          className="p-4"
          style={{ color: dominantColor ? dominantColor[1] : "black" }}
        >
          <div className="flex flex-1 flex-col gap-2">
            <Balancer
              className="text-xl font-bold"
              style={{ color: dominantColor ? dominantColor[1] : "black" }}
            >
              {title}
            </Balancer>
            <h4
              className="text-xs font-medium"
              style={{ color: dominantColor ? dominantColor[1] : "black" }}
            >
              {artist}
            </h4>
          </div>
        </div>
        <LinkTo
          url={songUrl}
          color={dominantColor ? dominantColor[1] : "black"}
          className="absolute bottom-4 right-4 justify-between group-hover/nowPlaying:opacity-100"
        />
      </div>
    </div>
  )
}
