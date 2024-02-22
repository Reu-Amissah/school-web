/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "san-serif"],
      },
      colors: {
        blue: "#0f385d",
        orange: "#d65413",
        lightblue: "#f6feff",
        green: "#1eb424",
        lightgreen: "#e0fde1",
        lightgrey: "#cfcfcf",
      },
    },
  },
  plugins: [],
};
