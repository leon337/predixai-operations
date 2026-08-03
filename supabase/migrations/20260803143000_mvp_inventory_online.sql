begin;

alter table public.inventory_items
  add column if not exists created_by uuid references auth.users(id),
  add column if not exists updated_by uuid references auth.users(id);

alter table public.inventory_moves
  add column if not exists created_by uuid references auth.users(id);

alter table public.inventory_items alter column created_by set default auth.uid();
alter table public.inventory_items alter column updated_by set default auth.uid();
alter table public.inventory_moves alter column created_by set default auth.uid();

alter table public.inventory_items drop constraint if exists inventory_items_min_qty_nonnegative;
alter table public.inventory_items
  add constraint inventory_items_min_qty_nonnegative check (coalesce(min_qty, 0) >= 0);

alter table public.inventory_moves drop constraint if exists inventory_moves_qty_positive;
alter table public.inventory_moves
  add constraint inventory_moves_qty_positive check (qty_decimal > 0);

alter table public.inventory_moves drop constraint if exists inventory_moves_unit_cost_nonnegative;
alter table public.inventory_moves
  add constraint inventory_moves_unit_cost_nonnegative check (unit_cost_decimal is null or unit_cost_decimal >= 0);

create or replace function public.touch_inventory_item()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists trg_inventory_items_touch on public.inventory_items;
create trigger trg_inventory_items_touch
before update on public.inventory_items
for each row execute function public.touch_inventory_item();

alter table public.inventory_items enable row level security;
alter table public.inventory_moves enable row level security;
alter table public.sectors enable row level security;

revoke all on public.inventory_items from anon, authenticated;
revoke all on public.inventory_moves from anon, authenticated;
revoke all on public.sectors from anon, authenticated;

grant select, insert, update on public.inventory_items to authenticated;
grant select on public.inventory_moves to authenticated;
grant select on public.sectors to authenticated;

drop policy if exists inventory_items_select_authenticated on public.inventory_items;
create policy inventory_items_select_authenticated
on public.inventory_items for select
to authenticated
using (true);

drop policy if exists inventory_items_insert_authenticated on public.inventory_items;
create policy inventory_items_insert_authenticated
on public.inventory_items for insert
to authenticated
with check ((select auth.uid()) is not null and created_by = (select auth.uid()));

drop policy if exists inventory_items_update_authenticated on public.inventory_items;
create policy inventory_items_update_authenticated
on public.inventory_items for update
to authenticated
using (true)
with check ((select auth.uid()) is not null and updated_by = (select auth.uid()));

drop policy if exists inventory_moves_select_authenticated on public.inventory_moves;
create policy inventory_moves_select_authenticated
on public.inventory_moves for select
to authenticated
using (true);

drop policy if exists sectors_select_authenticated on public.sectors;
create policy sectors_select_authenticated
on public.sectors for select
to authenticated
using (true);

create or replace view public.inventory_balances
with (security_invoker = true)
as
select
  item.id,
  item.code,
  item.name,
  item.category,
  item.min_qty,
  item.unit,
  item.location,
  item.created_at,
  item.updated_at,
  coalesce(sum(
    case
      when movement.type = 'entrada' then movement.qty_decimal
      when movement.type = 'saída' then -movement.qty_decimal
      else 0
    end
  ), 0)::numeric as current_qty,
  count(movement.id)::bigint as movement_count
from public.inventory_items item
left join public.inventory_moves movement on movement.item_id = item.id
group by item.id;

grant select on public.inventory_balances to authenticated;
revoke all on public.inventory_balances from anon;

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
