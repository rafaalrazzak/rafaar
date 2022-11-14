import "../styles/globals.css"

import Container from "@/components/Container"
import Header from "@/components/Header"
function Layout({ children }) {
  return (
    <Container className="w-full bg-white ring-1 ring-primary-100 dark:bg-primary-900 dark:ring-primary-300/20">
      <Header />
      <main className="py-12">{children}</main>
    </Container>
  )
}
export default Layout
