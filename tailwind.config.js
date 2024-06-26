/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-sm':{'max': '640px'}
      }
    },
  },
  plugins: [],
};
