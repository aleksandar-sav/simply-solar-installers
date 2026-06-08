#!/usr/bin/env node
/**
 * Stable local dev: stop stale Next processes for this project, clear .next, start fresh.
 * Prevents the recurring "Cannot find module './331.js'" / CSS 404 corruption.
 */
import { spawn, execSync } from "node:child_process";
import { rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = join(root, ".next");

// Stop only Next dev servers running from this project folder.
try {
  execSync(`pkill -f "${root}/node_modules/.bin/next dev" 2>/dev/null || true`, {
    shell: true,
    stdio: "ignore",
  });
  // Also free port 3000 if a stale process is still holding it.
  execSync("lsof -ti:3000 | xargs kill -9 2>/dev/null || true", {
    shell: true,
    stdio: "ignore",
  });
} catch {
  /* ignore */
}

try {
  rmSync(nextDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
} catch {
  execSync(`rm -rf "${nextDir}"`, { shell: true, stdio: "ignore" });
}

console.log("Starting dev server (clean .next cache)…\n");

const child = spawn("npx", ["next", "dev"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
