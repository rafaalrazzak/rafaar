import {usePalette} from "color-thief-react"
import Balancer from "react-wrap-balancer"
import Image from "@/components/Image"
import {SpotifyIcon} from "@/icons"

import Link from "../Link"

export default function TopTrack({songUrl, songImage, title, artist}){

	const {data: dominantColor} = usePalette(songImage, 2, "hex", {
		crossOrigin: "RAF",
	})

	return (
			<div
					className="group/nowPlaying fixed w-auto grow w-[20rem] top-24 border-2 border-white dark:border-primary-900 relative sticky flex items-center overflow-clip drop-shadow-sm rounded-xl  "
					style={{
						background: dominantColor ? dominantColor[0] : "rgba(255, 255, 255, 0.1)",
					}}
			>
				<Image
						src={songImage}
						alt={title}
						className="aspect-square bg-contain bg-center object-cover object-center  rounded-r-lg "
						fill
						sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
				/>
				<div
						className="absolute inset-0"
						style={{
							background: `linear-gradient(90deg, ${dominantColor ? dominantColor[0] : "#00000"} 30%, rgba(255, 255, 255, 0) 100%)`,
						}}
				></div>


				<div className="flex w-full flex-1 gap-3">

					<div
							className="relative flex w-full flex-1 justify-between rounded-xl"
					>
						<div
								className="p-4"
								style={{color: dominantColor ? dominantColor[1] : "black"}}
						>

							<div className="flex flex-1 flex-col gap-2">
								<Balancer className="text-xl font-bold" style={{color: dominantColor ? dominantColor[1] : "black"}}>
									{title}
								</Balancer>
								<h4
										className="text-xs font-medium"
										style={{color: dominantColor ? dominantColor[1] : "black"}}
								>
									{artist}
								</h4>
							</div>
						</div>
						<Link
								href={songUrl}
								className=" inset-0 z-10 flex  items-end justify-end p-2 opacity-0 transition-opacity duration-300 group-hover/nowPlaying:opacity-100"
								rel="noopener noreferrer"
						>
							<div
									className="flex items-center justify-end gap-1 rounded-full bg-black/30 p-1 absolute bottom-4  backdrop-blur-xl  ">
								<div>
									<SpotifyIcon className="scale-[0.7]" fill={dominantColor ? dominantColor[1] : "black"}/>
								</div>
								<p className="text-xs font-medium line-clamp-1" style={{
									color: dominantColor ? dominantColor[1] : "black",
								}}>
									Open in Spotify
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>)
}