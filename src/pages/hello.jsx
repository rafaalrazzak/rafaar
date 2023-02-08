
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from "@/libs/mdx"

export async function getStaticProps() {
  const {mdxSource, frontMatter} = await getFileBySlug("md", "latar-belakang")


  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}

export default function Hello({ mdxSource, frontMatter }) {


  return <MDXLayoutRenderer layout={frontMatter.layout} mdxSource={mdxSource} frontMatter={frontMatter}/>
}
