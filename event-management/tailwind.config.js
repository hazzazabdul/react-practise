/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        condensed: "'Saira Semi Condensed', sans-serif",
      },
      backgroundColor: {
        primary: "#913B5E"
      },
      colors: {
        pri: "#913B5E",
        sec: "#C5555A",
        par: "#ACAEAC",
        head: "#383838"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
