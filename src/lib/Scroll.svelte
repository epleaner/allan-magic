<script>
  import { onMount } from 'svelte';
  import 'locomotive-scroll/src/locomotive-scroll.scss';

  //clamp the value to keep skewing smooth
  const clamp = (
    /** @type {number} */ value,
    /** @type {number} */ min,
    /** @type {number} */ max
  ) => (value <= min ? min : value >= max ? max : value);

  //Locomotive Scroll Refs
  let scroll = {
    cache: 0,
    current: 0,
  };
  /**
   * @type {HTMLDivElement}
   */
  let reference;
  /**
   * @type {HTMLDivElement}
   */
  let childrenRef;

  onMount(async () => {
    const module = await import('locomotive-scroll');
    const LocomotiveScroll = module.default;

    const scrollElement = new LocomotiveScroll({
      el: reference,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
      lerp: 0.1,
    });

    // scrollElement.on(
    //   'scroll',
    //   (/** @type {{ scroll: { y: number; }; }} */ obj) => {
    //     // Find distance between scroll updates
    //     scroll.current = obj.scroll.y;
    //     const distance = scroll.current - scroll.cache;
    //     scroll.cache = scroll.current;

    //     childrenRef.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
    //   }
    // );
  });
</script>

<div
  class="scroll-container"
  id="scroll-container"
  data-scroll-container
  bind:this={reference}
>
  <div bind:this={childrenRef}><slot /></div>
</div>
