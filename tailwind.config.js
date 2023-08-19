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
      },
      backgroundColor: {
        sheetCopybook: "#EDCC77",
      },
      height: {
        smallHeight:'1px'
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
    },
  },
  plugins: [],
};
