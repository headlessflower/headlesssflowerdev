-- Local website audit generator tables.
-- Run this in the Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.audits (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  business_name text not null,
  website_url text not null,
  business_type text,
  primary_service text,
  service_area text,
  contact_name text,
  contact_email text,
  status text not null default 'draft',
  visibility text not null default 'private',
  overall_score int,
  audit_date date default current_date,
  expires_at timestamptz,
  published_at timestamptz,
  summary text,
  biggest_opportunity text,
  fastest_fix text,
  long_term_play text,
  recommended_plan text,
  implementation_offer text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  constraint audits_status_check
    check (status in ('draft', 'published', 'archived', 'expired')),
  constraint audits_visibility_check
    check (visibility in ('private', 'public')),
  constraint audits_overall_score_check
    check (overall_score is null or overall_score between 0 and 100),
  constraint audits_slug_format_check
    check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

create table if not exists public.audit_scores (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  category text not null,
  score int not null,
  max_score int not null default 5,
  summary text,
  sort_order int default 0,

  constraint audit_scores_score_check
    check (score between 1 and max_score),
  constraint audit_scores_max_score_check
    check (max_score between 1 and 10)
);

create table if not exists public.audit_findings (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  category text not null,
  title text not null,
  problem text not null,
  recommendation text not null,
  priority text not null default 'Medium',
  impact text,
  effort text,
  sort_order int default 0,
  created_at timestamptz default now(),

  constraint audit_findings_priority_check
    check (priority in ('High', 'Medium', 'Low')),
  constraint audit_findings_impact_check
    check (impact is null or impact in ('High', 'Medium', 'Low')),
  constraint audit_findings_effort_check
    check (effort is null or effort in ('Low', 'Medium', 'High'))
);

create table if not exists public.audit_quick_wins (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  title text not null,
  description text,
  sort_order int default 0
);

create table if not exists public.audit_growth_opportunities (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  title text not null,
  description text,
  sort_order int default 0
);

create table if not exists public.audit_competitors (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  name text not null,
  website_url text,
  notes text,
  has_clear_cta boolean,
  has_city_pages boolean,
  has_reviews_visible boolean,
  has_mobile_call_button boolean,
  has_service_pages boolean,
  has_faq_section boolean,
  has_schema boolean,
  sort_order int default 0
);

create table if not exists public.audit_snapshots (
  id uuid primary key default gen_random_uuid(),
  audit_id uuid not null references public.audits(id) on delete cascade,
  url text not null,
  title text,
  meta_description text,
  h1 text,
  h1_count int,
  phone_detected boolean,
  email_detected boolean,
  forms_detected int,
  cta_texts jsonb,
  internal_links jsonb,
  external_links jsonb,
  schema_types jsonb,
  images_missing_alt int,
  raw_result jsonb,
  created_at timestamptz default now()
);

create index if not exists audits_created_at_idx on public.audits (created_at desc);
create index if not exists audits_status_idx on public.audits (status);
create index if not exists audits_slug_idx on public.audits (slug);
create index if not exists audit_scores_audit_id_idx on public.audit_scores (audit_id, sort_order);
create index if not exists audit_findings_audit_id_idx on public.audit_findings (audit_id, sort_order);
create index if not exists audit_quick_wins_audit_id_idx on public.audit_quick_wins (audit_id, sort_order);
create index if not exists audit_growth_opportunities_audit_id_idx on public.audit_growth_opportunities (audit_id, sort_order);
create index if not exists audit_competitors_audit_id_idx on public.audit_competitors (audit_id, sort_order);

create or replace function public.set_audits_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_audits_updated_at on public.audits;

create trigger set_audits_updated_at
before update on public.audits
for each row
execute function public.set_audits_updated_at();

revoke execute on function public.set_audits_updated_at()
  from public, anon, authenticated;

alter table public.audits enable row level security;
alter table public.audit_scores enable row level security;
alter table public.audit_findings enable row level security;
alter table public.audit_quick_wins enable row level security;
alter table public.audit_growth_opportunities enable row level security;
alter table public.audit_competitors enable row level security;
alter table public.audit_snapshots enable row level security;

drop policy if exists "Authenticated users can manage audits" on public.audits;
create policy "Authenticated users can manage audits"
on public.audits
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read published non-expired audits" on public.audits;
create policy "Public can read published non-expired audits"
on public.audits
for select
to anon, authenticated
using (
  status = 'published'
  and (expires_at is null or expires_at > now())
);

drop policy if exists "Authenticated users can manage audit scores" on public.audit_scores;
create policy "Authenticated users can manage audit scores"
on public.audit_scores
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read scores for published non-expired audits" on public.audit_scores;
create policy "Public can read scores for published non-expired audits"
on public.audit_scores
for select
to anon, authenticated
using (
  exists (
    select 1 from public.audits
    where audits.id = audit_scores.audit_id
      and audits.status = 'published'
      and (audits.expires_at is null or audits.expires_at > now())
  )
);

drop policy if exists "Authenticated users can manage audit findings" on public.audit_findings;
create policy "Authenticated users can manage audit findings"
on public.audit_findings
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read findings for published non-expired audits" on public.audit_findings;
create policy "Public can read findings for published non-expired audits"
on public.audit_findings
for select
to anon, authenticated
using (
  exists (
    select 1 from public.audits
    where audits.id = audit_findings.audit_id
      and audits.status = 'published'
      and (audits.expires_at is null or audits.expires_at > now())
  )
);

drop policy if exists "Authenticated users can manage audit quick wins" on public.audit_quick_wins;
create policy "Authenticated users can manage audit quick wins"
on public.audit_quick_wins
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read quick wins for published non-expired audits" on public.audit_quick_wins;
create policy "Public can read quick wins for published non-expired audits"
on public.audit_quick_wins
for select
to anon, authenticated
using (
  exists (
    select 1 from public.audits
    where audits.id = audit_quick_wins.audit_id
      and audits.status = 'published'
      and (audits.expires_at is null or audits.expires_at > now())
  )
);

drop policy if exists "Authenticated users can manage audit growth opportunities" on public.audit_growth_opportunities;
create policy "Authenticated users can manage audit growth opportunities"
on public.audit_growth_opportunities
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read growth opportunities for published non-expired audits" on public.audit_growth_opportunities;
create policy "Public can read growth opportunities for published non-expired audits"
on public.audit_growth_opportunities
for select
to anon, authenticated
using (
  exists (
    select 1 from public.audits
    where audits.id = audit_growth_opportunities.audit_id
      and audits.status = 'published'
      and (audits.expires_at is null or audits.expires_at > now())
  )
);

drop policy if exists "Authenticated users can manage audit competitors" on public.audit_competitors;
create policy "Authenticated users can manage audit competitors"
on public.audit_competitors
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read competitors for published non-expired audits" on public.audit_competitors;
create policy "Public can read competitors for published non-expired audits"
on public.audit_competitors
for select
to anon, authenticated
using (
  exists (
    select 1 from public.audits
    where audits.id = audit_competitors.audit_id
      and audits.status = 'published'
      and (audits.expires_at is null or audits.expires_at > now())
  )
);

drop policy if exists "Authenticated users can manage audit snapshots" on public.audit_snapshots;
create policy "Authenticated users can manage audit snapshots"
on public.audit_snapshots
for all
to authenticated
using (true)
with check (true);

revoke all on table public.audits from anon, authenticated;
revoke all on table public.audit_scores from anon, authenticated;
revoke all on table public.audit_findings from anon, authenticated;
revoke all on table public.audit_quick_wins from anon, authenticated;
revoke all on table public.audit_growth_opportunities from anon, authenticated;
revoke all on table public.audit_competitors from anon, authenticated;
revoke all on table public.audit_snapshots from anon, authenticated;

grant select on table public.audits to anon;
grant select on table public.audit_scores to anon;
grant select on table public.audit_findings to anon;
grant select on table public.audit_quick_wins to anon;
grant select on table public.audit_growth_opportunities to anon;
grant select on table public.audit_competitors to anon;

grant select, insert, update, delete on table public.audits to authenticated;
grant select, insert, update, delete on table public.audit_scores to authenticated;
grant select, insert, update, delete on table public.audit_findings to authenticated;
grant select, insert, update, delete on table public.audit_quick_wins to authenticated;
grant select, insert, update, delete on table public.audit_growth_opportunities to authenticated;
grant select, insert, update, delete on table public.audit_competitors to authenticated;
grant select, insert, update, delete on table public.audit_snapshots to authenticated;

grant select, insert, update, delete on table public.audits to service_role;
grant select, insert, update, delete on table public.audit_scores to service_role;
grant select, insert, update, delete on table public.audit_findings to service_role;
grant select, insert, update, delete on table public.audit_quick_wins to service_role;
grant select, insert, update, delete on table public.audit_growth_opportunities to service_role;
grant select, insert, update, delete on table public.audit_competitors to service_role;
grant select, insert, update, delete on table public.audit_snapshots to service_role;
