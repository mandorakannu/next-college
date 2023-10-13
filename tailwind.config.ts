import type { Config } from "tailwindcss";
import { teal } from "tailwindcss/colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: teal[50],
          100: teal[100],
          200: teal[200],
          300: teal[300],
          400: teal[400],
          500: teal[500],
          600: teal[600],
          700: teal[700],
          800: teal[800],
          900: teal[900],
        },
        secondary: {
          50: "#6B728E",
          100: "#50577A",
          200: "#474E68",
          300: "#404258",
        },
        tertiary: {
          50: "#635985",
          100: "#443C68",
          200: "#393053",
          300: "#18122B",
        },
        shade: {
          50: "#DDE6ED",
          100: "#9DB2BF",
          200: "#526D82",
          300: "#27374D",
        },
      },
    },
  },
};
export default config;
