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
        primary: {
          100: "#041F1B",
          300: "#0C3C26",
          400: "#041F1B",
          600: "#01120D"
        },
        secondary: "#FF8A05",
        cakeBlue: "#CADEFC",
        cakeGreen: "#DEFCF9",
        white: {
          100: "#FFFFFF",
          200: "#F3F3F5",
          300: "#D3D1CB"
        },
        red: "#D21E58",
        black: "#373737"
      },
      fontFamily: {
        nats: ["Nats", "sans-serif"],
        nighty: ["Nighty", "sans-serif"]
      }
    }
  },
  plugins: []
};
