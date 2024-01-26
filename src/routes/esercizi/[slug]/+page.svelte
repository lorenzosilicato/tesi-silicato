<script>
  import { P } from "flowbite-svelte";

  export let data;
</script>

<P weight="light" color="text-gray-500 dark:text-gray-400">{data.post.title}</P>
<div>
  '<iframe
    title="exercise"
    src={data.post.content}
    style="width:960px;height:600px"
  ></iframe>'
</div>
