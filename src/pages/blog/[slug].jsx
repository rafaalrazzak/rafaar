import Layout from '@/components/Layout'

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
      <Layout>
        <section>
          <p>{slug}</p>
        </section>
      </Layout>
    </>
  )
}
