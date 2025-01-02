/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        "light-white": "#f5f5f5",
        "light-green": "#00FF66",
        grey: "#A0BCE0",
        "light-red": "#E07575",
        "off-blue": "#3E8BBE",
        blue: "#02428D",
        "light-grey": "#676767",
        "pale-grey":"#EFEFEF",
        
      },
      lineHeight: {
        120:"120%",
        100: "100%",
        142: "142%",
        133: "133%",
        126: "126%",
        155:"155%",
      },
      boxShadow: {
        white: "0px 8px 17px 0px #0000001A",
      }
   
    },
  },
  plugins: [],
};
