import WindiCSS from 'vite-plugin-windicss'
import { posthtmlPlugin } from 'vite-plugin-posthtml'

const include = require('posthtml-include')
const extend = require('posthtml-extend')

export default {
  root: './src',
  plugins: [
    WindiCSS(),
    posthtmlPlugin({
      plugins: [
        require('posthtml-extend')(),
        require('posthtml-include')()
      ]
    })
  ]
}