import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#00ADB5",
        tertiary: "#EEEEEE",
        customGray: "#393E46",
      },
    },
  },
  plugins: [],
} satisfies Config;
