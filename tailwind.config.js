module.exports = {
  purge: ['.src/**/*.html', '.src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1x2': '1.2rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
