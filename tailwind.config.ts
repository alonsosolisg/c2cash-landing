import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        circular: ["var(--font-circular)", "sans-serif"],
        avenir: ["var(--font-avenir)", "sans-serif"],
      },
      colors: {
        text: "#14142B",
        text2: "#202020",
        accent: "#265FFF",
        primary: "#618BFF",
        secondary: "#B1C6FF",
        background: "#FFFFFF",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
};
export default config;
