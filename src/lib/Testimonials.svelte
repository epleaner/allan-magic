<script>
  import Carousel from './Carousel.svelte';

  const parentItems = [
    '“I have no idea how he knew the name of a friend I haven’t thought about in twenty six years!”',
    '"Some things were really impossible… I still can’t believe what happened.”',
    '“Wow... unbelievable. The group loved it! Every weird, amazing moment.”',
  ];
</script>

<section
  class="col-span-12 gap-x-grid-gutter-mobile md:gap-x-grid-gutter bg-brand-beige py-16 xl:px-page-gutter">
  <!-- <Carousel items={parentItems} /> -->
  <div class="carousel w-full py-16">
    <div id="testimonial1" class="carousel-item relative w-full scroll-mt-96">
      <span
        class="px-8 lg:px-16 xl:px-0 text-2xl md:text-3xl text-brand-charcoal italic text-center w-full"
        >“I have no idea how he knew the name of a friend I haven’t thought
        about in twenty six years!”</span>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-0 right-0 top-1/2">
        <a
          href="#testimonial3"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❮</a>
        <a
          href="#testimonial2"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❯</a>
      </div>
    </div>
    <div id="testimonial2" class="carousel-item relative w-full scroll-mt-96">
      <span
        class="px-8 md:px-0 text-2xl md:text-3xl text-brand-charcoal italic text-center w-full"
        >"Some things were really impossible… I still can’t believe what
        happened.”</span>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-0 right-0 top-1/2">
        <a
          href="#testimonial1"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❮</a>
        <a
          href="#testimonial3"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❯</a>
      </div>
    </div>
    <div id="testimonial3" class="carousel-item relative w-full scroll-mt-96">
      <span
        class="px-8 md:px-0 text-2xl md:text-3xl text-brand-charcoal italic text-center w-full"
        >“Wow... unbelievable. The group loved it! Every weird, amazing moment.”</span>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-0 right-0 top-1/2">
        <a
          href="#testimonial2"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❮</a>
        <a
          href="#testimonial1"
          class="btn btn-circle btn-ghost cursor-trigger hover:text-brand-charcoal"
          >❯</a>
      </div>
    </div>
  </div>
  <!-- <span class="px-8 md:px-0 text-2xl md:text-3xl text-brand-charcoal italic text-center"
    >“I have no idea how he knew the name of a friend I haven’t thought about in
    twenty six years!”</span>
  <span class="px-8 md:px-0 text-2xl md:text-3xl text-brand-charcoal italic text-center"
    >"Some things were really impossible… I still can’t believe what happened.”</span>
  <span class="col-span-4 text-3xl text-brand-charcoal italic text-center"
    >“Wow... unbelievable. The group loved it! Every weird, amazing moment.”
  </span> -->
</section>
