import Image from "@/components/Image"
import {SpotifyIcon} from "@/icons"
import {useState} from "react"
import {twclsx} from "@/libs/twclsx"
import getDominantColor from "@/libs/utils/getDominantColor"
import Link from "@/components/Link"

export default function NowPlaying({
  songUrl,
  songImage,
  title,
  artist,
}){
  const [dominantColor, setDominantColor] = useState(null)

  const handleImageLoad = (event) => {
    const color = getDominantColor(event)
    setDominantColor(color)
  }

  return (
      <div
          className={twclsx(
              "group/nowPlaying relative flex  items-center overflow-hidden rounded-xl"
          )}
      >
        <div className="flex w-full flex-1 gap-3">
          <div
              className={twclsx("relative flex w-full flex-1 justify-between  ")}
              style={{
                background: dominantColor || "rgba(255, 255, 255, 0.1)",
              }}
          >

            <div className="p-4 mix-blend-hard-light dark:mix-blend-color-dodge">
              <div className="inline-flex items-center text-xs">
                <SpotifyIcon className="scale-[0.7]"/>
                <p className="font-bold">Now Playing</p>
              </div>

              <div className="flex flex-1 flex-col gap-2 ">
                <h3>{title}</h3>
                <h4 className="text-xs font-medium text-gray-400">{artist}</h4>
              </div>
            </div>

            <div className={twclsx("z-1 relative w-1/2 rounded-r-lg md:w-40")}>
              <Image
                  src={songImage}
                  alt={title}
                  onLoad={handleImageLoad}
                  className="aspect-square bg-contain bg-center object-cover object-center"
                  fill
              />
              <div
                  className="absolute inset-0 -ml-1"
                  style={{
                    background: `linear-gradient(90deg, ${dominantColor} 0%, rgba(255, 255, 255, 0) 100%)`,
                  }}
              ></div>


              <Link
                  href={songUrl}
                  className="absolute inset-0 z-10  flex h-full items-end justify-end  p-4 opacity-0  transition-opacity duration-300 group-hover/nowPlaying:opacity-100"
                  rel="noopener noreferrer"
              >
                <div className="flex  items-center justify-end gap-2 rounded-full bg-black/30 p-1 backdrop-blur-xl">
                  <SpotifyIcon className="scale-[0.7]"/>
                  <p className="text-xs font-medium text-gray-400">
                    Open in Spotify
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/*<div className="ml-auto">*/}
        {/*	<a href*/}
        {/*		={songUrl}*/}
        {/*		target="_blank"*/}
        {/*		cc*/}
        {/*		className="text-xs font-medium text-gray-400"*/}
        {/*	>*/}
        {/*		Open in Spotify*/}
        {/*	</a>*/}
        {/*</div>*/}
      </div>
  )
}
