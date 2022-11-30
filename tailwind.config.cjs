/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        "green-pointer":
          "url(https://firebasestorage.googleapis.com/v0/b/mohamed-folio.appspot.com/o/arrowClick.webp?alt=media), auto",
      },
      fontSize: {
        tiny: "0.6rem",
      },
      backgroundImage: {
        "hero-image":
          "url(https://firebasestorage.googleapis.com/v0/b/mohamed-folio.appspot.com/o/HeroCover.jpg?alt=media)",
      },
      backgroundSize: {
        "size-100%-40%": "100% 40%",
      },
      backgroundPosition: {
        "pos-0-90%": "0 90%",
        "pos-center-0vh": "center 0vh",
      },
      boxShadow: {
        "card-box": "0px 0px 40px 5px rgba(1,1,1,0.4)",
        "circle-box":
          "inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px red, inset 20px 0 300px #ff40d6, inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00, 10px 0 80px #f55",
      },
      keyframes: {
        moveLeft: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
