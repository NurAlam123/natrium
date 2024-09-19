/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: '#0c0c0c',
      primary: "#efefef",
      secondary: "#d6d6d6",
      gray: "#b5b5b5",
      blue: "#6090e8",
      "dark-1": "rgba(255, 255, 255, 0.1)",
      "dark-2": "rgba(255, 255, 255, 0.2)",
      "dark-3": "rgba(255, 255, 255, 0.3)",
      "snow-white": "#efefef",
      "soft-white": "#dedede"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"]
    },
    animation: {
      'spin': "spin 2s linear infinite",
      'spin-3s': "spin 3s linear infinite",
      'spin-4s': "spin 4s linear infinite"
    },
    extend: {},
  },
  plugins: [],
};
