import {  useMemo, useState } from "react"

import { MDXLayoutRenderer } from "@/components/md/MDXComponents"
import { getAllFiles, getFileBySlug } from "@/libs/mdx"

export async function getStaticProps() {
  const { mdxSource, frontMatter } = await getFileBySlug("md", "profile-penulis")
  const allContents = await getAllFiles("md")
  return {
    props: {
      mdxSource,
      frontMatter,
      allContents,
    },
  }
}

export default function Hello({ mdxSource, frontMatter, allContents }) {
  const [page, setPage] = useState("cover")
  const [pageIndex, setPageIndex] = useState(0)

   const PAGE_POSSITION = [
  "cover",
  "profil-penulis",
  "profil-perusahaan",
  "latar-belakang",
  "manfaat",
  "waktu-tempat",
  "jaringan-komputer",
  "website",
  "komunikasi",
  "teman-kerja",
  "why-php",
   ]

  const PageList = useMemo(() => {

    return allContents.map((content) => {
      return {
        ...content,
        position: PAGE_POSSITION.indexOf(content.frontMatter.slug),
      }
    })

  }, [PAGE_POSSITION, allContents])

  const handleNextPage = () => {
    const nextPage = PageList[0]
    if (nextPage) {
      setPage(nextPage.slug)
      setPageIndex(nextPage.position)
    }
  }
 

  return (
    <MDXLayoutRenderer
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      layout={frontMatter.layout}
      />
  )
}
