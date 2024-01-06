/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dimGrey: "#6C6C6C",
        textPrimary: "#1A1A1A",
        jetBlack: "#090909",
        lightGrey:"#A5A5A5"
      },
    },
  },
  plugins: [],
};
