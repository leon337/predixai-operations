const target = process.env.SMOKE_URL ?? 'http://127.0.0.1:3000/api/health';
const url = new URL(target);

const localHost = url.hostname === '127.0.0.1' || url.hostname === 'localhost';
if (url.protocol !== 'http:' || !localHost || url.pathname !== '/api/health') {
  throw new Error(`R6-A smoke is local-only; rejected target: ${target}`);
}

const attempts = 30;
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    const payload = await response.json();

    if (
      response.status === 200 &&
      payload.status === 'ok' &&
      payload.service === 'predixai-operations'
    ) {
      console.log(`R6-A local smoke: PASS (${url.href})`);
      process.exit(0);
    }

    throw new Error(`unexpected response: status=${response.status} payload=${JSON.stringify(payload)}`);
  } catch (error) {
    if (attempt === attempts) {
      console.error(`R6-A local smoke: FAIL after ${attempts} attempts`);
      throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
