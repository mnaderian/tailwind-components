const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'lime': colors.lime,
        'cyan': colors.cyan,
        'rose': colors.rose,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
