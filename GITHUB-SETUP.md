# Private birthday RSVP list

The public RSVP page can submit names, but it does not query or display them. The names are visible only in `admin.html` to the Supabase user UUID allowed by row-level security. The admin page also downloads `Dells birthday list.txt` with one numbered name per line.

## 1. Create the Supabase project

1. Create a Supabase project and enable the Email sign-in provider.
2. In **Authentication → Users**, add and confirm the one admin user using your own email address. Do not enable public sign-ups.
3. Copy that user's UUID from the Users page.
4. Open `supabase-setup.sql`, replace `REPLACE_WITH_ADMIN_USER_UUID` with the copied UUID, then run the complete SQL in **SQL Editor**.

The SQL grants public users permission to insert RSVP entries, but only the selected user UUID permission to read them. The UUID is an identifier, not a password.

## 2. Configure the pages

In **Project Settings → API**, copy the Project URL and the publishable/anon key. In both birthday HTML copies and `admin.html`, replace:

- `YOUR_SUPABASE_URL` with the Project URL
- `YOUR_SUPABASE_ANON_KEY` with the publishable/anon key

Never put a `service_role` or secret key in an HTML file or GitHub repository. The public key is intended for browser use; row-level security is what protects the names.

## 3. Publish on GitHub Pages

Upload the Desktop copy of the birthday page as `index.html`, along with `admin.html`, to the root of the GitHub Pages site. Enable Pages in the repository settings. The other birthday-page copy is kept in `Dells birthday` as a backup; if you publish that copy instead, publish it beside an `admin.html` file too.

In Supabase, open **Authentication → URL Configuration** and add the exact admin page URL to the allowed redirect URLs, for example:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/admin.html`

Once GitHub Pages is live, open that `/admin.html` address, enter the admin email, and follow the sign-in link sent to your inbox. That private page is where you can view the names; **Download names** saves the numbered `.txt` list.

## Notes

- Names already stored by the old Claude page are not transferred automatically. New RSVPs will be stored in Supabase after the configured page is published.
- The admin page refreshes the list when opened and has a **Refresh list** button. The SQL and HTML use only browser-safe credentials; no server secret is exposed.
