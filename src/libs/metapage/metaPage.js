import siteMetadata from '@/data/siteMetadata'

export const getMetaPage = (data) => {
  return {
    canonical: siteMetadata.SITE_URL + data.slug,
    openGraph: {
      images: [
        {
          url: data.og_image,
          alt: data.og_image_alt,
          width: 1200,
          height: 600
        }
      ],
      site_name: siteMetadata.SITE_NAME,
      url: siteMetadata.SITE_URL + data.slug,
      type: data.type ?? 'website'
    },
    twitter: {
      cardType: 'summary_large_image',
      // TODO: Change to your Tiwetter username
      site: siteMetadata.TWITER_USERNAME,
      handle: siteMetadata.TWITER_USERNAME
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: data.keywords.join(', ')
      }
    ],
    ...data
  }
}
