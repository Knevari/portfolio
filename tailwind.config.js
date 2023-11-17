/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgb(123, 31, 162)",
        violet: "rgb(103, 58, 183)",
        pink: "rgb(244, 143, 177)",
        gray: "hsl(0 0% 11%)",
        grayer: "hsl(0 0% 13.6%)",
      },
      backgroundSize: {
        "3x": "300% 300%",
        xs: "5vmin 5vmin",
      },
      backgroundImage: {
        "dotted-gradient":
          "radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%)",
        "colorful-gradient":
          "linear-gradient(130deg, transparent 0 33%, rgb(123, 31, 162) 66%, rgb(103, 58, 183) 83.5%, rgb(123, 31, 162) 100%)",
      },
      transitionProperty: {
        "bg-pos-transform": "background-position, transform",
      },
    },
  },
  plugins: [],
};
