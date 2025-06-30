import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
  },
  env: {
    NEXT_PUBLIC_USE_MOCK_DATA: "true",
  },
});
