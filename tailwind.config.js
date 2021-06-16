module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#313639",
      mauvre: "#974b31",
      offwhite: "#FFFDD0",
      tan: "#d8955a",
      red: "#e53e3e",
      orange: "#dd6b20",
      yellow: "#d69e2e",
      gold: "#FFBF00",
      green: "#3ee53e",
      lime: "#8cd53f",
      teal: "#319795",
      blue: "#3182ce",
      indigo: "#5a67d8",
      purple: "#805ad5",
      pink: "#d53f8c",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
