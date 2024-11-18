/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        darkSlatePrimary: "#2C3E50",
        lightGray: "#ECECEC",
        deepBlue: "#3A539B",
        metallicSilver: "#B0B0B0",
        yellow: "#F39C12",
        white: "#FAFAFA",
        charcoalGray: "#4D4D4D",
        lightBlue: "#A9CCE3",
        primaryButton: "#f9a826",
        primaryButtonHover: "#c47d17",
      },
      backgroundImage: {},
      fontFamily: {
        jost: "Jost",
      },
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "768px",
          lg: "990px",
          xl: "1280px",
          "2xl": "1340px",
        },
      },
      boxShadow: {
        headerWeb: " 0px 4px 4px 0px #0000000A",
        aboutBox: "0px 18.22px 42.51px 0px #0000000D",
      },
    },
  },
  plugins: [],
};
