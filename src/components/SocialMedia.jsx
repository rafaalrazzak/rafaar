import SocialMediaData from "@/data/SocialMedia.json"
import { TwitterIcon, InstagramIcon, GithubIcon } from "@icons"

import Link from "./Link"
function SocialMedia() {
  const Icon = ({ name }) => {
    switch (name) {
      case "Twitter":
        return <TwitterIcon />
      case "Instagram":
        return <InstagramIcon />
      case "Github":
        return <GithubIcon />
      default:
        return null
    }
  }
  return (
    <>
      {SocialMediaData.map((socialMedia, index) => (
        <Link key={index} href={socialMedia.url} className="mr-6 inline-flex">
          <Icon name={socialMedia.name} />
        </Link>
      ))}
    </>
  )
}

export default SocialMedia
