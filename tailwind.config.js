/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020d19",
        secondary: "#7fd7da",
        tertiary: "#0a1b36",
        "black-100": "#030712",
        "black-200": "#1e293b",
        "violet-200": "#ddd6fe",
        "rose-700": "#be123c",
        "pink-600": "#db2777",
        "sky-950": "#082f49",
        darkGrey: "#333333",
        yellow: "#FFFF00",
      },
      fontFamily: {
        rubik: ["Rubik Maps", "sans-serif"],
      },
      fontFamily: {
        prot: ["Protest Revolution", "sans-serif"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontFamily: {
        shantell: ["Shantell Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #10323c",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
