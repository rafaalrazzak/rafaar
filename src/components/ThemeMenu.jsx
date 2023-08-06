import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline"
import { m } from "framer-motion"
import React, { useCallback, useEffect, useRef } from "react"

import { twclsx } from "@/libs/twclsx"

export const ThemeMenu = (props) => {
  const animatableRef = useRef(null)
  const listRef = useRef(null)
  const mdscreen = window.innerWidth >= 768 // Manually check screen width
  const clickOutsideHandler = useRef(null)

  const animationVariants = {
    hidden: { opacity: 0, translateY: 0 },
    enter: { opacity: 1, translateY: 25 },
    exit: { opacity: 0, translateY: 0 },
  }

  const themesList = [
    { name: "Light", value: "light", Icon: SunIcon },
    { name: "Dark", value: "dark", Icon: MoonIcon },
    { name: "System", value: "system", Icon: ComputerDesktopIcon },
  ]

  const activeIndex = themesList.findIndex(
    (theme) => theme.value === props.theme
  )

  const handleKeyDown = useCallback(
    (theme, index) => (e) => {
      e.preventDefault()
      const list = document.querySelectorAll("li[role='option']")
      const key = e.key
      const ARROWS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
      const elArrowDown = list[index + 1] || list[0]
      const elArrowUp = list[index - 1] || list[list.length - 1]
      const changeOpts = { " ": true, SpaceBar: true, Enter: true }

      if (ARROWS.includes(key)) {
        if (key === "ArrowDown" || key === "ArrowRight") {
          elArrowDown.focus({ preventScroll: true })
        } else if (key === "ArrowUp" || key === "ArrowLeft") {
          elArrowUp.focus({ preventScroll: true })
        }
      }

      if (changeOpts[key]) {
        props.changeTheme(theme)()
        props.onClose()
      }
    },
    [props]
  )

  useEffect(() => {
    if (listRef.current) {
      listRef.current.childNodes[0].focus({ preventScroll: true })
    }

    clickOutsideHandler.current = (e) => {
      if (animatableRef.current && !animatableRef.current.contains(e.target)) {
        props.onClose()
      }
    }

    document.addEventListener("mousedown", clickOutsideHandler.current)

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler.current)
    }
  }, [props])

  return (
    <m.div
      ref={animatableRef}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={animationVariants}
      className={twclsx(
        "absolute z-50",
        mdscreen
          ? "-left-28 right-0 top-8 rounded-xl border border-primary-400 bg-white/90 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition dark:border-primary-500 dark:bg-primary-800/90 dark:shadow-none dark:ring-white/10 dark:hover:ring-white/20 md:-left-28"
          : "flex w-full"
      )}
    >
      <ul
        ref={listRef}
        role="listbox"
        aria-activedescendant={themesList[activeIndex]?.value}
        tabIndex={-1}
        className={twclsx(
          mdscreen
            ? "flex flex-col gap-2 rounded-lg p-2.5"
            : "flex w-full items-center justify-between gap-2 p-2.5"
        )}
      >
        {themesList.map((theme, index) => (
          <li
            onKeyDown={handleKeyDown(theme.value, index)}
            role="option"
            aria-selected={theme.value === props.theme}
            tabIndex={0}
            className={twclsx(
              "inline-flex w-full cursor-pointer items-center justify-center rounded-lg",
              "h-5 p-4 text-sm font-semibold transition md:h-5 md:text-base",
              "hover:bg-primary-200 dark:hover:bg-theme-700",
              "text-theme-700 dark:text-theme-200",
              "focus-visible:bg-primary-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-500 dark:focus-visible:bg-primary-500",
              props.theme === theme.value &&
                "text-secondary-400 dark:text-secondary-500"
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
