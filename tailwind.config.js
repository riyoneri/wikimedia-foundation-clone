/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-image": "url(/assets/bg-animation.svg)",
      },
      backgroundColor: {
        link: "#3a25fa",
      },
      colors: {
        link: "#3a25fa",
      },
      animation: {
        "bg-slide": "slide 300s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(calc(-4237px + 100vw))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};