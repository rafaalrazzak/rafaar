import "../styles/globals.css"

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Provider } from "react-wrap-balancer"

import variants, { withExit } from "@/libs/animation/variants"

const inter = Inter({
  subsets: ["latin"],
})

function MyApp({ Component, pageProps, router }) {
  const v = withExit(variants)

  const onExitComplete = () => window.scrollTo(0, 0)

  return (
    <ThemeProvider attribute="class" storageKey="theme" enableSystem>
      <LazyMotion features={domAnimation}>
        <AnimatePresence
          initial={false}
          onExitComplete={onExitComplete}
          mode={"wait"}
        >
          <m.div
            id="skip-content"
            key={router.route.concat(router.pathname)}
            variants={v}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={(inter.className, "overflow-hidden")}
          >
            <Provider>
              <Component {...pageProps} />
            </Provider>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  )
}
export default MyApp
