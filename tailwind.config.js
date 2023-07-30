/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
      "Spartan": ['League Spartan', 'sans-serif'],
      "Rubik": ['Rubik', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary':'hsl(180, 29%, 50%)',
        'secondary':'hsl(180, 52%, 96%)', //(Background)
        'tertiary':'hsl(180, 31%, 95%)',//(Filter Tablets)
        'quaternary':'hsl(180, 8%, 52%)',
        'quinary':'hsl(180, 14%, 20%)'
      },
    },
  },
  plugins: [],
}


