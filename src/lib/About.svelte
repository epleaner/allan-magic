<script>
  import headshot from '$lib/assets/headshot.jpeg';
</script>

<section
  id="about"
  class="h-screen col-span-12 grid grid-cols-12 mx-page-gutter">
  <main class="col-span-6 h-full flex flex-col justify-center gap-grid-gutter">
    <p class="text-4xl flex items-center text-brand-blue font-bold">
      Al Brandon is a San Francisco-based illusionist who has been amazing
      audiences with performances on different continents for over twenty-five
      years.
    </p>
    <p class="text-4xl flex items-center">
      Whether a corporate event, fundraiser, big or small celebration, cocktail
      party or after dinner entertainment, Illusions of the Mind is sure to
      knock your socks off!
    </p>
    <div>
      <a href="#contact">
        <button
          class="mt-4 rounded-lg border hover:border-brand-teal hover:bg-transparent hover:text-brand-teal transition-colors border-transparent bg-brand-teal text-brand-charcoal p-4 cursor-trigger"
          id="my-form-button">Book a show</button>
      </a>
    </div>
  </main>
  <hr class="col-span-1" />
  <aside class="col-span-5 h-full flex items-center">
    <img
      class="w-full h-auto rounded-full"
      alt="The project logo"
      src={headshot} />
  </aside>
</section>
