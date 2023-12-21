/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#BF3326",
        secondary: "#F2B29B",
        TheBlack: "#262626",
      },
      backgroundImage: {
        homeImg1: "url('./src/assets/homeImg1.png')",
        homeImg2: "url('./src/assets/homeImg2.png')",
        homeImg3: "url('./src/assets/homeImg3.png')",
        homeImg4: "url('./src/assets/homeImg4.png')",
      },
    },
  },
  plugins: [],
};
