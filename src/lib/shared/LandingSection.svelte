<script>
  import { scrollController } from '../stores/scrollStore';
  import { onMount } from 'svelte';

  let componentRoot;

  let controllerValue;

  const onScrollReady = async (c) => {
    if (c) {
      const module = await import('scrollmagic');
      const ScrollMagic = module.default;

      const revealElement = componentRoot.querySelectorAll('p')[0];

      console.log('revealElements is', revealElement, c);
      new ScrollMagic.Scene({
        triggerElement: revealElement,
        offset: 200,
        triggerHook: 0.8,
        duration: '80%',
      })
        .setClassToggle(revealElement, 'opacity-100')
        .addTo(c);
    }
  };

  $: onScrollReady($scrollController);
</script>

<section bind:this={componentRoot} class="relative min-h-screen col-span-12">
  <main
    class="md:ml-page-gutter mx-page-gutter-mobile h-full flex items-center max-w-[1146px]">
    <p
      class="opacity-0 text-2xl md:text-7xl font-bold leading-normal md:leading-xl text-brand-beige transition-opacity duration-700">
      <slot />
    </p>
  </main>
</section>
