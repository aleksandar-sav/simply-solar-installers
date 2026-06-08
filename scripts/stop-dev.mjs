#!/usr/bin/env node
/** Stop local Next dev on port 3000 before builds — prevents .next cache corruption. */
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

try {
  execSync(`pkill -f "${root}/node_modules/.bin/next dev" 2>/dev/null || true`, {
    shell: true,
    stdio: "ignore",
  });
  execSync("lsof -ti:3000 | xargs kill -9 2>/dev/null || true", {
    shell: true,
    stdio: "ignore",
  });
} catch {
  /* ignore */
}
