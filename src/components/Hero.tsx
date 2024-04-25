import siteMetadata from "@/data/siteMetadata";
import { socialMedia } from "@/data/socialMedia";
import Link from "next/link";

function Hero() {
    return (
        <div className="flex max-w-lg flex-col gap-4">
            <h2 className="text-gradient bg-gradient-to-r from-teal-500 to-teal-800 text-3xl font-bold box-decoration-clone py-2 md:text-4xl">Rafa Al Razzak</h2>

            <p className="text-primary-400 text-sm md:text-base">{siteMetadata.SELF_DESCRIPTION}</p>

            <div className="flex gap-4">
                {socialMedia.map((socialMedia, index) => (
                    <Link key={index} href={socialMedia.url} className="group inline-flex">
                        <socialMedia.icon />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hero;
