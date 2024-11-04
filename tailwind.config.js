/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      borderWidth: {
        '2': '2px',
      },
    },
  },
  plugins: [],
}

