const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      transparent: 'transparent',
      primary: {
        DEFAULT: '#76939d',
        light: '#b8c8ce'
      },
      secondary: {
        dark: '#776a52',
        DEFAULT: '#ddc996',
        light: '#f1eee4'
      },
    },
    fontFamily: {
      'serif': ['Libre Baskerville', 'serif'],
      'playfair': ['Playfair Display', 'serif']
    },
    extend: {
      height: {
        '150': '40rem'
      },
      width: {
        '150': '40rem'
      },
      maxHeight: {
        '150': '40rem',
        '5/6': '83.333333%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
