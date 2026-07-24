create table public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  company_name text not null check (char_length(company_name) between 2 and 200),
  company_size text not null default 'other'
    check (company_size in ('mei', 'me', 'epp', 'other')),
  capabilities text[] not null default '{}',
  preferred_ufs text[] not null default '{}',
  max_contract_value numeric(16, 2) check (max_contract_value is null or max_contract_value >= 0),
  remote_delivery boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.saved_opportunities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pncp_control_number text not null,
  source_url text not null check (source_url like 'https://%'),
  object text not null,
  organization text not null,
  snapshot jsonb not null default '{}'::jsonb,
  status text not null default 'saved'
    check (status in ('saved', 'reviewing', 'discarded', 'participating')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, pncp_control_number)
);

create table public.agent_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Nova análise',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.agent_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.agent_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'tool')),
  parts jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index saved_opportunities_user_status_idx
  on public.saved_opportunities (user_id, status, updated_at desc);
create index agent_sessions_user_updated_idx
  on public.agent_sessions (user_id, updated_at desc);
create index agent_messages_session_created_idx
  on public.agent_messages (session_id, created_at);
create index audit_events_user_created_idx
  on public.audit_events (user_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = pg_catalog.now();
  return new;
end;
$$;

create trigger business_profiles_set_updated_at
before update on public.business_profiles
for each row execute function public.set_updated_at();

create trigger saved_opportunities_set_updated_at
before update on public.saved_opportunities
for each row execute function public.set_updated_at();

create trigger agent_sessions_set_updated_at
before update on public.agent_sessions
for each row execute function public.set_updated_at();

alter table public.business_profiles enable row level security;
alter table public.saved_opportunities enable row level security;
alter table public.agent_sessions enable row level security;
alter table public.agent_messages enable row level security;
alter table public.audit_events enable row level security;

revoke all on public.business_profiles from anon;
revoke all on public.saved_opportunities from anon;
revoke all on public.agent_sessions from anon;
revoke all on public.agent_messages from anon;
revoke all on public.audit_events from anon;
revoke execute on function public.set_updated_at() from public, anon, authenticated;

grant select, insert, update, delete on public.business_profiles to authenticated;
grant select, insert, update, delete on public.saved_opportunities to authenticated;
grant select, insert, update, delete on public.agent_sessions to authenticated;
grant select, insert, update, delete on public.agent_messages to authenticated;
grant select, insert on public.audit_events to authenticated;
grant usage, select on sequence public.audit_events_id_seq to authenticated;

create policy "profiles_select_own"
on public.business_profiles for select to authenticated
using ((select auth.uid()) = user_id);
create policy "profiles_insert_own"
on public.business_profiles for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy "profiles_update_own"
on public.business_profiles for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
create policy "profiles_delete_own"
on public.business_profiles for delete to authenticated
using ((select auth.uid()) = user_id);

create policy "saved_select_own"
on public.saved_opportunities for select to authenticated
using ((select auth.uid()) = user_id);
create policy "saved_insert_own"
on public.saved_opportunities for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy "saved_update_own"
on public.saved_opportunities for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
create policy "saved_delete_own"
on public.saved_opportunities for delete to authenticated
using ((select auth.uid()) = user_id);

create policy "sessions_select_own"
on public.agent_sessions for select to authenticated
using ((select auth.uid()) = user_id);
create policy "sessions_insert_own"
on public.agent_sessions for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy "sessions_update_own"
on public.agent_sessions for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
create policy "sessions_delete_own"
on public.agent_sessions for delete to authenticated
using ((select auth.uid()) = user_id);

create policy "messages_select_own"
on public.agent_messages for select to authenticated
using ((select auth.uid()) = user_id);
create policy "messages_insert_own"
on public.agent_messages for insert to authenticated
with check (
  (select auth.uid()) = user_id
  and exists (
    select 1
    from public.agent_sessions
    where agent_sessions.id = session_id
      and agent_sessions.user_id = (select auth.uid())
  )
);
create policy "messages_update_own"
on public.agent_messages for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
create policy "messages_delete_own"
on public.agent_messages for delete to authenticated
using ((select auth.uid()) = user_id);

create policy "audit_select_own"
on public.audit_events for select to authenticated
using ((select auth.uid()) = user_id);
create policy "audit_insert_own"
on public.audit_events for insert to authenticated
with check ((select auth.uid()) = user_id);
