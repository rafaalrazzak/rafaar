import NextLink from "next/link"
function Link({ href, className, children, ...props }) {
  return (
    <NextLink href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
