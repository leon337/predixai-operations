import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const SUPABASE_PACKAGE = "supabase@2.111.0";
const LOCAL_PROJECT_ID = "predixai-operations-local";
const DB_CONTAINER = `supabase_db_${LOCAL_PROJECT_ID}`;
const EVIDENCE_DIR = "r5-recovery-evidence";
const SYNTHETIC_MARKER = "R5_SYNTHETIC_2026";

const sectorId = "11111111-1111-4111-8111-111111111111";
const itemId = "22222222-2222-4222-8222-222222222222";
const moveId = "33333333-3333-4333-8333-333333333333";

function run(command, args, options = {}) {
  const hasInput = options.input !== undefined;
  const stdio = options.capture
    ? ["pipe", "pipe", "pipe"]
    : hasInput
      ? ["pipe", "inherit", "inherit"]
      : "inherit";

  const result = spawnSync(command, args, {
    encoding: "utf8",
    stdio,
    input: options.input,
  });

  if (result.error) throw result.error;
  if ((result.status ?? 1) !== 0) {
    const detail = options.capture ? `\n${result.stderr || result.stdout || ""}` : "";
    throw new Error(`${command} ${args.join(" ")} falhou com status ${result.status}.${detail}`);
  }

  return options.capture ? (result.stdout ?? "").trim() : "";
}

function runSupabase(args) {
  return run(process.platform === "win32" ? "npx.cmd" : "npx", ["--yes", SUPABASE_PACKAGE, ...args]);
}

function runPsql(sql, { capture = false } = {}) {
  return run(
    "docker",
    [
      "exec",
      "-i",
      DB_CONTAINER,
      "psql",
      "-U",
      "postgres",
      "-d",
      "postgres",
      "-X",
      "-v",
      "ON_ERROR_STOP=1",
      ...(capture ? ["-qAt"] : []),
      "-c",
      sql,
    ],
    { capture },
  );
}

function restoreSqlFile(path, prelude = "") {
  const sql = `${prelude}${readFileSync(path, "utf8")}`;
  run(
    "docker",
    [
      "exec",
      "-i",
      DB_CONTAINER,
      "psql",
      "-U",
      "postgres",
      "-d",
      "postgres",
      "-X",
      "--single-transaction",
      "--variable",
      "ON_ERROR_STOP=1",
    ],
    { input: sql },
  );
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: esperado ${JSON.stringify(expected)}, recebido ${JSON.stringify(actual)}`);
  }
}

rmSync(EVIDENCE_DIR, { recursive: true, force: true });
mkdirSync(EVIDENCE_DIR, { recursive: true });

console.log("GATE-R5-A: preparando baseline local limpa.");
runSupabase(["db", "reset", "--local"]);

runPsql(`
insert into public.sectors (id, name)
values ('${sectorId}', '${SYNTHETIC_MARKER}_SECTOR');

insert into public.inventory_items (
  id, code, name, category, min_qty, unit, location
) values (
  '${itemId}', '${SYNTHETIC_MARKER}', '${SYNTHETIC_MARKER}_ITEM', 'synthetic', 2, 'un', 'LOCAL_ONLY'
);

insert into public.inventory_moves (
  id, item_id, date, type, qty_decimal, unit_cost_decimal, reason, sector_id
) values (
  '${moveId}', '${itemId}', current_date, 'entrada', 7, 12.34, '${SYNTHETIC_MARKER}', '${sectorId}'
);
`);

const before = runPsql(`
select concat_ws('|',
  (select count(*) from public.sectors where id = '${sectorId}'),
  (select count(*) from public.inventory_items where id = '${itemId}'),
  (select count(*) from public.inventory_moves where id = '${moveId}'),
  (select current_qty from public.inventory_balances where id = '${itemId}')
);
`, { capture: true });
assertEqual(before, "1|1|1|7", "GATE-R5-A pre-backup validation");

const rolesPath = join(EVIDENCE_DIR, "roles.sql");
const schemaPath = join(EVIDENCE_DIR, "schema.sql");
const dataPath = join(EVIDENCE_DIR, "data.sql");

console.log("GATE-R5-A: gerando bundle lógico explicitamente local.");
runSupabase(["db", "dump", "--local", "--file", rolesPath, "--role-only"]);
runSupabase(["db", "dump", "--local", "--schema", "public", "--file", schemaPath]);
runSupabase(["db", "dump", "--local", "--schema", "public", "--file", dataPath, "--data-only", "--use-copy"]);

const hashesBefore = {
  "roles.sql": sha256(rolesPath),
  "schema.sql": sha256(schemaPath),
  "data.sql": sha256(dataPath),
};

writeFileSync(
  join(EVIDENCE_DIR, "manifest.json"),
  `${JSON.stringify({
    gate: "GATE-R5-A",
    scope: "LOCAL_SYNTHETIC_ONLY",
    marker: SYNTHETIC_MARKER,
    supabaseCli: SUPABASE_PACKAGE,
    files: hashesBefore,
  }, null, 2)}\n`,
);

console.log("GATE-R5-A: destruindo somente o schema public local.");
runPsql("drop schema public cascade; create schema public;");

const afterDestroy = runPsql("select coalesce(to_regclass('public.inventory_items')::text, 'ABSENT');", { capture: true });
assertEqual(afterDestroy, "ABSENT", "GATE-R5-A controlled local destruction");

console.log("GATE-R5-A: restaurando schema e dados no mesmo Postgres local.");
restoreSqlFile(schemaPath);
restoreSqlFile(dataPath, "SET session_replication_role = replica;\n");

const afterRestore = runPsql(`
select concat_ws('|',
  (select count(*) from public.sectors where id = '${sectorId}'),
  (select count(*) from public.inventory_items where id = '${itemId}' and code = '${SYNTHETIC_MARKER}'),
  (select count(*) from public.inventory_moves where id = '${moveId}' and reason = '${SYNTHETIC_MARKER}'),
  (select current_qty from public.inventory_balances where id = '${itemId}')
);
`, { capture: true });
assertEqual(afterRestore, "1|1|1|7", "GATE-R5-A post-restore validation");

const hashesAfter = {
  "roles.sql": sha256(rolesPath),
  "schema.sql": sha256(schemaPath),
  "data.sql": sha256(dataPath),
};
assertEqual(JSON.stringify(hashesAfter), JSON.stringify(hashesBefore), "GATE-R5-A SHA256 integrity");

writeFileSync(
  join(EVIDENCE_DIR, "validation.json"),
  `${JSON.stringify({
    gate: "GATE-R5-A",
    result: "PASS",
    scope: "LOCAL_SYNTHETIC_ONLY",
    marker: SYNTHETIC_MARKER,
    before,
    afterDestroy,
    afterRestore,
    sha256: hashesAfter,
    rolesRestoreExecuted: false,
    rolesRestoreReason: "Local Supabase pre-provisions platform roles; roles.sql is captured and checksummed but not replayed in this synthetic application-schema drill.",
  }, null, 2)}\n`,
);

console.log("GATE-R5-A local synthetic backup/restore drill: PASS");
