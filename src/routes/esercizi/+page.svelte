<script>
  import { Card, Button, } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div  class="space-y-4">
  <Card img="">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Exercise 1</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">This is your first exercise, for every exercise you will have a 25 minutes session.</p>
    <Button>
      Start <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
    </Button>
  </Card>
</div>
