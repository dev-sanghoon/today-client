<script>
  import { marked } from 'marked';

  /** @type {import('./$types').PageData} */
  export let data;
  
  const content = marked.parse(data.content);
</script>

<h1>Habits of little punk</h1>
<p>{@html content}</p>