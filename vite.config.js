import WindiCSS from 'vite-plugin-windicss'
import { posthtmlPlugin } from 'vite-plugin-posthtml'
import include from 'posthtml-include'

export default {
  plugins: [
    WindiCSS(),
    posthtmlPlugin({
      plugins: [
        include()
      ]
    })
  ]
}