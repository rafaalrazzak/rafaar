import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import MarkdownContent from "@/components/MarkdownContent"
import { getFileBySlug, getFiles } from "@/libs/mdx"

export async function getStaticProps() {
  const source = getFileBySlug("./src/md", "hello.mdx")

  const mdxSource = await serialize(source, { parseFrontmatter: true })

  return {
    props: {
      mdxSource,
      source,
    },
  }
}

export default function Hello({ mdxSource, source }) {

  return <MDXRemote {...mdxSource} />
}
