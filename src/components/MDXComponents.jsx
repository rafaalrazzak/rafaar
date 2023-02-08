import { getMDXComponent } from "mdx-bundler/client"
import { useMemo } from "react"

import Image from "@/components/Image"
import motion from "@/components/motion/text"
import * as SectionLayout from "@/components/Section"


const MDXComponents = {
  img: ({ ...rest }) => {
    return (
      <Image alt="Image" width="300" height="200" {...rest} />
      )
    },
    ...motion,
  wrapper: ({layout, ...rest}) => {
    const Layout = SectionLayout[layout]
    return <Layout {...rest}/>
  }
}

const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}

export {
    MDXComponents,
    MDXLayoutRenderer}