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
      colors: {
        "primary-color": "#1E1E1E",
        "secondary-color": "#FFFFFF",
        "tertiary-color": "#2C2C2C",
        "primary-blur-color": "#1E1E1E10",
        "secondary-blur-color": "#FFFFFF10",
      }
    },
  },
  plugins: [],
};
export default config;
