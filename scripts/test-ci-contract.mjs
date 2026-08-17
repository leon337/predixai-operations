import assert from 'node:assert/strict';
import fs from 'node:fs';

const workflowPath = '.github/workflows/dependency-security.yml';
const workflow = fs.readFileSync(workflowPath, 'utf8');

assert.match(workflow, /pull_request:\s*\n\s*branches:\s*\n\s*- main/, 'R6-A: PRs para main devem executar o CI');
assert.match(workflow, /push:\s*\n\s*branches:\s*\n\s*- main/, 'R6-A: pushes em main devem executar o CI');
assert.match(workflow, /concurrency:\s*\n/, 'R6-A: workflow deve declarar concurrency');
assert.match(workflow, /cancel-in-progress:\s*true/, 'R6-A: concurrency deve cancelar execucoes obsoletas');
assert.match(workflow, /permissions:\s*\n\s*contents:\s*read/, 'R6-A: permissoes devem permanecer read-only');
assert.doesNotMatch(workflow, /\bvercel\s+(deploy|promote|rollback)\b/i, 'R6-A: CI repo-only nao pode executar CD Vercel');

console.log('R6-A CI contract: PASS');
