<script>
  import ScrollEffect from '$lib/shared/ScrollEffect.svelte';
  import { scrollController } from '../stores/scrollStore';

  let componentRoot;

  const onScrollReady = async (c) => {
    if (c) {
      const module = await import('scrollmagic');
      const ScrollMagic = module.default;

      const revealElement = componentRoot.querySelectorAll('p')[0];

      new ScrollMagic.Scene({
        triggerElement: revealElement,
        offset: 200,
        triggerHook: 0.8,
        duration: '60%',
      })
        .setClassToggle(revealElement, 'opacity-100')
        .addTo(c);
    }
  };

  $: onScrollReady($scrollController);
</script>

<section class="relative min-h-screen col-span-12">
  <main
    class="md:ml-page-gutter mx-page-gutter-mobile h-full flex items-center max-w-[1146px]">
    <ScrollEffect>
      <p
        class="text-2xl md:text-7xl font-bold leading-normal md:leading-xl text-brand-beige">
        <slot />
      </p>
    </ScrollEffect>
  </main>
</section>
