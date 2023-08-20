<script>
  import { onMount, onDestroy } from 'svelte';
  import 'locomotive-scroll/src/locomotive-scroll.scss';

  onMount(async () => {
    const module = await import('locomotive-scroll');
    const LocomotiveScroll = module.default;

    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    // Update current index based on Locomotive Scroll's scroll event
    scroll.on('scroll', ({ scroll: position }) => {
      console.log(position);
      // const itemHeight = scroll.scroll.content.height / items.length;
      // currentIdx = Math.floor(scroll.y / itemHeight);
      // console.log(scroll.y, itemHeight, currentIdx);
    });
  });
</script>

<div data-scroll-container>
  <div><slot /></div>
</div>
