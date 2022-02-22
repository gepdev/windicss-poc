import { defineConfig } from 'vite-plugin-windicss'

// function range(size, startAt = 1) {
//   return Array.from(Array(size).keys()).map(i => i + startAt)
// }

const colorlist = ['black', 'white', 'rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'lightBlue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red', 'warmGray', 'trueGray', 'gray', 'coolGray', 'blueGray', 'slate', 'zink', 'neutral', 'stone', 'dark', 'light'];
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
})
