import { m } from 'framer-motion'
import { useRouter } from 'next/router'

import APP_ROUTE from '@/data/AppRoute'
import { useDrawer } from '@/hooks'
import { twclsx } from '@/libs/twclsx'

import { UnstyledLink } from './unstyle/Link'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, ease: 'easeOut' },
  },
}

const item = {
  hidden: {
    ...container.hidden,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
    },
  },
}

export const DrawerMenu = () => {
  const { changeState } = useDrawer()
  const { pathname } = useRouter()

  return (
    <aside
      aria-labelledby="toggle-drawer"
      className={twclsx(
        'fixed left-0 bottom-0 top-20 z-20',
        'h-screen w-screen backdrop-blur',
        'bg-theme-50 dark:bg-theme-900',
        'md:hidden'
      )}
    >
      <nav className={twclsx('layout', 'flex flex-col')}>
        <m.ul variants={container} initial="hidden" animate="visible">
          {APP_ROUTE.map((prop, id) => (
            <m.li key={id} variants={item}>
              <UnstyledLink
                key={id}
                href={prop.path}
                onClick={changeState}
                className={twclsx(
                  'inline-flex w-full text-left',
                  'border-b py-4 font-medium',
                  pathname === prop.path
                    ? 'border-primary-600 text-theme-900 dark:border-primary-500 dark:text-theme-100'
                    : 'border-theme-200 text-theme-700 dark:border-theme-800 dark:text-theme-300'
                )}
              >
                {prop.name}
              </UnstyledLink>
            </m.li>
          ))}
        </m.ul>
      </nav>
    </aside>
  )
}
