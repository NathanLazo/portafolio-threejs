/** @type {import('tailwindcss').Config} */ 
module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}