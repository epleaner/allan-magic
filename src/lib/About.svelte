<script>
  import Carousel from '$lib/Carousel.svelte';
  import headshot from '$lib/assets/headshot.jpeg';
  import PageSection from '$lib/shared/PageSection.svelte';
</script>

<PageSection id="about">
  <main
    class="z-10 relative col-span-12 lg:col-span-8 h-full flex flex-col justify-center gap-grid-gutter-mobile lg:gap-grid-gutter">
    <p
      class="col-span-12 lg:col-span-8 mix-blend-multiply max-lg:text-center text-2xl lg:text-4xl text-brand-beige font-bold leading-[40px] lg:leading-[50px] max-w-[956px]">
      Al Brandon is a San Francisco-based <span class="font-glitch"
        >illusionist</span> who has been amazing audiences with performances on different
      continents for over twenty-five years.
    </p>
    <aside class="col-span-5 flex items-center justify-center lg:hidden">
      <img
        class="w-full h-auto rounded-full max-w-lg"
        alt="The project logo"
        src={headshot} />
    </aside>
    <p
      class="max-lg:text-center lg:text-2xl leading-[30px] lg:leading-[40px] font-syne text-brand-beige lg:max-w-[666px]">
      Whether a corporate event, fundraiser, big or small celebration, cocktail
      party or after dinner entertainment, <b class="font-glitch"
        >Illusions of the Mind</b> will leave you spellbound!
    </p>
    <div class="max-lg:w-full max-lg:flex max-lg:justify-center">
      <a href="#contact">
        <button
          class="mt-2 uppercase rounded-lg border hover:border-brand-teal hover:bg-transparent hover:text-brand-teal transition-colors border-transparent bg-brand-teal text-brand-lightGray p-4 cursor-trigger"
          id="my-form-button">Book a show</button>
      </a>
    </div>
  </main>
  <aside
    class="lg:col-span-4 h-full lg:flex items-center hidden justify-self-end">
    <img
      class="w-[573px] h-auto rounded-full"
      alt="The project logo"
      src={headshot} />
  </aside>
</PageSection>
