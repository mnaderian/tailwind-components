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
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
