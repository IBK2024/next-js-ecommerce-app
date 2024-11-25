import type { Config } from "tailwindcss";

// !Tailwind config
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        navbarHeight: "60px",
        heroHeight: "calc(100dvh - 60px)",
        loadingSpinner: "clamp(20px, 20vw + 1rem, 300px)",
      },
      width: {
        loadingSpinner: "clamp(20px, 20vw + 1rem, 300px)",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#3030fc",
      },
      fontSize: {
        heroHeading: "clamp(1rem, 2.5vw + 1rem, 12rem)",
      },
      gridTemplateColumns: {
        categoriesGrid: "repeat(auto-fit, minmax(330px, auto))"
      }
    },
  },
  plugins: [],
};

export default config;
