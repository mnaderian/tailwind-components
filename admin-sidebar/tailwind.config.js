module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    enabled: true,
    content: [
      '*.html',
    ],
  },
  theme: {
    extend: {
      colors: {
        'mn-gray': {
          '100': '#F4F5F7',
          '200': '#E4E7EB',
          '300': '#D2D6DB',
          '400': '#9EA6B2',
          '500': '#374151',
          '600': '#252F3F',
          '700': '#161D2E',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover']
  },
  plugins: []
}
