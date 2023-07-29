<script>
  import { onMount } from 'svelte';

  onMount(() => {
    var form = document.getElementById('contact-form');

    /**
     * @param {{ preventDefault: () => void; target: HTMLFormElement; }} event
     */
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById('my-form-status');
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = 'Thanks for your submission!';
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data['errors']
                  .map((error) => error['message'])
                  .join(', ');
              } else {
                status.innerHTML =
                  'Oops! There was a problem submitting your form';
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = 'Oops! There was a problem submitting your form';
        });
    }
    form.addEventListener('submit', handleSubmit);
  });
</script>

<section id="contact" class="h-screen col-span-12 mx-page-gutter">
  <div class="w-full h-full flex items-center justify-center">
    <form
      class="flex flex-col"
      id="contact-form"
      action="https://formspree.io/f/myyqkzze">
      <label for="email">Email:</label>
      <input type="email" name="email" />
      <label for="message">Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button">Submit</button>
      <p id="my-form-status" />
    </form>
  </div>
</section>
