import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_USE_MOCK_SERVICE: z.enum(["true", "false"]).optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_USE_MOCK_SERVICE: process.env.NEXT_PUBLIC_USE_MOCK_SERVICE,
  },
});
