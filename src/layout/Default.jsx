import Container from "@/components/Container"
import Header from "@/components/Header"
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        <Container className="group/bg relative">
          <div className="absolute inset-0 animate-tilt rounded-lg bg-gradient-to-r from-teal-600 to-sky-600 opacity-30 blur-xl transition duration-1000 group-hover:opacity-100 group-hover/bg:duration-200 " />
          <div className="relative -mx-6  rounded-t-xl border-x border-t border-secondary-700/80 bg-white px-6 py-4 dark:border-secondary-500/80 dark:bg-primary-900 sm:rounded-none sm:border-t-0">
            {children}
          </div>
        </Container>
      </main>
    </>
  )
}
export default DefaultLayout
