import { env } from "@/config/env";
import { PrismaClient } from "@prisma/client";

// !Setup Prisma Client
const prisma = new PrismaClient();
const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
