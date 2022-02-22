<script>
  export let colorlist = ['black', 'white', 'rose', 'pink', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'lightBlue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange', 'red', 'warmGray', 'trueGray', 'gray', 'coolGray', 'blueGray', 'slate', 'zink', 'neutral', 'stone', 'dark', 'light'];
  export let scale = [
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
console.log([...colorsafelist])
</script>

<article>
  {#each colorlist as color}
    <div class="flex">
      {#each scale as colorScale}
      <div class="bg-{color}-{colorScale} basis-full rounded-2xl"><p>{color}</p></div>
      {/each}
    </div>
  {/each}
</article>
