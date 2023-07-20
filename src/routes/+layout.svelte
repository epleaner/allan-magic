<script>
  import '../styles/app.css';
  import Cursor from '$lib/Cursor.svelte';
  import Scroll from '$lib/Scroll.svelte';
</script>

<Cursor />

<svelte:component this={Scroll}>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <slot />
</svelte:component>
