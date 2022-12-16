<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let { thumbs } = data;
</script>

<h1>Habits of little punk</h1>
<ul>
  {#each thumbs as thumb}
    <li>{thumb.id}</li>
  {/each}
</ul>