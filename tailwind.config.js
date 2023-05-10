/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5eead4",

          secondary: "#68afd1",

          accent: "#2981ad",

          neutral: "#28293E",

          "base-100": "#ffff",

          info: "#4E7DE9",

          success: "#21C488",

          warning: "#F29C07",

          error: "#FF3811",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
