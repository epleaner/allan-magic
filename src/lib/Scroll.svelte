<script>
  import { scrollController } from './stores/scrollStore';

  import 'locomotive-scroll/src/locomotive-scroll.scss';

  import { onMount } from 'svelte';

  onMount(async () => {
    const module = await import('scrollmagic');
    const ScrollMagic = module.default;

    const controller = new ScrollMagic.Controller();
    scrollController.set(controller);
  });
</script>

<div>
  <div><slot /></div>
</div>
