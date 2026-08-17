import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptPath = 'scripts/release-evidence.mjs';
assert.ok(fs.existsSync(scriptPath), 'R6-A: gerador scripts/release-evidence.mjs ausente');

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'predixai-r6a-evidence-'));
try {
  const run = spawnSync(process.execPath, [scriptPath], {
    encoding: 'utf8',
    env: {
      ...process.env,
      RELEASE_EVIDENCE_DIR: tempDir,
      GITHUB_SHA: '0123456789abcdef',
      GITHUB_RUN_ID: '123456',
      R6_BUILD_RESULT: 'PASS',
      R6_SMOKE_RESULT: 'PASS'
    }
  });

  assert.equal(run.status, 0, `R6-A: gerador falhou: ${run.stderr}`);
  const evidencePath = path.join(tempDir, 'release-evidence.json');
  assert.ok(fs.existsSync(evidencePath), 'R6-A: release-evidence.json nao foi gerado');

  const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
  assert.deepEqual(evidence, {
    git_sha: '0123456789abcdef',
    environment: 'ci',
    ci_run_id: '123456',
    build: 'PASS',
    smoke: 'PASS',
    deployment_id: null,
    deployment_url: null,
    rollback_target: null
  });

  assert.doesNotMatch(JSON.stringify(evidence), /supabase|password|secret|token|authorization/i, 'R6-A: evidence nao pode conter segredos');
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log('R6-A release evidence contract: PASS');
