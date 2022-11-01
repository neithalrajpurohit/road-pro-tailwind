/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "990px",
        xs: "765px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
