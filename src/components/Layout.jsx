import Container from "./Container"
import Header from "./Header"
function Layout({ children }) {
  return (
    <>
      <Container className="w-full bg-white ring-1 ring-primary-100 dark:bg-primary-900 dark:ring-primary-300/20">
        <Header />
        <main className="py-12">{children}</main>
      </Container>
    </>
  )
}
export default Layout
