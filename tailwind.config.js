/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
