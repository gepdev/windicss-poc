<script>
  import colors from "@/config/colors";
  export let colorlist = colors;
  export let scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const colorsafelist = colorlist.reduce((acc, val, index) => {
    scale.forEach((x) => {
      if (!acc[index]) acc[index] = [];
      acc[index].push(`bg-${val}-${x}`);
    });
    return acc;
  }, []);
</script>

<article>
  {#each colorlist as color}
    <h3 class="mb-2 font-bold uppercase">{color}</h3>
    <div class="flex gap-2 mb-4">
      {#each scale as colorScale}
        <div>
          <div class="w-14 h-14 rounded bg-{color}-{colorScale} basis-full" />
          <div class="font-bold text-sm">{colorScale}</div>
        </div>
      {/each}
    </div>
  {/each}
</article>
