<script>
  import { initCustomCursor } from '$lib/cursor';
  initCustomCursor();
</script>

<svg class="cursor" width="140" height="140" viewBox="0 0 140 140">
  <defs>
    <filter
      id="cursor-filter"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
      filterUnits="objectBoundingBox">
      <feTurbulence
        type="fractalNoise"
        seed="3"
        baseFrequency="0"
        numOctaves="1"
        result="warp" />
      <feDisplacementMap
        xChannelSelector="R"
        yChannelSelector="G"
        scale="15"
        in="SourceGraphic" />
    </filter>
  </defs>
  <circle class="cursor__inner cursor__filled" cx="70" cy="70" r="10" />
</svg>
<svg
  class="cursor"
  width="140"
  height="140"
  viewBox="0 0 140 140"
  data-amt="0.13">
  <circle class="cursor__inner" cx="70" cy="70" r="12" />
</svg>
<svg
  class="cursor"
  width="140"
  height="140"
  viewBox="0 0 140 140"
  data-amt="0.11">
  <circle class="cursor__inner" cx="70" cy="70" r="14" />
</svg>
