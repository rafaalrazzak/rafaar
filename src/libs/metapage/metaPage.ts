import type { Metadata } from 'next';

import siteMetadata from '@/data/site-metadata';

export const getMetaPage = (): Metadata => {
  return {
    title: {
      absolute: siteMetadata.SITE_NAME,
      default: 'Hello',
      template: '%s — rafaar',
    },
    description: siteMetadata.SELF_DESCRIPTION,
    metadataBase: new URL(siteMetadata.SITE_URL),
    icons: {
      icon: '/logo.svg',
    },
    openGraph: {
      siteName: siteMetadata.SITE_NAME,
      url: siteMetadata.SITE_URL,
      type: 'website',
      images: [
        {
          url: siteMetadata.TWITTER_CARD,
          width: 1200,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.SITE_NAME,
      description: siteMetadata.SELF_DESCRIPTION,
      creator: siteMetadata.TWITER_USERNAME,
      images: [siteMetadata.TWITTER_CARD],
    },
  };
};
