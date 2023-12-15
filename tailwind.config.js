/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'firewatch': '#210002'
      },
      perspective: {
        1: '1px',
      },
      height: {
        120: '120vh'
        
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require('@tailwindcss/typography'),
  ],
}

