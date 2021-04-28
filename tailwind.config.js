module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          100: '#79c3e6',
          200: '#2897ca',
          300: '#1e80ad',
          400: '#1b749e',
          500: '#0F658D',
          600: '#5D67CE',
          700: '#125f83',
          800: '#0d5170',
          900: '#10445c',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
