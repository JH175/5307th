/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../assets/burma.jpg')",
        'history-img': "url('../assets/5307th_river.png')",
        'postcard-img': "url('../assets/eventbg.png')",
        'heading-bg': "url('../assets/odcanvas.jpeg')",
      },
    },
  },
  plugins: [],
};
