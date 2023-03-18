import fs from "fs"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import path from "path"

import getAllFilesRecursively from "./files"

const root = process.cwd()

async function getFileBySlug(type, slug) {
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

async function getAllFiles(type) {
  const source = path.join(root, "src", type)
  const files = fs.readdirSync(source)
  const mdxFiles = files.map((fileName) => {
    return getFileBySlug(type, fileName.replace(".mdx", "").replace(".md", ""))
  })

  return Promise.all(mdxFiles)
}

async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, "src", folder)

  const files = getAllFilesRecursively(prefixPaths).filter(
    (path) => (path.match(/\./g) || []).length === 1
  )

  const allFrontMatter = []

  files.forEach((file) => {
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return
    }
    const source = fs.readFileSync(file, "utf8")
    const { data: frontmatter } = matter(source)

    allFrontMatter.push({
      slug: formatSlug(fileName),
      ...frontmatter,
    })
  })

  return allFrontMatter.sort((a, b) => (a.page > b.page ? 1 : -1))
}
function getFiles(type, otherLocale = "") {
  const prefixPaths = path.join(root, "src", type)
  const files =
    otherLocale === ""
      ? getAllFilesRecursively(prefixPaths).filter(
          (path) => (path.match(/\./g) || []).length === 1
        )
      : getAllFilesRecursively(prefixPaths).filter((path) =>
          path.includes(`.${otherLocale}.md`)
        )
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  )
}

function formatSlug(slug) {
  return slug.split(".")[0]
}

module.exports = {
  getFileBySlug,
  getAllFiles,
  getAllFilesFrontMatter,
  getFiles,
  formatSlug,
}
