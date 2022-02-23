<script>
  import Colors from "@/core/Colors.svelte";
  import Default from "@/templates/Default.svelte";
  import Navigation from "@/patterns/Navigation.svelte";
</script>

<main>
  <Default>
    <div slot="header">
      <Navigation />
    </div>
    <section slot="content" class="container mx-auto">
      <Colors />
    </section>
    <svelte:fragment slot="footer">
      <p>Svelte + WindiCSS + Vite</p>
    </svelte:fragment>
  </Default>

</main>
