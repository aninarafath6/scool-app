module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        border_color: "#1e2334",
        shade: "#1e293b",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
