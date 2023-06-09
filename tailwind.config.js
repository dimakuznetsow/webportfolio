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
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        192: "48rem",
        200: "50rem",
      },
      margin: {
        100: "25rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        192: "48rem",
        200: "50rem",
        208: "52rem",
        216: "54rem",
        224: "56rem",
        232: "58rem",
        240: "60rem",
        248: "62rem",
        256: "64rem",
        264: "66rem",
        272: "68rem",
        280: "70rem",
        288: "72rem",
        296: "74rem",
      },
      screens: {
        xmd: "900px",
        xlg: "1100px",
        xxlg: "1190px",
        "2xl": "1300px",
        "3xl": "1400px",
        "3xxl": "1900px",

        "4xl": "2000px",
        "5xl": "2240px",
        "6xl": "2304px",
        "7xl": "2560px",
        "8xl": "3200px",
        "9xl": "3800px",
      },
    },
  },
  plugins: [require("daisyui")],
};
