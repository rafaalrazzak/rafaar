// import { usePalette } from "color-thief-react";

import LinkTo from "./LinkTo";
import { Track } from "@/libs/api/getSpotify";

import Image from "@/components/Image";

export default function TopTrack({ songUrl, songImage, title, artist }: Track) {
    // const { data: dominantColor, loading, error } = usePalette(songImage, 2, "hex", {
    //     crossOrigin: "anonymous",

    // });

    return (
        <div className="group/nowPlaying top-24 flex h-32 grow items-center overflow-clip rounded-xl ring-2  drop-shadow-sm ring-primary-900 bg-primary-400">
            <Image
                src={songImage}
                alt={title}
                className="aspect-square rounded-r-lg bg-contain bg-center object-cover object-center"
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, ${"rgba(0,0,0, 0.6)"} 30%, rgba(0, 0, 0, 0) 100%)`,
                }}
            />

            <div className="relative flex w-full items-center justify-between rounded-xl">
                <div className="p-4" style={{ color: "black" }}>
                    <div className="flex flex-1 flex-col gap-2">
                        <p className="text-xl font-bold">{title}</p>
                        <h4 className="text-xs font-medium">{artist}</h4>
                    </div>
                </div>
                <LinkTo url={songUrl} color={"black"} className="absolute bottom-4 right-4 justify-between group-hover/nowPlaying:opacity-100" />
            </div>
        </div>
    );
}
