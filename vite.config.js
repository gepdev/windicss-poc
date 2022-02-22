import WindiCSS from "vite-plugin-windicss";
import { svelte } from "@sveltejs/vite-plugin-svelte"

export default {
  root: "./src",
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['svelte', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
    svelte()
  ],
};
