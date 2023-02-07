import { MDXRemote } from "next-mdx-remote"

export default async function MarkdownContent(props) {
  return <MDXRemote {...props} />
}
