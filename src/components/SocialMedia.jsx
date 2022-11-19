import SocialMediaData from '@/data/SocialMedia.json'
import { GithubIcon, InstagramIcon, TwitterIcon } from '@/icons'

import Link from './Link'
function SocialMedia() {
  const Icon = ({ name }) => {
    switch (name) {
      case 'Twitter':
        return <TwitterIcon />
      case 'Instagram':
        return <InstagramIcon />
      case 'Github':
        return <GithubIcon />
      default:
        return null
    }
  }
  return (
    <>
      {SocialMediaData.map((socialMedia, index) => (
        <Link
          key={index}
          href={socialMedia.url}
          className="group mr-6 inline-flex"
        >
          <Icon name={socialMedia.name} />
        </Link>
      ))}
    </>
  )
}

export default SocialMedia
