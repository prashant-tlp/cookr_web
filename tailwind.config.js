/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "homeimg":"url(/public/home.jpg)",
      }
    },
  },
  plugins: [],
}

