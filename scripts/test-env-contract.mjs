import fs from "node:fs";

const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function readIfExists(path) {
  if (!fs.existsSync(path)) {
    failures.push(`arquivo obrigatório ausente: ${path}`);
    return "";
  }
  return fs.readFileSync(path, "utf8");
}

const app = readIfExists("app/operations-app.tsx");
check(
  !app.includes("https://gotzykqvpgjzmzsyvufx.supabase.co"),
  "app não pode conter URL hardcoded do potiguarbd",
);
check(
  !app.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"),
  "app não pode conter JWT/chave publishable hardcoded",
);
check(
  app.includes("process.env.NEXT_PUBLIC_SUPABASE_URL"),
  "app deve ler NEXT_PUBLIC_SUPABASE_URL",
);
check(
  app.includes("process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"),
  "app deve ler NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
);

const envExample = readIfExists(".env.example");
check(
  /^NEXT_PUBLIC_SUPABASE_URL=http:\/\/127\.0\.0\.1:54321$/m.test(envExample),
  ".env.example deve apontar por padrão somente para Supabase local",
);
check(
  /^NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_local_from_supabase_status$/m.test(envExample),
  ".env.example deve usar placeholder explícito para a chave publishable local",
);
check(
  !envExample.includes("gotzykqvpgjzmzsyvufx"),
  ".env.example não pode referenciar o projeto remoto potiguarbd",
);

const config = readIfExists("supabase/config.toml");
check(
  /project_id\s*=\s*"predixai-operations-local"/.test(config),
  "supabase/config.toml deve possuir project_id local explícito",
);
check(
  /\[auth\][\s\S]*site_url\s*=\s*"http:\/\/127\.0\.0\.1:3000"/.test(config),
  "config local deve limitar site_url ao frontend local",
);
check(
  /\[db\.seed\][\s\S]*enabled\s*=\s*false/.test(config),
  "seed deve permanecer desabilitado enquanto não houver seed não sensível aprovado",
);
check(
  !config.includes("gotzykqvpgjzmzsyvufx"),
  "config local não pode vincular o projeto remoto",
);

const localScript = readIfExists("scripts/supabase-local.mjs");
check(
  localScript.includes("2.111.0"),
  "launcher local deve fixar a versão Supabase CLI 2.111.0",
);
check(
  !localScript.includes('"--linked"') &&
    !localScript.includes('"link", "--project-ref"') &&
    !localScript.includes('"db", "push"'),
  "launcher local não pode oferecer argumentos executáveis de mutação remota",
);

if (failures.length > 0) {
  console.error("INFRA-04 environment contract: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("INFRA-04 environment contract: PASS");
