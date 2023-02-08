import { getMDXComponent } from "mdx-bundler/client"
import { useMemo } from "react"

import Image from "../Image"
import motion from "../motion/text"
import * as SectionLayout from "../Section"
import DynamicIconText from "./DynamicIconText"
import List from "./List"
import Table from "./Table"

const MDXComponents = {
  img: ({ ...rest }) => {
    return <Image alt="Image" width="300" height="200" {...rest} />
  },
  DynamicIconText,
  Table,
  List,
  ...motion,
  wrapper: ({ layout, ...rest }) => {
    const Layout = SectionLayout[layout]
    return <Layout {...rest} />
  },
}

const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}

export { MDXComponents, MDXLayoutRenderer }
