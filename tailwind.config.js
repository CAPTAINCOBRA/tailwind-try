/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {},
      colors: {
        emerald: colors.emerald,
      },
    },
  },
  plugins: [],
};
