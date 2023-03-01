/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./__pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
