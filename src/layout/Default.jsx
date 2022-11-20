import Container from '@/components/Container'
import Header from '@/components/Header'
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <main>
        <Container className="overflow-clip bg-white py-24 ring-1 ring-primary-100 dark:bg-primary-900 dark:ring-primary-300/20 xl:py-16">
          <Header />
          {children}
        </Container>
      </main>
    </>
  )
}
export default DefaultLayout
