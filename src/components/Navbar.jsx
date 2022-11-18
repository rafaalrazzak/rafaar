import clsx from 'clsx'
import { useRouter } from 'next/router'

import Link from './Link'

function NavbarComponent({ className, children }) {
  return <nav className={clsx('flex py-6', className)}>{children}</nav>
}

function Items({ className, children }) {
  return <ul className={clsx('flex', className)}>{children}</ul>
}

function Item({ href, children }) {
  const router = useRouter()
  const thisPage = router?.asPath === href || href === '/blog'


  return (
    <li
      className={clsx(
        'text-sm font-semibold transition-colors ease-in-out hover:text-secondary-500'
      )}
    >
      <Link
        href={href}
        className={clsx(thisPage && 'relative flex text-secondary-500')}
      >
        {children}
        {thisPage && (
          <span className="absolute -bottom-[9px] h-px w-10 items-center bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

export default Object.assign(NavbarComponent, {
  Items,
  Item,
})
