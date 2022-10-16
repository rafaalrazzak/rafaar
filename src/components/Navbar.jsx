import clsx from "clsx"
import { useRouter } from "next/router"
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
  const router = useRouter()
  const thisPage = router.asPath === href
  // {thisPage && (
  //   <span className="absolute inset-x-1 -bottom-px h-px w-12 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
  // )}

  return (
    <li
      className={clsx(
        "text-sm font-semibold transition-colors ease-in-out hover:text-secondary-500",
      )}
    >
      <Link href={href} className={clsx(thisPage && "text-secondary-500")}>
        {children}
      </Link>
    </li>
  )
}

export default Object.assign(NavbarComponent, {
  Items,
  Item,
})
