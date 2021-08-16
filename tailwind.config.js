module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        custom1: '450px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['base', 'components', 'utilities'],
};
