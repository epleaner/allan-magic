<script>
  import '../styles/app.css';
  import Cursor from '$lib/Cursor.svelte';
  import Scroll from '$lib/Scroll.svelte';
  import Nav from '$lib/Nav.svelte';
</script>

<Cursor />

<svelte:component this={Scroll}>
  <main class="px-page-gutter w-screen h-screen grid grid-cols-12">
    <Nav />
    <slot />
  </main>
</svelte:component>
