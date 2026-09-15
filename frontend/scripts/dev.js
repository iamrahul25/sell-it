const path = require("path");
const { spawn } = require("child_process");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.FRONTEND_PORT || 3000;

const child = spawn("npx", ["next", "dev", "-p", String(port)], {
  stdio: "inherit",
  shell: true,
  env: process.env,
  cwd: path.resolve(__dirname, ".."),
});

child.on("exit", (code) => process.exit(code ?? 0));
