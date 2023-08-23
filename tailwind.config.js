/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        // gold1: '#bf9b30',
        // gold1: "#D4AF37",
        gold1: "#c7a94c",
        // gold2: "#d9c61c",
        gold2: "#c7a94c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        header: ["Playfair Display", "sans-serif"],
        // header: ["PT Serif", "sans-serif"],
        // main: ["Roboto", "sans-serif"],
        main: ["Helvetica Neue Regular", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
