-- Global contact form submissions
-- Run this in the Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.global_contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  form_key text not null default 'contact',
  form_version integer not null default 1,

  full_name text not null,
  email text not null,
  phone text,
  company text,
  city text,
  website_url text,
  service_interest text not null,
  budget_range text not null,
  timeline text,
  message text not null,
  newsletter_opt_in boolean not null default false,

  page text,
  source text,
  booking_url text,
  user_agent text,
  elapsed_ms integer,

  raw_fields jsonb not null default '{}'::jsonb,
  meta jsonb not null default '{}'::jsonb,

  constraint global_contact_submissions_form_key_check
    check (form_key = 'contact'),
  constraint global_contact_submissions_full_name_length_check
    check (char_length(full_name) between 1 and 120),
  constraint global_contact_submissions_email_length_check
    check (char_length(email) between 3 and 254),
  constraint global_contact_submissions_email_format_check
    check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint global_contact_submissions_phone_length_check
    check (phone is null or char_length(phone) <= 40),
  constraint global_contact_submissions_company_length_check
    check (company is null or char_length(company) <= 160),
  constraint global_contact_submissions_city_length_check
    check (city is null or char_length(city) <= 120),
  constraint global_contact_submissions_website_url_length_check
    check (website_url is null or char_length(website_url) <= 500),
  constraint global_contact_submissions_service_interest_length_check
    check (char_length(service_interest) between 1 and 120),
  constraint global_contact_submissions_budget_range_length_check
    check (char_length(budget_range) between 1 and 80),
  constraint global_contact_submissions_timeline_length_check
    check (timeline is null or char_length(timeline) <= 80),
  constraint global_contact_submissions_message_length_check
    check (char_length(message) between 1 and 3000),
  constraint global_contact_submissions_elapsed_ms_check
    check (elapsed_ms is null or elapsed_ms >= 0)
);

create index if not exists global_contact_submissions_created_at_idx
  on public.global_contact_submissions (created_at desc);

create index if not exists global_contact_submissions_email_idx
  on public.global_contact_submissions (lower(email));

create or replace function public.set_global_contact_submissions_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_global_contact_submissions_updated_at
  on public.global_contact_submissions;

create trigger set_global_contact_submissions_updated_at
before update on public.global_contact_submissions
for each row
execute function public.set_global_contact_submissions_updated_at();

revoke execute on function public.set_global_contact_submissions_updated_at()
  from public, anon, authenticated;

alter table public.global_contact_submissions enable row level security;

drop policy if exists "Anyone can submit global contact forms"
  on public.global_contact_submissions;

create policy "Anyone can submit global contact forms"
on public.global_contact_submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "Authenticated users can read global contact submissions"
  on public.global_contact_submissions;

create policy "Authenticated users can read global contact submissions"
on public.global_contact_submissions
for select
to authenticated
using (true);

revoke all on table public.global_contact_submissions from anon, authenticated;
grant insert on table public.global_contact_submissions to anon, authenticated;
grant select on table public.global_contact_submissions to authenticated;
grant select, insert, update, delete on table public.global_contact_submissions
  to service_role;
