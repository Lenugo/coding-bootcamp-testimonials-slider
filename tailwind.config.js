module.exports = {
  purge: [".src/**/*.html", ".src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        john_image: "url('public/images/image-john.jpg')",
        tanya_image: "url('./images/image-tanya.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
