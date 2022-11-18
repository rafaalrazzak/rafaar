import '../styles/globals.css'

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import variants, { withExit } from '@/libs/animation/variants'

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
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  )
}
export default MyApp
