"use client"

import ToggleTheme from "./ToggleTheme"
import Navbar from "./Navbar"
function Header() {
  return (
    <header className=" fixed inset-x-0 top-0 z-50 flex justify-center ">
      <Navbar className="flex justify-between">
        <Navbar.Items className="flex w-full items-center justify-between gap-3 lg:gap-6">
          <h1 className="hidden text-lg font-semibold sm:flex">rafaar.</h1>
          <div className="flex items-center justify-center gap-6 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur dark:bg-primary-800/90 dark:text-primary-200 dark:ring-white/10">
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Item href="/about">About</Navbar.Item>
            <Navbar.Item href="/contact">Contact</Navbar.Item>
          </div>
          <ToggleTheme />
        </Navbar.Items>
      </Navbar>
    </header>
  )
}

export default Header
