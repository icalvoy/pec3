const colors = require('tailwindcss/colors')

module.exports = {
  purge: [], //"./src/**/*.html"
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      purple: colors.purple,
      indigo: '#6610f2',
    },
    fontFamily: {
      sans: ['Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['Georgia','Times New Roman', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
