const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
      modifierTransition: "background 0.2s",
      activeTransition: "background 0.1s",
      darken: 0.075,
    }),
    fontFamily: {
      sans: ["'Poppins'", "sans-serif"],
    },
    extend: {
      keyframes: {
        move: {
          "0%": {
            transform: "translateX(100px)",
          },
          // "25%": {
          //   transform: "translateX(50px)",
          // },
          // "50%": {
          //   transform: "translateY(50px)",
          // },
          "100%": {
            transform: "translateX(-100px)",
          },
        },
      },
      animation: {
        move: "move 15s linear infinite",
      },
      visibility: ["group-hover"],
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "1/10": "10.000000%",
        "2/10": "20.000000%",
        "3/10": "30.000000%",
        "4/10": "40.000000%",
        "5/10": "50.000000%",
        "6/10": "60.000000%",
        "7/10": "70.000000%",
        "8/10": "80.000000%",
        "9/10": "90.000000%",
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   gray: colors.slate,
    //   red: colors.red,
    //   blue: colors.blue,
    //   yellow: colors.amber,
    //   teal: colors.teal,
    //   white: colors.white,
    //   black: colors.black,
    //   purple: colors.purple,
    //   green: colors.green,
    //   cyan: colors.cyan,
    // },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    // display: ["group-hover"],
  },
  // plugins: [],
};
