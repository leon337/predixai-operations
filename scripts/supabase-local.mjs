import { spawnSync } from "node:child_process";

const CLI_VERSION = "2.111.0";
const command = process.argv[2] ?? "status";

const commands = {
  start: ["start"],
  status: ["status"],
  reset: ["db", "reset", "--local"],
  stop: ["stop"],
};

if (!(command in commands)) {
  console.error("Uso: node scripts/supabase-local.mjs <start|status|reset|stop>");
  process.exit(2);
}

console.log(`Supabase CLI local fixada em ${CLI_VERSION}.`);
console.log("Este launcher não executa link, db push ou operações --linked.");

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["--yes", `supabase@${CLI_VERSION}`, ...commands[command]],
  { stdio: "inherit" },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
