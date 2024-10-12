import type { Config } from "tailwindcss";

// !Tailwind config
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        navbarHeight: "60px",
        heroHeight: "calc(100dvh - 60px)",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#3030fc",
      },
    },
  },
  plugins: [],
};

export default config;
