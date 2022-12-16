<script>
    import axios from 'axios';

    let content = '';

    async function uploadLog() {
        await axios.post('/api/log', { content });
        content = '';
    }
</script>

<textarea bind:value={content}></textarea>
<button on:click={uploadLog}>Submit</button>