import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const recoveryScript = "scripts/supabase-local-recovery.mjs";

assert.ok(
  existsSync(recoveryScript),
  `GATE-R5-A: recovery script ausente: ${recoveryScript}`,
);

const source = readFileSync(recoveryScript, "utf8");

assert.match(source, /supabase@2\.111\.0/, "GATE-R5-A: Supabase CLI deve permanecer fixada em 2.111.0");
assert.match(source, /"db"\s*,\s*"dump"/, "GATE-R5-A: backup deve usar supabase db dump");
assert.match(source, /"--local"/, "GATE-R5-A: toda exportação deve ser explicitamente local");
assert.match(source, /"--role-only"/, "GATE-R5-A: bundle deve incluir roles.sql");
assert.match(source, /"--schema"\s*,\s*"public"/, "GATE-R5-A: schema lógico deve limitar-se a public no drill sintético");
assert.match(source, /"--data-only"/, "GATE-R5-A: bundle deve incluir data.sql");
assert.match(source, /"--use-copy"/, "GATE-R5-A: data dump deve usar COPY");
assert.match(source, /drop schema public cascade/i, "GATE-R5-A: drill deve destruir o schema public local antes do restore");
assert.match(source, /psql/, "GATE-R5-A: restore deve usar psql no Postgres local");
assert.match(source, /sha256/i, "GATE-R5-A: bundle deve validar checksums SHA-256");
assert.match(source, /R5_SYNTHETIC_2026/, "GATE-R5-A: drill deve usar marcador sintético fixo e não sensível");

for (const forbidden of [
  /--linked/,
  /--db-url/,
  /project-ref/,
  /gotzykqvpgjzmzsyvufx/,
  /db\.gotzykqvpgjzmzsyvufx\.supabase\.co/,
  /SUPABASE_DB_URL/,
]) {
  assert.doesNotMatch(source, forbidden, `GATE-R5-A: padrão remoto proibido detectado: ${forbidden}`);
}

console.log("GATE-R5-A local backup/restore contract: PASS");
