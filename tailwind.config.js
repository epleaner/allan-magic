/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        'grid-gutter': '2.75rem',
        'page-gutter': '5.5rem',
      },
      colors: {
        brand: { blue: '#14778C', teal: '#BBDCE3' },
      },
    },
  },
  plugins: [require('daisyui')],
};
