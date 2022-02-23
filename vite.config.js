import { defineConfig } from "vite"
import WindiCSS from "vite-plugin-windicss"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import path from "path"

export default defineConfig({
  root: "./src",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    svelte(),
    WindiCSS({
      config: '../windi.config.js',
      scan: {
        include: [
          '**/*.{svelte,js}',
          '*.{svelte,html,js}',
        ],
        exclude: [
          '../node_modules/**/*',
          '../.git/**/*',
        ],
      }
    }),
  ],
});
