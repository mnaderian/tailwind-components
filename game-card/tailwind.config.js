module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['*.html']
  },
  theme: {
    extend: {
      colors: {
        'mn-yellow': '#E9BC2F',
        'mn-orange': '#FA6A34',
      },
      width: {
        'card-fixed': '470px',
      }
    },
  },
  variants: {},
  plugins: [],
}
