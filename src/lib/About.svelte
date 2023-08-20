<script>
  import Carousel from '$lib/Carousel.svelte';
  import headshot from '$lib/assets/headshot.jpeg';
  import PageSection from '$lib/shared/PageSection.svelte';
</script>

<PageSection id="about">
  <main
    class="z-10 relative col-span-12 h-full flex flex-col justify-center gap-grid-gutter-mobile md:gap-grid-gutter">
    <p
      class="max-md:text-center text-2xl md:text-4xl text-brand-beige font-bold leading-[40px] md:leading-[50px] max-w-[956px]">
      Al Brandon is a San Francisco-based <span class="font-glitch"
        >illusionist</span> who has been amazing audiences with performances on different
      continents for over twenty-five years.
    </p>
    <aside class="col-span-5 h-full flex items-center md:hidden">
      <img
        class="w-full h-auto rounded-full"
        alt="The project logo"
        src={headshot} />
    </aside>
    <p
      class="max-md:text-center md:text-2xl leading-[35px] md:leading-[50px] font-syne text-brand-charcoal max-w-[666px]">
      Whether a corporate event, fundraiser, big or small celebration, cocktail
      party or after dinner entertainment, <b class="font-glitch"
        >Illusions of the Mind</b> will leave you spellbound!
    </p>
    <div class="max-sm:w-full max-sm:flex max-sm:justify-center">
      <a href="#contact">
        <button
          class="mt-4 rounded-lg border hover:border-brand-teal hover:bg-transparent hover:text-brand-teal transition-colors border-transparent bg-brand-teal text-brand-lightGray p-4 cursor-trigger"
          id="my-form-button">Book a show</button>
      </a>
    </div>
  </main>
  <aside class="absolute h-full md:flex items-center hidden justify-self-end">
    <img
      class="w-[573px] h-auto rounded-full"
      alt="The project logo"
      src={headshot} />
  </aside>
</PageSection>
