/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px" ,
      base: "18px",
      lg: "22px",
      xl: "24px",
      _2xl: "28px"
    } ,
    extend: {
      colors: {
        reactGreen: "#49e659"
      }
    },
  },
  plugins: [],
}

