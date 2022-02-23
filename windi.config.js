import { defineConfig } from 'vite-plugin-windicss'
import colors from './src/config/colors';

// function range(size, startAt = 1) {
//   return Array.from(Array(size).keys()).map(i => i + startAt)
// }

const colorlist = colors;
const scale = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
]

const aspectRatio = require('windicss/plugin/aspect-ratio')

const colorsafelist = colorlist.reduce((acc, val, index) => {
  scale.forEach(x => {
    if (!acc[index]) acc[index] = []
    acc[index].push(`bg-${val}-${x}`)
  })
  return acc
}, [])

export default defineConfig({
  safelist: [
    ...colorsafelist
  ],
  plugins: [
    aspectRatio
  ]
})
