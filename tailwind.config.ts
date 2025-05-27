import type { Config } from "tailwindcss";

// !Tailwind config
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        navbarHeight: "60px",
        heroHeight: "calc(100dvh - 60px)",
        loadingSpinner: "clamp(20px, 20dvw + 1rem, 300px)",
        notFoundHeight: "calc(100dvh - 280px)",
      },
      width: {
        loadingSpinner: "clamp(20px, 20% + 1rem, 300px)",
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
        "auto-1": "repeat(auto-fit, minmax(250px, 300px))",
      },
    },
  },
  plugins: [],
};

export default config;
