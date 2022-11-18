import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import siteMetadata from '@/data/siteMetadata'

/**
 * It takes a NextSeoProps object and returns a `<NextSeo /> component`.
 */
export const SEO = ({ ...props }) => {
  const router = useRouter()

  const TITLE_TEMPLATE = `%s — ${
    props.template ?? (siteMetadata.SITE_NAME || 'rafaar.')
  }`

  const DESCRIPTION =
    props.description ?? (siteMetadata.SITE_DESCRIPTION || 'hello world!')

  const thumb = `${siteMetadata.SITE_URL}/api/og?title=${props.title} — ${siteMetadata.SITE_NAME}`

  return (
    <NextSeo
      {...props}
      title={props.title}
      titleTemplate={TITLE_TEMPLATE}
      openGraph={{
        url: siteMetadata.SITE_URL + router.pathname,
        title: TITLE_TEMPLATE,
        description: DESCRIPTION,
        images: [
          {
            url: thumb,
            width: 1200,
            height: 630,
            alt: TITLE_TEMPLATE,
            type: 'image/jpeg'
          }
        ],
        siteName: TITLE_TEMPLATE
      }}
    />
  )
}
