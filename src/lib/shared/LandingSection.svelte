<script>
  /**
   * @type {string}
   */
  export let scrollspeed;
</script>

<section class="relative min-h-screen col-span-12" data-scroll={scrollspeed}>
  <main
    class="md:ml-page-gutter mx-page-gutter-mobile h-full flex items-center max-w-[1146px]">
    <p
      class="text-4xl md:text-7xl font-bold leading-normal md:leading-xl text-brand-beige">
      <slot />
    </p>
  </main>
</section>
