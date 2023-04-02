import { usePalette } from "color-thief-react"

import Image from "@/components/Image"
import { SpotifyIcon } from "@/icons"

import LinkTo from "./LinkTo"

export default function NowPlaying({ songUrl, songImage, title, artist }) {
  const { data: dominantColor } = usePalette(songImage, 2, "hex", {
    crossOrigin: "RAF",
  })

  return (
    <div className="group/nowPlaying relative flex flex-1 items-center overflow-clip  rounded-xl">
      <div className="flex w-full flex-1 gap-3">
        <div
          className="relative flex w-full flex-1 justify-between rounded-xl"
          style={{
            background: dominantColor
              ? dominantColor[0]
              : "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            className="p-4"
            style={{ color: dominantColor ? dominantColor[1] : "black" }}
          >
            <div className="inline-flex items-center gap-1 text-xs">
              <SpotifyIcon
                className="scale-[0.7]"
                fill={dominantColor ? dominantColor[1] : "black"}
              />
              <p className="font-bold">Now Playing</p>
            </div>
            <div className="b  flex flex-1 flex-col gap-2">
              <h3 style={{ color: dominantColor ? dominantColor[1] : "black" }}>
                {title}
              </h3>
              <h4
                className="text-xs font-medium"
                style={{ color: dominantColor ? dominantColor[1] : "black" }}
              >
                {artist}
              </h4>
            </div>
          </div>
          <div className="relative w-1/2 rounded-r-lg  md:w-40">
            <Image
              src={songImage}
              alt={title}
              className="aspect-square bg-contain bg-center object-cover object-center"
              fill
              sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            <div
              className="absolute inset-0 -ml-1"
              style={{
                background: `linear-gradient(90deg, ${
                  dominantColor ? dominantColor[0] : "#00000"
                } 0%, rgba(255, 255, 255, 0) 100%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <LinkTo
        url={songUrl}
        color={dominantColor ? dominantColor[1] : "black"}
        className="absolute top-4 right-4 justify-between group-hover/nowPlaying:opacity-100"
      />
    </div>
  )
}
