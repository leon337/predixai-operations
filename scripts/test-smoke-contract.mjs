import assert from 'node:assert/strict';
import fs from 'node:fs';

const routePath = 'app/api/health/route.ts';
const smokePath = 'scripts/smoke-local.mjs';

assert.ok(fs.existsSync(routePath), 'R6-A: endpoint app/api/health/route.ts ausente');
assert.ok(fs.existsSync(smokePath), 'R6-A: smoke local scripts/smoke-local.mjs ausente');

const route = fs.readFileSync(routePath, 'utf8');
const smoke = fs.readFileSync(smokePath, 'utf8');

assert.match(route, /export\s+(async\s+)?function\s+GET\s*\(/, 'R6-A: health deve exportar GET');
assert.match(route, /status:\s*['"]ok['"]/, 'R6-A: health deve responder status=ok');
assert.match(route, /service:\s*['"]predixai-operations['"]/, 'R6-A: health deve identificar o servico');
assert.doesNotMatch(route, /process\.env|SUPABASE|authorization|cookie/i, 'R6-A: health nao pode expor env, credenciais ou sessao');

assert.match(smoke, /127\.0\.0\.1|localhost/, 'R6-A: smoke deve usar alvo local');
assert.match(smoke, /response\.status\s*!==\s*200|response\.status\s*===\s*200/, 'R6-A: smoke deve validar HTTP 200');
assert.match(smoke, /payload\.status\s*!==\s*['"]ok['"]|payload\.status\s*===\s*['"]ok['"]/, 'R6-A: smoke deve validar payload.status');
assert.match(smoke, /payload\.service\s*!==\s*['"]predixai-operations['"]|payload\.service\s*===\s*['"]predixai-operations['"]/, 'R6-A: smoke deve validar payload.service');
assert.doesNotMatch(smoke, /https:\/\//i, 'R6-A: smoke local nao pode conter alvo HTTPS remoto hardcoded');

console.log('R6-A smoke contract: PASS');
