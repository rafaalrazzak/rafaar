import NextLink from "next/link"
function Link({ href, className, children, ...props }) {
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  )
}

export default Link
