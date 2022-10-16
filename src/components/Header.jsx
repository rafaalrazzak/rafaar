import Navbar from "./Navbar"
import ToggleTheme from "./ToggleTheme"
function Header() {
  return (
    <header className="relative z-30">
      <Navbar className="justify-between gap-6">
        <Navbar.Items className="flex flex-1 gap-6">
          <div className=" flex  flex-1 justify-center  ">
            <div className="flex items-center gap-6 rounded-full bg-white/90 px-6 text-sm font-medium text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur dark:bg-primary-800/90 dark:text-primary-200 dark:ring-white/10">
              <Navbar.Item href="/">Home</Navbar.Item>
              <Navbar.Item href="/about">About</Navbar.Item>
              <Navbar.Item href="/contact">Contact</Navbar.Item>
            </div>
          </div>
          <ToggleTheme />
        </Navbar.Items>
      </Navbar>
    </header>
  )
}

export default Header
