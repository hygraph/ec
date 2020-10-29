module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto Condensed"],
      body: ["Roboto"],
    },
    extend: {
      colors: {
        "accent-1": "#333",
        blek: {
          100: "#dbdbdb",
          200: "#c7c7c7",
          300: "#b3b3b3",
          400: "#9f9f9f",
          500: "#8b8b8b",
          600: "#777777",
          700: "#636363",
          800: "#4f4f4f",
          900: "#3B3B3B",
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
