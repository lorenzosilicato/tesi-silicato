<script>
  export let data;
</script>

<h1>{data.post.title}</h1>
<div>
  '<iframe
    title = 'esercizio'
    src={data.post.content}
    style="width:960px;height:600px"
  ></iframe>'
</div>
