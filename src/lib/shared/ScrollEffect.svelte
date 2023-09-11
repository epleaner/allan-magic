<script>
  export let offset = 200;
  export let duration = '60%';

  import { scrollController } from '../stores/scrollStore';

  let componentRoot;

  const onScrollReady = async (c) => {
    if (c) {
      const module = await import('scrollmagic');
      const ScrollMagic = module.default;

      new ScrollMagic.Scene({
        triggerElement: componentRoot,
        offset,
        triggerHook: 0.8,
        duration,
      })
        .setClassToggle(componentRoot, 'opacity-100')
        .addTo(c);
    }
  };

  $: onScrollReady($scrollController);
</script>

<div
  bind:this={componentRoot}
  class="opacity-0 transition-opacity duration-1000 w-full">
  <slot />
</div>
