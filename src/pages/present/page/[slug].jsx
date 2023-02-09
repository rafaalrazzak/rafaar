import { MDXLayoutRenderer } from "@/components/md/MDXComponents"
import PrevNext from "@/components/md/PrevNext"
import { SEO } from "@/components/SEO"
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/libs/mdx"

export async function getStaticPaths() {
  const posts = getFiles("md")
    .map((post) => [post])
    .flat()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: formatSlug(post),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("md")
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug
  )
  const prev = allPosts[postIndex - 1] || null
  const next = allPosts[postIndex + 1] || null
  const post = await getFileBySlug("md", params.slug)

  return { props: { post, prev, next } }
}

export default function Blog({ post, prev, next }) {
  const { mdxSource, frontMatter } = post
  return (
    <>
      <SEO
        title={frontMatter?.title || "raf"}
        thumb={`https://s.vercel.app/api?url=https://www.rafaar.my.id/present/page/${frontMatter.slug}&width=1200&height=630`}
      />
      <MDXLayoutRenderer
        layout={frontMatter.layout}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        prev={prev}
        next={next}
      />
      <PrevNext next={next} prev={prev} />
    </>
  )
}
