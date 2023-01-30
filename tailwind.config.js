/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      thirdColor: '#CDD7D6',
      fourthColor: '#F87060',
      fifthColor: '#102542',
      whiteColor: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        solitreo: ['"Solitreo"', ...defaultTheme.fontFamily.sans],
        pressStart: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
