import clsx from "clsx"
import Link from "./Link"

function NavbarComponent({ className, children }) {
  return (
    <nav className={clsx("flex py-6", className)}>
      <h1 className="text-lg font-semibold">rafaar.</h1>
      {children}
    </nav>
  )
}

function Items({ className, children }) {
  return <ul className={clsx("flex", className)}>{children}</ul>
}

function Item({ href, children }) {
  return (
    <li className="text-sm font-semibold transition-colors ease-in-out hover:text-secondary-500">
      <Link href={href}>{children}</Link>
    </li>
  )
}

export default Object.assign(NavbarComponent, {
  Items,
  Item,
})
