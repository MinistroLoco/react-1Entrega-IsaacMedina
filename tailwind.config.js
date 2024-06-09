/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#615EFC',
        'secondary': '#254336',
        'accent': '#B7B597',
      },
    }
  },
  plugins: [],
}

