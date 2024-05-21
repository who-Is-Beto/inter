/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    animation: {
      "size-rebound": "size-rebound 1s ease-in-out"
    },
    extend: {
      keyframes: {
        "size-rebound": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" }
        }
      },
      colors: {
        deepPurple: "#CCA8E9",
        lightPurple: "#C3BEF0",
        cakeBlue: "#CADEFC",
        cakeGreen: "#DEFCF9",
        white: "#F9F9F9",
        red: "#D21E58",
        black: "#373737"
      },
      fontFamily: {
        nats: ["Nats", "sans-serif"]
      }
    }
  },
  plugins: []
};
