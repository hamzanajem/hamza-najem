/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-color': ' linear-gradient(to right, #f43f5e, #db2777, #ef4444)',  // Red to Orange to Blue
      }
    },
  },
  plugins: [],
}

