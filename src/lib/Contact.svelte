<script>
  const imgUrl = new URL(
    '$lib/assets/landing-illustration.png',
    import.meta.url
  ).href;

  import { onMount } from 'svelte';

  onMount(() => {
    var form = document.getElementById('contact-form');

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById('my-form-status');
      var data = new FormData(event.target);
      const errorText = 'Oops! There was a problem submitting your form';

      fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = 'Thanks for getting in touch!';
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data['errors']
                  .map((error) => error['message'])
                  .join(', ');
              } else {
                status.innerHTML = errorText;
              }
            });
          }
        })
        .catch(() => {
          status.innerHTML = errorText;
        });
    }
    form.addEventListener('submit', handleSubmit);
  });
</script>

<section
  id="contact"
  class={`relative h-screen col-span-12 bg-no-repeat bg-center bg-cover`}
  style={`
    background-image: url(${imgUrl});
  `}>
  <div
    class="z-10 w-full h-full flex flex-col items-center justify-center gap-4">
    <h1 class="text-7xl text-brand-teal">Contact</h1>
    <form
      class="md:w-1/4 flex flex-col gap-4"
      id="contact-form"
      action="https://formspree.io/f/myyqkzze">
      <label
        class="text-2xl text-brand-teal flex flex-col hover:cursor-none"
        for="name"
        >Name
        <input
          class="mt-2 font-syne bg-brand-charcoal/75 text-brand-beige rounded-lg py-2 px-4 focus:outline-none hover:cursor-none border border-transparent hover:border-brand-blue transition-colors"
          type="text"
          name="name" /></label>
      <label
        class="text-2xl text-brand-teal flex flex-col hover:cursor-none"
        for="email"
        >Email
        <input
          class="mt-2 font-syne bg-brand-charcoal/75 text-brand-beige rounded-lg py-2 px-4 focus:outline-none hover:cursor-none border border-transparent hover:border-brand-blue transition-colors"
          type="email"
          name="email" /></label>
      <label
        class="text-2xl text-brand-teal flex flex-col hover:cursor-none"
        for="message"
        >Message
        <textarea
          class="mt-2 font-syne bg-brand-charcoal/75 text-brand-beige rounded-lg p-4 focus:outline-none hover:cursor-none border border-transparent hover:border-brand-blue transition-colors"
          name="message" /></label>
      <div class="flex justify-center">
        <button
          class="text-2xl w-[222px] mt-4 rounded-lg border hover:border-brand-teal hover:bg-transparent hover:text-brand-teal transition-colors border-transparent bg-brand-teal text-brand-lightGray p-4 cursor-trigger"
          id="my-form-button">Send</button>
      </div>
      <p id="my-form-status" />
    </form>
  </div>
</section>
