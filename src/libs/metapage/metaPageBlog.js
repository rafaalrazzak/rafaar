import siteMetadata from "@/data/siteMetadata"
import { dateStringToISO } from "@/utils/dateFormat"

import { generateOgImage } from "./ogImage"

export const getMetaPageBlog = (data) => ({
  title: data.title,
  description: data.summary,
  canonical: siteMetadata.SITE_URL + data.slug,
  openGraph: {
    type: "blog",
    article: {
      authors: [data.author_name],
      publishedTime: dateStringToISO(data.published),
      tags: data.topics,
    },
    images: [
      {
        // TODDO: update your default thumbnail
        url: generateOgImage({ title: data.title, theme: "dark" }),
        alt: data.title,
        width: 1200,
        height: 600,
      },
    ],
    url: siteMetadata.SITE_URL + data.slug,
    site_name: siteMetadata.SITE_NAME,
  },
  twitter: {
    cardType: "summary_large_image",
    // TODO: Change to your Tiwitter username
    site: siteMetadata.TWITER_USERNAME,
    handle: siteMetadata.TWITER_USERNAME,
  },
  additionalMetaTags: [
    {
      name: "ARTICLE:PUBLISHED_TIME",
      content: dateStringToISO(data.published),
    },
    {
      name: "ARTICLE:TAGS",
      content: data.topics.join(","),
    },
    {
      name: "PUBLISH_DATE",
      content: dateStringToISO(data.published),
    },
    {
      name: "keywords",
      content: data.keywords.join(","),
    },
    {
      name: "author",
      content: data.author_name,
    },
  ],
})
