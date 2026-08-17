begin;

-- INFRA-04-F10
-- Baseline mínima do schema já materializado pelo MVP-01.
-- Esta migration existe apenas para tornar a cadeia versionada reproduzível do zero.
-- Regras incrementais de autoria, RLS, funções, saldo e membros permanecem nas
-- migrations históricas subsequentes e não são duplicadas aqui.

create table if not exists public.sectors (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

create table if not exists public.inventory_items (
  id uuid primary key default gen_random_uuid(),
  code text,
  name text not null,
  category text,
  min_qty numeric not null default 0,
  unit text not null default 'un',
  location text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inventory_moves (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.inventory_items(id),
  date date not null default current_date,
  type text not null,
  qty_decimal numeric not null,
  unit_cost_decimal numeric,
  reason text,
  sector_id uuid references public.sectors(id),
  employee_id uuid,
  doc_url text,
  created_at timestamptz not null default now()
);

commit;
