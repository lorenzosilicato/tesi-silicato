<script>
  import { Heading, P, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div class="text-center center-container">
  <Heading
    tag="h1"
    class="mb-4"
    customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    >Start your journey now!</Heading
  >
  <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >Here you will find a set of daily exercizes offered by the Visual Snow
    Initiative and optimized to be fast and lightweight.</P
  >
  <Button href="/esercizi">
    Start Here
    <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
  </Button>
</div>
