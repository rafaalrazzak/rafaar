'use client'

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
    props.description ?? (siteMetadata.SELF_DESCRIPTION || 'hello world!')

  const defaultThumb =
    'https://res.cloudinary.com/raf-ar/image/upload/v1670138621/thumbnail/raf-dark-social-stack.png'
  const thumb = router.pathname.startsWith('/blog')
    ? `${siteMetadata.SITE_URL}/api/og?title=${props.title} — ${siteMetadata.SITE_NAME}&blog`
    : defaultThumb
  const url = siteMetadata.SITE_URL + router.pathname
  return (
    <NextSeo
      {...props}
      title={props.title}
      titleTemplate={TITLE_TEMPLATE}
      description={DESCRIPTION}
      twitter={{
        site: url,
        handle: siteMetadata.TWITER_USERNAME,
        cardType: 'summary_large_image',
      }}
      openGraph={{
        url: url,
        title: props.title,
        description: DESCRIPTION,
        images: [
          {
            url: thumb,
            width: 1200,
            height: 628,
            alt: props.title,
            type: 'image/png',
          },
        ],
        siteName: siteMetadata.SITE_NAME || 'rafaar.',
      }}
      additionalMetaTags={[
        {
          property: 'twitter:image',
          content: thumb,
        },
      ]}
    />
  )
}
