/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px', // Example mobile size
      'md': '640px', // Example medium size
      'lg': '1024px', // Example large size
      // Add more breakpoints as needed
    },
    extend: {},
  },
  plugins: [],
};
