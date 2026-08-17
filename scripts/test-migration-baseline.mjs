import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const migrationsDir = path.resolve("supabase/migrations");
const baselineName = "20260803140000_mvp_inventory_schema_base.sql";
const onlineName = "20260803143000_mvp_inventory_online.sql";
const memberAccessName = "20260803145000_mvp_inventory_member_access.sql";

const migrations = (await readdir(migrationsDir)).filter((name) => name.endsWith(".sql")).sort();

assert.ok(
  migrations.includes(baselineName),
  `INFRA-04-F10: migration-base ausente: ${baselineName}`,
);

assert.ok(
  migrations.indexOf(baselineName) < migrations.indexOf(onlineName),
  "INFRA-04-F10: migration-base deve executar antes da migration online",
);
assert.ok(
  migrations.indexOf(baselineName) < migrations.indexOf(memberAccessName),
  "INFRA-04-F10: migration-base deve executar antes da migration de membros",
);

const sql = await readFile(path.join(migrationsDir, baselineName), "utf8");

for (const table of ["sectors", "inventory_items", "inventory_moves"]) {
  assert.match(
    sql,
    new RegExp(`create\\s+table\\s+(?:if\\s+not\\s+exists\\s+)?public\\.${table}\\b`, "i"),
    `INFRA-04-F10: migration-base deve criar public.${table}`,
  );
}

assert.match(
  sql,
  /inventory_moves[\s\S]*item_id\s+uuid\s+not\s+null[\s\S]*references\s+public\.inventory_items\s*\(\s*id\s*\)/i,
  "INFRA-04-F10: inventory_moves.item_id deve referenciar inventory_items.id",
);

console.log("INFRA-04-F10 migration baseline contract: PASS");
