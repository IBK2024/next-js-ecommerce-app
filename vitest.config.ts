import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// !Vitest config file for testing
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/node_modules/**",
        "**/.next/**",
        "**/test/**",
        "**/__mocks__/**",
        "**/cypress/**",
        "vitest.config.*",
        "next.config.*",
        "postcss.config.*",
        "tailwind.config.*",
        "**/*.d.ts",
        "'**/*.test.*'",
        "src/app/**/*",
        "src/data/**/*",
      ],
    },
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
