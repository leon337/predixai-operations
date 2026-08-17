import fs from 'node:fs';
import path from 'node:path';

const outputDir = process.env.RELEASE_EVIDENCE_DIR ?? 'release-evidence';
const outputPath = path.join(outputDir, 'release-evidence.json');

const evidence = {
  git_sha: process.env.R6_GIT_SHA ?? process.env.GITHUB_SHA ?? 'local',
  environment: 'ci',
  ci_run_id: process.env.GITHUB_RUN_ID ?? 'local',
  build: process.env.R6_BUILD_RESULT ?? 'UNKNOWN',
  smoke: process.env.R6_SMOKE_RESULT ?? 'UNKNOWN',
  deployment_id: null,
  deployment_url: null,
  rollback_target: null
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(evidence, null, 2)}\n`, 'utf8');
console.log(`R6-A release evidence: ${outputPath}`);
