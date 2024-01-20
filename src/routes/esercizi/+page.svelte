<script>
  export let data;
</script>

<h1>Esercizi</h1>

<ul>
  {#each data.summaries as {slug, title}}
     <li><a href="/esercizi/{slug}">{title}</a></li>
  {/each}
</ul>
