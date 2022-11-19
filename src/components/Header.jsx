// import ToggleTheme from "./ToggleTheme"
import clsx from 'clsx'

import AppRoute from '@/data/AppRoute'
import { useScroll } from '@/hooks'
import { useMediaQuery } from '@/hooks'

import { DrawerButton } from './DrawerButton'
import Image from './Image'
import Navbar from './Navbar'
import { ThemeButton } from './ThemeButton'
function Header() {
  const visible = useScroll()
  const mdscreen = useMediaQuery('(min-width: 768px)')

  return (
    <header
      className={clsx(
        ' fixed z-50 h-24 w-full px-6 transition-all duration-300 ease-in-out md:px-12',
        visible ? 'inset-0 ' : 'left-0 -top-16'
      )}
    >
      <Navbar className="flex w-full ">
        <Navbar.Items className="flex w-full items-center justify-between gap-3 lg:gap-6">
          <div className="z-50 flex items-center gap-4">
            <div className="h-10 w-10 justify-center overflow-hidden rounded-full">
              <Image
                src="/rafaar.jpg"
                width={40}
                height={40}
                alt="Rafa Al Razzak"
                className="flex bg-primary-100 object-cover dark:bg-primary-800"
                priority
              />
            </div>
            <h1 className=" hidden text-lg font-semibold sm:flex">rafaar.</h1>
          </div>
          {mdscreen ? (
            <div className="hidden items-center gap-6 rounded-full bg-white/90 py-2 px-4 text-sm text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur dark:bg-primary-800/90 dark:text-primary-200 dark:ring-white/10 sm:flex ">
              {AppRoute.map((route) => (
                <Navbar.Item
                  key={route.name}
                  href={route.path}
                  className="hidden sm:flex"
                >
                  {route.name}
                </Navbar.Item>
              ))}
            </div>
          ) : (
            <DrawerButton />
          )}
          {mdscreen && <ThemeButton screen={mdscreen} />}
        </Navbar.Items>
      </Navbar>
    </header>
  )
}

export default Header
