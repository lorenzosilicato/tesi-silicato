<script>
  import { Card, Button, } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let data;
</script>

<div  class="space-y-4">
  {#each data.summaries as {slug, title}}
  <Card img="">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">This is your first exercise, for every exercise you will have a 25 minutes session.</p>
    <Button href="/esercizi/{slug}">
      Start <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
    </Button>
  </Card>
  {/each}
</div>
