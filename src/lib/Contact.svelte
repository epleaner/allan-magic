<script>
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

<section id="contact" class="h-screen col-span-12 mx-page-gutter">
  <div class="w-full h-full flex flex-col items-center justify-center gap-4">
    <h1 class="text-3xl">Contact</h1>
    <form
      class="w-1/4 flex flex-col gap-4"
      id="contact-form"
      action="https://formspree.io/f/myyqkzze">
      <label class="flex flex-col" for="email"
        >Name:
        <input
          class="mt-2 bg-brand-teal text-brand-charcoal rounded-lg py-2 px-4 focus:outline-none"
          type="name"
          name="name" /></label>
      <label class="flex flex-col" for="message"
        >Message:
        <textarea
          class="mt-2 bg-brand-teal text-brand-charcoal rounded-lg p-4 focus:outline-none"
          name="message" /></label>
      <button
        class="mt-4 rounded-lg border border-brand-teal bg-transparent text-brand-teal transition-colors hover:border-transparent hover:bg-brand-teal hover:text-brand-charcoal p-4 cursor-trigger"
        id="my-form-button">Send</button>
      <p id="my-form-status" />
    </form>
  </div>
</section>
