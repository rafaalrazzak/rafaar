import { ThemeButton } from "@/components/ThemeButton"
import { DrawerButton } from "@/components/DrawerButton"
import { UnstyledLink } from "@/components/unstyle/Link"
import APP_ROUTE from "@/data/AppRoute"

import { twclsx } from "@/libs/twclsx"

import { useMediaQuery, useWindowScrollY } from "@/hooks"

import { useRouter } from "next/router"


const Nav = () => {
  const { pathname } = useRouter()
  return (
    <nav className={twclsx("flex items-center gap-1", "-ml-3 md:-ml-3.5", "bg-red-500")}>
      {APP_ROUTE.map((route) => (
        <UnstyledLink
          title={`route ${route.name}`}
          key={route.name}
          href={route.path}
          className={twclsx(
            "relative inline-flex items-center justify-center text-sm md:text-base",
            "border-2 border-transparent py-1 px-3 font-semibold transition md:py-1.5 md:px-3.5",
            "hover:border-primary-600 dark:hover:border-primary-500",
            route.path === pathname
              ? "border-primary-600 text-primary-700 dark:border-primary-500 dark:text-primary-400"
              : "text-theme-800 dark:text-theme-300",
          )}
        >
          {route.name}
        </UnstyledLink>
      ))}
    </nav>
  )
}

export default function Hello() {
  const { pathname } = useRouter()
  const scrollPos = useWindowScrollY()
  const mdscreen = useMediaQuery("(min-width: 768px)")

  const isError =
    pathname === "/_error" ||
    pathname === "/_offline" ||
    pathname === "/404" ||
    pathname === "/resume"

  if (isError) return null

  return (
    <header
      className={twclsx(
        "fixed inset-0",
        "z-10 h-20 border-b transition",
        "bg-theme-50 dark:bg-theme-900",
        "[@supports(backdrop-filter:blur(0))]:bg-theme-50/80 dark:[@supports(backdrop-filter:blur(0))]:bg-theme-900/80",
        "[@supports(backdrop-filter:blur(0))]:backdrop-blur",
        scrollPos > 68
          ? "border-theme-300 dark:border-theme-700"
          : "border-transparent",
      )}
    >
      <div
        className={twclsx(
          "relative",
          "h-2 w-full",
          "bg-gradient-to-r",
          "from-primary-500 to-secondary-500",
          "before:absolute before:inset-0 before:bg-gradient-to-r",
          "before:from-primary-500 before:to-violet-500",
          "before:animate-pulse",
        )}
      />

      <div
        className={twclsx(
          "layout h-full pb-2",
          "flex items-center justify-between",
        )}
      >
        {mdscreen && <Nav />}

        <DrawerButton />
        <ThemeButton />
      </div>
    </header>
  )
}
