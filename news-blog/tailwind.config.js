/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:  "'Poppins', sans-serif"
      },
      backgroundColor: {
        second: "#D72050" ,
        heading: "#F3F3F3",
        buttonBg : "#403F3F"
      },
      colors: {
        second: "#D72050"
      }
    },
  },
  plugins: [require("daisyui")],
}