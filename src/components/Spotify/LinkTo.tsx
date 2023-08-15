import { SpotifyIcon } from "@/icons";
import { twclsx } from "@/libs/twclsx";

import Link from "../Link";

interface LinkToProps extends React.HTMLAttributes<HTMLAnchorElement> {
    color: string;
    url: string;
}

export default function LinkTo({ color, url, className: addClassName }: LinkToProps) {
    return (
        <Link href={url} className={twclsx("relative flex cursor-pointer opacity-0 transition-opacity duration-300 ", addClassName)} rel="noopener noreferrer">
            <div className="  flex items-center gap-1 rounded-full bg-black/30 p-1  backdrop-blur-xl  ">
                <div>
                    <SpotifyIcon className="scale-[0.7]" fill={color} />
                </div>
                <p
                    className="line-clamp-1 text-xs font-medium"
                    style={{
                        color: color,
                    }}
                >
                    Open in Spotify
                </p>
            </div>
        </Link>
    );
}
