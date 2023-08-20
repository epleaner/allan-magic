<script>
  import { onMount, onDestroy } from 'svelte';
  import 'locomotive-scroll/src/locomotive-scroll.scss';

  onMount(async () => {
    const module = await import('scrollmagic');
    const ScrollMagic = module.default;

    const controller = new ScrollMagic.Controller();
    // const module = await import('locomotive-scroll');

    // const scroll = new LocomotiveScroll({
    //   smooth: true,
    // });

    // // Update current index based on Locomotive Scroll's scroll event
    // scroll.on('scroll', ({ scroll: position }) => {
    //   console.log(position);
    //   // const itemHeight = scroll.scroll.content.height / items.length;
    //   // currentIdx = Math.floor(scroll.y / itemHeight);
    //   // console.log(scroll.y, itemHeight, currentIdx);
    // });
  });
</script>

<div>
  <div><slot /></div>
</div>
