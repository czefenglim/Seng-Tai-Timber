/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gidugu: ['Gidugu', 'sans-serif'],
        inknut: ['"Inknut Antiqua"', 'serif'],
        imbue: ['Imbue', 'serif'],
        fjalla: ['"Fjalla One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

