// read files md
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const mdx = require("@mdx-js/mdx")

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: [],
  compilers: [],
}

const getFiles = (dir) => {
  const files = fs.readdirSync(dir)
  const mdxFiles = files.filter((file) => path.extname(file) === ".mdx")
  return mdxFiles
}

const getFileBySlug = (dir, file) => {
  const mdxPath = path.join(dir, file)
  return fs.readFileSync(mdxPath, "utf-8")
}

const mdxToJsx = async (mdxSource) => {
  const jsx = await mdx(mdxSource, mdxOptions)
  return jsx
}

module.exports = {
  getFiles,
  getFileBySlug,
  mdxToJsx,
}
