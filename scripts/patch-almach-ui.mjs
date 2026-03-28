import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(process.cwd(), "node_modules/@almach/ui/dist/index.js");

if (!existsSync(file)) process.exit(0);

const source = readFileSync(file, "utf8");
const patched = source.replace(/from "(\.\/(?:components|hooks)\/[^".]+)";/g, 'from "$1.js";');

if (patched !== source) {
  writeFileSync(file, patched, "utf8");
  console.log("patched @almach/ui dist/index.js");
}

