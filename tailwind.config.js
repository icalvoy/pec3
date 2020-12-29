const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html"], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      rosa: '#ff6ec4',
      morado: '#7873f5',
      alertText: '#35087e',
      alertBackground: '#e0cffc',
      alertBorder: '#d4bcfb',
      amarilloFondo: '#f2b862',
      amarillo2Fondo: '#fffaf4',
      grisTexto: '#3c3838',
      footerColor: '#e6e6fa',
    },
    fontFamily: {
      sans: ['Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      serif: ['Georgia','Times New Roman', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%;',
          },
          '@screen md': {
            maxWidth: '100%;',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
          '@screen 2xl': {
            maxWidth: '1024px',
          },
        }
      })

    }
  ],
}
