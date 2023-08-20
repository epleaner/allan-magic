<script>
  /**
   * @type {string | any[]}
   */
  export let items = [];
  let currentIdx = 0;

  function goLeft() {
    currentIdx = (currentIdx - 1 + items.length) % items.length;
  }

  function goRight() {
    currentIdx = (currentIdx + 1) % items.length;
  }
</script>

<div id="scroll-me" class="flex items-center justify-between w-full">
  <button class="bg-blue-500 text-white px-4 py-2 rounded-l" on:click={goLeft}
    >Left</button>
  <div class="flex flex-col">
    {#each items as item, idx}
      <p
        class="text-lg m-4 opacity-0 transition-opacity duration-500"
        class:opacity-100={idx === currentIdx}>
        {item}
      </p>
    {/each}
  </div>
  <button class="bg-blue-500 text-white px-4 py-2 rounded-r" on:click={goRight}
    >Right</button>
</div>
