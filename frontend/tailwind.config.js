/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D", // Dark gray
        accent: "#00A9E0", // Electric blue
        light: "#F1F1F1", // Light gray
        secondary: "#FFD700", // Gold
      },
    },
  },
  plugins: [],
};
