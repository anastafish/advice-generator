/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      cyan: 'hsl(var(--cyan))',
      neon: 'hsl(var(--neon))',
      grayish: 'hsl(var(--grayish))',
      dark_gray: 'hsl(var(--dark--grayish))',
      dark_blue: 'hsl(var(--dark--blue))',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray' : '#334155'
    },
    extend: {
      fontFamily:{
        Manrope: ['Manrope']
      }
    },
  },
  plugins: [],
}
