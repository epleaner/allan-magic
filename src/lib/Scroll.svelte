<script>
  import { writable } from 'svelte/store';

  import { onMount, onDestroy } from 'svelte';
  import 'locomotive-scroll/src/locomotive-scroll.scss';

  let controller;

  onMount(async () => {
    const module = await import('scrollmagic');
    const ScrollMagic = module.default;

    controller = new ScrollMagic.Controller();
  });

  export const scrollController = writable(controller);
</script>

<div>
  <div><slot /></div>
</div>
