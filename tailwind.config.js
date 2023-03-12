/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
        colors : {
          "60" : "#CDC6F5" ,
          "primary" : "#222688",
          "secondary" : "#F5DFFF",
       },
      extend: {
            colors : {
              'shadow-blue':"#16216d"
            }
      },
    },
    
  },
  plugins: [],
}

