import { socialMedia } from "@/data/socialMedia";

import Link from "./Link";
function SocialMedia() {
    return (
        <div className="flex gap-4">
            {socialMedia.map((socialMedia, index) => (
                <Link key={index} href={socialMedia.url} className="group inline-flex">
                    <socialMedia.icon />
                </Link>
            ))}
        </div>
    );
}

export default SocialMedia;
