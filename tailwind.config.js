/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fdefc1",
        secondary: "#454545",
        tertiary: "#97A7B3",
        "black-100": "#100d25",
        "black-200": "rgb(77 78 80 / 85%)",
        "black-300": "#272526f0",
        "cadetGrey-100": "#4d4e50",
        "pink-100": "#b96d79",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #EF798A",
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};