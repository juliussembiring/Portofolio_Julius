module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/preline/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui"), require("preline/plugin")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
