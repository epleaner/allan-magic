/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        '4xl': '40px',
        '7xl': '4rem',
      },
      lineHeight: {
        xl: '5rem',
      },
      spacing: {
        'grid-gutter': '2.75rem',
        'grid-gutter-mobile': '1rem',
        'page-gutter': '5.5rem',
        'page-gutter-mobile': '1.5rem',
      },
      colors: {
        brand: {
          blue: '#14778C',
          teal: '#BBDCE3',
          lightGray: '#656465',
          charcoal: '#3F3D3E',
          beige: '#EEEBE3',
        },
      },
      fontFamily: {
        sans: ['Migra', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        glitch: ['Rubik Glitch', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
