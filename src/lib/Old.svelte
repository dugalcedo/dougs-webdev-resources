<script>
    import { onMount } from "svelte";

    let path

    onMount(()=>{
        path = window.location.href.slice(window.location.href.indexOf('old/') + 4)
    })
</script>


{#if path}
    <iframe src="/old/{path}/index.html" title={path} frameborder="0"></iframe>
{/if}

<style>
    iframe {
        width: 100%;
        height: 98%;
    }
</style>
