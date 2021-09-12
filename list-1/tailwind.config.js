const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blueGray': colors.blueGray,
      },
      fontFamily: {
        'glory': ['Glory', 'sans-serif'],
        'merriweather': ['Merriweather', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
