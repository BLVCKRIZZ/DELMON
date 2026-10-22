create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  status text not null check (status in ('yes', 'no')),
  guests integer not null default 1 check (guests between 1 and 10),
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

revoke all on table public.rsvps from anon, authenticated;
grant insert on table public.rsvps to anon, authenticated;
grant select on table public.rsvps to authenticated;

drop policy if exists "Anyone can submit an RSVP" on public.rsvps;
create policy "Anyone can submit an RSVP"
  on public.rsvps for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Only Delly can view RSVPs" on public.rsvps;
create policy "Only Delly can view RSVPs"
  on public.rsvps for select
  to authenticated
  using (
    (auth.jwt() ->> 'email') in (
      'lebea.delmon@gmail.com',
      'deleelebea@gmail.com'
    )
  );
