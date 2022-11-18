import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import variants, { withExit } from "@/libs/animation/variants"

function MyApp({ Component, pageProps, router }) {
  const v = withExit(variants)

  const onExitComplete = () => window.scrollTo(0, 0)

  return (
    <ThemeProvider attribute="class" storageKey="theme" enableSystem>
      <LazyMotion features={domAnimation}>
        <AnimatePresence
          initial={false}
          onExitComplete={onExitComplete}
          exitBeforeEnter
        >
          <m.div
            id="skip-content"
            key={router.route.concat(router.pathname)}
            variants={v}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              router.pathname !== "/resume"
                ? "layout"
                : "mx-auto w-11/12 max-w-3xl"
            }
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  )
}
export default MyApp
