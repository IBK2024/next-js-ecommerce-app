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
        heroHeading: "clamp(1rem, 3vw + 1rem, 12rem)",
        heroSubheading: "clamp(0.875rem, 1vw + 0.875rem, 2.5rem)",
        notFoundHeading: "clamp(4.5rem, 18vw + 1rem, 15rem)",
      }
    },
  },
  plugins: [],
};

export default config;
