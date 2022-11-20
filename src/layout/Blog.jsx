import Container from '@/components/Container'
// import Image from '@/components/Image'
export const BlogLayout = ({ children }) => {
  return (
    <>
      <main>
        <Container className="overflow-clip bg-white py-24 ring-1 ring-primary-100 dark:bg-primary-900 dark:ring-primary-300/20 xl:py-16">
          <div className=" h-8/12 w-24 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover"></div>
          {children}
        </Container>
      </main>
    </>
  )
}
