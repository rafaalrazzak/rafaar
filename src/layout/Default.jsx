import Container from "@/components/Container"
import Header from "@/components/Header"
import { twclsx } from "@/libs/twclsx"
export const DefaultLayout = ({ children, className: addClassName }) => {
  return (
    <>
      <main>
        <Header />
        <Container className="group/bg relative ">
          <div className="duration-1500 absolute inset-0 animate-tilt rounded-lg bg-gradient-to-r from-teal-600 to-sky-600 opacity-30 blur-xl transition group-hover:opacity-100" />
          <div
            className={twclsx(
              "relative rounded-t-xl border-x border-t border-secondary-700/80 bg-white px-6 py-4 dark:border-secondary-500/80 dark:bg-primary-900 sm:rounded-none sm:border-t-0 md:px-12",
              addClassName
            )}
          >
            {children}
          </div>
        </Container>
      </main>
    </>
  )
}
export default DefaultLayout
