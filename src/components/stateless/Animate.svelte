<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let state = false;

  onMount(() => (state = true));

  export let children: any;
</script>

{#if state === true}
  <div transition:fade>
    {children}
  </div>
{/if}
