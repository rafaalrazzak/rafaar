import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, m } from 'framer-motion'

import { useDrawer } from '@/hooks'
import { twclsx } from '@/libs/twclsx'

import { DrawerMenu } from './DrawerMenu'
import { UnstyledButton } from './unstyle/Button'

export const DrawerButton = () => {
  const v = {
    hidden: { scale: 0.25, opacity: 0, transition: { duration: 0.1 } },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'tween', duration: 0.1 },
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.1 } },
  }
  const { changeState, isOpen } = useDrawer()

  return (
    <>
      <UnstyledButton
        aria-label="toggle-drawer"
        id="toggle-drawer"
        className={twclsx(
          'accesible z-50',
          'md:hidden',
          'h-10 w-10 rounded-lg text-lg'
        )}
        onClick={changeState}
      >
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <m.span
              key={1}
              variants={v}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <XMarkIcon className="social-icon" />
            </m.span>
          )}
          {!isOpen && (
            <m.span
              key={2}
              variants={v}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Bars2Icon className="social-icon" />
            </m.span>
          )}
        </AnimatePresence>
      </UnstyledButton>

      <AnimatePresence mode={'wait'}>
        {isOpen && <DrawerMenu />}
      </AnimatePresence>
    </>
  )
}
