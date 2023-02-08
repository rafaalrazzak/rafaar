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

  const { code, frontmatter } = await bundleMDX({
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
    mdxSource: code,
    frontMatter: {
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
    },
  }
}

module.exports = {
  getFileBySlug,
}
