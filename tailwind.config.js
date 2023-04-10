/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xxl: '1537px',
      xl1: '1440px',
      xl: '1281px',
      lg: '1026px',
      md: '770px',
      sm: '642px',
      xsm: '438px'
    },
    extend: {},
  },
  plugins: [],
}

