/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px', 
      'md': '640px', 
      'lg': '1024px', 
    },
    extend: {
      colors: {
        'custom-blue': '#2D70B6',
      },
    },
  },
  plugins: [],
};
