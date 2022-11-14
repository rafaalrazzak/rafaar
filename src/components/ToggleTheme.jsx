import { useTheme } from "next-themes"
import Button from "./Button"
import { SunIcon, MoonIcon } from "@/icons"
function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button aria-label="Toggle dark mode" onClick={toggleTheme} size="small">
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ToggleTheme
