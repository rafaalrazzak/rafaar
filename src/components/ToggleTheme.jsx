import { useTheme } from "next-themes"
import Button from "./Button"
import { SunIcon, MoonIcon } from "@/icons"
function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  console.log(theme)

  return (
    <Button aria-label="Toggle dark mode" onClick={toggleTheme} size="small">
      {theme == "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleTheme
