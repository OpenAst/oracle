import dotenv from "dotenv";
import path from "path";
import { existsSync } from "fs";

function getEnvPath(startDir: string): string | undefined {
  let currentDir = startDir;

  while (true) {
    const candidate = path.join(currentDir, ".env");
    if (existsSync(candidate)) {
      return candidate;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      return undefined;
    }
    currentDir = parentDir;
  }
}

const envPath = getEnvPath(process.cwd());
if (envPath) {
  dotenv.config({ path: envPath });
} else {
  dotenv.config();
}

export const env = {
  rpcHttp: process.env.SOLANA_RPC_HTTP!,
  rpcWs: process.env.SOLANA_RPC_WS!,
};

if (!env.rpcHttp || !env.rpcWs) {
  throw new Error("Missing Solana RPC environment variables.");
}