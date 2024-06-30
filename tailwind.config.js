/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
        poppins: ["Poppins"],
      },

      colors: {
        dark_gray: "#B5B5B5",
        white: "#FFFFFF",
        gray: "#F3F3F3",
        black: "#181818",
        orange: "#FFA300",
        blue: "#006AB9",
      },
    },
  },
  plugins: [],
};
