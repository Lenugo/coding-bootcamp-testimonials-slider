module.exports = {
  purge: [".src/**/*.html", ".src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "pattern-bg": "url('/images/pattern-bg.svg')",
        "pattern-curve": "url('/images/pattern-curve.svg')",
        "pattern-quotes": "url('/images/pattern-quotes.svg')",
        pas: "url('/images/image-john.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
