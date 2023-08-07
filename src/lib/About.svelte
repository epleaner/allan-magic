<script>
  import headshot from '$lib/assets/headshot.jpeg';
</script>

<section
  id="about"
  class="min-h-screen col-span-12 grid grid-cols-12 md:mx-page-gutter mx-page-gutter-mobile max-md:my-16">
  <main
    class="col-span-12 md:col-span-6 h-full flex flex-col justify-center gap-grid-gutter-mobile md:gap-grid-gutter">
    <p
      class="max-md:text-center text-2xl md:text-4xl flex items-center text-brand-beige font-bold leading-[40px] md:leading-[50px]">
      Al Brandon is a San Francisco-based illusionist who has been amazing
      audiences with performances on different continents for over twenty-five
      years.
    </p>
    <aside class="col-span-5 h-full flex items-center md:hidden">
      <img
        class="w-full h-auto rounded-full"
        alt="The project logo"
        src={headshot} />
    </aside>
    <p
      class="max-md:text-center md:text-2xl leading-[35px] md:leading-[45px] font-montserrat text-brand-beige">
      Whether a corporate event, fundraiser, big or small celebration, cocktail
      party or after dinner entertainment, <b>Illusions of the Mind</b> is sure to
      knock your socks off!
    </p>
    <div class="max-sm:w-full max-sm:flex max-sm:justify-center">
      <a href="#contact ">
        <button
          class="mt-4 rounded-lg border hover:border-brand-teal hover:bg-transparent hover:text-brand-teal transition-colors border-transparent bg-brand-teal text-brand-charcoal p-4 cursor-trigger"
          id="my-form-button">Book a show</button>
      </a>
    </div>
  </main>
  <hr class="col-span-1 border-none" />
  <aside class="col-span-5 h-full md:flex items-center hidden">
    <img
      class="w-full h-auto rounded-full"
      alt="The project logo"
      src={headshot} />
  </aside>
</section>
