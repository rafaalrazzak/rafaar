import Layout from '@/components/Layout'
import { base64 } from '@/utils/encrypt'

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.github.com/repos/rafaalrazzak/rafalrazzak/contents/README.md'
  )

  const data = await res.json()

  return {
    props: { data },
  }
}

export default function About({ data }) {
  const content = base64.decode(data.content)

  return (
    <Layout>
      <article className="prose prose-xl">{content}</article>
    </Layout>
  )
}
