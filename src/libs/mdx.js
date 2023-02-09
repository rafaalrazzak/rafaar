import fs from "fs"
import { bundleMDX } from "mdx-bundler"
import path from "path"

const root = process.cwd()

const getFileBySlug = async (type, slug) => {
  const [mdxPath, mdPath] = [
    path.join(root, "src", type, `${slug}.mdx`),
    path.join(root, "src", type, `${slug}.md`),
  ]

  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8")

  const { code: mdxSource, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(root, "src", type),
    grayMatterOptions: (options) => {
      options.engines = {
        yaml: (s) =>
          require("js-yaml").load(s, {
            schema: require("js-yaml").JSON_SCHEMA,
          }),
      }
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".js": "jsx",
      }
      return options
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
    },
  }
}

const getAllFiles = async (type) => {
  const source = path.join(root, "src", type)
  const files = fs.readdirSync(source)
  const mdxFiles = files.map((fileName) => {
    return getFileBySlug(type, fileName.replace(".mdx", "").replace(".md", ""))
  })

  return Promise.all(mdxFiles)
}

module.exports = {
  getFileBySlug,
  getAllFiles,
}
