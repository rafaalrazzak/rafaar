import { UnstyledButton } from "./UnstyleButton"
import { ThemeMenu } from "./ThemeMenu"

import { twclsx } from "@/utils/twClsx"

import { useTheme } from "@/hooks/useTheme"

import { AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

export const ThemeButton = () => {
  const theme = useTheme()

  if (!theme.mounted) return <ArrowPathIcon className="w-5 animate-spin" />

  return (
    <div className="relative">
      <UnstyledButton
        aria-haspopup="listbox"
        aria-expanded={theme.dropdownIsOpen}
        onClick={theme.toggleDropdown}
        title="Switch Theme"
        className={twclsx(
          "accessible relative",
          "h-10 w-10  text-sm",
          "rounded-full",
          "bg-white/90  shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20",
        )}
      >
        {(theme.theme === "dark" ||
          (theme.theme === "system" && theme.systemTheme === "dark")) && (
          <MoonIcon
            className={twclsx("w-5 text-secondary-400", "pointer-events-none")}
          />
        )}
        {(theme.theme === "light" ||
          (theme.theme === "system" && theme.systemTheme === "light")) && (
          <SunIcon
            className={twclsx("w-5 text-primary-700", "pointer-events-none")}
          />
        )}
      </UnstyledButton>

      <AnimatePresence exitBeforeEnter>
        {theme.dropdownIsOpen && (
          <ThemeMenu
            changeTheme={theme.changeTheme}
            onClose={theme.closeDropdown}
            theme={theme.theme}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
