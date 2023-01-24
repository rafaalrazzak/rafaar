import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import { SEO } from "@/components/SEO"
import { DefaultLayout } from "@/layout"
import { base64 } from "@/utils/encrypt"

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/repos/rafaalrazzak/rafalrazzak/contents/README.md"
  )

  const data = await res.json()

  const content = await serialize(base64.decode(data.content))

  return {
    props: { content },
  }
}

export default function About({ content }) {
  return (
    <DefaultLayout>
      <SEO title="About" />
      <div className="prose prose-slate mx-auto flex-col justify-center py-16 prose-img:rounded-xl dark:prose-invert">
        <MDXRemote {...content} />
      </div>
    </DefaultLayout>
  )
}
