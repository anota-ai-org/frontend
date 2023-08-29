/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundGradient: "linear-gradient(90deg, #154BAE 0%, #69B24B 100%)",
        backgroundGradientLogin:
          "linear-gradient(270deg, #0055AD 0%, #22B343 47.30%, rgba(34, 179, 67, 0.00) 100%)",
        backgroundGradientPerfil: "linear-gradient(225deg, rgba(0, 85, 173, 0.75) 0.99%, rgba(34, 179, 67, 0.75) 100%)",
      },
      backgroundColor: {
        sheetCopybook: "#EDCC77",
        whiteOpacity: "rgba(255, 255, 255, 0.60)",
        buttonPerfil: "rgba(0, 85, 173, 0.75)"
      },
      height: {
        smallHeight: "1px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spin: {
          transform: "rotate(360)",
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms ease-in-out",
        overlayShow: "fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "fadeIn  300ms ease-in-out",
        spin360: "spin 300ms ease-in",
      },
      boxShadow: {
        defaultShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
