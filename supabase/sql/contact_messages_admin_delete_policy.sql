-- Allow authenticated admins to delete Jennifer contact messages.
-- Run this in the Supabase SQL Editor after creating public.contact_messages.

alter table public.contact_messages enable row level security;

drop policy if exists "Allow authenticated deletes"
  on public.contact_messages;

create policy "Allow authenticated deletes"
on public.contact_messages
for delete
to authenticated
using (true);

grant delete on table public.contact_messages to authenticated;

