/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "old-standard": ['"Old Standard TT"', "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
