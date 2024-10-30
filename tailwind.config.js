/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "Admin/*.html",
    "*.php",
    "admin/*.php"
  ],
  theme: {
    extend: {
      fontFamily : {
        "dancing" : ["Dancing Script", "sans-serif"],
        "poppins":["Poppins",  "sans-serif"]
      },
      keyframes: {
        move: {
          to: {
            strokeDashoffset: '500',
            stroke: 'red'
          },
        },
      },
    },
  },
  plugins: [],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
     "synthwave", 
     "dim",
      "garden",
       "valentine",
      ],
  },
}

