import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { m } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef } from 'react'

import { useMediaQuery } from '@/hooks'
import { useClickOutside } from '@/hooks/useClickOutside'
import { twclsx } from '@/libs/twclsx'

export const ThemeMenu = (props) => {
  const animatableRef = useRef(null)
  const listRef = useRef(null)
  const mdscreen = useMediaQuery('(min-width: 768px)')
  useClickOutside(animatableRef, props.onClose)
  const v =
    useMemo >
    (() => ({
      hidden: { opacity: 0, translateY: 25 },
      enter: { opacity: 1, translateY: 0 },
      exit: { opacity: 0, translateY: 20 },
    }),
    [])

  const themesList = useMemo(
    () => [
      { name: 'Light', value: 'light', Icon: SunIcon },
      { name: 'Dark', value: 'dark', Icon: MoonIcon },
      { name: 'System', value: 'system', Icon: ComputerDesktopIcon },
    ],
    []
  )

  const activeDecsendant = useMemo(() => {
    return themesList.findIndex((f) => f.value === props.theme)
  }, [props.theme, themesList])

  const handleKeyDown = useCallback(
    (theme, index) => (e) => {
      e.preventDefault()
      const list = document.querySelectorAll("li[role='option']")
      const ARROW_UP = 'ArrowUp'
      const ARROW_DOWN = 'ArrowDown'
      const ARROW_LEFT = 'ArrowLeft'
      const ARROW_RIGHT = 'ArrowRight'
      const elArrowDown = list[index + 1]
      const elArrowUp = list[index - 1]

      const changeOpts = {
        ' ': true,
        SpaceBar: true,
        Enter: true,
      }

      if ((e.key === ARROW_DOWN || e.key === ARROW_RIGHT) && elArrowDown) {
        elArrowDown.focus({ preventScroll: true })
      } else if (
        (e.key === ARROW_DOWN || e.key === ARROW_RIGHT) &&
        !elArrowDown
      ) {
        list[0].focus({ preventScroll: true })
      } else if ((e.key === ARROW_UP || e.key === ARROW_LEFT) && elArrowUp) {
        elArrowUp.focus({ preventScroll: true })
      } else if ((e.key === ARROW_UP || e.key === ARROW_LEFT) && !elArrowUp) {
        list[list.length - 1].focus({ preventScroll: true })
      }

      if (changeOpts[e.key]) {
        props.changeTheme(theme)()
        props.onClose()
      }
    },
    [props]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (listRef.current) {
        listRef.current.childNodes[0].focus({ preventScroll: true })
      }
    }
  }, [])

  return (
    <m.div
      ref={animatableRef}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={v}
      className={twclsx(
        'absolute z-50',
        mdscreen
          ? 'right-0 -left-28 top-14  rounded-xl bg-white/90  shadow-lg shadow-primary-800/5  ring-1 ring-primary-900/5 backdrop-blur transition dark:bg-primary-800/90 dark:shadow-none dark:ring-white/10 dark:hover:ring-white/20 md:-left-28'
          : 'flex w-full '
      )}
    >
      <ul
        ref={listRef}
        role="listbox"
        aria-activedescendant={themesList[activeDecsendant].value}
        tabIndex={-1}
        className={twclsx(
          mdscreen
            ? 'flex flex-col gap-2  rounded-lg p-2.5 '
            : '  flex w-full  items-center justify-between gap-2 p-2.5'
        )}
      >
        {themesList.map((theme, index) => (
          <li
            onKeyDown={handleKeyDown(theme.value, index)}
            role="option"
            aria-selected={theme.value === props.theme}
            tabIndex={0}
            className={twclsx(
              'inline-flex w-full cursor-default items-center  rounded-lg',
              ' h-5 p-4 text-sm font-semibold transition md:h-5 md:text-base',
              'hover:bg-primary-100 dark:hover:bg-primary-600',
              'text-theme-700 dark:text-theme-200',
              'focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary-500',
              props.theme === theme.value &&
                'text-secondary-500 dark:text-secondary-500'
            )}
            key={theme.value}
            onClick={props.changeTheme(theme.value)}
          >
            <theme.Icon className="mr-2.5 w-5" />
            <span>{theme.name}</span>
          </li>
        ))}
      </ul>
    </m.div>
  )
}
