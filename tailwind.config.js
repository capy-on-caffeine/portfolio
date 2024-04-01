/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins-extrabold': ['poppins-extrabold', 'sans-serif'],
      'poppins-light': ['poppins-light', 'sans-serif'],
      'poppins-regular': ['poppins-regular', 'sans-serif'],
      'poppins-semibold': ['poppins-semibold', 'sans-serif'],
      'jakarta-regular': ['jakarta-regular', 'sans-serif'],
      'jakarta-semibold': ['jakarta-semibold', 'sans-serif'],
    },
    extend: {
      colors: {
        'lightblue': '#00B2FF',
        'darkblue': '#0038FF'
      },
      keyframes: {
        swipe: {
          '0%': {transform: 'translateX(0rem)'},
          '50%': {transform: 'translateX(0.5rem)'},
          '100%': {transform: 'translateX(0rem)'}
        }
      },
      animation: {
        'swipe': 'swipe 0.5s ease 1',
      }
    },
  },
  plugins: [],
}