<script>
  import Cursor from '$lib/Cursor.svelte';
  import Scroll from '$lib/Scroll.svelte';
</script>

<Cursor />

<svelte:component this={Scroll}>
  <slot />
</svelte:component>
