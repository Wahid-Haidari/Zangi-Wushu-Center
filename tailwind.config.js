/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ba0e3a',
        'custom-background': '#041b24',
        'custom-brown': '#a8594c',
        'custom-green': '#477763',
        'custom-grey': '#9ebdbf',
        'custom-bg-pink': '#edb6a2',
        'custom-bg-brown': '#643933',

      },
      spacing: {
        '30rem': '30rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    // Other plugins...
  ],
}

