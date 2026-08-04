begin;

create table if not exists public.operations_members (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null default 'operator' check (role in ('owner', 'operator', 'viewer')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint operations_members_email_lowercase check (email = lower(email))
);

alter table public.operations_members enable row level security;
revoke all on public.operations_members from anon, authenticated;

-- Os e-mails autorizados são provisionados fora do repositório.
-- Nenhum dado pessoal deve ser versionado nesta migração.

create or replace function public.is_operations_member()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.operations_members member
    where member.email = lower(coalesce(auth.jwt() ->> 'email', ''))
      and member.active
  );
$$;

create or replace function public.is_operations_writer()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.operations_members member
    where member.email = lower(coalesce(auth.jwt() ->> 'email', ''))
      and member.active
      and member.role in ('owner', 'operator')
  );
$$;

revoke all on function public.is_operations_member() from public, anon;
revoke all on function public.is_operations_writer() from public, anon;
grant execute on function public.is_operations_member() to authenticated;
grant execute on function public.is_operations_writer() to authenticated;

drop policy if exists inventory_items_select_authenticated on public.inventory_items;
create policy inventory_items_select_member
on public.inventory_items for select
to authenticated
using ((select public.is_operations_member()));

drop policy if exists inventory_items_insert_authenticated on public.inventory_items;
create policy inventory_items_insert_writer
on public.inventory_items for insert
to authenticated
with check (
  (select public.is_operations_writer())
  and created_by = (select auth.uid())
);

drop policy if exists inventory_items_update_authenticated on public.inventory_items;
create policy inventory_items_update_writer
on public.inventory_items for update
to authenticated
using ((select public.is_operations_writer()))
with check (
  (select public.is_operations_writer())
  and updated_by = (select auth.uid())
);

drop policy if exists inventory_moves_select_authenticated on public.inventory_moves;
create policy inventory_moves_select_member
on public.inventory_moves for select
to authenticated
using ((select public.is_operations_member()));

drop policy if exists sectors_select_authenticated on public.sectors;
create policy sectors_select_member
on public.sectors for select
to authenticated
using ((select public.is_operations_member()));

create or replace function public.register_inventory_move(
  p_item_id uuid,
  p_type text,
  p_qty numeric,
  p_unit_cost numeric default null,
  p_reason text default null,
  p_sector_id uuid default null,
  p_employee_id uuid default null,
  p_doc_url text default null
)
returns public.inventory_moves
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_balance numeric;
  v_move public.inventory_moves;
begin
  if auth.uid() is null then
    raise exception using errcode = '42501', message = 'Autenticação obrigatória.';
  end if;

  if not public.is_operations_writer() then
    raise exception using errcode = '42501', message = 'Usuário não autorizado para operar o almoxarifado.';
  end if;

  if p_type not in ('entrada', 'saída') then
    raise exception using errcode = '22023', message = 'Tipo de movimentação inválido.';
  end if;

  if p_qty is null or p_qty <= 0 then
    raise exception using errcode = '22023', message = 'A quantidade deve ser maior que zero.';
  end if;

  if p_unit_cost is not null and p_unit_cost < 0 then
    raise exception using errcode = '22023', message = 'O custo unitário não pode ser negativo.';
  end if;

  perform 1
  from public.inventory_items
  where id = p_item_id
  for update;

  if not found then
    raise exception using errcode = 'P0002', message = 'Material não encontrado.';
  end if;

  select coalesce(sum(
    case
      when type = 'entrada' then qty_decimal
      when type = 'saída' then -qty_decimal
      else 0
    end
  ), 0)
  into v_balance
  from public.inventory_moves
  where item_id = p_item_id;

  if p_type = 'saída' and p_qty > v_balance then
    raise exception using
      errcode = '23514',
      message = format('Saldo insuficiente. Disponível: %s.', v_balance);
  end if;

  insert into public.inventory_moves (
    item_id,
    date,
    type,
    qty_decimal,
    unit_cost_decimal,
    reason,
    sector_id,
    employee_id,
    doc_url,
    created_by
  ) values (
    p_item_id,
    current_date,
    p_type,
    p_qty,
    p_unit_cost,
    nullif(trim(p_reason), ''),
    p_sector_id,
    p_employee_id,
    nullif(trim(p_doc_url), ''),
    auth.uid()
  )
  returning * into v_move;

  return v_move;
end;
$$;

revoke all on function public.register_inventory_move(uuid, text, numeric, numeric, text, uuid, uuid, text) from public, anon;
grant execute on function public.register_inventory_move(uuid, text, numeric, numeric, text, uuid, uuid, text) to authenticated;

commit;
