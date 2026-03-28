import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const almachRoot = resolve(process.cwd(), "node_modules/@almach");

if (!existsSync(almachRoot)) process.exit(0);

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      files.push(...walk(full));
    } else if (stat.isFile() && full.endsWith(".js")) {
      files.push(full);
    }
  }
  return files;
}

const distDirs = readdirSync(almachRoot)
  .map((pkgName) => join(almachRoot, pkgName, "dist"))
  .filter((dir) => existsSync(dir) && statSync(dir).isDirectory());

const jsFiles = distDirs.flatMap((dir) => walk(dir));
let patchedCount = 0;

for (const file of jsFiles) {
  const source = readFileSync(file, "utf8");
  const patched = source.replace(
    /(from\s+["'])(\.\.?\/[^"'.]+)(["'])/g,
    (_m, p1, p2, p3) => `${p1}${p2}.js${p3}`,
  );

  if (patched !== source) {
    writeFileSync(file, patched, "utf8");
    patchedCount += 1;
  }
}

if (patchedCount > 0) {
  console.log(`patched @almach dist imports in ${patchedCount} file(s)`);
}

