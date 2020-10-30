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
          'mn-gray': '#555452',
      }
    },
  },
  variants: {},
  plugins: [],
}
