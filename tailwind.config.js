/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter as a custom font family
      },
      boxShadow: {
        'custom': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      backgroundImage: {
        'blood-gradient': 'linear-gradient(90deg, #ff0000, #CC0000, #990000)',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};


