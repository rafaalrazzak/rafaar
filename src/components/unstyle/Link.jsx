import { twclsx } from "@/libs/twclsx"

import NextLink from "next/link"

export const UnstyledLink = ({ href, children, onClick, ...props }) => {
  return (
    <NextLink
      href={href}
      scroll={false}
      title={props.title ?? ""}
      onClick={onClick}
      className={twclsx(props.className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
