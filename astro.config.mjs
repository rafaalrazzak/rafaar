import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
    // Pages Functions only run under wrangler; in `astro dev` the now-playing
    // endpoint is proxied straight to the API instead.
    server: {
      proxy: {
        "/api/now-playing": { target: "https://api.rin.ci", changeOrigin: true },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@assets": fileURLToPath(new URL("./public", import.meta.url)),
      },
    },
  },
});
