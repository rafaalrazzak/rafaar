import { MDXLayoutRenderer } from "@/components/md/MDXComponents"
import { getFileBySlug } from "@/libs/mdx"

export async function getStaticProps() {
  const { mdxSource, frontMatter } = await getFileBySlug("md", "why-php")

  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}

export default function Hello({ mdxSource, frontMatter }) {
  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
