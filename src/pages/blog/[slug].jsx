import { BlogLayout } from '@/layout'

export async function getServerSideProps({ params }) {
  const { slug } = params
  return {
    props: {
      slug,
    },
  }
}

export default function BlogPage({ slug }) {
  return (
    <>
      <BlogLayout>
        <section>
          <p>{slug}</p>
        </section>
      </BlogLayout>
    </>
  )
}
