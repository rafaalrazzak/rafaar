import Container from './Container'
import Header from './Header'
function Layout({ children }) {
  return (
    <>
      <main>
        <Container className="overflow-clip bg-white py-24 ring-1 ring-primary-100 dark:bg-primary-900 dark:ring-primary-300/20 xl:py-16">
          <Header />
          <div className="px-6">{children}</div>
        </Container>
      </main>
    </>
  )
}
export default Layout
