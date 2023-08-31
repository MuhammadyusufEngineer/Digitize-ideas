/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./*.html",
    "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: '#d5ff3f',
        dark: '#101010',
        darkest: '#171717',
        darker: '#292929',
        light: '#c4c4c4',
        lighter: '#606060'
      },
      fontFamily: {
        bold: ['bold'],
        regular: ['regular'],
        light: ['light'],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.word-tight': {
          'word-spacing': '0.5rem'
        },
        '.-word-tight': {
          'word-spacing': '-0.3rem'
        },
      })
    })
  ],
}
